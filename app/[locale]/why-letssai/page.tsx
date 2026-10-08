import Image from "next/image"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import type { Locale } from "@/i18n/routing"
import { localizedMetadata } from "@/lib/i18n-seo"
import { absoluteUrl, breadcrumbsSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/JsonLd"
import { CTASection } from "@/components/site/CTASection"
import { GlobalDeliveryMap } from "@/components/site/GlobalDeliveryMap"
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

      {/* =========================================================================
          NEWSPAPER MASTHEAD & FRONT-PAGE HEADLINE BANNER
          ========================================================================= */}
      <section className="border-b border-emerald-950/15 bg-[#f7f8f4] pt-8 sm:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Editorial Wire & Dateline Rule */}
          <div className="flex w-full items-center justify-between border-y border-emerald-950/15 py-2.5 font-mono text-[10px] font-semibold tracking-wider whitespace-nowrap text-slate-700 uppercase sm:text-xs sm:tracking-[0.2em]">
            <span className="flex shrink-0 items-center gap-1.5">
              <span>The LetssAI Chronicle</span>
            </span>
            <span className="hidden text-slate-500 lg:inline">
              Special Report · Operations Architecture
            </span>
            <span className="shrink-0 text-right">
              <span className="sm:hidden">
                Global · {new Date().getFullYear()}
              </span>
              <span className="hidden sm:inline">
                Worldwide Edition · {new Date().getFullYear()}
              </span>
            </span>
          </div>

          {/* Front-Page Main Headline */}
          <div className="py-8 text-center sm:py-12 lg:py-16">
            <h1 className="mx-auto max-w-5xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.12]">
              {t("heroHeadline")}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
              {t("heroSubheadline")}
            </p>
          </div>

          {/* Front-Page Wire Dispatches (3 Key Metrics) */}
          <div className="grid border-t border-emerald-950/15 py-6 sm:grid-cols-3 sm:divide-x sm:divide-emerald-950/15">
            <div className="px-4 py-3 text-center sm:text-left">
              <span className="font-mono text-[11px] font-bold tracking-wider text-[#016630] uppercase">
                Dispatch 01 · Latency
              </span>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                Sub-60s autonomous response across chat, voice & WhatsApp
              </p>
            </div>
            <div className="border-t border-emerald-950/15 px-4 py-3 text-center sm:border-t-0 sm:text-left">
              <span className="font-mono text-[11px] font-bold tracking-wider text-[#016630] uppercase">
                Dispatch 02 · Integration
              </span>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                Zero stack disruption — embeds natively into your tools
              </p>
            </div>
            <div className="border-t border-emerald-950/15 px-4 py-3 text-center sm:border-t-0 sm:text-left">
              <span className="font-mono text-[11px] font-bold tracking-wider text-[#016630] uppercase">
                Dispatch 03 · Velocity
              </span>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                40%+ repetitive manual operations reclaimed from day one
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HERO EYE VISUAL WITH CURVY LOWER TRANSITION & PUPIL GIF
          ========================================================================= */}
      <section
        className="relative w-full overflow-hidden bg-slate-950"
        aria-label="LetssAI Autonomous Intelligence Eye Visual"
      >
        <div className="relative mx-auto aspect-[16/11] max-h-[580px] min-h-[380px] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
          <Image
            src="/media/about-hero.jpg"
            alt="LetssAI AI Vision and Autonomous Agent Intelligence"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[48.5%_49.5%]"
          />

          {/* Vignette overlays for depth and focus */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/40"
          />

          {/* GIF positioned directly in the middle of the eye pupil */}
          <div
            className="pointer-events-none absolute z-10 flex flex-col items-center"
            style={{
              left: "48.5%",
              top: "49.5%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Luminous Agent Icon */}
            <div className="relative flex items-center justify-center">
              <span className="absolute -inset-3 animate-pulse rounded-full bg-cyan-400/25 blur-md" />
              <span className="absolute -inset-1 rounded-full bg-emerald-400/35 blur-sm" />
              <Image
                src="/media/agent_icon.gif"
                alt="LetssAI Autonomous Agent"
                width={68}
                height={68}
                unoptimized
                className="relative size-12 rounded-full drop-shadow-[0_0_20px_rgba(34,211,238,0.75)] sm:size-14 lg:size-16"
              />
            </div>
          </div>

          {/* Curvy lower part of the hero image */}
          <div className="pointer-events-none absolute inset-x-0 -bottom-px z-20">
            <svg
              viewBox="0 0 1440 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block h-10 w-full text-[#f7f8f4] sm:h-16 lg:h-24"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 C480,96 960,96 1440,0 L1440,96 L0,96 Z"
                fill="currentColor"
              />
              <path
                d="M0,0 C480,96 960,96 1440,0"
                stroke="rgba(1,102,48,0.25)"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION I: THE EDITORIAL PERSPECTIVE (THE MODERN ENTERPRISE)
          ========================================================================= */}
      <section className="section border-b border-emerald-950/15 bg-[#f7f8f4]">
        <div className="mx-auto max-w-7xl">
          {/* Section Masthead Header */}
          <div className="mb-10 flex w-full items-center justify-between gap-2 border-b border-emerald-950/15 pb-4 font-mono text-[10px] whitespace-nowrap uppercase sm:text-xs">
            <span className="font-bold tracking-wider text-[#016630] sm:tracking-[0.2em]">
              Section I · {t("futureEyebrow")}
            </span>
            <span className="shrink-0 tracking-wider text-slate-500">
              Special Analysis
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Column (5 cols): Title, Byline & Pull Quote */}
            <div className="space-y-6 lg:col-span-5">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {t("futureTitle")}
              </h2>
            </div>

            {/* Right Column (7 cols): Editorial Two-Column Body Copy */}
            <div className="space-y-6 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8 lg:col-span-7">
              <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-5xl first-letter:leading-none first-letter:font-bold first-letter:text-[#016630]">
                {t("futureP1")}
              </p>
              <p>{t("futureP2")}</p>
              <p>{t("futureP3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION II: AI TRANSFORMATION PRINCIPLES (ARCHITECTURAL DOCTRINE)
          ========================================================================= */}
      <section className="section border-b border-emerald-950/15 bg-[#f7f8f4]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex w-full items-center justify-between gap-2 border-b border-emerald-950/15 pb-4 font-mono text-[10px] whitespace-nowrap uppercase sm:text-xs">
            <span className="font-bold tracking-wider text-[#016630] sm:tracking-[0.2em]">
              Section II · {t("principlesEyebrow")}
            </span>
            <span className="shrink-0 tracking-wider text-slate-500">
              Methodological Doctrine
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {t("principlesTitle")}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <WhyPrinciplesAccordion items={principles} />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION III: MEASURABLE OUTCOMES (THE PERFORMANCE LEDGER)
          ========================================================================= */}
      <section className="section border-b border-emerald-950/15 bg-[#f7f8f4]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex w-full items-center justify-between gap-2 border-b border-emerald-950/15 pb-4 font-mono text-[10px] whitespace-nowrap uppercase sm:text-xs">
            <span className="font-bold tracking-wider text-[#016630] sm:tracking-[0.2em]">
              Section III · {t("outcomesEyebrow")}
            </span>
            <span className="shrink-0 tracking-wider text-slate-500">
              Performance Ledger
            </span>
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              {t("outcomesTitle")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
              {t("outcomesIntro")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className="group rounded-3xl border border-emerald-950/15 bg-[#f7f8f4] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#016630] hover:shadow-xl hover:shadow-emerald-950/5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#016630] ring-1 ring-emerald-200/60 transition-colors group-hover:bg-[#016630] group-hover:text-white">
                    <Icon size={24} weight="duotone" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    0{i + 1}
                  </span>
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

      {/* =========================================================================
          SECTION IV: GLOBAL DELIVERY DISPATCH MAP
          ========================================================================= */}
      <GlobalDeliveryMap />

      {/* =========================================================================
          SECTION V: FINAL CALL TO ACTION
          ========================================================================= */}
      <CTASection
        title="Ready to transform your business operations with practical AI?"
        text="Tell us what takes too much manual time today. We’ll map a high-impact, reviewable first workflow tailored to your tools."
      />
    </>
  )
}
