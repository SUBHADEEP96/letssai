import { Annotation } from "@langchain/langgraph"
import type { ChatMessage, Intent, KnowledgeSnippet } from "./types"

export const LetssAIState = Annotation.Root({
  messages: Annotation<ChatMessage[]>({
    reducer: (_current, update) => update,
    default: () => [],
  }),
  query: Annotation<string>({
    reducer: (_current, update) => update,
    default: () => "",
  }),
  intent: Annotation<Intent>({
    reducer: (_current, update) => update,
    default: () => "service_explainer",
  }),
  knowledge: Annotation<KnowledgeSnippet[]>({
    reducer: (_current, update) => update,
    default: () => [],
  }),
  draft: Annotation<string>({
    reducer: (_current, update) => update,
    default: () => "",
  }),
  answer: Annotation<string>({
    reducer: (_current, update) => update,
    default: () => "",
  }),
  suggestContact: Annotation<boolean>({
    reducer: (_current, update) => update,
    default: () => false,
  }),
  blocked: Annotation<boolean>({
    reducer: (_current, update) => update,
    default: () => false,
  }),
})

export type LetssAIStateType = typeof LetssAIState.State
