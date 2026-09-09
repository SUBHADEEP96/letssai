import {
  AIMessage,
  HumanMessage,
  SystemMessage,
} from "@langchain/core/messages"
import { ChatOpenAI } from "@langchain/openai"
import { END, START, StateGraph } from "@langchain/langgraph"
import { assistantRules } from "./prompts"
import { retrieveKnowledge as searchKnowledge } from "./retrieval"
import { LetssAIState, type LetssAIStateType } from "./state"
import { classifyIntentText, isSensitiveIntent } from "./tools"
import type { AgentResponse, ChatMessage } from "./types"

const validateInput = (state: LetssAIStateType) => {
  const query =
    state.messages
      .filter((message) => message.role === "user")
      .at(-1)
      ?.content.trim()
      .slice(0, 2000) || ""
  if (!query) throw new Error("A message is required")
  return { query }
}
const classifyIntent = (state: LetssAIStateType) => ({
  intent: classifyIntentText(state.query),
})
const retrieveKnowledge = async (state: LetssAIStateType) => ({
  knowledge: isSensitiveIntent(state.intent)
    ? []
    : await searchKnowledge(state.query),
})
const generateAnswer = async (state: LetssAIStateType) => {
  if (isSensitiveIntent(state.intent))
    return {
      draft:
        "I can only help with LetssAI services, business automation, and contacting our team. I can’t provide legal, medical, financial, or tax advice.",
    }
  const context = state.knowledge.length
    ? state.knowledge
        .map(
          (item, index) =>
            `[${index + 1}] ${item.title}\nURL: ${item.url}\n${item.content}`
        )
        .join("\n\n")
    : "No matching website context was found."
  const model = new ChatOpenAI({
    model: process.env.OPENAI_CHAT_MODEL || "gpt-4.1-mini",
    temperature: 0.2,
  })
  const history = state.messages
    .slice(-8)
    .map((message) =>
      message.role === "user"
        ? new HumanMessage(message.content)
        : new AIMessage(message.content)
    )
  const result = await model.invoke([
    new SystemMessage(`${assistantRules}\n\nWebsite context:\n${context}`),
    ...history,
  ])
  return {
    draft:
      typeof result.content === "string"
        ? result.content
        : result.content
            .map((part) => ("text" in part ? String(part.text) : ""))
            .join(""),
  }
}
const recommendNextStep = (state: LetssAIStateType) => ({
  draft:
    state.intent === "pricing_or_scope" &&
    !/contact|workflow review/i.test(state.draft)
      ? `${state.draft}\n\nFor a tailored scope, request a workflow review.`
      : state.draft,
})
const captureLeadIntent = (state: LetssAIStateType) => ({
  suggestContact: [
    "pricing_or_scope",
    "contact_request",
    "solution_recommendation",
  ].includes(state.intent),
})
const safetyBoundary = (state: LetssAIStateType) => ({
  blocked: isSensitiveIntent(state.intent),
  draft: state.draft.replace(/guaranteed? roi/gi, "potential business value"),
})
const finalResponse = (state: LetssAIStateType) => ({
  answer: state.draft.trim(),
})

const graph = new StateGraph(LetssAIState)
  .addNode("validateInput", validateInput)
  .addNode("classifyIntent", classifyIntent)
  .addNode("retrieveKnowledge", retrieveKnowledge)
  .addNode("generateAnswer", generateAnswer)
  .addNode("recommendNextStep", recommendNextStep)
  .addNode("captureLeadIntent", captureLeadIntent)
  .addNode("safetyBoundary", safetyBoundary)
  .addNode("finalResponse", finalResponse)
  .addEdge(START, "validateInput")
  .addEdge("validateInput", "classifyIntent")
  .addEdge("classifyIntent", "retrieveKnowledge")
  .addEdge("retrieveKnowledge", "generateAnswer")
  .addEdge("generateAnswer", "recommendNextStep")
  .addEdge("recommendNextStep", "captureLeadIntent")
  .addEdge("captureLeadIntent", "safetyBoundary")
  .addEdge("safetyBoundary", "finalResponse")
  .addEdge("finalResponse", END)
  .compile()

export async function runLetssAIAgent(
  messages: ChatMessage[]
): Promise<AgentResponse> {
  const result = await graph.invoke({ messages })
  return {
    message: result.answer,
    intent: result.intent,
    sources: result.knowledge.map(({ title, url }) => ({ title, url })),
    suggestContact: result.suggestContact,
  }
}
