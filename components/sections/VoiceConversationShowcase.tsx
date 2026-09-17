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
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import type WaveSurfer from "wavesurfer.js"
import { siteConfig } from "@/lib/site"
import {
  AnimatedCallCharacter,
  type CharacterState,
} from "./AnimatedCallCharacter"
import {
  resolveActiveSpeaker,
  voiceScenarios,
  type Speaker,
} from "./voice-conversation-data"

type PlaybackState =
  "loading" | "ready" | "playing" | "paused" | "completed" | "error"

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds)) return "0:00"
  const minutes = Math.floor(seconds / 60)
  return `${minutes}:${Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0")}`
}

export function VoiceConversationShowcase() {
  const [selectedId, setSelectedId] = useState(voiceScenarios[0].id)
  const [playback, setPlayback] = useState<PlaybackState>("loading")
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [muted, setMuted] = useState(false)
  const [waveformFailed, setWaveformFailed] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const waveformRef = useRef<HTMLDivElement>(null)
  const waveSurferRef = useRef<WaveSurfer | null>(null)
  const reduceMotion = useReducedMotion()
  const scenario = useMemo(
    () =>
      voiceScenarios.find((item) => item.id === selectedId) ??
      voiceScenarios[0],
    [selectedId]
  )

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onMetadata = () => {
      setDuration(audio.duration)
      setPlayback("ready")
    }
    const onTime = () => setCurrentTime(audio.currentTime)
    const onPlaying = () => setPlayback("playing")
    const onPause = () => {
      if (!audio.ended && audio.currentTime > 0) setPlayback("paused")
    }
    const onEnded = () => {
      setCurrentTime(audio.duration)
      setPlayback("completed")
    }
    const onWaiting = () => setPlayback("loading")
    const onError = () => setPlayback("error")
    audio.addEventListener("loadedmetadata", onMetadata)
    audio.addEventListener("timeupdate", onTime)
    audio.addEventListener("playing", onPlaying)
    audio.addEventListener("pause", onPause)
    audio.addEventListener("ended", onEnded)
    audio.addEventListener("waiting", onWaiting)
    audio.addEventListener("error", onError)
    return () => {
      audio.pause()
      audio.removeEventListener("loadedmetadata", onMetadata)
      audio.removeEventListener("timeupdate", onTime)
      audio.removeEventListener("playing", onPlaying)
      audio.removeEventListener("pause", onPause)
      audio.removeEventListener("ended", onEnded)
      audio.removeEventListener("waiting", onWaiting)
      audio.removeEventListener("error", onError)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    const container = waveformRef.current
    if (!audio || !container) return
    let cancelled = false
    setPlayback("loading")
    setCurrentTime(0)
    setDuration(0)
    setWaveformFailed(false)
    audio.pause()
    audio.currentTime = 0
    audio.src = scenario.audioPath
    audio.load()

    void import("wavesurfer.js")
      .then(({ default: WaveSurferClass }) => {
        if (cancelled) return
        const wave = WaveSurferClass.create({
          container,
          media: audio,
          height: 76,
          barWidth: 3,
          barGap: 3,
          barRadius: 3,
          cursorWidth: 2,
          waveColor: "#a7f3d0",
          progressColor: siteConfig.brand.color,
          cursorColor: "#065f46",
          normalize: true,
          dragToSeek: true,
        })
        waveSurferRef.current = wave
        wave.on("error", () => setWaveformFailed(true))
      })
      .catch(() => setWaveformFailed(true))

    return () => {
      cancelled = true
      audio.pause()
      waveSurferRef.current?.destroy()
      waveSurferRef.current = null
      container.replaceChildren()
    }
  }, [scenario])

  const activeSpeaker =
    playback === "playing"
      ? resolveActiveSpeaker(scenario.cues, currentTime)
      : null
  const characterState = useCallback(
    (speaker: Speaker): CharacterState => {
      if (playback === "completed") return "completed"
      if (playback === "paused") return "paused"
      if (playback !== "playing") return "idle"
      return activeSpeaker === speaker ? "speaking" : "listening"
    },
    [activeSpeaker, playback]
  )

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio || playback === "error") return
    if (!audio.paused) {
      audio.pause()
      return
    }
    if (audio.ended || playback === "completed") audio.currentTime = 0
    try {
      await audio.play()
    } catch {
      setPlayback("error")
    }
  }

  const replay = async () => {
    const audio = audioRef.current
    if (!audio || playback === "error") return
    audio.currentTime = 0
    setCurrentTime(0)
    try {
      await audio.play()
    } catch {
      setPlayback("error")
    }
  }

  const selectScenario = (id: string) => {
    if (id === selectedId) return
    const audio = audioRef.current
    if (audio) {
      audio.pause()
      audio.currentTime = 0
    }
    setPlayback("loading")
    setCurrentTime(0)
    setSelectedId(id)
  }

  const onTabKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return
    event.preventDefault()
    const next =
      (index + (event.key === "ArrowRight" ? 1 : -1) + voiceScenarios.length) %
      voiceScenarios.length
    selectScenario(voiceScenarios[next].id)
    document.getElementById(`voice-tab-${voiceScenarios[next].id}`)?.focus()
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
            ? "This recording could not be loaded. Please choose another scenario."
            : playback === "paused"
              ? "Conversation paused"
              : "Ready to play"

  const entrance = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
      }

  return (
    <section
      aria-labelledby="voice-showcase-heading"
      className="overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div {...entrance} className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">
            Welcome to LetssAI
          </p>
          <h2
            id="voice-showcase-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl"
          >
            Hear an AI conversation move work forward.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Choose a business scenario and listen to an example AI-assisted
            phone conversation designed to turn everyday follow-up into a clear
            next step.
          </p>
        </motion.div>

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
                onClick={() => selectScenario(item.id)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:outline-none ${item.id === selectedId ? "border-emerald-800 bg-emerald-950 text-white" : "border-emerald-950/15 bg-white text-slate-700 hover:border-emerald-500 hover:text-emerald-800"}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          {...entrance}
          id="voice-conversation-panel"
          role="tabpanel"
          aria-labelledby={`voice-tab-${selectedId}`}
          className="relative mt-5 min-w-0 rounded-[2rem] border border-emerald-950/10 bg-[radial-gradient(circle_at_top,#ecfdf5,transparent_45%),linear-gradient(135deg,#ffffff,#f8fafc)] p-3 shadow-[0_30px_90px_-55px_rgba(0,100,82,.5)] sm:p-6 lg:p-8"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 [background-image:linear-gradient(#00645212_1px,transparent_1px),linear-gradient(90deg,#00645212_1px,transparent_1px)] [background-size:28px_28px] opacity-25"
          />
          <div className="relative grid min-w-0 grid-cols-2 items-center gap-3 lg:grid-cols-[minmax(150px,1fr)_minmax(340px,2.4fr)_minmax(150px,1fr)] lg:gap-6">
            <motion.div
              initial={reduceMotion ? undefined : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <AnimatedCallCharacter
                kind="customer"
                label="Customer"
                state={characterState("customer")}
              />
            </motion.div>

            <div className="relative z-10 col-span-2 row-start-2 min-w-0 rounded-[1.5rem] border border-emerald-950/10 bg-white p-4 shadow-sm sm:p-5 lg:col-span-1 lg:row-start-1">
              <div className="flex min-w-0 items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                  <PhoneCall aria-hidden="true" size={20} weight="fill" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-wide text-emerald-700 uppercase">
                    Now selected
                  </p>
                  <h3 className="mt-1 text-base leading-snug font-semibold text-slate-950 sm:text-lg">
                    {scenario.title}
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-slate-500">
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
                    onChange={(event) => {
                      if (audioRef.current)
                        audioRef.current.currentTime = Number(
                          event.target.value
                        )
                    }}
                    className="mt-7 h-2 w-full cursor-pointer accent-emerald-700"
                  />
                )}
              </div>

              <div
                className="flex items-center justify-between text-xs text-slate-500 tabular-nums"
                aria-hidden="true"
              >
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
              <div className="mt-3 flex items-center justify-center gap-2 sm:gap-3">
                <ControlButton
                  label="Restart conversation"
                  onClick={replay}
                  disabled={playback === "loading" || playback === "error"}
                >
                  <ArrowCounterClockwise size={20} />
                </ControlButton>
                <button
                  type="button"
                  aria-label={
                    playback === "playing"
                      ? "Pause conversation"
                      : playback === "completed"
                        ? "Replay conversation"
                        : "Play conversation"
                  }
                  onClick={togglePlayback}
                  disabled={playback === "loading" || playback === "error"}
                  className="flex size-12 items-center justify-center rounded-full bg-emerald-950 text-white shadow-md transition hover:bg-emerald-800 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {playback === "playing" ? (
                    <Pause weight="fill" size={22} />
                  ) : (
                    <Play weight="fill" size={22} />
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
                  {muted ? (
                    <SpeakerSlash size={20} />
                  ) : (
                    <SpeakerHigh size={20} />
                  )}
                </ControlButton>
              </div>
              <div
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-emerald-50 px-3 py-2.5 text-center text-sm font-medium text-emerald-950"
                aria-live="polite"
                aria-atomic="true"
              >
                <Waveform aria-hidden="true" className="shrink-0" size={18} />
                <span>{status}</span>
              </div>
              <audio
                ref={audioRef}
                preload="metadata"
                aria-label={`${scenario.title} audio`}
                className="sr-only"
              />
            </div>

            <motion.div
              initial={reduceMotion ? undefined : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <AnimatedCallCharacter
                kind="agent"
                label="LetssAI AI Agent"
                state={characterState("agent")}
              />
            </motion.div>
          </div>

          <div className="relative mt-5 text-center">
            <Link
              href="/services/ai-calling-appointment-booking"
              className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold text-emerald-800 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:outline-none"
            >
              Explore AI calling and appointment booking{" "}
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
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
      className="flex size-11 items-center justify-center rounded-full border border-emerald-950/15 bg-white text-emerald-950 transition hover:bg-emerald-50 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40"
    >
      {children}
    </button>
  )
}
