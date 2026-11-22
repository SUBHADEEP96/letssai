import { ServiceCard } from "@/components/site/Cards"
import { CTASection } from "@/components/site/CTASection"
import { JsonLd } from "@/components/seo/JsonLd"
import { absoluteUrl, breadcrumbsSchema, faqSchema } from "@/lib/seo"
import { services } from "@/lib/site"
import { localizeService } from "@/lib/localized-content"
import type { Locale } from "@/i18n/routing"
import { ServiceHero } from "@/components/services/ServiceHero"
import { localizedMetadata } from "@/lib/i18n-seo"
import { getPageSeo } from "@/lib/page-seo"

const faqs = [
  {
    question: "What AI services does LetssAI offer?",
    answer:
      "LetssAI offers five core services: AI customer support, AI calling and appointment booking, AI sales and lead follow-up, AI CRM development and AI system integration. Underneath them sits AI workflow automation, which connects messaging, CRM, calendars and databases so routine work happens without manual coordination. Most clients begin with one service and add others once the first workflow proves useful.",
  },
  {
    question:
      "What is AI workflow automation, and how is it different from basic rule-based automation?",
    answer:
      "AI workflow automation understands free-form requests, such as an email, a WhatsApp message or a phone call, and then triggers the right action across your tools. Rule-based automation only works when inputs are structured and predictable. With AI in the loop, a workflow can classify an enquiry, gather missing details, update the CRM and hand over to a person when judgment is needed.",
  },
  {
    question: "Which LetssAI service fits which business problem?",
    answer:
      "Slow replies to customers point to AI customer support. Missed calls, booking friction or phone follow-up point to AI calling and appointment booking. Leads going cold point to AI sales and lead follow-up. Scattered customer data and manual record-keeping point to AI CRM development. AI that has to work with the tools you already run points to AI system integration. When a problem spans several areas, we scope it as one connected workflow.",
  },
  {
    question: "Can I combine several AI services in one workflow?",
    answer:
      "Yes. For example, a lead can arrive through a web form, receive an instant follow-up, be qualified in conversation, be booked onto a sales calendar and be logged in the CRM, with a person taking over at the right moment. Combining services works best once the first workflow is stable and measurable, then extended.",
  },
  {
    question:
      "Do we need an in-house technical team to use LetssAI's AI services?",
    answer:
      "Not to get started. LetssAI scopes, builds and connects the workflow, while your team defines the process, approves the knowledge the AI can use and decides where people stay involved. A short discovery call shows what is needed from your side.",
  },
  {
    question:
      "How is a custom AI service from LetssAI different from buying a chatbot tool?",
    answer:
      "A chatbot tool typically answers questions in isolation. LetssAI designs assistants around your workflow and connects them to your CRM, calendars, email, WhatsApp and documents, so they can take approved actions as well as reply. Escalation rules, brand voice and knowledge boundaries are agreed up front.",
  },
  {
    question: "How do I know whether an AI service is working?",
    answer:
      "By measuring outcomes you define before launch, such as response time, the share of enquiries resolved without a person, appointments booked, leads followed up or hours of manual work removed. LetssAI's support suite includes live analytics on conversation volume, response times and customer satisfaction, so results are visible rather than assumed.",
  },
  {
    question:
      "Are LetssAI's AI services suitable for regulated industries like Legal or Healthcare?",
    answer:
      "LetssAI works with industries including healthcare and clinics, legal firms, and finance and accounting. Assistants are grounded in approved documentation, kept within an agreed business scope, and escalate sensitive cases to people. The data-handling and deployment model is agreed during solution design, and your own compliance obligations should be reviewed as part of scoping. We provide private servers for businesses where you can run your own AI and own what it learns.",
  },
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const seo = getPageSeo("/services", locale)
  return localizedMetadata(
    locale,
    seo.title,
    seo.description,
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
