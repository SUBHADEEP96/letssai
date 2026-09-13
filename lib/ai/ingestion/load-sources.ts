import { access } from "node:fs/promises"
import path from "node:path"
import * as cheerio from "cheerio"
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf"
import type { KnowledgeDocument } from "./chunk"

const UA = "LetssAI-Knowledge-Ingest/1.0"
const normalize = (text: string) => text.replace(/\s+/g, " ").trim()
async function fetchTimed(url: string) {
  return fetch(url, { headers: { "user-agent": UA }, signal: AbortSignal.timeout(15_000), redirect: "follow" })
}

export async function loadSources() {
  const origin = new URL(process.env.SITE_ORIGIN || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
  const sitemapUrl = new URL("/sitemap.xml", origin)
  let sitemap: Response
  try { sitemap = await fetchTimed(sitemapUrl.href) } catch { throw new Error(`Cannot reach ${sitemapUrl.href}. Start the site with pnpm dev, then retry.`) }
  if (!sitemap.ok) throw new Error(`Sitemap request failed (${sitemap.status}). Start the site with pnpm dev, then retry.`)
  const xml = await sitemap.text()
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].replaceAll("&amp;", "&"))
  const unique = [...new Set(urls)].flatMap((value) => {
    try {
      const url = new URL(value)
      if (!["http:", "https:"].includes(url.protocol) || url.origin !== origin.origin || /^(\/api|\/lsai-studio|\/_next)(\/|$)/.test(url.pathname) || /\.[a-z0-9]{2,5}$/i.test(url.pathname)) return []
      url.hash = ""; return [url.href]
    } catch { return [] }
  })
  const timestamp = new Date().toISOString()
  const documents: KnowledgeDocument[] = []
  const errors: string[] = []
  let skipped = 0
  for (let i = 0; i < unique.length; i += 4) {
    await Promise.all(unique.slice(i, i + 4).map(async (url) => {
      try {
        const response = await fetchTimed(url)
        if (new URL(response.url).origin !== origin.origin) throw new Error("cross-origin redirect rejected")
        if (!response.ok || !response.headers.get("content-type")?.includes("text/html")) throw new Error(`invalid response (${response.status})`)
        const $ = cheerio.load(await response.text())
        $("script,style,nav,footer,form,noscript,iframe,[data-chatbot],#chatbot").remove()
        const text = normalize($("main").text() || $("body").text())
        if (text.length < 100) { skipped++; return }
        const canonical = $("link[rel=canonical]").attr("href")
        const canonicalUrl = canonical ? new URL(canonical, url) : new URL(url)
        if (canonicalUrl.origin !== origin.origin) throw new Error("cross-origin canonical rejected")
        documents.push({ id: canonicalUrl.href, sourceType: "website", title: normalize($("title").text()) || "LetssAI", url: canonicalUrl.href, source: canonicalUrl.href, ingestionTimestamp: timestamp, text })
      } catch (error) { skipped++; errors.push(`${new URL(url).pathname}: ${error instanceof Error ? error.message : "page load failed"}`) }
    }))
  }
  const pdfPath = path.join(process.cwd(), "data/LetssAI_Business_Brochure_2026.pdf")
  await access(pdfPath).catch(() => { throw new Error("Business brochure is missing at data/LetssAI_Business_Brochure_2026.pdf") })
  const pages = await new PDFLoader(pdfPath, { splitPages: true }).load()
  const pdfDocuments = pages.flatMap((page, index): KnowledgeDocument[] => {
    const text = normalize(page.pageContent)
    if (!text) return []
    return [{ id: `brochure:${index + 1}`, sourceType: "brochure", title: "LetssAI Business Brochure 2026", url: "/data/LetssAI_Business_Brochure_2026.pdf", source: "data/LetssAI_Business_Brochure_2026.pdf", pageNumber: index + 1, ingestionTimestamp: timestamp, text }]
  })
  if (!pdfDocuments.length) throw new Error("Business brochure contains no usable text")
  return { documents: [...documents, ...pdfDocuments], websitePages: documents.length, pdfDocuments: pdfDocuments.length, skipped, errors }
}
