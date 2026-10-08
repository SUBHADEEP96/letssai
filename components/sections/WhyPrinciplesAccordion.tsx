"use client"

import { useId, useState } from "react"
import { CaretDown } from "@phosphor-icons/react"

export type PrincipleItem = {
  number: string
  title: string
  text: string
}

export function WhyPrinciplesAccordion({ items }: { items: PrincipleItem[] }) {
  const prefix = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-emerald-950/10 overflow-hidden rounded-3xl border border-emerald-950/10 bg-[#f7f8f4] shadow-sm">
      {items.map((item, index) => {
        const open = openIndex === index
        const panelId = `${prefix}-panel-${index}`
        const triggerId = `${prefix}-trigger-${index}`
        return (
          <div
            key={item.number}
            className="transition-colors hover:bg-emerald-50/30"
          >
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex min-h-16 w-full items-center justify-between gap-4 px-6 py-5 text-left transition focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-emerald-600 sm:px-8 sm:py-6"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="font-mono text-sm font-bold tracking-wider text-emerald-700 sm:text-base">
                    {item.number}
                  </span>
                  <span className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
                    {item.title}
                  </span>
                </div>
                <CaretDown
                  aria-hidden
                  size={18}
                  className={`shrink-0 text-emerald-700 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!open}
              className="px-6 pb-6 pl-14 sm:px-8 sm:pb-7 sm:pl-20"
            >
              <p className="max-w-2xl text-base leading-relaxed text-slate-600">
                {item.text}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
