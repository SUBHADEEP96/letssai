import assert from "node:assert/strict"
import test from "node:test"
import { localizedMetadata } from "../lib/i18n-seo"
import { defaultLocale, locales, localizePath } from "../i18n/routing"
import { websiteSchema } from "../lib/seo"
import robots from "../app/robots"
import sitemap from "../app/sitemap"
import nextConfig from "../next.config"
import {
  discoveryTranslations,
  getCustomerSupportContent,
  getCallingContent,
  getSystemIntegrationContent,
} from "../lib/service-content-translations"

test("localizedMetadata generates self-referencing canonical and full hreflang alternates", () => {
  const routes = [
    "/ai-discovery",
    "/services/ai-customer-support",
    "/services/ai-calling-appointment-booking",
    "/services/ai-system-integration",
  ]

  for (const route of routes) {
    for (const locale of locales) {
      const meta = localizedMetadata(
        locale,
        `Title ${locale}`,
        `Description ${locale}`,
        route
      )

      const expectedCanonical = `https://letssai.com${localizePath(route, locale)}`
      assert.equal(
        meta.alternates?.canonical,
        expectedCanonical,
        `Expected canonical for ${route} in ${locale} to be ${expectedCanonical}`
      )

      const languages = meta.alternates?.languages as Record<string, string>
      assert.ok(languages, `Expected alternates.languages for ${route} in ${locale}`)

      for (const altLocale of locales) {
        const expectedAltUrl = `https://letssai.com${localizePath(route, altLocale)}`
        assert.equal(
          languages[altLocale],
          expectedAltUrl,
          `Expected hreflang alternate for ${altLocale} on ${locale} page to be ${expectedAltUrl}`
        )
      }

      const expectedXDefault = `https://letssai.com${localizePath(route, defaultLocale)}`
      assert.equal(
        languages["x-default"],
        expectedXDefault,
        `Expected x-default alternate to be ${expectedXDefault}`
      )
    }
  }
})

test("localized routes render distinct translated titles, descriptions, and headings", () => {
  for (const locale of locales) {
    const disc = discoveryTranslations[locale]
    assert.ok(disc.metaTitle.length > 5)
    assert.ok(disc.metaDescription.length > 10)
    assert.ok(disc.heading.length > 5)

    const cs = getCustomerSupportContent(locale)
    assert.ok(cs.meta.seoTitle.length > 5)
    assert.ok(cs.meta.metaDescription.length > 10)
    assert.ok(cs.meta.heroTitle.length > 5)
    assert.equal(cs.benefits.length, 3)
    assert.equal(cs.features.length, 5)

    const calling = getCallingContent(locale)
    assert.ok(calling.meta.seoTitle.length > 5)
    assert.ok(calling.meta.metaDescription.length > 10)
    assert.ok(calling.meta.heroTitle.length > 5)
    assert.equal(calling.benefits.length, 3)
    assert.equal(calling.features.length, 6)

    const sysInt = getSystemIntegrationContent(locale)
    assert.ok(sysInt.meta.seoTitle.length > 5)
    assert.ok(sysInt.meta.metaDescription.length > 10)
    assert.ok(sysInt.quote1.length > 10)
    assert.equal(sysInt.blocks.length, 3)
  }

  // Ensure non-English versions are distinct from English
  for (const locale of ["fr", "de", "es", "hi"] as const) {
    assert.notEqual(
      discoveryTranslations[locale].metaTitle,
      discoveryTranslations.en.metaTitle
    )
    assert.notEqual(
      getCustomerSupportContent(locale).meta.seoTitle,
      getCustomerSupportContent("en").meta.seoTitle
    )
    assert.notEqual(
      getCallingContent(locale).meta.seoTitle,
      getCallingContent("en").meta.seoTitle
    )
    assert.notEqual(
      getSystemIntegrationContent(locale).meta.seoTitle,
      getSystemIntegrationContent("en").meta.seoTitle
    )
  }
})

test("301 permanent redirect for ai-knowledge-assistant and www configured", async () => {
  const redirects = await (nextConfig as any).redirects()

  const knowledgeRedirect = redirects.find(
    (r: any) => r.source === "/services/ai-knowledge-assistant"
  )
  assert.ok(knowledgeRedirect, "Missing /services/ai-knowledge-assistant redirect")
  assert.equal(knowledgeRedirect.destination, "/services/ai-customer-support")
  assert.equal(knowledgeRedirect.permanent, true)

  const localizedKnowledgeRedirect = redirects.find(
    (r: any) =>
      r.source === "/:locale(en|hi|de|es|fr)/services/ai-knowledge-assistant"
  )
  assert.ok(
    localizedKnowledgeRedirect,
    "Missing localized /services/ai-knowledge-assistant redirect"
  )
  assert.equal(
    localizedKnowledgeRedirect.destination,
    "/:locale/services/ai-customer-support"
  )
  assert.equal(localizedKnowledgeRedirect.permanent, true)

  const wwwRedirect = redirects.find(
    (r: any) =>
      r.source === "/:path*" &&
      r.has?.[0]?.type === "host" &&
      r.has?.[0]?.value === "www.letssai.com"
  )
  assert.ok(wwwRedirect, "Missing www.letssai.com redirect to apex")
  assert.equal(wwwRedirect.destination, "https://letssai.com/:path*")
  assert.equal(wwwRedirect.permanent, true)
})

test("websiteSchema has no SearchAction", () => {
  assert.equal((websiteSchema as any).potentialAction, undefined)
  assert.equal(websiteSchema.url, "https://letssai.com")
})

test("robots.txt explicitly allows /_next/static/ for crawling fonts and assets", () => {
  const r = robots()
  const rule = r.rules as any
  const allowList = Array.isArray(rule[0]?.allow) ? rule[0].allow : [rule[0]?.allow]
  assert.ok(allowList.includes("/_next/static/"))
  assert.ok(allowList.includes("/"))
})

test("sitemap outputs 95 canonical URLs with deterministic lastmod and alternates", () => {
  const sm1 = sitemap()
  const sm2 = sitemap()

  assert.equal(sm1.length, 95, "Sitemap must have 95 URLs")

  for (let i = 0; i < sm1.length; i++) {
    assert.equal(
      new Date(sm1[i]!.lastModified!).toISOString(),
      new Date(sm2[i]!.lastModified!).toISOString(),
      "lastModified must be stable and deterministic across calls"
    )

    assert.ok(sm1[i]!.url.startsWith("https://letssai.com"))
    assert.ok(!sm1[i]!.url.includes("www.letssai.com"))

    const languages = sm1[i]!.alternates?.languages as Record<string, string>
    assert.ok(languages, "Sitemap entry must have alternates.languages")
    for (const locale of locales) {
      assert.ok(languages[locale], `Missing alternate for ${locale}`)
    }
    assert.ok(languages["x-default"], "Missing x-default alternate")
  }
})
