import { industries, services } from "@/lib/site"
import type { KnowledgeSnippet, Source } from "./types"

const publicPages = new Map([
  ["/", "LetssAI"],
  ["/services", "AI Services"],
  ["/industries", "Industries"],
  ["/why-letssai", "Why LetssAI"],
  ["/contact", "Contact LetssAI"],
  ...services.map((item) => [item.href, item.title] as const),
  ...industries.map((item) => [item.href, `AI for ${item.title}`] as const),
])

export function canonicalPublicSource(rawUrl: string): Source | undefined {
  try {
    const url = new URL(rawUrl, "https://www.letssai.com")
    if (
      url.protocol !== "https:" ||
      !["letssai.com", "www.letssai.com"].includes(url.hostname.toLowerCase())
    )
      return
    const path = url.pathname.length > 1 ? url.pathname.replace(/\/$/, "") : "/"
    const title = publicPages.get(path)
    if (!title || path === "/contact") return
    return { title, url: `https://www.letssai.com${path}` }
  } catch {
    return
  }
}

export function selectPublicSources(
  knowledge: KnowledgeSnippet[],
  limit = 3
): Source[] {
  const seen = new Set<string>()
  return [...knowledge]
    .sort((a, b) => a.distance - b.distance)
    .flatMap((item) => {
      if (item.sourceType !== "website") return []
      const source = canonicalPublicSource(item.url)
      if (!source || seen.has(source.url)) return []
      seen.add(source.url)
      return [source]
    })
    .slice(0, limit)
}
