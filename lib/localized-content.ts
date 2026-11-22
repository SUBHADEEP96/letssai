import type { Locale } from "@/i18n/routing"
import type { Industry, Service } from "@/lib/site"
import { getServiceMetadata } from "@/lib/service-content-translations"
import en from "@/messages/en.json"
import de from "@/messages/de.json"
import es from "@/messages/es.json"
import fr from "@/messages/fr.json"
import hi from "@/messages/hi.json"

const messages = { en, de, es, fr, hi }

export function localizeService(service: Service, locale: Locale): Service {
  const meta = getServiceMetadata(service.slug, locale)
  const catalogTitle =
    messages[locale].catalog.services[
      service.slug as keyof typeof en.catalog.services
    ]

  return {
    ...service,
    title: meta?.title ?? catalogTitle ?? service.title,
    seoTitle: meta?.seoTitle ?? service.seoTitle,
    metaDescription: meta?.metaDescription ?? service.metaDescription,
    description: meta?.description ?? service.description,
  }
}

export function localizeIndustry(industry: Industry, locale: Locale): Industry {
  return {
    ...industry,
    title:
      messages[locale].catalog.industries[
        industry.slug as keyof typeof en.catalog.industries
      ] ?? industry.title,
  }
}

export function localizedIndustryTitle(slug: string, locale: Locale) {
  return messages[locale].catalog.industries[
    slug as keyof typeof en.catalog.industries
  ]
}
