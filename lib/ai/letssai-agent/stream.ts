import {
  AIMessage,
  HumanMessage,
  SystemMessage,
} from "@langchain/core/messages"
import { ChatOpenAI } from "@langchain/openai"
import { answerCache, containsPII, createAnswerCacheKey } from "./cache"
import { prepareConversation } from "./graph"
import { assistantRules, UNKNOWN_FACTUAL_ANSWER } from "./prompts"
import { selectPublicSources } from "./sources"
import { shouldDisplaySources } from "./tools"
import type { ChatMessage, Intent, StreamEvent } from "./types"

const directAnswers: Partial<Record<Intent, string>> = {
  greeting:
    "Hi! I’m LetssAI’s AI business advisor. I can help you identify where AI could improve customer support, sales follow-up, appointments, knowledge access or repetitive workflows. What kind of business do you run, or which process is taking too much of your team’s time?",
  assistant_identity:
    "I’m LetssAI’s AI business advisor. I help visitors understand our services, explore practical automation opportunities and connect with the LetssAI team when there is a good fit. What would you most like to improve—customer response, lead follow-up or internal operations?",
  needs_discovery:
    "Yes—I can help you explore where practical AI or automation may fit. A useful starting point is the work that is repetitive, slow, or easy to miss, while keeping people involved in important decisions. Which process currently takes the most manual effort in your business?",
  casual_business_conversation:
    "You’re welcome. I’m here if you’d like to explore a business process, LetssAI service, or sensible next step. What would be most useful to look at?",
  unrelated_question:
    "I’m focused on helping with LetssAI services and business automation, so I may not be the right assistant for that. If your goal involves reducing manual work or improving customer engagement, though, I’d be happy to explore it. Which business process currently causes the most friction?",
  unsupported_or_sensitive:
    "I can help with business automation, but I can’t provide legal, medical, financial, tax, or harmful guidance. For high-impact decisions, a qualified person should remain responsible. Is there an administrative or customer workflow around that area you’d like to improve?",
  contact_request:
    "You can contact LetssAI through:\n\n- Email: [sales@letssai.com](mailto:sales@letssai.com)\n- Phone: [+91 7980314116](tel:+917980314116)\n- Website: [LetssAI website](https://www.letssai.com)\n\nIf you share what you’re hoping to automate, I can also help prepare the right context before you contact the team.",
}
const cacheableIntents: Intent[] = [
  "greeting",
  "assistant_identity",
  "service_question",
  "industry_question",
]
const contentText = (content: unknown) =>
  typeof content === "string"
    ? content
    : Array.isArray(content)
      ? content
          .map((part) =>
            typeof part === "object" && part && "text" in part
              ? String(part.text)
              : ""
          )
          .join("")
      : ""

function captureAnswer(
  profile: Awaited<ReturnType<typeof prepareConversation>>["leadProfile"]
) {
  if (!profile.submissionConsent)
    return "Before I collect contact details, would you like me to arrange a workflow discussion with the LetssAI team?"
  if (!profile.name)
    return "Certainly. What name should I include with the workflow discussion request?"
  if (!profile.company)
    return `Thanks, ${profile.name}. What company do you work with?`
  if (!profile.workEmail)
    return "What work email should the LetssAI team use to contact you?"
  return "Thank you. I have the essential details and your permission, so I’m submitting the workflow discussion request to the LetssAI team now."
}

export async function* streamLetssAIAgent(
  messages: ChatMessage[],
  signal?: AbortSignal
): AsyncGenerator<StreamEvent> {
  const state = await prepareConversation(messages)
  const { intent, knowledge } = state
  const eligible =
    cacheableIntents.includes(intent) &&
    !containsPII(messages) &&
    messages.filter((m) => m.role === "user").length === 1
  const key = createAnswerCacheKey(messages)
  const cached = eligible ? await answerCache.get(key) : undefined
  yield { type: "metadata", intent, cacheHit: Boolean(cached) }
  if (cached) {
    yield { type: "token", token: cached.answer }
    yield { type: "sources", sources: cached.sources }
    yield { type: "done" }
    return
  }

  const direct =
    intent === "lead_capture" || intent === "lead_handoff"
      ? captureAnswer(state.leadProfile)
      : directAnswers[intent]
  if (direct) {
    yield { type: "token", token: direct }
    yield { type: "sources", sources: [] }
    if (
      intent === "lead_handoff" &&
      state.leadProfile.name &&
      state.leadProfile.company &&
      state.leadProfile.workEmail
    ) {
      const summary = messages
        .filter((message) => message.role === "user")
        .map((message) => message.content)
        .join(" | ")
        .slice(0, 3000)
      const challenge =
        state.leadProfile.businessChallenge ||
        "Workflow discussion requested through the chatbot."
      yield {
        type: "lead_submission",
        lead: {
          name: state.leadProfile.name,
          company: state.leadProfile.company,
          email: state.leadProfile.workEmail,
          phone: state.leadProfile.phone,
          automationNeed:
            challenge.length >= 20
              ? challenge
              : `Workflow challenge: ${challenge}`,
          preferredContactMethod:
            state.leadProfile.preferredContactMethod || "email",
          recommendedService: state.leadProfile.recommendedService,
          currentTools: state.leadProfile.tools,
          timeline: state.leadProfile.timeline,
          conversationSummary: summary,
        },
      }
    }
    if (eligible)
      await answerCache.set(key, { answer: direct, sources: [], intent })
    yield { type: "done" }
    return
  }
  const sources = shouldDisplaySources(intent)
    ? selectPublicSources(knowledge)
    : []
  if (!knowledge.length) {
    yield { type: "token", token: UNKNOWN_FACTUAL_ANSWER }
    yield { type: "sources", sources: [] }
    yield { type: "done" }
    return
  }
  const context = knowledge
    .map((item, index) => `[${index + 1}] ${item.title}\n${item.content}`)
    .join("\n\n")
  const history = messages
    .slice(-12)
    .map((message) =>
      message.role === "user"
        ? new HumanMessage(message.content)
        : new AIMessage(message.content)
    )
  const model = new ChatOpenAI({
    model: process.env.OPENAI_CHAT_MODEL || "gpt-4.1-mini",
    temperature: 0.25,
  })
  let answer = ""
  const stream = await model.stream(
    [
      new SystemMessage(
        `${assistantRules}\n\nIntent: ${intent}\nConversation stage: ${state.stage}\nKnown lead profile (internal; do not expose): ${JSON.stringify(state.leadProfile)}\n\nApproved LetssAI context:\n${context}`
      ),
      ...history,
    ],
    { signal }
  )
  for await (const chunk of stream) {
    if (signal?.aborted) return
    const token = contentText(chunk.content)
    if (token) {
      answer += token
      yield { type: "token", token }
    }
  }
  yield { type: "sources", sources }
  if (answer.trim() && eligible)
    await answerCache.set(key, { answer, sources, intent })
  yield { type: "done" }
}
