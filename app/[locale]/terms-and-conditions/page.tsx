import type { Locale } from "@/i18n/routing"
import { localizedMetadata } from "@/lib/i18n-seo"
import { setRequestLocale } from "next-intl/server"
import { getTermsAndConditionsContent } from "@/lib/legal-translations/terms-and-conditions"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const content = getTermsAndConditionsContent(locale)
  return localizedMetadata(
    locale,
    content.metaTitle,
    content.metaDescription,
    "/terms-and-conditions"
  )
}

export default async function TermsAndConditionsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const content = getTermsAndConditionsContent(locale)

  return (
    <article className="min-h-screen bg-white text-black py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black text-center mb-10">
          {content.title}
        </h1>

        <div className="space-y-4 text-base leading-relaxed text-neutral-800">
          {content.intro.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
          {content.notice && <p className="mt-4">{content.notice}</p>}
        </div>

        <div className="mt-12 space-y-12">
          {content.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-xl sm:text-2xl font-medium text-black mb-4">
                {section.heading}
              </h2>

              {section.paragraphs && (
                <div className="space-y-4 text-base leading-relaxed text-neutral-800">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              )}

              {section.list && (
                <ul className="mt-4 list-disc pl-5 space-y-2 text-base leading-relaxed text-neutral-800">
                  {section.list.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      {item.label && (
                        <strong className="font-semibold text-black">
                          {item.label}:{" "}
                        </strong>
                      )}
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}

              {section.note && (
                <p className="mt-4 text-base leading-relaxed text-neutral-800">
                  {section.note}
                </p>
              )}
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-200 text-sm text-neutral-700 space-y-1">
          <p className="font-semibold text-black">{content.closing.entity}</p>
          <p>{content.closing.subtext}</p>
          <p>
            <a
              href={`mailto:${content.closing.email}`}
              className="text-black underline underline-offset-2 hover:text-neutral-600"
            >
              {content.closing.email}
            </a>
          </p>
          <p>{content.closing.location}</p>
          <p className="text-neutral-500 pt-2">{content.closing.date}</p>
        </div>
      </div>
    </article>
  )
}
