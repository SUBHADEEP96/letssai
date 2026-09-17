export type Speaker = "customer" | "agent"

export type SpeakerCue = {
  start: number
  end: number
  speaker: Speaker
  text?: string
}

export type VoiceScenario = {
  id: string
  label: string
  title: string
  audioPath: string
  description?: string
  cues: SpeakerCue[]
}

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
    cues: [
      { start: 0, end: 12.4, speaker: "agent" },
      { start: 12.4, end: 21.8, speaker: "customer" },
      { start: 21.8, end: 37.2, speaker: "agent" },
      { start: 37.2, end: 49.5, speaker: "customer" },
      { start: 49.5, end: 67.8, speaker: "agent" },
      { start: 67.8, end: 80.6, speaker: "customer" },
      { start: 80.6, end: 105.2, speaker: "agent" },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    title: "A timely policy renewal reminder",
    audioPath: "/media/voice/02-finance-policy-renewal-reminder-call.mp3",
    description:
      "A proactive reminder that makes the next step clear and convenient.",
    cues: [
      { start: 0, end: 10.8, speaker: "agent" },
      { start: 10.8, end: 18.9, speaker: "customer" },
      { start: 18.9, end: 33.6, speaker: "agent" },
      { start: 33.6, end: 43.5, speaker: "customer" },
      { start: 43.5, end: 60.7, speaker: "agent" },
      { start: 60.7, end: 69.1, speaker: "customer" },
      { start: 69.1, end: 82.4, speaker: "agent" },
    ],
  },
  {
    id: "real-estate",
    label: "Real Estate",
    title: "Qualifying a new property lead",
    audioPath: "/media/voice/03-real-estate-lead-qualification-call.mp3",
    description:
      "An initial conversation that captures intent before a human follow-up.",
    cues: [
      { start: 0, end: 13.2, speaker: "agent" },
      { start: 13.2, end: 24.1, speaker: "customer" },
      { start: 24.1, end: 38.7, speaker: "agent" },
      { start: 38.7, end: 52.9, speaker: "customer" },
      { start: 52.9, end: 69.3, speaker: "agent" },
      { start: 69.3, end: 84.6, speaker: "customer" },
      { start: 84.6, end: 98.2, speaker: "agent" },
      { start: 98.2, end: 109.6, speaker: "customer" },
    ],
  },
  {
    id: "ecommerce",
    label: "Ecommerce",
    title: "Helping a shopper complete checkout",
    audioPath: "/media/voice/04-ecommerce-abandoned-checkout-recovery.mp3",
    description:
      "A considerate recovery call that helps resolve a checkout blocker.",
    cues: [
      { start: 0, end: 14.1, speaker: "agent" },
      { start: 14.1, end: 26.8, speaker: "customer" },
      { start: 26.8, end: 43.4, speaker: "agent" },
      { start: 43.4, end: 56.1, speaker: "customer" },
      { start: 56.1, end: 73.8, speaker: "agent" },
      { start: 73.8, end: 91.7, speaker: "customer" },
      { start: 91.7, end: 108.5, speaker: "agent" },
      { start: 108.5, end: 119.6, speaker: "customer" },
      { start: 119.6, end: 132.8, speaker: "agent" },
    ],
  },
  {
    id: "hospitality",
    label: "Hospitality",
    title: "Concierge assistance before arrival",
    audioPath: "/media/voice/05-hospitality-concierge-assistance-call.mp3",
    description:
      "A guest gets quick, practical help without waiting at the front desk.",
    cues: [
      { start: 0, end: 11.6, speaker: "agent" },
      { start: 11.6, end: 23.5, speaker: "customer" },
      { start: 23.5, end: 37.9, speaker: "agent" },
      { start: 37.9, end: 49.7, speaker: "customer" },
      { start: 49.7, end: 64.8, speaker: "agent" },
      { start: 64.8, end: 71.9, speaker: "customer" },
      { start: 71.9, end: 79.2, speaker: "agent" },
    ],
  },
]

export function resolveActiveSpeaker(cues: SpeakerCue[], time: number) {
  return (
    cues.find((cue) => time >= cue.start && time < cue.end)?.speaker ?? null
  )
}
