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
import { getPageSeo, pageSeoRegistry } from "../lib/page-seo"
import { getPrivacyPolicyContent } from "../lib/legal-translations/privacy-policy"
import { getTermsAndConditionsContent } from "../lib/legal-translations/terms-and-conditions"

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

test("all 17 pages have exact SEO titles, descriptions and translations", () => {
  const expectedEnglish: Record<string, { title: string; description: string }> = {
    "/": {
      title: "AI Automation & Custom AI Agents for Business | LetssAI",
      description:
        "LetssAI builds custom AI agents, voice AI and workflow automation that connect to your CRM, WhatsApp and email. Book a free AI consultation.",
    },
    "/services": {
      title: "AI Services: Customer Support, Calling & CRM | LetssAI",
      description:
        "Compare LetssAI's AI services: customer support automation, AI calling, lead follow-up, custom AI CRM and system integration. Start with one workflow.",
    },
    "/services/ai-customer-support": {
      title: "Automate Customer Support Workflows with AI | LetssAI",
      description:
        "AI customer support that answers repeat questions on website chat, WhatsApp and email, and call then hands sensitive cases to your team with full context.",
    },
    "/services/ai-calling-appointment-booking": {
      title: "AI Voice Agent for Calls & Appointment Booking | LetssAI",
      description:
        "Automate inbound and outbound calls, appointment booking, reminders and feedback with a multilingual AI voice agent and safe human handoff.",
    },
    "/services/ai-sales-lead-follow-up": {
      title: "AI Lead Follow-Up & Qualification Automation | LetssAI",
      description:
        "Respond to every lead fast. AI qualifies enquiries, books consultations and updates HubSpot, Pipedrive or Zoho so reps only talk to ready buyers.",
    },
    "/services/ai-crm-development": {
      title: "Custom AI CRM Development for Sales Teams | LetssAI",
      description:
        "Design an AI-ready CRM around your sales process: unified conversations, auto-logged notes, AI summaries and reliable pipeline reporting.",
    },
    "/services/ai-system-integration": {
      title: "AI System Integration: CRM, API & MCP Connectors | LetssAI",
      description:
        "Connect AI agents to your CRM, email, calendars, databases and WhatsApp via APIs, MCP and SIP, without replacing the tools your team uses.",
    },
    "/industries": {
      title: "AI for Real Estate, Clinics, Legal & E-commerce | LetssAI",
      description:
        "Industry-specific AI workflows for real estate, clinics, law firms, education, e-commerce and finance: faster replies, bookings, reminders and reports.",
    },
    "/industries/real-estate": {
      title: "AI for Real Estate: Lead Follow-Up & Site Visits | LetssAI",
      description:
        "AI that follows up property enquiries fast, qualifies buyers, books site visits over WhatsApp or calls, and keeps your CRM up to date.",
    },
    "/industries/healthcare-clinics": {
      title: "AI Appointment Booking & Patient FAQs for Clinics | LetssAI",
      description:
        "Reduce front desk workload with AI appointment booking, reminders, patient FAQs and feedback collection. Admin support only, with human handoff.",
    },
    "/industries/legal-firms": {
      title: "AI Client Intake & Scheduling for Law Firms | LetssAI",
      description:
        "Automate client intake, consultation scheduling and document search for law firms. Administrative AI with lawyer review, never legal advice.",
    },
    "/industries/education-coaching": {
      title: "AI Admission Follow-Up & Demo Booking for Coaching | LetssAI",
      description:
        "Reply to admission enquiries fast, answer course FAQs, book demo classes and send payment reminders by WhatsApp and calls with AI assistants.",
    },
    "/industries/retail-ecommerce": {
      title: "AI Customer Support & Cart Recovery for E-commerce | LetssAI",
      description:
        "Answer order and returns questions, recover abandoned carts with voice AI calls and verify COD orders. AI support built for online stores.",
    },
    "/industries/finance-accounting": {
      title: "AI Workflow Automation for Accounting & Finance | LetssAI",
      description:
        "Cut manual follow-up with AI for document collection, invoice data extraction, client reminders and report prep. Admin automation, not financial advice.",
    },
    "/why-letssai": {
      title: "AI Transformation Partner for Growing Businesses | LetssAI",
      description:
        "Custom AI workflows, no stack disruption, human-in-the-loop control and end-to-end delivery in weeks. See why growing businesses choose LetssAI.",
    },
    "/contact": {
      title: "Contact LetssAI | Free AI Workflow Consultation",
      description:
        "Tell us what you want to automate. Get a free AI workflow review and the safest, most useful first step. Remote-first team serving clients worldwide.",
    },
    "/ai-discovery": {
      title: "Book a Free 30-Minute AI Discovery Call | LetssAI",
      description:
        "Book a free 30-minute AI discovery call. We'll review your workflows, find high-impact automation opportunities and map a practical first step.",
    },
  }

  assert.equal(Object.keys(expectedEnglish).length, 17, "Must test exactly 17 routes")

  for (const [route, expected] of Object.entries(expectedEnglish)) {
    const enSeo = getPageSeo(route, "en")
    assert.equal(enSeo.title, expected.title, `Incorrect English title for ${route}`)
    assert.equal(enSeo.description, expected.description, `Incorrect English description for ${route}`)

    // Test OpenGraph and Twitter syncing and alternates for all locales
    for (const locale of locales) {
      const localized = getPageSeo(route, locale)
      assert.ok(localized.title.length > 5, `Title too short for ${route} in ${locale}`)
      assert.ok(localized.description.length > 10, `Description too short for ${route} in ${locale}`)

      if (locale !== "en") {
        assert.notEqual(
          localized.title,
          enSeo.title,
          `Localized title for ${route} in ${locale} must not equal English title`
        )
        assert.notEqual(
          localized.description,
          enSeo.description,
          `Localized description for ${route} in ${locale} must not equal English description`
        )
      }

      const meta = localizedMetadata(locale, localized.title, localized.description, route)
      assert.equal(meta.title, localized.title)
      assert.equal(meta.description, localized.description)
      assert.equal(meta.openGraph?.title, localized.title)
      assert.equal(meta.openGraph?.description, localized.description)
      assert.equal(meta.twitter?.title, localized.title)
      assert.equal(meta.twitter?.description, localized.description)
      assert.equal(meta.alternates?.canonical, `https://letssai.com${localizePath(route, locale)}`)
    }
  }
})

test("privacy-policy and terms-and-conditions have noindex, follow across all locales", () => {
  const legalRoutes = ["/privacy-policy", "/terms-and-conditions"]

  for (const route of legalRoutes) {
    for (const locale of locales) {
      const content =
        route === "/privacy-policy"
          ? getPrivacyPolicyContent(locale)
          : getTermsAndConditionsContent(locale)

      const meta = localizedMetadata(
        locale,
        content.metaTitle,
        content.metaDescription,
        route,
        undefined,
        { index: false, follow: true }
      )

      assert.deepEqual(meta.robots, { index: false, follow: true })
      assert.equal(meta.alternates?.canonical, `https://letssai.com${localizePath(route, locale)}`)
    }
  }
})
