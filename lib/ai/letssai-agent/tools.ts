import type { Intent } from "./types"

export function classifyIntentText(query: string): Intent {
  const text = query.toLowerCase()
  if (/legal|medical|diagnos|tax advice|invest|financial advice/.test(text))
    return "unsupported_or_sensitive"
  if (/contact|call|email|talk|book|reach/.test(text)) return "contact_request"
  if (/price|pricing|cost|quote|scope|budget/.test(text))
    return "pricing_or_scope"
  if (/crm|integrat|salesforce|hubspot|api|connect/.test(text))
    return "integration_question"
  if (/industry|real estate|healthcare|retail|education|legal/.test(text))
    return "industry_question"
  if (/choose|recommend|best|which|reduce manual/.test(text))
    return "solution_recommendation"
  return "service_explainer"
}

export const isSensitiveIntent = (intent: Intent) =>
  intent === "unsupported_or_sensitive"
