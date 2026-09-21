import type { IconProps } from "@phosphor-icons/react"
import type { ComponentType } from "react"
import {
  Browser,
  CalendarDots,
  EnvelopeSimple,
  Files,
  PhoneCall,
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
  { label: "Tele Calling", icon: PhoneCall },
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

        <p className="mt-7 text-xs font-semibold tracking-[0.16em] text-emerald-700 uppercase sm:hidden">
          Swipe to explore
        </p>
        <div className="relative -mx-4 mt-4 min-w-0 sm:mx-0 sm:mt-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:hidden"
          />
          <ul className="flex max-w-full snap-x snap-mandatory scroll-px-4 [scrollbar-width:none] gap-3 overflow-x-auto px-4 pb-3 [-webkit-overflow-scrolling:touch] sm:mx-auto sm:grid sm:max-w-5xl sm:grid-cols-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:gap-4 [&::-webkit-scrollbar]:hidden">
            {tools.map(({ label, icon: Icon }) => (
              <li
                className="group flex min-h-32 w-[76vw] max-w-72 flex-none snap-start flex-col items-center justify-center gap-3 rounded-2xl border border-emerald-100 bg-white px-3 py-5 shadow-[0_8px_30px_rgb(15_118_80/0.06)] transition-[transform,box-shadow,border-color] duration-300 hover:border-emerald-200 hover:shadow-[0_14px_36px_rgb(15_118_80/0.12)] motion-safe:hover:-translate-y-1 sm:w-auto sm:max-w-none"
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
      </div>
    </section>
  )
}
