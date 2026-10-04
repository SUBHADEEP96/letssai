import { ContactForm } from "./ContactForm"
import { JsonLd } from "@/components/seo/JsonLd"
import { absoluteUrl, pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

export const metadata = pageMetadata(
  "Contact LetssAI | Request an AI Workflow Review",
  "Contact LetssAI to request a free AI workflow review for customer support, lead follow-up, documents, appointments, and workflow automation.",
  "/contact"
)

const icons = [
  <path key="one" d="M5 12h14M12 5l7 7-7 7" />,
  <path key="two" d="M4 7h16M7 4v6m10 4v6m-3-3H4" />,
  <path
    key="three"
    d="M12 3l8 4v5c0 5-3.4 8-8 9-4.6-1-8-4-8-9V7l8-4zm-3 9 2 2 4-4"
  />,
]

export default async function Contact() {
  const { getTranslations } = await import("next-intl/server")
  const t = await getTranslations("contact")
  const details = [
    [t("helpTitle"), t("helpText")],
    [t("workTitle"), t("workText")],
    [t("reviewTitle"), t("reviewText")],
  ]
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
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(34rem,1.1fr)] lg:gap-16 xl:gap-24">
          <div className="min-w-0 lg:sticky lg:top-28">
            {/* <p className="text-sm font-semibold tracking-[0.14em] text-[#016630] uppercase">
              LetssAI
            </p> */}
            <h1 className="mt-4 max-w-xl text-4xl leading-[1.08] font-semibold tracking-tight text-slate-950 sm:text-5xl xl:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              {t("description")}
            </p>
            <div className="mt-10 divide-y divide-emerald-950/10 border-y border-emerald-950/10">
              {details.map(([title, text], index) => (
                <div key={title} className="flex gap-4 py-6">
                  <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full bg-emerald-100 text-[#016630]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                      aria-hidden="true"
                    >
                      {icons[index]}
                    </svg>
                  </span>
                  <div>
                    <h2 className="font-semibold tracking-tight text-slate-950">
                      {title}
                    </h2>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </main>
    </>
  )
}
