import { JsonLd } from "@/components/seo/JsonLd"
import { absoluteUrl, breadcrumbsSchema } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
import type { Locale } from "@/i18n/routing"
import { localizePath } from "@/i18n/routing"
import { localizedMetadata } from "@/lib/i18n-seo"
import { BackButton } from "@/components/booking/BackButton"
import { GoogleCalendarEmbed } from "@/components/booking/GoogleCalendarEmbed"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  return localizedMetadata(
    locale,
    "Book an AI Discovery Call | LetssAI",
    "Schedule a free 30-minute AI Discovery consultation with LetssAI to uncover high-impact automation opportunities for your business workflows.",
    "/ai-discovery"
  )
}

export default async function AIDiscoveryPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  return (
    <div className="ai-discovery-page relative flex min-h-screen flex-col bg-[#f7f8f4] selection:bg-emerald-500 selection:text-white">
      {/* Structured SEO Data */}
      <JsonLd
        data={breadcrumbsSchema([
          { name: "Home", url: absoluteUrl(localizePath("/", locale)) },
          {
            name: "AI Discovery",
            url: absoluteUrl(localizePath("/ai-discovery", locale)),
          },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Book an AI Discovery Consultation | LetssAI",
          url: absoluteUrl(localizePath("/ai-discovery", locale)),
          description:
            "Schedule a practical 30-minute AI workflow review and discovery call.",
          mainEntity: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales and customer consultation",
              email: siteConfig.contactEmail,
            },
          },
        }}
      />

      {/* Ambient background glow matching LetssAI luxury aesthetic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-96 overflow-hidden"
      >
        <div className="mx-auto h-full max-w-6xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/50 via-transparent to-transparent" />
      </div>

      {/* Top Bar with "< Back" Button matching reference layout */}
      <nav
        aria-label="Back navigation"
        className="relative z-20 w-full pt-4 px-4 sm:pt-6 sm:px-8 lg:px-12"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-start">
          <BackButton locale={locale} />
        </div>
      </nav>

      {/* Main Booking Container */}
      <main className="relative z-10 flex flex-1 items-center justify-center px-3 py-4 sm:px-6 sm:py-6 lg:px-8 lg:pb-12">
        <h1 className="sr-only">
          Book an AI Discovery Consultation with LetssAI
        </h1>
        <GoogleCalendarEmbed />
      </main>
    </div>
  )
}
