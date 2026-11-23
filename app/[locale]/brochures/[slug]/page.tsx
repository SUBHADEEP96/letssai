import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { getBrochure, getAllBrochures } from '@/lib/brochures'
import { BrochureViewer } from '@/components/brochures/BrochureViewer'
import { absoluteUrl } from '@/lib/seo'
import { defaultLocale, locales, localizePath, type Locale } from '@/i18n/routing'
import { JsonLd } from '@/components/seo/JsonLd'

interface BrochurePageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export function generateStaticParams() {
  const allBrochures = getAllBrochures()
  const slugs = allBrochures.flatMap((b) => [b.slug, ...b.aliases])

  return locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
    }))
  )
}

export async function generateMetadata({
  params,
}: BrochurePageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : defaultLocale) as Locale
  const brochure = getBrochure(slug)

  if (!brochure) {
    return {
      title: 'Brochure Not Found | LetssAI',
      robots: { index: false, follow: false },
    }
  }

  const title = `${brochure.title} | Official Brochure`
  const description = brochure.description
  const path = `/brochures/${brochure.slug}`
  const canonical = absoluteUrl(localizePath(path, locale))
  const languages = Object.fromEntries(
    locales.map((l) => [l, absoluteUrl(localizePath(path, l))])
  )
  const xDefault = absoluteUrl(localizePath(path, defaultLocale))

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        'x-default': xDefault,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'LetssAI',
      type: 'article',
      images: [
        {
          url: absoluteUrl('/media/letssai_logo.png'),
          width: 1200,
          height: 630,
          alt: `${brochure.title} - LetssAI Brochure`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl('/media/letssai_logo.png')],
    },
  }
}

export default async function BrochurePage({ params }: BrochurePageProps) {
  const { locale: rawLocale, slug } = await params
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : defaultLocale) as Locale
  setRequestLocale(locale)

  const brochure = getBrochure(slug)
  if (!brochure) {
    notFound()
  }

  const documentSchema = {
    '@context': 'https://schema.org',
    '@type': 'DigitalDocument',
    name: brochure.title,
    description: brochure.description,
    url: absoluteUrl(localizePath(`/brochures/${brochure.slug}`, locale)),
    fileFormat: 'application/pdf',
    encodingFormat: 'application/pdf',
    contentUrl: absoluteUrl(brochure.pdfUrl),
    publisher: {
      '@type': 'Organization',
      name: 'LetssAI',
      url: absoluteUrl('/'),
      logo: absoluteUrl('/media/letssai_logo.png'),
    },
  }

  return (
    <>
      <JsonLd data={documentSchema} />
      <BrochureViewer brochure={brochure} />
    </>
  )
}
