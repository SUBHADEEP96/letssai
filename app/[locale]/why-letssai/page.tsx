import Image from "next/image"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import type { Locale } from "@/i18n/routing"
import { localizedMetadata } from "@/lib/i18n-seo"
import { absoluteUrl, breadcrumbsSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/JsonLd"
import { CTASection } from "@/components/site/CTASection"
import { GlobalDeliveryMap } from "@/components/site/GlobalDeliveryMap"
import heroAbout from "@/public/media/hero-about.avif"
import {
  WhyPrinciplesAccordion,
  type PrincipleItem,
} from "@/components/sections/WhyPrinciplesAccordion"
import {
  ClockCountdown,
  Lightning,
  PlugsConnected,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "why" })
  return localizedMetadata(
    locale,
    t("metaTitle"),
    t("metaDescription"),
    "/why-letssai"
  )
}

export default async function WhyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("why")

  const principles: PrincipleItem[] = [
    {
      number: t("p1Number"),
      title: t("p1Title"),
      text: t("p1Text"),
    },
    {
      number: t("p2Number"),
      title: t("p2Title"),
      text: t("p2Text"),
    },
    {
      number: t("p3Number"),
      title: t("p3Title"),
      text: t("p3Text"),
    },
    {
      number: t("p4Number"),
      title: t("p4Title"),
      text: t("p4Text"),
    },
    {
      number: t("p5Number"),
      title: t("p5Title"),
      text: t("p5Text"),
    },
  ]

  const outcomes = [
    {
      icon: Lightning,
      title: t("outcome1Title"),
      text: t("outcome1Text"),
    },
    {
      icon: PlugsConnected,
      title: t("outcome2Title"),
      text: t("outcome2Text"),
    },
    {
      icon: ClockCountdown,
      title: t("outcome3Title"),
      text: t("outcome3Text"),
    },
    {
      icon: ShieldCheck,
      title: t("outcome4Title"),
      text: t("outcome4Text"),
    },
  ]

  return (
    <>
      <JsonLd
        data={breadcrumbsSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Why LetssAI", url: absoluteUrl("/why-letssai") },
        ])}
      />

      {/* Hero Section */}
      <section className="relative isolate flex min-h-[40vh] items-center justify-center overflow-hidden bg-slate-950 px-4 py-24 sm:px-6 lg:min-h-[60vh] lg:px-8">
        <Image
          src="/media/about-hero.jpg"
          alt="LetssAI AI transformation and business operations"
          fill
          priority
          className="absolute inset-0 z-2 object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] bg-gradient-to-b from-emerald-950/80 via-slate-950/85 to-slate-950"
        />

        {/* <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            {t("heroHeadline")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-emerald-100/80 sm:text-lg sm:leading-8">
            {t("heroSubheadline")}
          </p>
        </div> */}
      </section>

      {/* Section 1: The Modern Enterprise */}
      <section className="section bg-[#f7f8f4]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs font-bold tracking-[0.18em] text-emerald-700 uppercase">
              {t("futureEyebrow")}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 lg:text-3xl">
              {t("futureTitle")}
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            <p>{t("futureP1")}</p>
            <p>{t("futureP2")}</p>
            <p>{t("futureP3")}</p>
          </div>
        </div>
      </section>

      {/* Section 2: AI Transformation Principles */}
      <section className="section bg-[#f7f8f4]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs font-bold tracking-[0.18em] text-emerald-700 uppercase">
              {t("principlesEyebrow")}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 lg:text-3xl">
              {t("principlesTitle")}
            </h2>
            {/* <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
              {t("principlesIntro")}
            </p> */}
          </div>
          <div>
            <WhyPrinciplesAccordion items={principles} />
          </div>
        </div>
      </section>

      {/* Section 3: Measurable Outcomes */}
      <section className="section bg-[#f7f8f4]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold tracking-[0.18em] text-emerald-700 uppercase">
              {t("outcomesEyebrow")}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {t("outcomesTitle")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
              {t("outcomesIntro")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-3xl border border-emerald-950/10 bg-[#f7f8f4] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60 transition-colors group-hover:bg-[#016630] group-hover:text-white">
                  <Icon size={24} weight="duotone" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Global Delivery Map */}
      <GlobalDeliveryMap />

      {/* Section 5: CTA */}
      <CTASection
        title="Ready to transform your business operations with practical AI?"
        text="Tell us what takes too much manual time today. We’ll map a high-impact, reviewable first workflow tailored to your tools."
      />
    </>
  )
}
