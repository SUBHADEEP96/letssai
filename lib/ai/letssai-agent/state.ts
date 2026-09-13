import { Annotation } from "@langchain/langgraph"
import type {
  ChatMessage,
  ConversationStage,
  Intent,
  KnowledgeSnippet,
  LeadProfile,
} from "./types"

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
    default: () => "needs_discovery",
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
  stage: Annotation<ConversationStage>({
    reducer: (_current, update) => update,
    default: () => "exploring",
  }),
  leadProfile: Annotation<LeadProfile>({
    reducer: (current, update) => ({ ...current, ...update }),
    default: () => ({}),
  }),
})

export type LetssAIStateType = typeof LetssAIState.State
