export type AnalyticsEvent = {
  action: string
  category: string
  label?: string
  value?: number
  [key: string]: unknown
}

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
    dataLayer?: unknown[]
  }
}

export function trackEvent({ action, category, label, value, ...rest }: AnalyticsEvent) {
  if (typeof window === "undefined") return

  if (typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
      ...rest,
    })
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: action,
      event_category: category,
      event_label: label,
      value,
      ...rest,
    })
  }
}

export const trackContactConversion = (source: string) => {
  trackEvent({
    action: "conversion_contact_submit",
    category: "Lead Generation",
    label: source,
  })
}

export const trackCTAClick = (ctaName: string, destination: string) => {
  trackEvent({
    action: "cta_click",
    category: "Engagement",
    label: `${ctaName} -> ${destination}`,
  })
}

export const trackAISummaryClick = (provider: string) => {
  trackEvent({
    action: "ai_summary_referral_click",
    category: "AI Discoverability",
    label: provider,
  })
}
