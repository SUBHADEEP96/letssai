"use client"

import { useId, useState } from "react"
import { CaretDown } from "@phosphor-icons/react"
import type { FAQ } from "@/lib/site"

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const prefix = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div
      itemScope
      itemType="https://schema.org/FAQPage"
      className="divide-y divide-emerald-950/10 overflow-hidden rounded-3xl border border-emerald-950/10 bg-[#f7f8f4]"
    >
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        const panelId = `${prefix}-panel-${index}`
        const triggerId = `${prefix}-trigger-${index}`

        return (
          <div
            key={faq.question}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex min-h-16 w-full items-center justify-between gap-5 px-5 py-5 text-left text-base font-semibold tracking-tight text-slate-950 hover:bg-emerald-50/60 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-emerald-600 sm:px-7 sm:text-lg cursor-pointer"
              >
                <span itemProp="name">{faq.question}</span>
                <CaretDown
                  aria-hidden
                  className={`shrink-0 text-emerald-700 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>

            {/* Answer Region - uses CSS Grid animation so content is always crawlable in DOM by search engines & AI bots */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-6 sm:px-7">
                  <p
                    itemProp="text"
                    className="max-w-3xl leading-7 text-slate-600"
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
