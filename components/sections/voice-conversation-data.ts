export type Speaker = "customer" | "agent"

export type SpeakerCue = {
  start: number
  end: number
  speaker: Speaker
  text?: string
}

export type VoiceScenario = {
  id: VoiceScenarioId
  label: string
  title: string
  audioPath: string
  description?: string
  customerImage: string
  agentImage: string
  cues: SpeakerCue[]
}

export type VoiceScenarioId =
  "automotive" | "finance" | "real-estate" | "ecommerce" | "hospitality"

// Timings follow the turn boundaries in the current showcase recordings. They are
// intentionally data-driven so replacement calls can be retimed without changing UI.
export const voiceScenarios: VoiceScenario[] = [
  {
    id: "automotive",
    label: "Automotive",
    title: "Recovering a missed service drop-off",
    audioPath: "/media/voice/01-automotive-drop-off-recovery-call.mp3",
    description:
      "A helpful follow-up that gets a delayed service visit moving again.",
    customerImage: "/media/conversation/automotive-customer.jpeg",
    agentImage: "/media/conversation/automotive-agent.png",
    cues: [
      { start: 0, end: 15, speaker: "agent" },
      { start: 15, end: 19, speaker: "customer" },
      { start: 19, end: 34, speaker: "agent" },
      { start: 34, end: 37, speaker: "customer" },
      { start: 37, end: 67, speaker: "agent" },
      { start: 67, end: 69, speaker: "customer" },
      { start: 69, end: 79, speaker: "agent" },
      { start: 79, end: 81, speaker: "customer" },
      { start: 81, end: 85, speaker: "agent" },
      { start: 85, end: 87, speaker: "customer" },
      { start: 87, end: 105.2, speaker: "agent" },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    title: "A timely policy renewal reminder",
    audioPath: "/media/voice/02-finance-policy-renewal-reminder-call.mp3",
    description:
      "A proactive reminder that makes the next step clear and convenient.",
    customerImage: "/media/conversation/finance-customer.png",
    agentImage: "/media/conversation/finance-agent.png",
    cues: [
      { start: 0, end: 8, speaker: "agent" },
      { start: 8, end: 13, speaker: "customer" },
      { start: 13, end: 19, speaker: "agent" },
      { start: 19, end: 26, speaker: "customer" },
      { start: 26, end: 33, speaker: "agent" },
      { start: 33, end: 36, speaker: "customer" },
      { start: 36, end: 42, speaker: "agent" },
      { start: 42, end: 44, speaker: "customer" },
      { start: 44, end: 49, speaker: "agent" },
      { start: 49, end: 52.4, speaker: "customer" },
      { start: 52.4, end: 69, speaker: "agent" },
      { start: 69, end: 71, speaker: "customer" },
      { start: 71, end: 82.4, speaker: "agent" },
    ],
  },
  {
    id: "real-estate",
    label: "Real Estate",
    title: "Qualifying a new property lead",
    audioPath: "/media/voice/03-real-estate-lead-qualification-call.mp3",
    description:
      "An initial conversation that captures intent before a human follow-up.",
    customerImage: "/media/conversation/real-estate-customer.png",
    agentImage: "/media/conversation/real-estate-agent.png",
    cues: [
      { start: 0, end: 7, speaker: "agent" },
      { start: 7, end: 14.1, speaker: "customer" },
      { start: 14.1, end: 30, speaker: "agent" },
      { start: 30, end: 35, speaker: "customer" },
      { start: 35, end: 52, speaker: "agent" },
      { start: 52, end: 55, speaker: "customer" },
      { start: 55, end: 65, speaker: "agent" },
      { start: 65, end: 66, speaker: "customer" },
      { start: 66, end: 70, speaker: "agent" },
      { start: 70, end: 73, speaker: "customer" },
      { start: 73, end: 84, speaker: "agent" },
      { start: 84, end: 86, speaker: "customer" },
      { start: 86, end: 95.5, speaker: "agent" },
      { start: 95.5, end: 97, speaker: "customer" },
      { start: 97, end: 109.6, speaker: "agent" },
    ],
  },
  {
    id: "ecommerce",
    label: "Ecommerce",
    title: "Helping a shopper complete checkout",
    audioPath: "/media/voice/04-ecommerce-abandoned-checkout-recovery.mp3",
    description:
      "A considerate recovery call that helps resolve a checkout blocker.",
    customerImage: "/media/conversation/ecommerce-customer.png",
    agentImage: "/media/conversation/ecommerce-agent.png",
    cues: [
      { start: 0, end: 12, speaker: "agent" },
      { start: 12, end: 17, speaker: "customer" },
      { start: 17, end: 27, speaker: "agent" },
      { start: 27, end: 43, speaker: "customer" },
      { start: 43, end: 66, speaker: "agent" },
      { start: 66, end: 75, speaker: "customer" },
      { start: 75, end: 99, speaker: "agent" },
      { start: 99, end: 103, speaker: "customer" },
      { start: 103, end: 113, speaker: "agent" },
      { start: 113, end: 117, speaker: "customer" },
      { start: 117, end: 124, speaker: "agent" },
      { start: 124, end: 129, speaker: "customer" },
      { start: 129, end: 132.8, speaker: "agent" },
    ],
  },
  {
    id: "hospitality",
    label: "Hospitality",
    title: "Concierge assistance before arrival",
    audioPath: "/media/voice/05-hospitality-concierge-assistance-call.mp3",
    description:
      "A guest gets quick, practical help without waiting at the front desk.",
    customerImage: "/media/conversation/hospitability-customer.webp",
    agentImage: "/media/conversation/hospitability-agent.png",
    cues: [
      { start: 0, end: 9, speaker: "agent" },
      { start: 9, end: 15, speaker: "customer" },
      { start: 15, end: 30, speaker: "agent" },
      { start: 30, end: 40, speaker: "customer" },
      { start: 40, end: 60, speaker: "agent" },
      { start: 60, end: 62, speaker: "customer" },
      { start: 62, end: 79.2, speaker: "agent" },
    ],
  },
]

export const industryConversationScenarios = {
  "real-estate": "real-estate",
  "finance-accounting": "finance",
  "retail-ecommerce": "ecommerce",
} as const satisfies Record<string, VoiceScenarioId>

export function getIndustryConversationScenario(slug: string) {
  return industryConversationScenarios[
    slug as keyof typeof industryConversationScenarios
  ]
}

export function resolveActiveSpeaker(cues: SpeakerCue[], time: number) {
  return (
    cues.find((cue) => time >= cue.start && time < cue.end)?.speaker ?? null
  )
}
