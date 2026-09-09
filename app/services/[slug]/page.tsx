import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr"
import { Breadcrumbs } from "@/components/site/Breadcrumbs"
import { FAQSection } from "@/components/site/FAQSection"
import { CTASection } from "@/components/site/CTASection"
import { JsonLd } from "@/components/seo/JsonLd"
import { ServiceWorkflow } from "@/components/workflows/ServiceWorkflow"
import { absoluteUrl, breadcrumbsSchema, faqSchema, pageMetadata, serviceSchema } from "@/lib/seo"
import { fallbackServices } from "@/lib/content/fallback-services"
import { getServicePage } from "@/lib/sanity/page-data"

export function generateStaticParams() { return fallbackServices.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const service = await getServicePage((await params).slug); return service ? pageMetadata(service.metaTitle, service.metaDescription, service.href, service.ogImage, service.canonicalUrl) : {} }
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const service = await getServicePage((await params).slug); if (!service) notFound()
  return <>
    <JsonLd data={serviceSchema(service.title, service.shortDescription, service.href)} /><JsonLd data={faqSchema(service.faqs)} />
    <JsonLd data={breadcrumbsSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "Services", url: absoluteUrl("/services") }, { name: service.title, url: absoluteUrl(service.href) }])} />
    <section className="section relative overflow-hidden bg-emerald-950 text-white"><div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(52,211,153,.25),transparent_38%)]"/><div className="relative mx-auto max-w-7xl"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title, href: service.href }]} /><p className="mt-10 text-sm font-semibold tracking-[.18em] text-emerald-300 uppercase">{service.title}</p><h1 className="mt-4 max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight md:text-6xl lg:text-7xl">{service.heroHeadline}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50/75 md:text-xl">{service.heroSubheadline}</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-300 px-6 py-3 font-semibold text-emerald-950 hover:bg-white">Discuss this service <ArrowRight aria-hidden /></Link></div></section>
    <ContentGrid title="What does this help with?" answer={service.shortDescription} items={service.businessProblems} />
    <ContentGrid title="What does LetssAI build?" answer="A focused solution around your approved information, business rules and existing tools—not a generic chatbot dropped into your website." items={service.whatLetssAIBuilds} tone />
    <ServiceWorkflow title={service.workflowTitle} description={service.workflowDescription} nodes={service.workflowNodes} edges={service.workflowEdges} />
    <ContentGrid title="Where can this be used?" answer="Start with a narrow, useful workflow your team can review, then expand only when it is working reliably." items={service.useCases} />
    <ContentGrid title="Which tools can it work with?" answer="Connections depend on the access and integration options available in your current software." items={service.supportedTools} tone />
    <section className="section"><div className="mx-auto max-w-5xl rounded-[2rem] border border-amber-200 bg-amber-50 p-7 md:p-10"><p className="text-sm font-semibold tracking-widest text-amber-800 uppercase">Human review</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Where does human review happen?</h2><p className="mt-4 text-lg leading-8 text-slate-700">{service.humanHandoffNote}</p></div></section>
    <ContentGrid title="What business improvements should you look for?" answer="Agree useful measures for your workflow before launch, then review quality and exceptions—not just activity." items={service.businessBenefits} />
    <FAQSection faqs={service.faqs} /><CTASection title={service.finalCta.heading} text={service.finalCta.text} />
  </>
}
function ContentGrid({ title, answer, items, tone = false }: { title: string; answer: string; items: string[]; tone?: boolean }) { return <section className={`section ${tone ? "bg-slate-50" : ""}`}><div className="mx-auto max-w-7xl"><h2 className="max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{answer}</p><ul className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{items.map((item) => <li className="flex gap-3 rounded-2xl border border-emerald-950/10 bg-white p-5 leading-7 shadow-sm" key={item}><CheckCircle className="mt-1 shrink-0 text-emerald-700" aria-hidden />{item}</li>)}</ul></div></section> }
