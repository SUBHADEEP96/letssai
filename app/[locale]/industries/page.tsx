import { getTranslations } from "next-intl/server"
import { IndustryCard } from "@/components/site/Cards"
import { CTASection } from "@/components/site/CTASection"
import { industries } from "@/lib/site"
import { localizeIndustry } from "@/lib/localized-content"
import type { Locale } from "@/i18n/routing"
export default async function Industries({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = await getTranslations("industries")
  return (
    <>
      <section className="section bg-emerald-50">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-semibold md:text-6xl">{t("title")}</h1>
          <p className="mt-5 text-lg text-slate-600">{t("description")}</p>
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
      <CTASection title="" text="" />
    </>
  )
}
