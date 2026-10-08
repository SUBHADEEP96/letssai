"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  TrendUp,
  PhoneCall,
  ShieldCheck,
  Users,
  CheckCircle,
  ArrowRight,
  CurrencyInr,
  ChatCircleDots,
  Clock,
  Sparkle,
  Storefront,
} from "@phosphor-icons/react"

interface CaseStudy {
  id: "off-duty" | "mokobara"
  brandName: string
  industry: string
  subCategory: string
  logoUrl: string
  logoAlt: string
  heroImageUrl: string
  heroImageAlt: string
  secondaryImageUrl?: string
  headline: string
  summary: string
  metrics: {
    value: string
    label: string
    subtext: string
    icon: typeof TrendUp
  }[]
  beforeAI: {
    title: string
    description: string
  }
  afterAI: {
    title: string
    description: string
  }
  scaleFact: {
    number: string
    label: string
    detail: string
  }
  aiCapabilities: {
    title: string
    description: string
  }[]
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "off-duty",
    brandName: "Off Duty India",
    industry: "Fashion & Lifestyle",
    subCategory: "Premium Denim & Streetwear",
    logoUrl: "/media/case-studies/off-duty-logo.jpg",
    logoAlt: "Off Duty India Brand Logo",
    heroImageUrl: "/media/case-studies/off-duty-web.jpg",
    heroImageAlt: "Off Duty India E-Commerce Store and Denim Collection",
    secondaryImageUrl: "/media/case-studies/off-duty-feature.jpg",
    headline:
      "How Off Duty Converted 13% of Abandoned Carts and Recovered ₹16.9L in Under 30 Days",
    summary:
      "By deploying autonomous Voice AI to reach shoppers within minutes of checkout abandonment, Off Duty overcame manual calling capacity constraints and drastically cut COD return risks.",
    metrics: [
      {
        value: "13%",
        label: "Cart Conversion Rate",
        subtext: "High-intent shoppers converted after checkout drop-off",
        icon: TrendUp,
      },
      {
        value: "₹16.9L",
        label: "Revenue Recovered",
        subtext: "Recaptured in less than 30 days of AI deployment",
        icon: CurrencyInr,
      },
      {
        value: "57.5%",
        label: "Call Connect Rate",
        subtext: "Achieved through automated optimal-hour retries",
        icon: PhoneCall,
      },
      {
        value: "15–20%",
        label: "Lower RTO Losses",
        subtext: "Real-time intent & address confirmation on COD orders",
        icon: ShieldCheck,
      },
    ],
    beforeAI: {
      title: "Before AI: The Manual Outreach Bottleneck",
      description:
        "Off Duty had an active manual calling team, but as online traffic and sale drops grew, the team could not reach abandoners fast enough. Calls placed hours later saw low answer rates, and after-hours shoppers went uncontacted, leaking significant revenue.",
    },
    afterAI: {
      title: "Positive Impact After Voice AI Adoption",
      description:
        "An autonomous Voice AI system was implemented to trigger calls within minutes of abandonment. The AI converses naturally, answers fit and sizing questions, and sends 1-click checkout links on WhatsApp—simultaneously verifying COD orders to prevent fraud.",
    },
    scaleFact: {
      number: "17,400+",
      label: "Autonomous Calls Handled in <30 Days",
      detail:
        "Maintained 24/7 coverage across weekends and sale spikes with zero addition to manual agent headcount.",
    },
    aiCapabilities: [
      {
        title: "Sub-Minute Outbound Trigger",
        description:
          "Initiates contact while customer purchase intent and memory remain highest.",
      },
      {
        title: "Fit & Sizing Query Resolution",
        description:
          "Trained on garment size charts and denim cuts to resolve sizing hesitation live.",
      },
      {
        title: "Instant WhatsApp Checkout Link",
        description:
          "Delivers pre-filled payment links straight to chat during or right after the call.",
      },
      {
        title: "Autonomous COD Order Verification",
        description:
          "Validates delivery addresses and order confirmation in real time to slash RTO costs.",
      },
    ],
  },
  {
    id: "mokobara",
    brandName: "Mokobara",
    industry: "Travel & Lifestyle",
    subCategory: "Luggage, Bags & Travel Gear",
    logoUrl: "/media/case-studies/mokobara-logo.png",
    logoAlt: "Mokobara Brand Logo",
    heroImageUrl: "/media/case-studies/mokobara-feature.jpg",
    heroImageAlt: "Mokobara Flagship Retail Storefront",
    secondaryImageUrl: "/media/case-studies/mokobara-hero.jpg",
    headline:
      "How Mokobara Achieved 13% Cart Conversion & Recovered ₹9.93L at 1/3rd Manual Cost",
    summary:
      "Mokobara integrated conversational Voice AI to engage high-ticket luggage shoppers within 30 minutes, cutting operational recovery costs by 67% compared to manual calling teams.",
    metrics: [
      {
        value: "13%",
        label: "Cart Conversion Rate",
        subtext: "Successfully recovered high-AOV luggage and bags",
        icon: TrendUp,
      },
      {
        value: "₹9.93L",
        label: "Revenue Recovered",
        subtext: "Directly attributed across 6,026 placed calls",
        icon: CurrencyInr,
      },
      {
        value: "51%",
        label: "Call Connect Rate",
        subtext: "Reached shoppers within minutes of cart abandonment",
        icon: PhoneCall,
      },
      {
        value: "1/3rd",
        label: "Cost of Manual Teams",
        subtext: "67% operational savings compared to traditional calling",
        icon: Users,
      },
    ],
    beforeAI: {
      title: "Before AI: High Cost & Limited Capacity",
      description:
        "Mokobara needed an automated, reliable way to recover high-value luggage orders. Their human calling team handled routine inquiries well, but scaling manual calling bandwidth to cover every cart drop-off was cost-prohibitive and operationally difficult.",
    },
    afterAI: {
      title: "Positive Impact After Voice AI Adoption",
      description:
        "Deploying an automated Voice AI agent allowed Mokobara to reach abandoners within 30 minutes. The agent sounds brand-aligned, clarifies dimensions, warranty, and delivery timelines, and offers personalized discounts alongside instant WhatsApp completion links.",
    },
    scaleFact: {
      number: "6,026",
      label: "Calls Placed · 3,917 Connected",
      detail:
        "Achieved 13.2% cart conversion on connected calls with sub-second latency and zero agent fatigue.",
    },
    aiCapabilities: [
      {
        title: "Brand Tone & Style Alignment",
        description:
          "Tailored voice profile that reflects Mokobara's modern, premium travel identity.",
      },
      {
        title: "Product & Warranty Knowledge",
        description:
          "Answers cabin sizing, TSA lock details, and warranty terms without delay.",
      },
      {
        title: "Fluid Two-Way Interruption Handling",
        description:
          "Near-zero conversational latency allows customers to speak and interject naturally.",
      },
      {
        title: "Automated Rescheduling",
        description:
          "Automatically reschedules missed calls at optimal times to maximize reach.",
      },
    ],
  },
]

