import { ContactForm } from "./ContactForm"
import { JsonLd } from "@/components/seo/JsonLd"
import { absoluteUrl, pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

export const metadata = pageMetadata(
  "Contact LetssAI | Request an AI Workflow Review",
  "Contact LetssAI to request a free AI workflow review for customer support, lead follow-up, documents, appointments, and workflow automation.",
  "/contact"
)

export default async function Contact() {
  const { getTranslations } = await import("next-intl/server")
  const t = await getTranslations("contact")

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact LetssAI",
          url: absoluteUrl("/contact"),
          description:
            "Request a workflow review for practical business automation.",
          mainEntity: {
            "@type": "Organization",
            name: "LetssAI",
            url: siteConfig.url,
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales and customer support",
              email: siteConfig.contactEmail,
            },
          },
        }}
      />
      <main className="bg-[#f7f8f4] px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(34rem,1.05fr)] lg:gap-16 xl:gap-24">
          <div className="min-w-0 lg:sticky lg:top-28">
            <h1 className="max-w-xl text-2xl leading-[1.18] font-semibold tracking-tight text-slate-900 xl:text-3xl">
              {t("headline")}
            </h1>

            <div className="mt-8 max-w-xl space-y-7 sm:mt-10 sm:space-y-8">
              <div className="flex items-start gap-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 size-6 shrink-0 text-slate-900"
                  aria-hidden="true"
                >
                  <path d="m14.5 4 1.4 3.4 3.6.4-2.7 2.4.7 3.6-3.1-1.8-3.1 1.8.7-3.6-2.7-2.4 3.6-.4z" />
                  <path d="M4 17l3.5-3.5" />
                  <path d="M3 21l5-5" />
                  <path d="M7 21l3-3" />
                </svg>
                <p className="text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-snug">
                  {t("valueProp1")}
                </p>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 size-6 shrink-0 text-slate-900"
                  aria-hidden="true"
                >
                  <path d="M3 18h18" />
                  <path d="M8 18a4 4 0 0 1 8 0" />
                  <path d="M12 5v3" />
                  <path d="m6.5 9.5 2 2" />
                  <path d="m17.5 9.5-2 2" />
                </svg>
                <p className="text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-snug">
                  {t("valueProp2")}
                </p>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 size-6 shrink-0 text-slate-900"
                  aria-hidden="true"
                >
                  <path d="M11 3c0 4-2 6-6 6 4 0 6 2 6 6 0-4 2-6 6-6-4 0-6-2-6-6Z" />
                  <path d="M18 4v3" />
                  <path d="M16.5 5.5h3" />
                </svg>
                <p className="text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-snug">
                  {t("valueProp3")}
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </main>
    </>
  )
}
