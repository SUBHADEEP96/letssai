import Link from "next/link"
import { HeroVisual } from "@/components/site/HeroVisual"
import { CTAButton } from "@/components/site/CTAButton"
import { ServiceCard, IndustryCard } from "@/components/site/Cards"
import { FAQSection } from "@/components/site/FAQSection"
import { CTASection } from "@/components/site/CTASection"
import { JsonLd } from "@/components/seo/JsonLd"
import { faqSchema, pageMetadata } from "@/lib/seo"
import { homeFaqs, industries, services } from "@/lib/site"
import { GlobalDeliveryMap } from "@/components/site/GlobalDeliveryMap"

export const metadata = pageMetadata(
  "LetssAI | Practical AI Solutions for Growing Businesses",
  "LetssAI helps growing businesses use AI inside existing tools to reply faster, follow up better, and reduce manual work.",
  "/"
)
export default function Home() {
  const featured = services.slice(0, 3).concat(services[4])
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <section className="overflow-hidden bg-[linear-gradient(180deg,#fff,#f0fdf4)]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 font-mono text-xs font-semibold tracking-[0.18em] text-emerald-800 uppercase">
              Applied AI for growing businesses
            </p>
            <h1 className="text-4xl leading-tight font-semibold tracking-tight text-slate-950 md:text-5xl lg:text-5xl">
              AI solutions that help your business respond faster, follow up
              better, and work smarter.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              LetssAI builds practical AI assistants for customer support, sales
              follow-up, documents, appointments, and daily business workflows —
              connected to the tools your team already uses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton />
              <Link
                className="rounded-full border border-emerald-950/15 px-5 py-3 text-sm font-semibold"
                href="/services"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            What LetssAI helps you automate
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Customer questions",
              "Lead follow-up",
              "Business documents",
              "Appointments and calls",
              "Internal knowledge",
              "Repetitive workflows",
            ].map((x) => (
              <div
                className="rounded-3xl bg-emerald-50 p-6 text-lg font-semibold tracking-tight text-emerald-950"
                key={x}
              >
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Which AI services are most useful first?
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((s) => (
              <ServiceCard key={s.slug} {...s} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Built for your existing tools
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
            LetssAI connects AI support to the everyday channels where work
            already happens.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Website/Web App",
              "Dashboards",
              "WhatsApp",
              "Email",
              "CRM",
              "Google Sheets",
              "Calendars",
              "Business documents",
            ].map((t) => (
              <span
                className="rounded-full border border-emerald-200 bg-white px-4 py-2 font-mono text-xs font-semibold tracking-[0.14em] text-emerald-800 uppercase"
                key={t}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Industries LetssAI supports
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {industries.slice(0, 4).map((i) => (
              <IndustryCard
                key={i.slug}
                title={i.title}
                description={i.useCase}
                href={i.href}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Why do teams choose LetssAI?
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Business-first approach",
              "Human handoff where needed",
              "Clear reporting",
              "Built around existing workflows",
              "Designed for small and growing businesses",
            ].map((x) => (
              <article
                className="rounded-3xl border border-emerald-950/10 p-6"
                key={x}
              >
                <h3 className="text-xl font-semibold tracking-tight">{x}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  Practical implementation focused on clear business outcomes,
                  safe adoption, and daily usability.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqs={homeFaqs} />
      <GlobalDeliveryMap />
      <CTASection />
    </>
  )
}
