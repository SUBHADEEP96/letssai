import { AIMessage, HumanMessage, SystemMessage } from "@langchain/core/messages"
import { ChatOpenAI } from "@langchain/openai"
import { answerCache, containsPII, createAnswerCacheKey } from "./cache"
import { assistantRules, UNKNOWN_ANSWER } from "./prompts"
import { retrieveKnowledge } from "./retrieval"
import { classifyIntentText, isSensitiveIntent } from "./tools"
import type { ChatMessage, StreamEvent } from "./types"

const safeMessage = "I can only help with LetssAI services, business automation, and contacting our team. I can’t provide legal, medical, financial, or tax advice."
const debug = (data: Record<string, unknown>) => { if (process.env.RAG_DEBUG === "true") console.info("[rag]", data) }
const contentText = (content: unknown) => typeof content === "string" ? content : Array.isArray(content) ? content.map((part) => typeof part === "object" && part && "text" in part ? String(part.text) : "").join("") : ""

export async function* streamLetssAIAgent(messages: ChatMessage[], signal?: AbortSignal): AsyncGenerator<StreamEvent> {
  const query = messages.filter((message) => message.role === "user").at(-1)?.content.trim().slice(0, 2000) || ""
  if (!query) throw new Error("A message is required")
  const intent = classifyIntentText(query)
  const cacheableRequest = !isSensitiveIntent(intent) && !containsPII(messages)
  const key = createAnswerCacheKey(messages)
  const cached = cacheableRequest ? await answerCache.get(key) : undefined
  debug({ cache: cached ? "hit" : "miss" })
  if (cached) {
    yield { type: "metadata", intent, cacheHit: true }
    yield { type: "token", token: cached.answer }
    yield { type: "sources", sources: cached.sources }
    yield { type: "done" }; return
  }
  yield { type: "metadata", intent, cacheHit: false }
  if (isSensitiveIntent(intent)) { yield { type: "token", token: safeMessage }; yield { type: "sources", sources: [] }; yield { type: "done" }; return }
  const retrievalStarted = performance.now()
  const knowledge = await retrieveKnowledge(query)
  debug({ retrievalLatencyMs: Math.round(performance.now() - retrievalStarted) })
  const sources = knowledge.map(({ title, url }) => ({ title, url }))
  if (!knowledge.length) { yield { type: "token", token: UNKNOWN_ANSWER }; yield { type: "sources", sources: [] }; yield { type: "done" }; return }
  const context = knowledge.map((item, index) => `[${index + 1}] ${item.title}\nURL: ${item.url}\n${item.content}`).join("\n\n")
  const model = new ChatOpenAI({ model: process.env.OPENAI_CHAT_MODEL || "gpt-4.1-mini", temperature: 0.2 })
  const history = messages.slice(-8).map((message) => message.role === "user" ? new HumanMessage(message.content) : new AIMessage(message.content))
  const started = performance.now(); let answer = ""
  const stream = await model.stream([new SystemMessage(`${assistantRules}\n\nWebsite context:\n${context}`), ...history], { signal })
  for await (const chunk of stream) {
    if (signal?.aborted) return
    const token = contentText(chunk.content)
    if (token) { answer += token; yield { type: "token", token } }
  }
  debug({ generationLatencyMs: Math.round(performance.now() - started) })
  yield { type: "sources", sources }
  if (answer.trim() && cacheableRequest && answer.trim() !== UNKNOWN_ANSWER) await answerCache.set(key, { answer, sources, intent })
  yield { type: "done" }
}
