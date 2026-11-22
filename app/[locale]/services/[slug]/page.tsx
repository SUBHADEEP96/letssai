import { notFound } from "next/navigation"
import { JsonLd } from "@/components/seo/JsonLd"
import {
  CallingServicePage,
  callingFaqs,
} from "@/components/services/CallingServicePage"
import { StandardServicePage } from "@/components/services/StandardServicePage"
import {
  CustomerSupportServicePage,
  customerSupportFaqs,
} from "@/components/services/CustomerSupportServicePage"
import {
  absoluteUrl,
  breadcrumbsSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/seo"
import { services } from "@/lib/site"
import type { Locale } from "@/i18n/routing"
import { localizePath } from "@/i18n/routing"
import { localizeService } from "@/lib/localized-content"
import { localizedMetadata } from "@/lib/i18n-seo"
import { getPageSeo } from "@/lib/page-seo"

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>
}) {
  const { locale, slug } = await params
  const source = services.find((x) => x.slug === slug)
  const s = source ? localizeService(source, locale) : undefined
  if (!s) return {}
  const seo = getPageSeo(s.href, locale)
  const image =
    s.slug === "ai-customer-support"
      ? "/media/services/ai-customer-support/csstep5.webp"
      : s.slug === "ai-calling-appointment-booking"
        ? "/media/services/hero-letssai.webp"
        : undefined
  return localizedMetadata(
    locale,
    seo.title,
    seo.description,
    s.href,
    image
  )
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>
}) {
  const { locale, slug } = await params
  const source = services.find((x) => x.slug === slug)
  const s = source ? localizeService(source, locale) : undefined
  if (!s) notFound()
  return (
    <>
      <JsonLd data={serviceSchema(s.title, s.description, localizePath(s.href, locale))} />
      <JsonLd
        data={faqSchema(
          s.slug === "ai-calling-appointment-booking"
            ? callingFaqs
            : s.slug === "ai-customer-support"
              ? customerSupportFaqs
              : s.faqs
        )}
      />
      <JsonLd
        data={breadcrumbsSchema([
          { name: "Home", url: absoluteUrl(localizePath("/", locale)) },
          { name: "Services", url: absoluteUrl(localizePath("/services", locale)) },
          { name: s.title, url: absoluteUrl(localizePath(s.href, locale)) },
        ])}
      />
      {s.slug === "ai-calling-appointment-booking" ? (
        <CallingServicePage service={s} locale={locale} />
      ) : s.slug === "ai-customer-support" ? (
        <CustomerSupportServicePage service={s} locale={locale} />
      ) : (
        <StandardServicePage service={s} locale={locale} />
      )}
    </>
  )
}
