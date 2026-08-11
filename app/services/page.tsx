import { ServiceCard } from "@/components/site/Cards"
import { CTASection } from "@/components/site/CTASection"
import { JsonLd } from "@/components/seo/JsonLd"
import { faqSchema, pageMetadata } from "@/lib/seo"
import { services } from "@/lib/site"

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
  "AI Services for Customer Support, Sales, Documents & Appointments | LetssAI",
  "Explore practical AI services for customer support, sales follow-up, documents, appointments, workflows, and system integration.",
  "/services"
)
export default function Services() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <section className="section bg-emerald-50">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
            AI services built around real business workflows
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Choose practical AI assistants that help your team reply faster,
            follow up better, and reduce repeated manual work.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} {...s} />
          ))}
        </div>
      </section>
      <FAQSectionLocal />
      <CTASection />
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
