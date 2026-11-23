import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/seo'
import { industries, services } from '@/lib/site'
import { defaultLocale, locales, localizePath } from '@/i18n/routing'

// Stable, deterministic last-modified timestamps so search engines trust lastmod
const ROUTE_LAST_MODIFIED: Record<string, string> = {
  '/privacy-policy': '2026-10-09T00:00:00.000Z',
  '/terms-and-conditions': '2026-10-09T00:00:00.000Z',
}

const DEFAULT_LAST_MODIFIED = '2026-11-22T00:00:00.000Z'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/services',
    '/industries',
    '/why-letssai',
    '/contact',
    '/ai-discovery',
    ...services.map((s) => s.href),
    ...industries.map((i) => i.href),
  ]

  return paths.flatMap((path) => {
    const lastModified = new Date(
      ROUTE_LAST_MODIFIED[path] || DEFAULT_LAST_MODIFIED
    )
    const languages = Object.fromEntries(
      locales.map((l) => [l, absoluteUrl(localizePath(path, l))])
    )
    const xDefault = absoluteUrl(localizePath(path, defaultLocale))

    return locales.map((locale) => ({
      url: absoluteUrl(localizePath(path, locale)),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 1.0 : 0.8,
      alternates: {
        languages: {
          ...languages,
          'x-default': xDefault,
        },
      },
    }))
  })
}
