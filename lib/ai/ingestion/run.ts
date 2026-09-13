import { chunkDocuments } from "./chunk"
import { embedAndReplace } from "./embed-and-upsert"
import { loadSources } from "./load-sources"

export type IngestionSummary = {
  documentsRead: number
  websitePages: number
  pdfDocuments: number
  chunksCreated: number
  chunksUpserted: number
  skippedRecords: number
  errors: string[]
}

export async function ingestChatbotKnowledge(): Promise<IngestionSummary> {
  const summary: IngestionSummary = {
    documentsRead: 0,
    websitePages: 0,
    pdfDocuments: 0,
    chunksCreated: 0,
    chunksUpserted: 0,
    skippedRecords: 0,
    errors: [],
  }
  try {
    const loaded = await loadSources()
    summary.documentsRead = loaded.documents.length
    summary.websitePages = loaded.websitePages
    summary.pdfDocuments = loaded.pdfDocuments
    summary.skippedRecords = loaded.skipped
    summary.errors.push(...loaded.errors)
    const chunks = await chunkDocuments(loaded.documents)
    summary.chunksCreated = chunks.length
    summary.chunksUpserted = await embedAndReplace(chunks)
  } catch (error) {
    summary.errors.push(
      error instanceof Error ? error.message : "Unknown ingestion error"
    )
  }
  return summary
}
