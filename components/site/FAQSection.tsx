import type { FAQ } from "@/lib/site"
import { FAQAccordion } from "./FAQAccordion"

export function FAQSection({
  faqs,
  title = "Questions business owners ask",
}: {
  faqs: FAQ[]
  title?: string
  intro?: string
}) {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="faq-heading"
            className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl whitespace-normal sm:whitespace-nowrap"
          >
            {title}
          </h2>
        </div>
        <div className="mt-8 sm:mt-10">
          <FAQAccordion faqs={faqs} />
        </div>
      </div>
    </section>
  )
}
