import type { Metadata } from 'next'
import { siteConfig } from './site'
import type { Locale } from '@/i18n/routing'
import { defaultLocale, localizePath, locales } from '@/i18n/routing'
import { absoluteUrl } from './seo'

export function localizedMetadata(
  locale: Locale,
  title: string,
  description: string,
  path: string,
  image?: string
): Metadata {
  const canonical = absoluteUrl(localizePath(path, locale))
  const languages = Object.fromEntries(
    locales.map((l) => [l, absoluteUrl(localizePath(path, l))])
  )
  const xDefault = absoluteUrl(localizePath(path, defaultLocale))
  const socialImage = image
    ? image.startsWith('http')
      ? image
      : absoluteUrl(image)
    : siteConfig.assets.ogImage
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { ...languages, 'x-default': xDefault },
    },
    openGraph: {
      type: 'website',
      url: canonical,
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
