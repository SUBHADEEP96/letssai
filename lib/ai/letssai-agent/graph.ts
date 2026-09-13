import { END, START, StateGraph } from "@langchain/langgraph"
import { retrieveKnowledge as searchKnowledge } from "./retrieval"
import { LetssAIState, type LetssAIStateType } from "./state"
import { classifyIntentText, requiresRetrieval } from "./tools"
import type { ChatMessage, ConversationStage, LeadProfile } from "./types"

const latestUser = (messages: ChatMessage[]) =>
  messages
    .filter((message) => message.role === "user")
    .at(-1)
    ?.content.trim()
    .slice(0, 2000) || ""

function inferProfile(messages: ChatMessage[]): LeadProfile {
  const userText = messages
    .filter((message) => message.role === "user")
    .map((message) => message.content)
    .join("\n")
  const email = userText.match(
    /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i
  )?.[0]
  const phone = userText.match(/(?:\+?\d[\d ()-]{6,}\d)/)?.[0]
  const industry = userText.match(
    /real estate|healthcare|clinic|retail|e-?commerce|education|legal|finance|accounting/i
  )?.[0]
  const tools = userText
    .match(
      /whatsapp|hubspot|salesforce|google sheets|email|website|crm|calendar/gi
    )
    ?.join(", ")
  const name = userText
    .match(/(?:i(?:'m| am)|my name is)\s+([a-z][a-z '-]{1,60})/i)?.[1]
    ?.trim()
  const company = userText
    .match(
      /(?:company is|work (?:at|for)|from)\s+([a-z0-9][a-z0-9 &'._-]{1,100})/i
    )?.[1]
    ?.trim()
  const challenge = messages
    .filter((message) => message.role === "user")
    .map((message) => message.content)
    .find((text) =>
      /\b(manual|slow|miss|lead|problem|automate|follow.?up|inefficient)\b/i.test(
        text
      )
    )
  const recommendedService = /lead|follow.?up/i.test(userText)
    ? "AI Sales & Lead Follow-up"
    : /support|question|customer/i.test(userText)
      ? "AI Customer Support"
      : /appointment|booking/i.test(userText)
        ? "AI Calling & Appointment Booking"
        : /workflow|manual|automate/i.test(userText)
          ? "AI Workflow Automation"
          : undefined
  return {
    ...(email ? { workEmail: email } : {}),
    ...(phone ? { phone } : {}),
    ...(industry ? { industry } : {}),
    ...(tools ? { tools } : {}),
    ...(name ? { name } : {}),
    ...(company ? { company } : {}),
    ...(challenge ? { businessChallenge: challenge } : {}),
    ...(recommendedService ? { recommendedService } : {}),
    ...(userText.match(/\b(yes|i consent|go ahead|please arrange)\b/i)
      ? { submissionConsent: true }
      : {}),
  }
}

const validateInput = (state: LetssAIStateType) => {
  const query = latestUser(state.messages)
  if (!query) throw new Error("A message is required")
  return { query, leadProfile: inferProfile(state.messages) }
}
const classifyIntent = (state: LetssAIStateType) => {
  const previous = state.messages.at(-2)?.content || ""
  const contextualCapture =
    state.messages.length > 1 &&
    /\b(name|company|work email|phone|contact method)\b/i.test(previous)
  const intent = contextualCapture
    ? "lead_capture"
    : classifyIntentText(state.query)
  return {
    intent:
      state.leadProfile.submissionConsent &&
      state.leadProfile.name &&
      state.leadProfile.company &&
      state.leadProfile.workEmail
        ? ("lead_handoff" as const)
        : intent,
  }
}
const routeIntent = (state: LetssAIStateType) =>
  requiresRetrieval(state.intent) ? "retrieveKnowledge" : "conversation"
const retrieveKnowledge = async (state: LetssAIStateType) => ({
  knowledge: await searchKnowledge(state.query),
})
const conversation = () => ({ knowledge: [] })
const setStage = (state: LetssAIStateType): { stage: ConversationStage } => ({
  stage: state.leadProfile.submissionConsent
    ? "contact_ready"
    : state.intent === "solution_recommendation"
      ? "solution_matched"
      : ["needs_discovery", "casual_business_conversation"].includes(
            state.intent
          )
        ? "discovering"
        : "exploring",
})

export const conversationGraph = new StateGraph(LetssAIState)
  .addNode("validateInput", validateInput)
  .addNode("classifyIntent", classifyIntent)
  .addNode("retrieveKnowledge", retrieveKnowledge)
  .addNode("conversation", conversation)
  .addNode("setStage", setStage)
  .addEdge(START, "validateInput")
  .addEdge("validateInput", "classifyIntent")
  .addConditionalEdges("classifyIntent", routeIntent, {
    retrieveKnowledge: "retrieveKnowledge",
    conversation: "conversation",
  })
  .addEdge("retrieveKnowledge", "setStage")
  .addEdge("conversation", "setStage")
  .addEdge("setStage", END)
  .compile()

export async function prepareConversation(messages: ChatMessage[]) {
  return conversationGraph.invoke({ messages })
}
