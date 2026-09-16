import type { FAQ } from "@/lib/site"
import { FAQAccordion } from "./FAQAccordion"

export function FAQSection({
  faqs,
  title = "Questions business owners ask",
  intro,
}: {
  faqs: FAQ[]
  title?: string
  intro?: string
}) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
          {title}
        </h2>
        {intro && (
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            {intro}
          </p>
        )}
        <div className="mt-8">
          <FAQAccordion faqs={faqs} />
        </div>
      </div>
    </section>
  )
}
