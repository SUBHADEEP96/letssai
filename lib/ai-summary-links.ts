import { siteConfig } from "./site"

export type AISummaryProviderId =
  "chatgpt" | "google-ai-mode" | "perplexity" | "grok"

export type AISummaryProvider = {
  readonly id: AISummaryProviderId
  readonly label: string
  readonly baseUrl: string
  readonly parameters: Readonly<Record<string, string>>
}

export const aiSummaryProviders = [
  {
    id: "chatgpt",
    label: "ChatGPT",
    baseUrl: "https://chatgpt.com/",
    parameters: { hints: "search" },
  },
  {
    id: "google-ai-mode",
    label: "Google AI Mode",
    baseUrl: "https://www.google.com/search",
    parameters: { udm: "50" },
  },
  {
    id: "perplexity",
    label: "Perplexity",
    baseUrl: "https://www.perplexity.ai/search",
    parameters: {},
  },
  { id: "grok", label: "Grok", baseUrl: "https://grok.com/", parameters: {} },
] as const satisfies readonly AISummaryProvider[]

export function buildAISummaryPrompt(): string {
  return `Summarize LetssAI using information from its official website: ${siteConfig.url}. Explain what the company does, its main AI services, the industries it serves, who it is best suited for, and how a potential customer can get started. Cite the LetssAI pages you used, separate verified information from inference, and do not invent claims that are not supported by the website.`
}

export function buildAISummaryUrl(provider: AISummaryProvider): string {
  const url = new URL(provider.baseUrl)
  url.search = new URLSearchParams({
    q: buildAISummaryPrompt(),
    ...provider.parameters,
  }).toString()
  return url.toString()
}
