import { notFound } from "next/navigation"
import { IndustryHero } from "@/components/industry/IndustryHero"
import { IndustryGallery } from "@/components/industry/IndustryGallery"
import { IndustryUseCaseGrid } from "@/components/industry/IndustryUseCaseGrid"
import { FAQSection } from "@/components/site/FAQSection"
import { CTASection } from "@/components/site/CTASection"
import { JsonLd } from "@/components/seo/JsonLd"
import { fallbackIndustries } from "@/lib/content/fallback-industries"
import { getIndustryPage } from "@/lib/sanity/page-data"
import { absoluteUrl, breadcrumbsSchema, faqSchema, pageMetadata, serviceSchema } from "@/lib/seo"

export function generateStaticParams() { return fallbackIndustries.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const industry = await getIndustryPage((await params).slug); return industry ? pageMetadata(industry.metaTitle, industry.metaDescription, industry.href, industry.ogImage, industry.canonicalUrl) : {} }
export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const industry = await getIndustryPage((await params).slug); if (!industry) notFound()
  return <><JsonLd data={serviceSchema(`AI solutions for ${industry.title}`, industry.useCase, industry.href)} /><JsonLd data={faqSchema(industry.faqs)} /><JsonLd data={breadcrumbsSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "Industries", url: absoluteUrl("/industries") }, { name: industry.title, url: absoluteUrl(industry.href) }])} />
    <IndustryHero industry={industry} />
    <IndustryUseCaseGrid title={`What slows down ${industry.title.toLowerCase()} teams?`} intro="The strongest starting points are repetitive, rules-based tasks where information already exists and a clear owner can review exceptions." items={industry.commonProblems} />
    <IndustryGallery title={industry.title} items={industry.galleryItems} />
    <IndustryUseCaseGrid title="Which LetssAI services fit best?" intro="Choose a service around the business outcome first. The technology and integrations follow from that goal." items={industry.bestFitServices} />
    <IndustryUseCaseGrid title="How could the first workflow work?" intro="These examples show a practical sequence with a visible handoff—not an unmonitored replacement for your team." items={industry.exampleWorkflowsText} />
    <IndustryUseCaseGrid title="What outcomes should the team review?" intro="Measure whether work becomes clearer, faster and easier to hand off, without making unsupported performance claims." items={industry.benefits} />
    <FAQSection faqs={industry.faqs} /><CTASection title={industry.finalCta.heading} text={industry.finalCta.text} />
  </>
}
