import { chunkDocuments } from "./chunk"
import { embedAndUpsert } from "./embed-and-upsert"
import { loadSanityContent } from "./load-sanity-content"

export type IngestionSummary = {
  documentsRead: number
  chunksCreated: number
  chunksUpserted: number
  skippedRecords: number
  errors: string[]
}

export async function ingestChatbotKnowledge(): Promise<IngestionSummary> {
  const summary: IngestionSummary = {
    documentsRead: 0,
    chunksCreated: 0,
    chunksUpserted: 0,
    skippedRecords: 0,
    errors: [],
  }
  try {
    const loaded = await loadSanityContent()
    summary.documentsRead = loaded.documents.length + loaded.skipped
    summary.skippedRecords = loaded.skipped
    const chunks = chunkDocuments(loaded.documents)
    summary.chunksCreated = chunks.length
    summary.chunksUpserted = await embedAndUpsert(chunks)
  } catch (error) {
    summary.errors.push(
      error instanceof Error ? error.message : "Unknown ingestion error"
    )
  }
  return summary
}
