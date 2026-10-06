import type { Metadata } from "next"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import "../globals.css"
import { Header } from "@/components/site/Header"
import { Footer } from "@/components/site/Footer"
import { ChatbotWidget } from "@/components/site/ChatbotWidget"
import { JsonLd } from "@/components/seo/JsonLd"
import { organizationSchema, websiteSchema } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
import { routing } from "@/i18n/routing"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  manifest: "/manifest.webmanifest",
}
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)
  return (
    <html lang={locale}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider key={locale} locale={locale}>
          <Header />
          <main>{children}</main>
          <Footer />
          <ChatbotWidget />
          <JsonLd data={organizationSchema} />
          <JsonLd data={websiteSchema} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
