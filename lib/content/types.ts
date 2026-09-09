import type { FAQ } from "@/lib/site"

export type WorkflowNodeKind = "trigger" | "input" | "assistant" | "knowledge" | "decision" | "human" | "integration" | "output" | "dashboard"
export type WorkflowNodeData = { id: string; label: string; detail: string; type: WorkflowNodeKind; x: number; y: number }
export type WorkflowEdgeData = { id: string; source: string; target: string; label?: string }
export type CTA = { heading: string; text: string; label: string; href: string }
export type GalleryItem = { title: string; description: string; visualType: "pipeline" | "chat" | "calendar" | "timeline" | "checklist" | "documents" | "dashboard"; labels: string[] }

export type ServicePageData = {
  slug: string; title: string; href: string; shortDescription: string; heroHeadline: string; heroSubheadline: string
  metaTitle: string; metaDescription: string; canonicalUrl?: string; ogImage?: string; serviceIcon: string
  businessProblems: string[]; whatLetssAIBuilds: string[]; workflowTitle: string; workflowDescription: string
  workflowNodes: WorkflowNodeData[]; workflowEdges: WorkflowEdgeData[]; useCases: string[]; supportedTools: string[]
  humanHandoffNote: string; businessBenefits: string[]; relatedIndustries: string[]; faqs: FAQ[]; finalCta: CTA
}
export type IndustryPageData = {
  slug: string; title: string; href: string; useCase: string; heroHeadline: string; heroSubheadline: string
  metaTitle: string; metaDescription: string; canonicalUrl?: string; ogImage?: string; industryIcon: string
  commonProblems: string[]; bestFitServices: string[]; exampleWorkflowsText: string[]; galleryItems: GalleryItem[]
  benefits: string[]; faqs: FAQ[]; finalCta: CTA
}
