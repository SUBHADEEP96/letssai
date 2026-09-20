import {defineRouting} from 'next-intl/routing'

export const locales = ['en', 'hi', 'de', 'es', 'fr'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'
export const routing = defineRouting({locales, defaultLocale, localePrefix: 'as-needed', localeDetection: false})
export function isLocale(value: string): value is Locale { return locales.includes(value as Locale) }
export function localizePath(pathname: string, locale: Locale) {
  const clean = pathname.replace(/^\/(en|hi|de|es|fr)(?=\/|$)/, '') || '/'
  return locale === defaultLocale ? clean : `/${locale}${clean === '/' ? '' : clean}`
}
