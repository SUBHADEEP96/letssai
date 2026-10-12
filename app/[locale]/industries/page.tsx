import { getTranslations } from "next-intl/server"
import { IndustryCard } from "@/components/site/Cards"
import { CTASection } from "@/components/site/CTASection"
import { industries } from "@/lib/site"
import { localizeIndustry } from "@/lib/localized-content"
import type { Locale } from "@/i18n/routing"
import { localizePath } from "@/i18n/routing"
import { localizedMetadata } from "@/lib/i18n-seo"
import { absoluteUrl, breadcrumbsSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/JsonLd"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "industries" })
  return localizedMetadata(
    locale,
    "AI Solutions by Industry | Real Estate, Healthcare, E-commerce | LetssAI",
    t("description") ||
      "Discover tailored AI assistants and autonomous workflows built for real estate, healthcare, e-commerce, education, and finance.",
    "/industries"
  )
}

export default async function Industries({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = await getTranslations("industries")
  return (
    <>
      <JsonLd
        data={breadcrumbsSchema([
          { name: "Home", url: absoluteUrl(localizePath("/", locale)) },
          { name: "Industries", url: absoluteUrl(localizePath("/industries", locale)) },
        ])}
      />
      <section className="section bg-emerald-50">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">{t("title")}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{t("description")}</p>
        </div>
      </section>
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries
            .map((i) => localizeIndustry(i, locale))
            .map((i) => (
              <IndustryCard
                key={i.slug}
                title={i.title}
                description={i.useCase}
                href={i.href}
              />
            ))}
        </div>
      </section>
      <CTASection
        title="Ready to automate workflows in your industry?"
        text="Tell us about your business model and operational bottlenecks. We’ll design an AI implementation plan tailored to your sector."
      />
    </>
  )
}
