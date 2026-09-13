import { createHash } from "node:crypto"
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters"

export type KnowledgeDocument = {
  id: string
  sourceType: string
  title: string
  url: string
  source: string
  pageNumber?: number
  ingestionTimestamp: string
  text: string
}
export type KnowledgeChunk = KnowledgeDocument & {
  id: string
  text: string
  chunkIndex: number
}

export async function chunkDocuments(documents: KnowledgeDocument[]): Promise<KnowledgeChunk[]> {
  const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000, chunkOverlap: 150 })
  const output: KnowledgeChunk[] = []
  for (const document of documents) {
    const groups = await splitter.splitText(document.text)
    output.push(...groups.map((text, chunkIndex) => ({
      ...document,
      text,
      chunkIndex,
      id: createHash("sha256")
        .update(`${document.sourceType}:${document.url}:${document.pageNumber || 0}:${chunkIndex}:${text}`)
        .digest("hex"),
    })))
  }
  return output
}
