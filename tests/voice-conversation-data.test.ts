import assert from "node:assert/strict"
import test from "node:test"
import {
  resolveActiveSpeaker,
  voiceScenarios,
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
