import { OpenAIEmbeddings } from "@langchain/openai"
import { CHROMA_COLLECTION, createChromaCloudClient } from "../chroma-cloud"
import type { KnowledgeChunk } from "./chunk"

const retry = async <T>(operation: () => Promise<T>) => {
  let last: unknown
  for (let attempt = 0; attempt < 3; attempt++) {
    try { return await operation() } catch (error) {
      last = error
      const message = error instanceof Error ? error.message : ""
      if (!/(429|rate|timeout|5\d\d|temporar)/i.test(message)) throw error
      await new Promise((resolve) => setTimeout(resolve, 500 * 2 ** attempt))
    }
  }
  throw last
}

export async function embedAndReplace(chunks: KnowledgeChunk[]) {
  if (!process.env.OPENAI_API_KEY) throw new Error("OPENAI_API_KEY is not configured")
  if (!chunks.length) throw new Error("No chunks were produced; existing collection was preserved")
  const model = process.env.OPENAI_EMBEDDING_MODEL || "text-embedding-3-small"
  const embeddings = new OpenAIEmbeddings({ model })
  const vectors: number[][] = []
  for (let i = 0; i < chunks.length; i += 50)
    vectors.push(...await retry(() => embeddings.embedDocuments(chunks.slice(i, i + 50).map((chunk) => chunk.text))))
  if (model === "text-embedding-3-small" && vectors.some((vector) => vector.length !== 1536))
    throw new Error("Unexpected embedding dimension; existing collection was preserved")
  const client = createChromaCloudClient()
  await client.heartbeat().catch(() => { throw new Error("Chroma Cloud preflight failed; verify CHROMA_API_KEY and database scope") })
  try { await client.deleteCollection({ name: CHROMA_COLLECTION }) } catch (error) {
    if (!/not found|does not exist|404/i.test(error instanceof Error ? error.message : "")) throw error
  }
  const collection = await client.createCollection({ name: CHROMA_COLLECTION, embeddingFunction: null, configuration: { hnsw: { space: "cosine" } } })
  let uploaded = 0
  for (let i = 0; i < chunks.length; i += 50) {
    const batch = chunks.slice(i, i + 50)
    await retry(() => collection.add({ ids: batch.map((c) => c.id), embeddings: vectors.slice(i, i + batch.length), documents: batch.map((c) => c.text), metadatas: batch.map((c) => ({ sourceType: c.sourceType, title: c.title, url: c.url, source: c.source, ...(c.pageNumber ? { pageNumber: c.pageNumber } : {}), chunkIndex: c.chunkIndex, ingestionTimestamp: c.ingestionTimestamp })) }))
    uploaded += batch.length
  }
  return uploaded
}
