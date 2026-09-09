import { createHash } from "node:crypto"

export type KnowledgeDocument = {
  id: string
  sourceType: string
  title: string
  slug: string
  url: string
  updatedAt: string
  text: string
}
export type KnowledgeChunk = KnowledgeDocument & {
  id: string
  text: string
  chunkIndex: number
}

export function chunkDocuments(
  documents: KnowledgeDocument[],
  maxCharacters = 1400
): KnowledgeChunk[] {
  return documents.flatMap((document) => {
    const paragraphs = document.text
      .split(/\n{2,}/)
      .map((value) => value.trim())
      .filter(Boolean)
    const groups: string[] = []
    for (const paragraph of paragraphs) {
      if (
        !groups.length ||
        groups.at(-1)!.length + paragraph.length + 2 > maxCharacters
      )
        groups.push(paragraph)
      else groups[groups.length - 1] += `\n\n${paragraph}`
    }
    return groups.map((text, chunkIndex) => ({
      ...document,
      text,
      chunkIndex,
      id: createHash("sha256")
        .update(`${document.id}:${chunkIndex}:${text}`)
        .digest("hex"),
    }))
  })
}
