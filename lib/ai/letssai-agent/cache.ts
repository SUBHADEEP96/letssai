import { createHash } from "node:crypto"
import { CHROMA_COLLECTION } from "../chroma-cloud"
import { PROMPT_VERSION } from "./prompts"
import type { ChatMessage, Source } from "./types"

export type CachedAnswer = { answer: string; sources: Source[]; intent: string }
export interface AnswerCache {
  get(key: string): CachedAnswer | undefined | Promise<CachedAnswer | undefined>
  set(key: string, value: CachedAnswer, ttlMs?: number): void | Promise<void>
}

export class MemoryAnswerCache implements AnswerCache {
  private entries = new Map<string, { value: CachedAnswer; expires: number }>()
  constructor(private readonly maxEntries = Number(process.env.RAG_CACHE_MAX_ENTRIES || 200), private readonly ttlMs = Number(process.env.RAG_CACHE_TTL_SECONDS || 900) * 1000) {}
  get(key: string) {
    const entry = this.entries.get(key)
    if (!entry || entry.expires <= Date.now()) { this.entries.delete(key); return undefined }
    this.entries.delete(key); this.entries.set(key, entry)
    return entry.value
  }
  set(key: string, value: CachedAnswer, ttlMs = this.ttlMs) {
    this.entries.delete(key)
    this.entries.set(key, { value, expires: Date.now() + ttlMs })
    while (this.entries.size > this.maxEntries) this.entries.delete(this.entries.keys().next().value!)
  }
}

export const answerCache: AnswerCache = new MemoryAnswerCache()
export const containsPII = (messages: ChatMessage[]) => messages.some(({ content }) => /\b(?:\d[ -]?){12,16}\b|\b[A-Z0-9._%+-]+@(?!letssai\.com\b)[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test(content))
export function createAnswerCacheKey(messages: ChatMessage[], knowledgeVersion = process.env.RAG_KNOWLEDGE_VERSION || process.env.KNOWLEDGE_VERSION || "1") {
  const normalized = messages.slice(-8).map(({ role, content }) => ({ role, content: content.trim().replace(/\s+/g, " ").toLowerCase().slice(0, 2000) }))
  return createHash("sha256").update(JSON.stringify({ messages: normalized, collection: CHROMA_COLLECTION, embeddingModel: process.env.OPENAI_EMBEDDING_MODEL || "text-embedding-3-small", chatModel: process.env.OPENAI_CHAT_MODEL || "gpt-4.1-mini", promptVersion: PROMPT_VERSION, knowledgeVersion })).digest("hex")
}
