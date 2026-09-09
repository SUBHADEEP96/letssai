import { client } from "@/sanity/lib/client"
import type { KnowledgeDocument } from "./chunk"

type RawDocument = {
  _id: string
  _type: string
  _updatedAt: string
  title?: string
  question?: string
  slug?: string
  sourceType?: string
  sourceUrl?: string
  content?: unknown
}

function cleanText(value: unknown): string {
  if (typeof value === "string") return value
  if (Array.isArray(value))
    return value.map(cleanText).filter(Boolean).join("\n")
  if (value && typeof value === "object")
    return Object.entries(value)
      .filter(([key]) => !key.startsWith("_") && key !== "seo")
      .map(([, nested]) => cleanText(nested))
      .filter(Boolean)
      .join("\n")
  return ""
}

export async function loadSanityContent(): Promise<{
  documents: KnowledgeDocument[]
  skipped: number
}> {
  const records = await client.fetch<
    RawDocument[]
  >(`*[_type in ["servicePage", "industryPage", "faqItem", "siteSettings", "chatbotKnowledgeItem"] && (!defined(isActive) || isActive == true)]{
    _id, _type, _updatedAt, title, question, "slug": slug.current, sourceType, sourceUrl,
    "content": select(_type == "chatbotKnowledgeItem" => content, _type == "faqItem" => {question, answer}, @)
  }`)
  let skipped = 0
  const documents = records.flatMap((record): KnowledgeDocument[] => {
    const text = cleanText(record.content).trim()
    if (!text) {
      skipped += 1
      return []
    }
    const slug = record.slug || record._id
    const sourceType =
      record.sourceType ||
      {
        servicePage: "service",
        industryPage: "industry",
        faqItem: "faq",
        siteSettings: "company",
      }[record._type] ||
      "custom"
    const url =
      record.sourceUrl ||
      (record._type === "servicePage"
        ? `/services/${slug}`
        : record._type === "industryPage"
          ? `/industries/${slug}`
          : record._type === "faqItem"
            ? "/#frequently-asked-questions"
            : "/")
    return [
      {
        id: record._id,
        sourceType,
        title: record.title || record.question || "LetssAI",
        slug,
        url,
        updatedAt: record._updatedAt,
        text,
      },
    ]
  })
  return { documents, skipped }
}
