import { industries, services } from "./site"
export type ChatSnippet = { title: string; url: string; content: string }
export async function retrieveRelevantSiteContent(
  query: string
): Promise<ChatSnippet[]> {
  const q = query.toLowerCase()
  const all = [
    ...services.map((s) => ({
      title: s.title,
      url: s.href,
      content: `${s.description} Tools: ${s.tools.join(", ")}. Benefits: ${s.benefits.join(", ")}.`,
    })),
    ...industries.map((i) => ({
      title: i.title,
      url: i.href,
      content: `${i.useCase} Best fit: ${i.services.join(", ")}.`,
    })),
  ]
  return all
    .filter((x) =>
      `${x.title} ${x.content}`
        .toLowerCase()
        .split(/\W+/)
        .some((w) => w.length > 3 && q.includes(w))
    )
    .slice(0, 3)
}
export function demoChatResponse(query: string, snippets: ChatSnippet[]) {
  const refs = snippets.length
    ? snippets.map((s) => `${s.title} (${s.url})`).join(", ")
    : "LetssAI website content"
  return `Based on ${refs}, LetssAI can help with practical AI assistants for customer support, lead follow-up, documents, appointments, and routine workflows. If you need pricing, integration scoping, or a workflow designed for your business, please request a free AI workflow review on the contact page.`
}
