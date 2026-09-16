import { notFound } from "next/navigation"
import { FAQSection } from "@/components/site/FAQSection"
import { CTASection } from "@/components/site/CTASection"
import { JsonLd } from "@/components/seo/JsonLd"
import {
  CallingServicePage,
  callingFaqs,
} from "@/components/services/CallingServicePage"
import { ServiceHero } from "@/components/services/ServiceHero"
import {
  CustomerSupportServicePage,
  customerSupportFaqs,
} from "@/components/services/CustomerSupportServicePage"
import {
  absoluteUrl,
  breadcrumbsSchema,
  faqSchema,
  pageMetadata,
  serviceSchema,
} from "@/lib/seo"
import { services } from "@/lib/site"
import { WorkflowShowcase } from "@/components/workflows/WorkflowShowcase"
import { workflowFor } from "@/components/workflows/workflow-data"

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const s = services.find((x) => x.slug === slug)
  return s
    ? pageMetadata(
        s.seoTitle,
        s.metaDescription,
        s.href,
        s.slug === "ai-customer-support"
          ? "/media/services/ai-customer-support/csstep5.webp"
          : s.slug === "ai-calling-appointment-booking"
            ? "/media/services/hero-letssai.webp"
            : undefined
      )
    : {}
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const s = services.find((x) => x.slug === slug)
  if (!s) notFound()
  return (
    <>
      <JsonLd data={serviceSchema(s.title, s.description, s.href)} />
      <JsonLd
        data={faqSchema(
          s.slug === "ai-calling-appointment-booking"
            ? callingFaqs
            : s.slug === "ai-customer-support"
              ? customerSupportFaqs
              : s.faqs
        )}
      />
      <JsonLd
        data={breadcrumbsSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Services", url: absoluteUrl("/services") },
          { name: s.title, url: absoluteUrl(s.href) },
        ])}
      />
      {s.slug === "ai-calling-appointment-booking" ? (
        <CallingServicePage service={s} />
      ) : s.slug === "ai-customer-support" ? (
        <CustomerSupportServicePage service={s} />
      ) : (
        <>
          <ServiceHero
            eyebrow={s.title}
            title={`${s.title} for faster, clearer business communication`}
            description={s.metaDescription}
            href={s.href}
          />
          <Info
            title="What is this service in simple terms?"
            text={s.description}
          />
          <Grid
            title="What business problems does it solve?"
            items={s.problems}
          />
          <Grid title="What does the AI assistant do?" items={s.does} />
          <WorkflowShowcase workflow={workflowFor(s)} />
          <Grid
            title="Which channels and tools can it support?"
            items={s.tools}
          />
          <Info
            title="How does human handoff and safety work?"
            text="LetssAI is designed to route sensitive, unclear, or high-value conversations to a person. The assistant supports business workflows and does not replace professional legal, medical, or financial judgment."
          />
          <Grid
            title="What business benefits can you expect?"
            items={s.benefits}
          />
          <Grid
            title="Which industries use this service?"
            items={s.industries}
          />
          <FAQSection faqs={s.faqs} />
          <CTASection title={`Want to explore ${s.title}?`} />
        </>
      )}
    </>
  )
}
function Info({ title, text }: { title: string; text: string }) {
  return (
    <section className="section">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">{text}</p>
      </div>
    </section>
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
    <section className="section bg-slate-50/70">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
        <Tag className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((x, i) => (
            <li
              className="rounded-3xl bg-white p-6 leading-relaxed text-slate-700 shadow-sm"
              key={x}
            >
              {ordered && <b className="mr-2 text-emerald-700">{i + 1}.</b>}
              {x}
            </li>
          ))}
        </Tag>
      </div>
    </section>
  )
}
