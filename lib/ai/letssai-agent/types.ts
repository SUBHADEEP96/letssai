export const intentClasses = [
  "service_explainer",
  "solution_recommendation",
  "industry_question",
  "integration_question",
  "pricing_or_scope",
  "contact_request",
  "unsupported_or_sensitive",
] as const
export type Intent = (typeof intentClasses)[number]
export type ChatMessage = { role: "user" | "assistant"; content: string }
export type KnowledgeSnippet = {
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
  | { type: "done" }
  | { type: "error"; message: string }
export type AgentResponse = {
  message: string
  intent: Intent
  sources: Source[]
  suggestContact: boolean
}
