import { ChromaClient } from "chromadb"
import { OpenAIEmbeddings } from "@langchain/openai"
import { client as sanityClient } from "@/sanity/lib/client"
import type { KnowledgeSnippet } from "./types"

export function createChromaClient() {
  const raw = process.env.CHROMA_URL
  if (!raw) throw new Error("CHROMA_URL is not configured")
  const url = new URL(raw)
  return new ChromaClient({
    host: url.hostname,
    port: url.port ? Number(url.port) : url.protocol === "https:" ? 443 : 8000,
    ssl: url.protocol === "https:",
    headers: process.env.CHROMA_API_KEY
      ? { "x-chroma-token": process.env.CHROMA_API_KEY }
      : undefined,
  })
}

async function retrieveFromChroma(query: string): Promise<KnowledgeSnippet[]> {
  const embeddings = new OpenAIEmbeddings({
    model: process.env.OPENAI_EMBEDDING_MODEL || "text-embedding-3-small",
  })
  const vector = await embeddings.embedQuery(query)
  const collection = await createChromaClient().getCollection({
    name: process.env.CHROMA_COLLECTION_NAME || "letssai_website_knowledge",
  })
  const result = await collection.query({
    queryEmbeddings: [vector],
    nResults: 4,
    include: ["documents", "metadatas", "distances"],
  })
  return (result.documents[0] || []).flatMap((content, index) => {
    const metadata = result.metadatas[0]?.[index]
    if (!content || !metadata) return []
    return [
      {
        content,
        title: String(metadata.title || "LetssAI"),
        url: String(metadata.url || "/"),
        sourceType: String(metadata.sourceType || "website"),
      },
    ]
  })
}

async function retrieveFromSanity(query: string): Promise<KnowledgeSnippet[]> {
  const terms = query
    .toLowerCase()
    .split(/\W+/)
    .filter((term) => term.length > 3)
    .slice(0, 6)
  if (!terms.length) return []
  const documents = await sanityClient.fetch<
    Array<{
      title: string
      slug?: string
      sourceUrl?: string
      sourceType?: string
      content: string
    }>
  >(
    `*[_type == "chatbotKnowledgeItem" && isActive == true]{title, "slug": slug.current, sourceUrl, sourceType, content}`
  )
  return documents
    .filter((doc) =>
      terms.some((term) =>
        `${doc.title} ${doc.content}`.toLowerCase().includes(term)
      )
    )
    .sort((a, b) => b.content.length - a.content.length)
    .slice(0, 3)
    .map((doc) => ({
      title: doc.title,
      url: doc.sourceUrl || (doc.slug ? `/` + doc.slug : "/"),
      content: doc.content,
      sourceType: doc.sourceType || "custom",
    }))
}

export async function retrieveKnowledge(query: string) {
  if (process.env.CHROMA_URL) {
    try {
      return await retrieveFromChroma(query)
    } catch {
      /* External store may be temporarily unavailable; use live CMS knowledge. */
    }
  }
  try {
    return await retrieveFromSanity(query)
  } catch {
    return []
  }
}
