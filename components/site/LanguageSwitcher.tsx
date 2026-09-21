"use client"
import { useEffect, useRef, useState } from "react"
import { Globe, CaretDown } from "@phosphor-icons/react"
import { useLocale, useTranslations } from "next-intl"
import { usePathname } from "@/i18n/navigation"
import { locales, localizePath, type Locale } from "@/i18n/routing"
const names: Record<Locale, string> = {
  en: "English",
  hi: "हिंदी",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
}
export function LanguageSwitcher() {
  const locale = useLocale() as Locale,
    t = useTranslations()
  const path = usePathname()
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const click = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false)
    }
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("pointerdown", click)
    document.addEventListener("keydown", key)
    return () => {
      document.removeEventListener("pointerdown", click)
      document.removeEventListener("keydown", key)
    }
  }, [])
  const choose = (next: Locale) => {
    setOpen(false)
    if (next !== locale) window.location.assign(localizePath(path, next))
  }
  return (
    <div ref={root} className="relative">
      <button
        type="button"
        aria-label={`${t("selectLanguage")} (${locale.toUpperCase()})`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex min-h-11 items-center gap-1 rounded-full border border-emerald-950/15 px-2.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-emerald-600 sm:px-3"
      >
        <Globe size={18} />
        <span>{locale.toUpperCase()}</span>
        <CaretDown size={12} />
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label={t("selectLanguage")}
          className="absolute top-full right-0 z-50 mt-2 min-w-40 rounded-2xl border border-emerald-950/10 bg-white p-2 text-slate-900 shadow-xl"
        >
          {locales.map((l) => (
            <li key={l}>
              <button
                role="option"
                aria-selected={l === locale}
                onClick={() => choose(l)}
                className={`w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-emerald-600 ${l === locale ? "bg-emerald-50 font-bold" : ""}`}
              >
                {names[l]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