export function EcommerceCaseStudies() {
  const [activeTab, setActiveTab] = useState<"off-duty" | "mokobara">(
    "off-duty"
  )

  const currentStudy =
    CASE_STUDIES.find((study) => study.id === activeTab) ?? CASE_STUDIES[0]

  return (
    <section
      className="section border-y border-emerald-950/10 bg-[#f7f8f4]"
      aria-labelledby="ecommerce-case-studies-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-bold tracking-[0.18em] text-[#016630] uppercase">
            Proven D2C Case Studies
          </p>
          <h2
            id="ecommerce-case-studies-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl md:text-5xl"
          >
            How Leading E-Commerce Brands Scale with Voice AI
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            Real data from high-growth lifestyle brands that transformed their
            operations by replacing manual calling bottlenecks with autonomous,
            sub-minute Voice AI agents.
          </p>
        </div>

        {/* Brand Selector Tabs */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          role="tablist"
          aria-label="Brand Case Studies"
        >
          {CASE_STUDIES.map((study) => {
            const isActive = activeTab === study.id
            return (
              <button
                key={study.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`study-panel-${study.id}`}
                id={`study-tab-${study.id}`}
                onClick={() => setActiveTab(study.id)}
                className={`flex items-center gap-3 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#016630] ${
                  isActive
                    ? "border-[#016630] bg-[#016630] text-white shadow-md shadow-emerald-950/10"
                    : "border-emerald-950/15 bg-[#f7f8f4] text-slate-700 hover:border-[#016630] hover:text-[#016630]"
                }`}
              >
                <span>{study.brandName}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-emerald-50 text-[#016630]"
                  }`}
                >
                  {study.industry}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active Case Study Detail Card */}
        <div
          id={`study-panel-${currentStudy.id}`}
          role="tabpanel"
          aria-labelledby={`study-tab-${currentStudy.id}`}
          className="mt-8 overflow-hidden rounded-3xl border border-emerald-950/10 bg-[#f7f8f4] p-6 shadow-sm sm:p-8 lg:p-10"
        >
          {/* Top Brand Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-950/10 pb-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-32 items-center justify-center rounded-xl border border-emerald-950/10 bg-[#f7f8f4] p-2">
                <Image
                  src={currentStudy.logoUrl}
                  alt={currentStudy.logoAlt}
                  width={110}
                  height={36}
                  className="max-h-8 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-mono text-xs font-bold tracking-wider text-[#016630] uppercase">
                  {currentStudy.industry} · {currentStudy.subCategory}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  {currentStudy.brandName}
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#016630]/20 bg-[#016630]/10 px-3.5 py-1 text-xs font-semibold text-[#016630]">
              <Sparkle size={14} weight="fill" />
              <span>Verified D2C Voice AI Implementation</span>
            </div>
          </div>

          {/* Headline & Overview */}
          <div className="mt-8">
            <h4 className="max-w-4xl text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              {currentStudy.headline}
            </h4>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {currentStudy.summary}
            </p>
          </div>

          {/* Core Metrics Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {currentStudy.metrics.map((metric) => {
              const Icon = metric.icon
              return (
                <div
                  key={metric.label}
                  className="flex flex-col justify-between rounded-2xl border border-emerald-950/10 bg-[#f7f8f4]/70 p-5 transition hover:border-[#016630]/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold tracking-tight text-[#016630] sm:text-4xl">
                      {metric.value}
                    </span>
                    <span className="flex size-9 items-center justify-center rounded-xl bg-[#016630]/10 text-[#016630]">
                      <Icon size={18} weight="bold" />
                    </span>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm font-semibold text-slate-900">
                      {metric.label}
                    </p>
                    <p className="mt-1 text-xs leading-normal text-slate-600">
                      {metric.subtext}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Deep-Dive Grid: Narrative + Visual Imagery */}
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Before AI vs After AI + Capabilities (7 cols) */}
            <div className="space-y-6 lg:col-span-7">
              {/* Before AI & After AI Comparison */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-rose-200/80 bg-rose-50/40 p-5">
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-rose-800 uppercase">
                    <span className="size-2 rounded-full bg-rose-600" />
                    {currentStudy.beforeAI.title}
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                    {currentStudy.beforeAI.description}
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-5">
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#016630] uppercase">
                    <span className="size-2 rounded-full bg-[#016630]" />
                    {currentStudy.afterAI.title}
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                    {currentStudy.afterAI.description}
                  </p>
                </div>
              </div>

              {/* Scale Fact Callout */}
              <div className="flex items-center gap-4 rounded-2xl border border-emerald-950/10 bg-[#f7f8f4] p-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#016630] text-white shadow-sm">
                  <Clock size={22} weight="bold" />
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-950">
                    {currentStudy.scaleFact.number} —{" "}
                    {currentStudy.scaleFact.label}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-600 sm:text-sm">
                    {currentStudy.scaleFact.detail}
                  </p>
                </div>
              </div>

              {/* AI Capabilities Grid */}
              <div>
                <h5 className="font-mono text-xs font-bold tracking-[0.16em] text-slate-700 uppercase">
                  Key Voice AI Capabilities Deployed
                </h5>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {currentStudy.aiCapabilities.map((cap) => (
                    <div
                      key={cap.title}
                      className="flex items-start gap-3 rounded-xl border border-emerald-950/10 bg-[#f7f8f4] p-4 shadow-sm"
                    >
                      <CheckCircle
                        size={18}
                        weight="fill"
                        className="mt-0.5 shrink-0 text-[#016630]"
                      />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {cap.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-600">
                          {cap.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visual Imagery from PDF + Workflow Card (5 cols) */}
            <div className="space-y-6 lg:col-span-5">
              {/* Product / Store Visual from PDF */}
              <div className="overflow-hidden rounded-2xl border border-emerald-950/10 bg-slate-100 shadow-sm">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={currentStudy.heroImageUrl}
                    alt={currentStudy.heroImageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 450px"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4">
                    <p className="text-xs font-medium text-white/90">
                      {currentStudy.brandName} · {currentStudy.subCategory}
                    </p>
                  </div>
                </div>
              </div>

              {/* Voice AI Recovery Workflow Sequence */}
              <div className="rounded-2xl border border-emerald-950/10 bg-[#f7f8f4] p-5">
                <div className="flex items-center justify-between border-b border-emerald-950/10 pb-3">
                  <div className="flex items-center gap-2">
                    <ChatCircleDots
                      size={18}
                      className="text-[#016630]"
                      weight="bold"
                    />
                    <span className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                      Automated Recovery Cadence
                    </span>
                  </div>
                  <span className="rounded-full bg-[#016630]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#016630]">
                    24/7 Active
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3 rounded-xl border border-emerald-950/10 bg-[#f7f8f4] p-3 text-xs shadow-sm">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#016630] text-[10px] font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">
                        Checkout Abandonment Detected
                      </p>
                      <p className="text-slate-600">
                        Customer drops off during checkout flow; cart session
                        logged.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-emerald-950/10 bg-[#f7f8f4] p-3 text-xs shadow-sm">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#016630] text-[10px] font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">
                        Sub-Minute Autonomous Voice Call
                      </p>
                      <p className="text-slate-600">
                        AI dials customer, clarifies fit/dimensions & offers
                        help.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-emerald-950/10 bg-[#f7f8f4] p-3 text-xs shadow-sm">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#016630] text-[10px] font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">
                        1-Click WhatsApp Handoff & Conversion
                      </p>
                      <p className="text-slate-600">
                        Direct checkout link sent to chat; order completed
                        instantly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
