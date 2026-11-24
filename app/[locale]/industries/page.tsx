import { getTranslations } from "next-intl/server"
import { IndustryCard } from "@/components/site/Cards"
import { FAQSection } from "@/components/site/FAQSection"
import { CTASection } from "@/components/site/CTASection"
import { industries, industriesHubFaqs } from "@/lib/site"
import { localizeIndustry } from "@/lib/localized-content"
import type { Locale } from "@/i18n/routing"
import { localizePath } from "@/i18n/routing"
import { localizedMetadata } from "@/lib/i18n-seo"
import { getPageSeo } from "@/lib/page-seo"
import { absoluteUrl, breadcrumbsSchema, faqSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/JsonLd"
import { IndustriesHero } from "@/components/industry/IndustriesHero"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const seo = getPageSeo("/industries", locale)
  return localizedMetadata(
    locale,
    seo.title,
    seo.description,
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
      <JsonLd data={faqSchema(industriesHubFaqs)} />
      <IndustriesHero
        title={t("title")}
        description={t("description")}
        locale={locale}
      />
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
      <FAQSection faqs={industriesHubFaqs} />
      <CTASection
        title="Ready to automate workflows in your industry?"
        text="Tell us about your business model and operational bottlenecks. We’ll design an AI implementation plan tailored to your sector."
      />
    </>
  )
}
