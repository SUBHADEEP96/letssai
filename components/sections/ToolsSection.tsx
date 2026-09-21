import type { IconProps } from "@phosphor-icons/react"
import type { ComponentType } from "react"
import {
  Browser,
  CalendarDots,
  ChartBar,
  EnvelopeSimple,
  Files,
  Table,
  UsersThree,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr"

type Tool = {
  label: string
  icon: ComponentType<IconProps>
}

const tools: Tool[] = [
  { label: "Website/Web App", icon: Browser },
  { label: "Dashboards", icon: ChartBar },
  { label: "WhatsApp", icon: WhatsappLogo },
  { label: "Email", icon: EnvelopeSimple },
  { label: "CRM", icon: UsersThree },
  { label: "Google Sheets", icon: Table },
  { label: "Calendars", icon: CalendarDots },
  { label: "Business documents", icon: Files },
]

type ToolsSectionProps = {
  title: string
  description: string
}

export function ToolsSection({ title, description }: ToolsSectionProps) {
  return (
    <section className="section bg-gradient-to-b from-white via-emerald-50/30 to-white">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-slate-600">
          {description}
        </p>

        <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          {tools.map(({ label, icon: Icon }) => (
            <li
              className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-emerald-100 bg-white px-3 py-5 shadow-[0_8px_30px_rgb(15_118_80/0.06)] transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_14px_36px_rgb(15_118_80/0.12)]"
              key={label}
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                <Icon aria-hidden="true" size={23} weight="duotone" />
              </span>
              <span className="text-sm font-semibold tracking-wide text-slate-800">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
