import { ServiceCard } from "@/components/site/Cards"
import { CTASection } from "@/components/site/CTASection"
import { JsonLd } from "@/components/seo/JsonLd"
import { faqSchema, pageMetadata } from "@/lib/seo"
import { services } from "@/lib/site"
import { localizeService } from "@/lib/localized-content"
import type { Locale } from "@/i18n/routing"
import { ServiceHero } from "@/components/services/ServiceHero"

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
]
export const metadata = pageMetadata(
  "AI Services for Customer Support, Calling, CRM & Automation | LetssAI",
  "Explore practical AI services for customer support, calling, CRM development, sales follow-up, workflows, and system integration.",
  "/services"
)
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
    <section className="section bg-slate-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          How should you choose an AI service?
        </h2>
        {faqs.map((f) => (
          <article className="mt-5 rounded-3xl bg-white p-6" key={f.question}>
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
