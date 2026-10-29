import type { Metadata } from "next"
import localFont from "next/font/local"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import "../globals.css"
import { Header } from "@/components/site/Header"
import { Footer } from "@/components/site/Footer"
import { FooterWrapper } from "@/components/site/FooterWrapper"
import { ChatbotWidget } from "@/components/site/ChatbotWidget"
import { JsonLd } from "@/components/seo/JsonLd"
import { organizationSchema, websiteSchema } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
import { routing } from "@/i18n/routing"

const plusJakartaSans = localFont({
  src: [
    {
      path: "../fonts/plus-jakarta-sans-latin.woff2",
      weight: "200 800",
      style: "normal",
    },
    {
      path: "../fonts/plus-jakarta-sans-italic.woff2",
      weight: "200 800",
      style: "italic",
    },
  ],
  variable: "--font-plus-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  manifest: "/manifest.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: {
      ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
        ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
        : {}),
    },
  },
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
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(window.self!==window.top){document.documentElement.classList.add('is-embedded');}}catch(e){}",
          }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased`} suppressHydrationWarning>
        <NextIntlClientProvider key={locale} locale={locale}>
          <Header />
          <main>{children}</main>
          <FooterWrapper><Footer /></FooterWrapper>
          <ChatbotWidget />
          <JsonLd data={organizationSchema} />
          <JsonLd data={websiteSchema} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
