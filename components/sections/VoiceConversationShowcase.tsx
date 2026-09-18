"use client"

import Link from "next/link"
import {
  ArrowCounterClockwise,
  ArrowRight,
  Pause,
  PhoneCall,
  Play,
  SpeakerHigh,
  SpeakerSlash,
  Waveform,
} from "@phosphor-icons/react"
import { motion, useReducedMotion } from "motion/react"
import { useCallback, useEffect, useRef, useState } from "react"
import { siteConfig } from "@/lib/site"
import {
  AnimatedCallCharacter,
  type CharacterState,
} from "./AnimatedCallCharacter"
import {
  resolveActiveSpeaker,
  voiceScenarios,
  type Speaker,
  type VoiceScenario,
  type VoiceScenarioId,
} from "./voice-conversation-data"

type PlaybackState =
  "loading" | "ready" | "playing" | "paused" | "completed" | "error"
const formatTime = (value: number) =>
  Number.isFinite(value)
    ? `${Math.floor(value / 60)}:${Math.floor(value % 60)
        .toString()
        .padStart(2, "0")}`
    : "0:00"

export function VoiceConversationShowcase() {
  const [selectedId, setSelectedId] = useState<VoiceScenarioId>("automotive")
  const scenario =
    voiceScenarios.find(({ id }) => id === selectedId) ?? voiceScenarios[0]
  const select = (id: VoiceScenarioId) => setSelectedId(id)
  return (
    <ConversationSection
      heading="Real conversations. Real outcomes 🚀"
      copy="Choose a business scenario and listen to an example AI-assisted phone conversation designed to turn everyday follow-up into a clear next step."
    >
      <div
        className="mt-8 min-w-0"
        role="tablist"
        aria-label="Conversation scenarios"
      >
        <div className="mx-auto flex max-w-fit [scrollbar-width:none] gap-2 overflow-x-auto px-1 pb-2 [&::-webkit-scrollbar]:hidden">
          {voiceScenarios.map((item, index) => (
            <button
              id={`voice-tab-${item.id}`}
              key={item.id}
              type="button"
              role="tab"
              aria-selected={item.id === selectedId}
              aria-controls="voice-conversation-panel"
              tabIndex={item.id === selectedId ? 0 : -1}
              onClick={() => select(item.id)}
              onKeyDown={(event) => {
                if (
                  !["ArrowRight", "ArrowLeft", "Home", "End"].includes(
                    event.key
                  )
                )
                  return
                event.preventDefault()
                const next =
                  event.key === "Home"
                    ? 0
                    : event.key === "End"
                      ? voiceScenarios.length - 1
                      : (index +
                          (event.key === "ArrowRight" ? 1 : -1) +
                          voiceScenarios.length) %
                        voiceScenarios.length
                select(voiceScenarios[next].id)
                document
                  .getElementById(`voice-tab-${voiceScenarios[next].id}`)
                  ?.focus()
              }}
              className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-[#016630] focus-visible:ring-offset-2 focus-visible:outline-none ${item.id === selectedId ? "border-[#016630] bg-[#016630] text-white shadow-md shadow-emerald-900/20 hover:bg-emerald-800" : "border-emerald-950/15 bg-white text-slate-700 hover:border-[#016630] hover:text-[#016630]"}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <ConversationPlayer
        key={scenario.id}
        scenario={scenario}
        labelledBy={`voice-tab-${scenario.id}`}
      />
    </ConversationSection>
  )
}

export function IndustryConversationSection({
  scenarioId,
}: {
  scenarioId: VoiceScenarioId
}) {
  const scenario = voiceScenarios.find(({ id }) => id === scenarioId)
  if (!scenario) return null
  return (
    <ConversationSection
      heading={`${scenario.label} conversations, handled with care`}
      copy="Listen to an example of how a LetssAI voice agent can guide a routine conversation and provide a clear path to human follow-up."
    >
      <ConversationPlayer key={scenario.id} scenario={scenario} />
    </ConversationSection>
  )
}

function ConversationSection({
  heading,
  copy,
  children,
}: {
  heading: string
  copy: string
  children: React.ReactNode
}) {
  return (
    <section
      aria-labelledby={`conversation-heading-${heading.replaceAll(" ", "-").toLowerCase()}`}
      className="overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            See LetssAI AI agents in action
          </p>
          <h2
            id={`conversation-heading-${heading.replaceAll(" ", "-").toLowerCase()}`}
            className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl"
          >
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            {copy}
          </p>
        </div>
        {children}
      </div>
    </section>
  )
}

function ConversationPlayer({
  scenario,
  labelledBy,
}: {
  scenario: VoiceScenario
  labelledBy?: string
}) {
  const [playback, setPlayback] = useState<PlaybackState>("loading")
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [muted, setMuted] = useState(false)
  const [waveformFailed, setWaveformFailed] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const waveformRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const audio = audioRef.current
    const container = waveformRef.current
    if (!audio || !container) return
    let active = true
    let localWave: {
      destroy(): void
      on(event: "error", callback: () => void): unknown
    } | null = null
    const guarded = (fn: () => void) => () => {
      if (active) fn()
    }
    const listeners = {
      loadedmetadata: guarded(() => {
        setDuration(audio.duration)
        setPlayback("ready")
      }),
      timeupdate: guarded(() => setCurrentTime(audio.currentTime)),
      playing: guarded(() => setPlayback("playing")),
      pause: guarded(() => {
        if (!audio.ended && audio.currentTime > 0) setPlayback("paused")
      }),
      ended: guarded(() => {
        setCurrentTime(audio.duration)
        setPlayback("completed")
      }),
      waiting: guarded(() => setPlayback("loading")),
      error: guarded(() => setPlayback("error")),
    }
    Object.entries(listeners).forEach(([event, fn]) =>
      audio.addEventListener(event, fn)
    )
    audio.src = scenario.audioPath
    audio.load()
    void import("wavesurfer.js")
      .then(({ default: WaveSurfer }) => {
        if (!active) return
        localWave = WaveSurfer.create({
          container,
          media: audio,
          height: 76,
          barWidth: 3,
          barGap: 3,
          barRadius: 3,
          cursorWidth: 2,
          waveColor: "#a7f3d0",
          progressColor: siteConfig.brand.color,
          cursorColor: "#016630",
          normalize: true,
          dragToSeek: true,
        })
        localWave.on(
          "error",
          guarded(() => setWaveformFailed(true))
        )
      })
      .catch(guarded(() => setWaveformFailed(true)))
    return () => {
      active = false
      audio.pause()
      audio.currentTime = 0
      audio.removeAttribute("src")
      audio.load()
      Object.entries(listeners).forEach(([event, fn]) =>
        audio.removeEventListener(event, fn)
      )
      localWave?.destroy()
      container.replaceChildren()
    }
  }, [scenario])

  const activeSpeaker =
    playback === "playing"
      ? resolveActiveSpeaker(scenario.cues, currentTime)
      : null
  const characterState = useCallback(
    (speaker: Speaker): CharacterState =>
      playback === "completed"
        ? "completed"
        : playback === "paused"
          ? "paused"
          : playback !== "playing"
            ? "idle"
            : activeSpeaker === speaker
              ? "speaking"
              : "listening",
    [activeSpeaker, playback]
  )
  const play = async (restart = false) => {
    const audio = audioRef.current
    if (!audio || playback === "loading" || playback === "error") return
    if (!audio.paused && !restart) return audio.pause()
    if (restart || audio.ended) {
      audio.currentTime = 0
      setCurrentTime(0)
    }
    try {
      await audio.play()
    } catch {
      setPlayback("error")
    }
  }
  const status =
    playback === "playing"
      ? activeSpeaker === "agent"
        ? "AI agent speaking"
        : activeSpeaker === "customer"
          ? "Customer responding"
          : "Conversation playing"
      : playback === "loading"
        ? "Loading conversation…"
        : playback === "completed"
          ? "Conversation completed"
          : playback === "error"
            ? "This recording could not be loaded. You can try again later."
            : playback === "paused"
              ? "Conversation paused"
              : "Ready to play"
  return (
    <motion.div
      id="voice-conversation-panel"
      role={labelledBy ? "tabpanel" : undefined}
      aria-labelledby={labelledBy}
      initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative mt-5 min-w-0 rounded-[2rem] border border-emerald-950/10 bg-[radial-gradient(circle_at_top,#ecfdf5,transparent_45%),linear-gradient(135deg,#ffffff,#f8fafc)] p-3 shadow-[0_30px_90px_-55px_rgba(0,100,82,.5)] sm:p-6 lg:p-8"
    >
      <div className="relative grid min-w-0 grid-cols-2 items-center gap-3 lg:grid-cols-[minmax(150px,1fr)_minmax(340px,2.4fr)_minmax(150px,1fr)] lg:gap-6">
        <AnimatedCallCharacter
          kind="customer"
          label="Customer"
          state={characterState("customer")}
          image={scenario.customerImage}
          imageAlt={`${scenario.label} customer`}
        />
        <div className="relative z-10 col-span-2 row-start-2 min-w-0 rounded-[1.5rem] border border-emerald-950/10 bg-white p-4 shadow-sm sm:p-5 lg:col-span-1 lg:row-start-1">
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
              <PhoneCall size={20} weight="fill" />
            </span>
            <div>
              <p className="text-xs font-semibold tracking-wide text-emerald-700 uppercase">
                Now selected
              </p>
              <h3 className="mt-1 text-lg font-semibold text-slate-950">
                {scenario.title}
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                {scenario.description}
              </p>
            </div>
          </div>
          <div
            className="mt-4 min-h-20"
            aria-label="Interactive audio waveform"
          >
            <div
              ref={waveformRef}
              className={waveformFailed ? "hidden" : "w-full"}
            />
            {waveformFailed && (
              <input
                aria-label="Seek through conversation"
                type="range"
                min={0}
                max={duration || 1}
                step={0.1}
                value={currentTime}
                onChange={(e) => {
                  if (audioRef.current)
                    audioRef.current.currentTime = Number(e.target.value)
                }}
                className="mt-7 h-2 w-full accent-[#016630]"
              />
            )}
          </div>
          <div
            className="flex justify-between text-xs text-slate-500 tabular-nums"
            aria-hidden="true"
          >
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <div className="mt-3 flex items-center justify-center gap-3">
            <ControlButton
              label="Restart conversation"
              disabled={playback === "loading" || playback === "error"}
              onClick={() => void play(true)}
            >
              <ArrowCounterClockwise size={20} />
            </ControlButton>
            <button
              type="button"
              aria-label={
                playback === "playing"
                  ? "Pause conversation"
                  : "Play conversation"
              }
              disabled={playback === "loading" || playback === "error"}
              onClick={() => void play()}
              className="flex size-12 items-center justify-center rounded-full bg-[#016630] text-white shadow-md transition hover:bg-emerald-800 focus-visible:ring-2 focus-visible:ring-[#016630] focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-40"
            >
              {playback === "playing" ? (
                <Pause size={22} weight="fill" />
              ) : (
                <Play size={22} weight="fill" />
              )}
            </button>
            <ControlButton
              label={muted ? "Unmute conversation" : "Mute conversation"}
              pressed={muted}
              onClick={() => {
                const next = !muted
                setMuted(next)
                if (audioRef.current) audioRef.current.muted = next
              }}
            >
              {muted ? <SpeakerSlash size={20} /> : <SpeakerHigh size={20} />}
            </ControlButton>
          </div>
          <div
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-emerald-50 px-3 py-2.5 text-center text-sm font-medium text-emerald-950"
            aria-live="polite"
          >
            <Waveform size={18} />
            <span>{status}</span>
          </div>
          <audio
            ref={audioRef}
            preload="metadata"
            aria-label={`${scenario.title} audio`}
            className="sr-only"
          />
        </div>
        <AnimatedCallCharacter
          kind="agent"
          label="LetssAI AI Agent"
          state={characterState("agent")}
          image={scenario.agentImage}
          imageAlt={`${scenario.label} LetssAI AI agent`}
        />
      </div>
      <div className="relative mt-5 text-center">
        <Link
          href="/services/ai-calling-appointment-booking"
          className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold text-emerald-800 hover:underline"
        >
          Explore AI calling and appointment booking <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  )
}
function ControlButton({
  label,
  onClick,
  children,
  pressed,
  disabled,
}: {
  label: string
  onClick: () => void
  children: React.ReactNode
  pressed?: boolean
  disabled?: boolean
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      onClick={onClick}
      disabled={disabled}
      className="flex size-11 items-center justify-center rounded-full border border-emerald-950/15 bg-white text-emerald-950 hover:bg-emerald-50 focus-visible:ring-2 focus-visible:ring-[#016630] focus-visible:outline-none disabled:opacity-40"
    >
      {children}
    </button>
  )
}
