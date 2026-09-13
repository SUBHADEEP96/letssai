import { OpenAIEmbeddings } from "@langchain/openai"
import { CHROMA_COLLECTION, createChromaCloudClient, externalEmbeddingFunction } from "../chroma-cloud"
import type { KnowledgeSnippet } from "./types"

const BUSINESS_TERMS = new Set(["contact", "email", "phone", "call", "sales", "whatsapp", "crm", "appointment", "pricing"])
const words = (value: string) => new Set(value.toLowerCase().match(/[a-z0-9@+.]+/g) || [])
const lexicalScore = (query: string, document: string) => {
  const queryWords = words(query)
  const documentWords = words(document)
  let score = 0
  for (const word of queryWords) if (documentWords.has(word)) score += BUSINESS_TERMS.has(word) ? 3 : word.length > 3 ? 1 : 0
  // Contact requests commonly use different verbs, so any retrieved contact field is meaningful evidence.
  if ([...queryWords].some((word) => ["contact", "reach", "call", "email"].includes(word)) && /(?:email|phone|contact|sales@|\+91|letssai\.com)/i.test(document)) score += 3
  return score
}

export type RetrievalCandidate = { document: string; metadata: Record<string, unknown>; distance: number }
export function selectRelevantCandidates(candidates: RetrievalCandidate[], query: string, maxDistance = 0.72): KnowledgeSnippet[] {
  const ranked = candidates.map((row) => ({ row, lexical: lexicalScore(query, row.document) }))
  const accepted = ranked.filter(({ row, lexical }) => row.distance <= maxDistance || lexical >= 2)
  // If calibration rejects everything, retain only strong lexical matches among the nearest results.
  const selected = accepted.length ? accepted : ranked.slice(0, 3).filter(({ lexical }) => lexical >= 3)
  const seen = new Set<string>()
  return selected.flatMap(({ row }) => {
    const title = String(row.metadata.title || "LetssAI")
    const url = String(row.metadata.url || "/")
    const key = `${url.replace(/\/$/, "").toLowerCase()}|${title.toLowerCase()}`
    if (seen.has(key)) return []
    seen.add(key)
    return [{ content: row.document, title, url, sourceType: String(row.metadata.sourceType || "website"), distance: row.distance }]
  })
}

export async function retrieveKnowledge(query: string): Promise<KnowledgeSnippet[]> {
  const vector = await new OpenAIEmbeddings({ model: process.env.OPENAI_EMBEDDING_MODEL || "text-embedding-3-small" }).embedQuery(query)
  const collection = await createChromaCloudClient().getCollection({ name: CHROMA_COLLECTION, embeddingFunction: externalEmbeddingFunction })
  const result = await collection.query({ queryEmbeddings: [vector], nResults: 10, include: ["documents", "metadatas", "distances"] })
  const candidates = (result.documents[0] || []).flatMap<RetrievalCandidate>((content, index) => {
    const metadata = result.metadatas[0]?.[index]
    const distance = result.distances[0]?.[index]
    if (!content || !metadata || distance == null) return []
    return [{ document: content, metadata, distance }]
  })
  const configured = Number(process.env.RAG_MAX_DISTANCE || "0.72")
  const accepted = selectRelevantCandidates(candidates, query, Number.isFinite(configured) ? configured : 0.72)
  if (process.env.RAG_DEBUG === "true") console.info("[rag:retrieval]", { candidateCount: candidates.length, acceptedCount: accepted.length, topDistances: candidates.slice(0, 5).map((c) => Number(c.distance.toFixed(3))), sourceTypes: [...new Set(accepted.map((item) => item.sourceType))] })
  return accepted
}
