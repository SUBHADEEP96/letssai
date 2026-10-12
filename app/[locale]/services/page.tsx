import { ServiceCard } from "@/components/site/Cards"
import { CTASection } from "@/components/site/CTASection"
import { JsonLd } from "@/components/seo/JsonLd"
import { absoluteUrl, breadcrumbsSchema, faqSchema } from "@/lib/seo"
import { services } from "@/lib/site"
import { localizeService } from "@/lib/localized-content"
import type { Locale } from "@/i18n/routing"
import { ServiceHero } from "@/components/services/ServiceHero"
import { localizedMetadata } from "@/lib/i18n-seo"
import { Link } from "@/i18n/navigation"

const faqs = [
  {
    question: "What AI service should my business start with?",
    answer:
      "Start with the workflow that creates the most repeated manual work, such as customer questions, lead follow-up, appointment booking, or document search.",
  },
  {
    question: "Can LetssAI connect to existing tools?",
    answer:
      "Yes. LetssAI is designed to work with websites, email, CRM systems, calendars, dashboards, documents, and other business tools where integration is available.",
  },
  {
    question: "How does LetssAI protect company data and prevent hallucinations?",
    answer:
      "LetssAI grounds assistants strictly in your verified enterprise documentation with deterministic guardrails. Client data is never used to train public foundation models without explicit consent.",
  },
  {
    question: "How does AI Workflow Automation work across disparate software?",
    answer:
      "AI Workflow Automation unifies your stack via event-driven webhooks, custom API middleware, and CRM automations—triggering autonomous actions without manual double-entry.",
  },
  {
    question: "What happens when an AI assistant encounters a complex or sensitive query?",
    answer:
      "All LetssAI agents include deterministic human-in-the-loop escalation gates. High-stakes requests, complex tickets, and sensitive cases are immediately routed to your team with full conversation context.",
  },
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const { getTranslations } = await import("next-intl/server")
  const t = await getTranslations({ locale, namespace: "services" })
  return localizedMetadata(
    locale,
    "AI Services for Customer Support, Calling, CRM & Automation | LetssAI",
    t("description") ||
      "Explore practical AI services for customer support, calling, CRM development, sales follow-up, workflows, and system integration.",
    "/services"
  )
}

export default async function Services({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const { getTranslations } = await import("next-intl/server")
  const t = await getTranslations("services")
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbsSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Services", url: absoluteUrl("/services") },
        ])}
      />
      <ServiceHero
        eyebrow="LetssAI services"
        title={t("title")}
        description={t("description")}
        href="/services"
      />
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services
            .map((item) => localizeService(item, locale))
            .map((s) => (
              <ServiceCard key={s.slug} {...s} />
            ))}
        </div>

        <div className="mx-auto mt-10 max-w-7xl rounded-3xl border border-emerald-950/15 bg-[#f7f8f4] p-8 sm:p-10 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#016630]">
                Core Operational Capability
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                AI Workflow Automation
              </h2>
              <p className="mt-2 text-base leading-relaxed text-slate-700">
                Eliminate manual coordination across messaging channels, CRM status updates, calendar triggers, and databases. Our end-to-end autonomous workflow automations are engineered directly into your systems via AI System Integration.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/services/ai-system-integration"
                className="inline-flex items-center gap-2 rounded-full bg-[#016630] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
              >
                Explore System Integration →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FAQSectionLocal />
      <CTASection
        title="Ready to see where AI can save time in your business?"
        text="Tell us what your team does manually today. We’ll help identify practical places AI can support your workflow."
      />
    </>
  )
}
function FAQSectionLocal() {
  return (
    <section className="section bg-[#f7f8f4]">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          How should you choose an AI service?
        </h2>
        {faqs.map((f) => (
          <article className="mt-5 rounded-3xl border border-emerald-950/10 bg-[#f7f8f4] p-6 shadow-sm" key={f.question}>
            <h3 className="text-xl font-semibold tracking-tight">
              {f.question}
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">{f.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
