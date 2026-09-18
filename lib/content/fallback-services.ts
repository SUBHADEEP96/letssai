import { services } from "@/lib/site"
import { getWorkflow } from "@/lib/workflows/service-workflows"
import type { ServicePageData } from "./types"

const hero: Record<string, [string, string]> = {
  "ai-customer-support": [
    "Give customers a faster answer—and your team a better handoff",
    "Reduce repeated support work across chat, WhatsApp and email while keeping sensitive conversations with your people.",
  ],
  "ai-sales-lead-follow-up": [
    "Turn fresh enquiries into well-prepared sales conversations",
    "Reply promptly, qualify consistently, book the right next step and keep your CRM useful.",
  ],
  "ai-calling-appointment-booking": [
    "Make appointment coordination simpler from first contact to reminder",
    "Support approved calls and messages, live calendar checks, confirmations and clear staff routing.",
  ],
  "ai-crm-development": [
    "Build a CRM that works the way your team does",
    "Unify customer records, conversations, follow-ups and reporting in one AI-ready system.",
  ],
  "ai-workflow-automation": [
    "Connect the routine work that slows down every business day",
    "Move information between inboxes, forms, files and business tools—with approvals where they matter.",
  ],
  "ai-system-integration": [
    "Bring useful AI into the systems your team already trusts",
    "Connect approved data and actions across your CRM, inbox, documents, calendars and dashboards.",
  ],
}
export const fallbackServices: ServicePageData[] = services.map((service) => {
  const workflow = getWorkflow(service.slug)
  const [headline, subheadline] = hero[service.slug]
  return {
    slug: service.slug,
    title: service.title,
    href: service.href,
    shortDescription: service.description,
    heroHeadline: headline,
    heroSubheadline: subheadline,
    metaTitle: service.seoTitle,
    metaDescription: service.metaDescription,
    serviceIcon: service.icon,
    businessProblems: service.problems,
    whatLetssAIBuilds: service.does,
    workflowTitle: workflow.title,
    workflowDescription: workflow.description,
    workflowNodes: workflow.nodes,
    workflowEdges: workflow.edges,
    useCases: service.does,
    supportedTools: service.tools,
    humanHandoffNote:
      "Sensitive, uncertain or high-impact requests are paused and sent to the right person with the context already gathered.",
    businessBenefits: service.benefits,
    relatedIndustries: service.industries,
    faqs: service.faqs,
    finalCta: {
      heading: `Let’s find the right starting point for ${service.title.toLowerCase()}`,
      text: "Share the process that takes too much time today. We’ll map a practical, reviewable first workflow.",
      label: "Discuss your workflow",
      href: "/contact",
    },
  }
})
