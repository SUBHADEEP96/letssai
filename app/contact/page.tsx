import { ContactForm } from "./ContactForm"
import { JsonLd } from "@/components/seo/JsonLd"
import { absoluteUrl, pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
export const metadata = pageMetadata(
  "Contact LetssAI | Request an AI Workflow Review",
  "Contact LetssAI to request a free AI workflow review for customer support, lead follow-up, documents, appointments, and workflow automation.",
  "/contact"
)
export default function Contact() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact LetssAI",
          url: absoluteUrl("/contact"),
          description:
            "Request a workflow review for practical business automation.",
          mainEntity: {
            "@type": "Organization",
            name: "LetssAI",
            url: siteConfig.url,
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales and customer support",
              email: siteConfig.contactEmail,
            },
          },
        }}
      />
      <section className="section bg-emerald-50">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
            Request a free AI workflow review
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Tell us what you want to automate. We’ll help you identify the
            safest and most useful first step.
          </p>
          {/* <p className="mt-3 font-mono text-xs leading-relaxed text-slate-500">
            Contact email can be configured with NEXT_PUBLIC_CONTACT_EMAIL.
            Current: {siteConfig.contactEmail}
          </p> */}
        </div>
      </section>
      <section className="border-y border-emerald-950/10 bg-white px-4 py-10 md:px-6">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <div>
            <h2 className="font-semibold tracking-tight">
              What does this help with?
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Identify repetitive support, lead, document, booking, or internal
              tasks that could be simpler.
            </p>
          </div>
          <div>
            <h2 className="font-semibold tracking-tight">How does it work?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Describe the current workflow, the tools involved, and where your
              team loses time. LetssAI will review the practical next step.
            </p>
          </div>
          <div>
            <h2 className="font-semibold tracking-tight">
              Where does human review happen?
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Tell us which decisions or exceptions need a person. The proposed
              workflow can preserve those approval points.
            </p>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  )
}
