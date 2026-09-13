import { CloudClient, type EmbeddingFunction } from "chromadb"

export const CHROMA_COLLECTION =
  process.env.CHROMA_COLLECTION_NAME || "letssai_website_knowledge"

export const externalEmbeddingFunction: EmbeddingFunction = {
  name: "openai-external",
  async generate() {
    throw new Error("Embeddings must be supplied explicitly by the server")
  },
  async generateForQueries() {
    throw new Error("Query embeddings must be supplied explicitly by the server")
  },
}

export function createChromaCloudClient() {
  const apiKey = process.env.CHROMA_API_KEY
  if (!apiKey) throw new Error("CHROMA_API_KEY is not configured")
  const tenant = process.env.CHROMA_TENANT
  const database = process.env.CHROMA_DATABASE
  if (Boolean(tenant) !== Boolean(database))
    throw new Error("CHROMA_TENANT and CHROMA_DATABASE must be configured together")
  return new CloudClient({ apiKey, ...(tenant && database ? { tenant, database } : {}) })
}
