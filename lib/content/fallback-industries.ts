import { industries } from "@/lib/site"
import { industryGalleryData } from "./industry-gallery-data"
import type { IndustryPageData } from "./types"

const bestFit: Record<string, string[]> = {
  "real-estate": ["AI Sales & Lead Follow-up", "AI Calling & Appointment Booking", "AI Customer Support", "AI System Integration"],
  "healthcare-clinics": ["AI Calling & Appointment Booking", "AI Customer Support", "AI Workflow Automation", "AI Knowledge Assistant"],
  "legal-firms": ["AI Knowledge Assistant", "AI Workflow Automation", "AI Customer Support", "AI System Integration"],
  "education-coaching": ["AI Sales & Lead Follow-up", "AI Customer Support", "AI Calling & Appointment Booking", "AI Marketing Assistant"],
  "retail-ecommerce": ["AI Customer Support", "AI Workflow Automation", "AI Marketing Assistant", "AI System Integration"],
  "finance-accounting": ["AI Workflow Automation", "AI Knowledge Assistant", "AI System Integration", "AI Customer Support"],
}
const headlines: Record<string, string> = {
  "real-estate": "Follow every property enquiry with clarity and momentum",
  "healthcare-clinics": "Make clinic administration easier for patients and front-desk teams",
  "legal-firms": "Organise client intake and knowledge work without replacing legal judgment",
  "education-coaching": "Help prospective learners and students get the next answer sooner",
  "retail-ecommerce": "Resolve everyday shopping questions with less support friction",
  "finance-accounting": "Move client documents and routine finance admin forward with fewer manual steps",
}
export const fallbackIndustries: IndustryPageData[] = industries.map((industry) => ({
  slug: industry.slug, title: industry.title, href: industry.href, useCase: industry.useCase,
  heroHeadline: headlines[industry.slug], heroSubheadline: industry.metaDescription,
  metaTitle: industry.seoTitle, metaDescription: industry.metaDescription, industryIcon: industry.icon,
  commonProblems: industry.problems, bestFitServices: bestFit[industry.slug], exampleWorkflowsText: industry.workflows,
  galleryItems: industryGalleryData[industry.slug], benefits: industry.benefits, faqs: industry.faqs,
  finalCta: { heading: `Explore a practical AI workflow for ${industry.title.toLowerCase()}`, text: "Tell us where enquiries, administration or handoffs currently slow your team down.", label: "Map your opportunity", href: "/contact" },
}))
