export const intentClasses = [
  "greeting",
  "assistant_identity",
  "casual_business_conversation",
  "needs_discovery",
  "solution_recommendation",
  "service_question",
  "industry_question",
  "integration_question",
  "pricing_or_scope",
  "contact_request",
  "lead_capture",
  "lead_handoff",
  "unsupported_or_sensitive",
  "unrelated_question",
] as const
export type Intent = (typeof intentClasses)[number]
export const conversationStages = [
  "exploring",
  "discovering",
  "solution_matched",
  "qualified",
  "contact_ready",
  "submitted",
] as const
export type ConversationStage = (typeof conversationStages)[number]
export type ChatMessage = { role: "user" | "assistant"; content: string }
export type LeadProfile = {
  name?: string
  company?: string
  industry?: string
  businessChallenge?: string
  currentProcess?: string
  tools?: string
  timeline?: string
  workEmail?: string
  phone?: string
  preferredContactMethod?: "email" | "phone" | "whatsapp"
  submissionConsent?: boolean
  recommendedService?: string
}
export type KnowledgeSnippet = {
  id?: string
  title: string
  url: string
  content: string
  sourceType: string
  distance: number
}
export type Source = { title: string; url: string }
export type StreamEvent =
  | { type: "metadata"; intent: Intent; cacheHit: boolean }
  | { type: "token"; token: string }
  | { type: "sources"; sources: Source[] }
  | {
      type: "lead_submission"
      lead: {
        name: string
        company: string
        email: string
        phone?: string
        automationNeed: string
        preferredContactMethod: "email" | "phone" | "whatsapp"
        recommendedService?: string
        currentTools?: string
        timeline?: string
        conversationSummary: string
      }
    }
  | { type: "done" }
  | { type: "error"; message: string }
export type AgentResponse = {
  message: string
  intent: Intent
  sources: Source[]
  suggestContact: boolean
}
