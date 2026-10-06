import assert from "node:assert/strict"
import { readFileSync, readdirSync } from "node:fs"
import test from "node:test"
import {
  aiSummaryProviders,
  buildAISummaryPrompt,
  buildAISummaryUrl,
} from "../lib/ai-summary-links"
import { siteConfig } from "../lib/site"

test("four unique providers use the required order and names", () => {
  assert.deepEqual(
    aiSummaryProviders.map(({ label }) => label),
    ["ChatGPT", "Google AI Mode", "Perplexity", "Grok"]
  )
  assert.equal(new Set(aiSummaryProviders.map(({ id }) => id)).size, 4)
})

test("official HTTPS destinations encode exactly the shared public prompt", () => {
  const destinations = [
    ["chatgpt.com", "/", { hints: "search" }],
    ["www.google.com", "/search", { udm: "50" }],
    ["www.perplexity.ai", "/search", {}],
    ["grok.com", "/", {}],
  ] as const
  const prompt = buildAISummaryPrompt()
  assert.equal(
    prompt,
    `Summarize LetssAI using information from its official website: ${siteConfig.url}. Explain what the company does, its main AI services, the industries it serves, who it is best suited for, and how a potential customer can get started. Cite the LetssAI pages you used, separate verified information from inference, and do not invent claims that are not supported by the website.`
  )
  aiSummaryProviders.forEach((provider, index) => {
    const url = new URL(buildAISummaryUrl(provider))
    const [hostname, pathname, parameters] = destinations[index]
    assert.equal(url.protocol, "https:")
    assert.equal(url.hostname, hostname)
    assert.equal(url.pathname, pathname)
    assert.equal(url.searchParams.get("q"), prompt)
    assert.ok(
      url.search.includes(new URLSearchParams({ q: prompt }).toString())
    )
    // Exact allowlist excludes tracking, credentials, and visitor-specific parameters.
    assert.deepEqual(Object.fromEntries(url.searchParams), {
      q: prompt,
      ...parameters,
    })
    assert.equal(url.username, "")
    assert.equal(url.password, "")
    assert.equal(url.hash, "")
  })
})

test("every locale includes all summary copy and the provider interpolation", () => {
  const files = readdirSync("messages").filter((file) => file.endsWith(".json"))
  assert.deepEqual(files.sort(), [
    "de.json",
    "en.json",
    "es.json",
    "fr.json",
    "hi.json",
  ])
  for (const file of files) {
    const copy = JSON.parse(readFileSync(`messages/${file}`, "utf8")).footer
      .aiSummary
    for (const key of [
      "eyebrow",
      "title",
      "description",
      "disclaimer",
      "opensNewTab",
      "askProvider",
    ]) {
      assert.equal(typeof copy[key], "string", `${file}: ${key}`)
      assert.ok(copy[key].trim().length > 0)
    }
    assert.match(copy.askProvider, /\{provider\}/)
  }
})
