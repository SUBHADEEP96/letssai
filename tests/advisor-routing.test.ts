import assert from "node:assert/strict"
import test from "node:test"
import {
  classifyIntentText,
  requiresRetrieval,
  shouldDisplaySources,
} from "../lib/ai/letssai-agent/tools"
import {
  canonicalPublicSource,
  selectPublicSources,
} from "../lib/ai/letssai-agent/sources"

test("conversation intents bypass retrieval and sources", () => {
  for (const [message, intent] of [
    ["Hi", "greeting"],
    ["Who are you?", "assistant_identity"],
    ["Can you help my business?", "needs_discovery"],
    ["Write me a poem", "unrelated_question"],
  ] as const) {
    assert.equal(classifyIntentText(message), intent)
    assert.equal(requiresRetrieval(intent), false)
    assert.equal(shouldDisplaySources(intent), false)
  }
})

test("business problem routes to grounded recommendation", () => {
  const intent = classifyIntentText(
    "Our real estate leads are not followed up quickly."
  )
  assert.equal(intent, "solution_recommendation")
  assert.equal(requiresRetrieval(intent), true)
  assert.equal(shouldDisplaySources(intent), true)
})

test("public source allowlist rejects internal and external destinations", () => {
  assert.deepEqual(
    canonicalPublicSource("https://letssai.com/services/ai-customer-support"),
    {
      title: "AI Customer Support",
      url: "https://www.letssai.com/services/ai-customer-support",
    }
  )
  for (const url of [
    "https://example.com/services",
    "http://letssai.com/services",
    "https://letssai.com/api/chat",
    "https://letssai.com/lsai-studio",
  ])
    assert.equal(canonicalPublicSource(url), undefined)
})

test("source selection removes duplicates, brochures, and limits output", () => {
  const make = (url: string, distance: number, sourceType = "website") => ({
    title: "untrusted title",
    url,
    distance,
    sourceType,
    content: "grounding",
  })
  const result = selectPublicSources([
    make("https://letssai.com/services/ai-customer-support", 0.2),
    make("https://www.letssai.com/services/ai-customer-support/", 0.3),
    make("/industries/real-estate", 0.1),
    make("/services/ai-sales-lead-follow-up", 0.4),
    make("/services/ai-workflow-automation", 0.5),
    make("/internal/brochure.pdf", 0.01, "brochure"),
  ])
  assert.equal(result.length, 3)
  assert.equal(new Set(result.map((source) => source.url)).size, 3)
  assert.deepEqual(result[0], {
    title: "AI for Real Estate",
    url: "https://www.letssai.com/industries/real-estate",
  })
})
