import type { Intent } from "./types"

export function classifyIntentText(query: string): Intent {
  const text = query.toLowerCase().trim()
  if (
    /\b(legal|medical|diagnos|tax advice|financial advice|investment advice|harm|weapon)\b/.test(
      text
    )
  )
    return "unsupported_or_sensitive"
  if (/^(hi|hello|hey|good (morning|afternoon|evening))[!. ]*$/.test(text))
    return "greeting"
  if (
    /\b(who are you|what are you|are you (a |an )?(human|person|bot|ai)|your identity)\b/.test(
      text
    )
  )
    return "assistant_identity"
  if (/^(thanks|thank you|ok|okay|great|got it|bye)[!. ]*$/.test(text))
    return "casual_business_conversation"
  if (
    /\b(how (can|do) i contact|contact details|email address|phone number|reach (you|letssai))\b/.test(
      text
    )
  )
    return "contact_request"
  if (
    /\b(yes|sure|please do|go ahead|i consent)\b/.test(text) &&
    /\b(arrange|contact|discussion|consultation|team)\b/.test(text)
  )
    return "lead_capture"
  if (
    /\b(price|pricing|cost|quote|scope|budget|implement(?:ation)?)\b/.test(text)
  )
    return "pricing_or_scope"
  if (
    /\b(crm|integrat|salesforce|hubspot|api|connect|whatsapp|calendar)\b/.test(
      text
    )
  )
    return "integration_question"
  if (
    /\b(industry|real estate|healthcare|clinic|retail|e-?commerce|education|legal firm|finance|accounting)\b/.test(
      text
    )
  )
    return /\b(leads?|follow(?:ed)? up|manual|problem|miss(?:es|ed)?|slow|quickly)\b/.test(
      text
    )
      ? "solution_recommendation"
      : "industry_question"
  if (
    /\b(my|our)\b.*\b(team|business|company|leads?|customers?|workflow|process)\b|\b(reduce manual|recommend|help my business|taking too much time|inefficient)\b/.test(
      text
    )
  )
    return /\b(problem|miss|slow|manual|follow.?up|automate|improve)\b/.test(
      text
    )
      ? "solution_recommendation"
      : "needs_discovery"
  if (/\b(letssai|services?|capabilit|automation|ai assistant)\b/.test(text))
    return "service_question"
  if (
    /\b(weather|recipe|poem|capital of|sports score|celebrity|homework)\b/.test(
      text
    )
  )
    return "unrelated_question"
  return text.split(/\s+/).length <= 8
    ? "needs_discovery"
    : "unrelated_question"
}

export const isSensitiveIntent = (intent: Intent) =>
  intent === "unsupported_or_sensitive"
export const requiresRetrieval = (intent: Intent) =>
  [
    "solution_recommendation",
    "service_question",
    "industry_question",
    "integration_question",
    "pricing_or_scope",
    "contact_request",
  ].includes(intent)
export const shouldDisplaySources = (intent: Intent) =>
  [
    "solution_recommendation",
    "service_question",
    "industry_question",
    "integration_question",
    "pricing_or_scope",
  ].includes(intent)
