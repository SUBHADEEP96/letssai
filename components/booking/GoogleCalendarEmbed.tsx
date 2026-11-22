"use client"

import { useState } from "react"
import { siteConfig } from "@/lib/site"
import type { Locale } from "@/i18n/routing"
import { discoveryTranslations } from "@/lib/service-content-translations"

interface GoogleCalendarEmbedProps {
  embedUrl?: string
  className?: string
  locale?: Locale
}

export function GoogleCalendarEmbed({
  embedUrl = siteConfig.booking.calendarEmbedUrl,
  className = "",
  locale = "en",
}: GoogleCalendarEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)
  const t = discoveryTranslations[locale] || discoveryTranslations.en
  const localizedEmbedUrl = embedUrl.includes("hl=")
    ? embedUrl
    : `${embedUrl}&hl=${locale}`

  return (
    <div
      className={`relative w-full max-w-4xl overflow-hidden rounded-2xl border border-emerald-950/10 bg-white shadow-2xl shadow-emerald-950/5 sm:rounded-3xl lg:max-w-5xl ${className}`}
    >
      {/* Brand Accent Top Line */}
      <div
        className="h-1.5 w-full bg-gradient-to-r from-emerald-600 via-[#016630] to-emerald-700"
        aria-hidden="true"
      />

      {/* Loading Skeleton */}
      {isLoading && (
        <div
          role="status"
          aria-label={t.loadingTitle}
          className="absolute inset-x-0 top-1.5 bottom-0 z-10 flex flex-col items-center justify-center bg-white/95 p-6 backdrop-blur-xs transition-opacity duration-300"
        >
          <div className="size-10 animate-spin rounded-full border-3 border-emerald-100 border-t-[#016630]" />
          <p className="mt-4 text-sm font-medium text-slate-700">
            {t.loadingTitle}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            {t.loadingSubtitle}
          </p>
        </div>
      )}

      {/* Embedded Google Calendar Appointment Scheduling Frame */}
      <div className="relative w-full">
        <iframe
          src={localizedEmbedUrl}
          title={t.calendarTitle}
          style={{ border: 0 }}
          width="100%"
          height="100%"
          className="h-[660px] w-full border-0 transition-opacity duration-300 sm:h-[700px] lg:h-[740px]"
          onLoad={() => setIsLoading(false)}
          allow="camera; microphone; fullscreen"
          loading="eager"
        />
      </div>
    </div>
  )
}
