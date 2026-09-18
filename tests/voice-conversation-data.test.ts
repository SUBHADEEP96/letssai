import assert from "node:assert/strict"
import test from "node:test"
import {
  resolveActiveSpeaker,
  voiceScenarios,
  getIndustryConversationScenario,
} from "../components/sections/voice-conversation-data"

test("every voice scenario has a local recording and ordered cues", () => {
  assert.equal(voiceScenarios.length, 5)
  for (const scenario of voiceScenarios) {
    assert.match(scenario.audioPath, /^\/media\/voice\/.+\.mp3$/)
    assert.ok(scenario.cues.length > 0)
    scenario.cues.forEach((cue, index) => {
      assert.ok(cue.end > cue.start)
      if (index > 0) assert.ok(cue.start >= scenario.cues[index - 1].end)
    })
  }
})

test("scenario IDs, recordings and character images are unique and complete", () => {
  assert.deepEqual(
    voiceScenarios.map(({ id }) => id),
    ["automotive", "finance", "real-estate", "ecommerce", "hospitality"]
  )
  assert.equal(
    new Set(voiceScenarios.map(({ audioPath }) => audioPath)).size,
    5
  )
  assert.deepEqual(
    voiceScenarios.map(({ audioPath }) => audioPath),
    [
      "/media/voice/01-automotive-drop-off-recovery-call.mp3",
      "/media/voice/02-finance-policy-renewal-reminder-call.mp3",
      "/media/voice/03-real-estate-lead-qualification-call.mp3",
      "/media/voice/04-ecommerce-abandoned-checkout-recovery.mp3",
      "/media/voice/05-hospitality-concierge-assistance-call.mp3",
    ]
  )
  for (const scenario of voiceScenarios) {
    assert.match(scenario.customerImage, /^\/media\/conversation\/.+/)
    assert.match(scenario.agentImage, /^\/media\/conversation\/.+/)
  }
})

test("industry slugs resolve only to their supported conversation", () => {
  assert.equal(getIndustryConversationScenario("real-estate"), "real-estate")
  assert.equal(getIndustryConversationScenario("finance-accounting"), "finance")
  assert.equal(getIndustryConversationScenario("retail-ecommerce"), "ecommerce")
  assert.equal(getIndustryConversationScenario("healthcare-clinics"), undefined)
})

test("resolveActiveSpeaker follows cue boundaries without guessing gaps", () => {
  const cues = [
    { start: 1, end: 3.5, speaker: "agent" as const },
    { start: 4, end: 7, speaker: "customer" as const },
  ]

  assert.equal(resolveActiveSpeaker(cues, 0), null)
  assert.equal(resolveActiveSpeaker(cues, 1), "agent")
  assert.equal(resolveActiveSpeaker(cues, 3.5), null)
  assert.equal(resolveActiveSpeaker(cues, 6), "customer")
  assert.equal(resolveActiveSpeaker(cues, 7), null)
})
