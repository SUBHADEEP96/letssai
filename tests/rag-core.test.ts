import assert from "node:assert/strict"
import test from "node:test"
import { createAnswerCacheKey, MemoryAnswerCache } from "../lib/ai/letssai-agent/cache"
import { selectRelevantCandidates, type RetrievalCandidate } from "../lib/ai/letssai-agent/retrieval"

const row = (document: string, distance: number, title = "Contact", url = "https://letssai.com/contact"): RetrievalCandidate => ({ document, distance, metadata: { title, url, sourceType: "website" } })

test("contact language keeps retrieved contact evidence", () => {
  const result = selectRelevantCandidates([row("Email: sales@letssai.com Phone: +91 7980314116 Website: letssai.com", 0.83)], "How can I contact you?")
  assert.match(result[0].content, /sales@letssai\.com/)
  assert.match(result[0].content, /7980314116/)
  assert.match(result[0].content, /letssai\.com/)
})

test("service evidence is grounded while weak irrelevant retrieval is rejected", () => {
  const result = selectRelevantCandidates([row("LetssAI can automate appointment booking and CRM follow-up.", 0.68, "Automation", "/services"), row("A completely unrelated recipe", 0.91, "Recipe", "/recipe")], "What can LetssAI automate?")
  assert.equal(result.length, 1)
  assert.match(result[0].content, /appointment booking/)
})

test("duplicate sources are removed", () => {
  const result = selectRelevantCandidates([row("Contact email", 0.2), row("Repeated contact phone", 0.3)], "contact")
  assert.equal(result.length, 1)
})

test("memory cache stores completed answers and serves identical keys", () => {
  const cache = new MemoryAnswerCache(2, 10_000)
  cache.set("question", { answer: "grounded", sources: [], intent: "service_explainer" })
  assert.equal(cache.get("question")?.answer, "grounded")
})

test("cache key changes with the knowledge version", () => {
  const messages = [{ role: "user" as const, content: "What can you automate?" }]
  assert.notEqual(createAnswerCacheKey(messages, "71"), createAnswerCacheKey(messages, "72"))
})
