import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/site/Breadcrumbs"
import { FAQSection } from "@/components/site/FAQSection"
import { CTASection } from "@/components/site/CTASection"
import { JsonLd } from "@/components/seo/JsonLd"
import {
  absoluteUrl,
  breadcrumbsSchema,
  faqSchema,
  pageMetadata,
} from "@/lib/seo"
import { industries } from "@/lib/site"

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const i = industries.find((x) => x.slug === slug)
  return i ? pageMetadata(i.seoTitle, i.metaDescription, i.href) : {}
}
export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const i = industries.find((x) => x.slug === slug)
  if (!i) notFound()
  return (
    <>
      <JsonLd data={faqSchema(i.faqs)} />
      <JsonLd
        data={breadcrumbsSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Industries", url: absoluteUrl("/industries") },
          { name: i.title, url: absoluteUrl(i.href) },
        ])}
      />
      <section className="section bg-emerald-50">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: i.title, href: i.href },
            ]}
          />
          <h1 className="mt-6 text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
            AI solutions for {i.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            {i.metaDescription}
          </p>
        </div>
      </section>
      <Grid
        title={`What common problems do ${i.title.toLowerCase()} teams face?`}
        items={i.problems}
      />
      <Grid
        title="Which LetssAI services are the best fit?"
        items={i.services}
      />
      <Grid
        title="What example workflows can LetssAI support?"
        items={i.workflows}
        ordered
      />
      <Grid title="What benefits can this create?" items={i.benefits} />
      <FAQSection faqs={i.faqs} />
      <CTASection title={`Ready to explore AI for ${i.title}?`} />
    </>
  )
}
function Grid({
  title,
  items,
  ordered,
}: {
  title: string
  items: string[]
  ordered?: boolean
}) {
  const Tag = ordered ? "ol" : "ul"
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
        <Tag className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((x, idx) => (
            <li
              className="rounded-3xl border border-emerald-950/10 bg-white p-6 leading-relaxed"
              key={x}
            >
              {ordered && <b className="mr-2 text-emerald-700">{idx + 1}.</b>}
              {x}
            </li>
          ))}
        </Tag>
      </div>
    </section>
  )
}
