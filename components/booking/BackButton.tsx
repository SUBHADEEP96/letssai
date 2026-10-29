"use client"

import { useRouter } from "@/i18n/navigation"
import { ArrowLeft } from "@phosphor-icons/react"
import type { Locale } from "@/i18n/routing"

interface BackButtonProps {
  locale?: Locale
  className?: string
}

const BACK_LABELS: Record<string, string> = {
  en: "Back",
  hi: "वापस",
  de: "Zurück",
  es: "Volver",
  fr: "Retour",
}

export function BackButton({ locale = "en", className = "" }: BackButtonProps) {
  const router = useRouter()
  const label = BACK_LABELS[locale] || BACK_LABELS.en

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back()
    } else {
      router.push("/")
    }
  }

  return (
    <button
      type="button"
      onClick={handleBack}
      aria-label={`${label} to previous page`}
      className={`group inline-flex items-center gap-2 rounded-lg py-2 pr-3 pl-1 text-sm sm:text-base font-medium text-slate-800 transition-colors duration-200 hover:text-[#016630] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#016630] cursor-pointer ${className}`}
    >
      <ArrowLeft
        size={20}
        weight="bold"
        className="text-slate-700 transition-transform duration-200 group-hover:-translate-x-1 group-hover:text-[#016630]"
      />
      <span>{label}</span>
    </button>
  )
}
