import { CTASection } from "@/components/site/CTASection"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata(
  "Why LetssAI | Practical AI Built Around Your Business",
  "Learn why LetssAI focuses on practical AI adoption, human handoff, reporting, and existing business workflows.",
  "/why-letssai"
)
export default function Why() {
  return (
    <>
      <section className="section bg-emerald-50">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
            Practical AI built around your business
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            LetssAI focuses on useful outcomes: faster replies, better
            follow-up, connected tools, safer handoff, and less manual work.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {[
            "Business-first approach",
            "Human handoff where needed",
            "Clear reports",
            "Built around existing workflows",
            "Designed for small and growing businesses",
            "Technology explained in plain English",
          ].map((x) => (
            <article
              className="rounded-3xl border border-emerald-950/10 p-8"
              key={x}
            >
              <h2 className="text-2xl font-semibold tracking-tight">{x}</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                We design AI support around what your team already does, then
                connect it carefully to the tools and channels that matter.
              </p>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  )
}
