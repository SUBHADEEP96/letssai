import type { Metadata } from 'next'
import { siteConfig } from './site'
import type { Locale } from '@/i18n/routing'
import { localizePath, locales } from '@/i18n/routing'

export function localizedMetadata(
  locale: Locale,
  title: string,
  description: string,
  path: string,
  image?: string
): Metadata {
  const canonical = localizePath(path, locale)
  const languages = Object.fromEntries(locales.map((l) => [l, localizePath(path, l)]))
  const socialImage = image || siteConfig.assets.ogImage
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { ...languages, 'x-default': path },
    },
    openGraph: {
      type: 'website',
      url: new URL(canonical, siteConfig.url).toString(),
      siteName: siteConfig.name,
      title,
      description,
      locale,
      images: [
        {
          url: socialImage,
          alt: `${siteConfig.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImage],
    },
  }
}
