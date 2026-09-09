import { OpenAIEmbeddings } from "@langchain/openai"
import { createChromaClient } from "../letssai-agent/retrieval"
import type { KnowledgeChunk } from "./chunk"

export async function embedAndUpsert(chunks: KnowledgeChunk[]) {
  if (!process.env.OPENAI_API_KEY)
    throw new Error("OPENAI_API_KEY is not configured")
  if (!process.env.CHROMA_URL)
    throw new Error(
      "CHROMA_URL is not configured; use an external Chroma server in production"
    )
  const embeddings = new OpenAIEmbeddings({
    model: process.env.OPENAI_EMBEDDING_MODEL || "text-embedding-3-small",
  })
  const collection = await createChromaClient().getOrCreateCollection({
    name: process.env.CHROMA_COLLECTION_NAME || "letssai_website_knowledge",
    embeddingFunction: null,
  })
  let upserted = 0
  for (let index = 0; index < chunks.length; index += 50) {
    const batch = chunks.slice(index, index + 50)
    const vectors = await embeddings.embedDocuments(
      batch.map((chunk) => chunk.text)
    )
    await collection.upsert({
      ids: batch.map((chunk) => chunk.id),
      embeddings: vectors,
      documents: batch.map((chunk) => chunk.text),
      metadatas: batch.map((chunk) => ({
        sourceType: chunk.sourceType,
        title: chunk.title,
        slug: chunk.slug,
        url: chunk.url,
        updatedAt: chunk.updatedAt,
        chunkIndex: chunk.chunkIndex,
      })),
    })
    upserted += batch.length
  }
  return upserted
}
