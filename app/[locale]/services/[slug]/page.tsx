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
  pageMetadata,
  serviceSchema,
} from "@/lib/seo"
import { services } from "@/lib/site"
import type { Locale } from "@/i18n/routing"
import { localizeService } from "@/lib/localized-content"

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
  return s
    ? pageMetadata(
        s.seoTitle,
        s.metaDescription,
        s.href,
        s.slug === "ai-customer-support"
          ? "/media/services/ai-customer-support/csstep5.webp"
          : s.slug === "ai-calling-appointment-booking"
            ? "/media/services/hero-letssai.webp"
            : undefined
      )
    : {}
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
      <JsonLd data={serviceSchema(s.title, s.description, s.href)} />
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
          { name: "Home", url: absoluteUrl("/") },
          { name: "Services", url: absoluteUrl("/services") },
          { name: s.title, url: absoluteUrl(s.href) },
        ])}
      />
      {s.slug === "ai-calling-appointment-booking" ? (
        <CallingServicePage service={s} />
      ) : s.slug === "ai-customer-support" ? (
        <CustomerSupportServicePage service={s} />
      ) : (
        <StandardServicePage service={s} />
      )}
    </>
  )
}
