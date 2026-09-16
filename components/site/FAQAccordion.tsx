"use client"

import { useId, useState } from "react"
import { CaretDown } from "@phosphor-icons/react"
import type { FAQ } from "@/lib/site"

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const prefix = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-emerald-950/10 overflow-hidden rounded-3xl border border-emerald-950/10 bg-white">
      {faqs.map((faq, index) => {
        const open = openIndex === index
        const panelId = `${prefix}-panel-${index}`
        const triggerId = `${prefix}-trigger-${index}`
        return (
          <div key={faq.question}>
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex min-h-16 w-full items-center justify-between gap-5 px-5 py-5 text-left text-base font-semibold tracking-tight text-slate-950 hover:bg-emerald-50/60 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-emerald-600 sm:px-7 sm:text-lg"
              >
                <span>{faq.question}</span>
                <CaretDown
                  aria-hidden
                  className={`shrink-0 text-emerald-700 transition-transform ${open ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!open}
              className="px-5 pb-6 sm:px-7"
            >
              <p className="max-w-3xl leading-7 text-slate-600">{faq.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
