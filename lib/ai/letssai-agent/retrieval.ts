import { OpenAIEmbeddings } from "@langchain/openai"
import { CHROMA_COLLECTION, createChromaCloudClient, externalEmbeddingFunction } from "../chroma-cloud"
import type { KnowledgeSnippet } from "./types"

export async function retrieveKnowledge(query: string): Promise<KnowledgeSnippet[]> {
  const vector = await new OpenAIEmbeddings({ model: process.env.OPENAI_EMBEDDING_MODEL || "text-embedding-3-small" }).embedQuery(query)
  const collection = await createChromaCloudClient().getCollection({ name: CHROMA_COLLECTION, embeddingFunction: externalEmbeddingFunction })
  const result = await collection.query({ queryEmbeddings: [vector], nResults: 6, include: ["documents", "metadatas", "distances"] })
  return (result.documents[0] || []).flatMap((content, index) => {
    const metadata = result.metadatas[0]?.[index]
    const distance = result.distances[0]?.[index]
    if (!content || !metadata || distance == null || distance > 0.5) return []
    return [{ content, title: String(metadata.title || "LetssAI"), url: String(metadata.url || "/"), sourceType: String(metadata.sourceType || "website") }]
  })
}
