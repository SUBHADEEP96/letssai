"use client"

import { motion, useReducedMotion } from "motion/react"
import { PhoneCall, Waveform } from "@phosphor-icons/react"

export type CharacterState =
  "idle" | "listening" | "speaking" | "paused" | "completed"

type Props = {
  kind: "customer" | "agent"
  label: string
  state: CharacterState
}

const stateLabels: Record<CharacterState, string> = {
  idle: "Ready for the call",
  listening: "Listening",
  speaking: "Speaking",
  paused: "Call paused",
  completed: "Conversation complete",
}

export function AnimatedCallCharacter({ kind, label, state }: Props) {
  const reduceMotion = useReducedMotion()
  const speaking = state === "speaking"

  return (
    <motion.article
      aria-label={`${label}: ${stateLabels[state]}`}
      className={`relative flex min-w-0 flex-col items-center rounded-[1.75rem] border bg-white/90 px-3 py-5 text-center shadow-[0_18px_55px_-34px_rgba(0,100,82,.55)] sm:px-5 ${speaking ? "border-emerald-400 ring-4 ring-emerald-100" : "border-emerald-950/10"}`}
      animate={
        speaking && !reduceMotion
          ? { y: [0, -3, 0], scale: [1, 1.015, 1] }
          : { y: 0, scale: 1 }
      }
      transition={{
        duration: 1.1,
        repeat: speaking ? Infinity : 0,
        ease: "easeInOut",
      }}
    >
      <div className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-800">
        <PhoneCall aria-hidden="true" size={16} weight="fill" />
      </div>
      <div
        className={`relative flex size-28 items-center justify-center rounded-full sm:size-32 ${kind === "agent" ? "bg-emerald-950" : "bg-amber-50"}`}
      >
        {speaking && (
          <span className="absolute -inset-2 -z-10 rounded-full bg-emerald-300/35 motion-safe:animate-pulse" />
        )}
        {kind === "customer" ? (
          <CustomerPortrait speaking={speaking && !reduceMotion} />
        ) : (
          <AgentPortrait speaking={speaking && !reduceMotion} />
        )}
        {speaking && (
          <motion.span
            aria-hidden="true"
            className="absolute -right-4 bottom-5 flex size-9 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg"
            animate={reduceMotion ? undefined : { scale: [1, 1.12, 1] }}
            transition={{ duration: 0.7, repeat: Infinity }}
          >
            <Waveform size={19} weight="bold" />
          </motion.span>
        )}
      </div>
      <h3 className="mt-4 text-base font-semibold text-slate-950">{label}</h3>
      <p
        className={`mt-1 text-xs font-medium ${speaking ? "text-emerald-700" : "text-slate-500"}`}
      >
        {stateLabels[state]}
      </p>
    </motion.article>
  )
}

function CustomerPortrait({ speaking }: { speaking: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 140 140" className="size-full">
      <path d="M26 126c5-27 21-40 44-40s40 13 45 40" fill="#14532d" />
      <path
        d="M48 62c0-25 10-39 25-39 19 0 28 16 24 43-2 17-12 29-25 29-14 0-24-14-24-33Z"
        fill="#d89c71"
      />
      <path
        d="M45 54c1-24 12-39 31-39 17 0 29 13 28 35-9-8-19-13-34-12-7 9-15 14-25 16Z"
        fill="#292524"
      />
      <path
        d="M56 62h12m14 0h11M68 62h14"
        fill="none"
        stroke="#334155"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle
        cx="62"
        cy="63"
        r="7"
        fill="none"
        stroke="#334155"
        strokeWidth="2"
      />
      <circle
        cx="88"
        cy="63"
        r="7"
        fill="none"
        stroke="#334155"
        strokeWidth="2"
      />
      <path
        d="M69 82c5 4 10 4 15 0"
        fill="none"
        stroke="#7c2d12"
        strokeWidth={speaking ? 5 : 2.5}
        strokeLinecap="round"
      />
    </svg>
  )
}

function AgentPortrait({ speaking }: { speaking: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 140 140" className="size-full">
      <path d="M26 126c5-28 20-41 44-41s40 13 45 41" fill="#047857" />
      <path
        d="m41 45-8-17 19 7m47 10 8-17-20 7"
        fill="#34d399"
        stroke="#a7f3d0"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M39 61c0-27 13-43 32-43 20 0 33 17 31 44-1 23-13 36-31 36S39 84 39 61Z"
        fill="#ecfdf5"
        stroke="#6ee7b7"
        strokeWidth="4"
      />
      <path
        d="M46 49c7-14 16-21 27-21s20 7 25 21c-10-5-18-7-26-7s-17 2-26 7Z"
        fill="#059669"
      />
      <path
        d="M51 61c7-6 13-6 20 0m3 0c7-6 13-6 20 0"
        fill="none"
        stroke="#065f46"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="m71 65-5 8 5 2 5-2-5-8Z" fill="#10b981" />
      <path
        d="M60 83c8 5 15 5 23 0"
        fill="none"
        stroke="#065f46"
        strokeWidth={speaking ? 6 : 3}
        strokeLinecap="round"
      />
      <circle cx="71" cy="111" r="10" fill="#fff" />
      <path
        d="m71 105 2.5 4.5 5 .7-3.7 3.5.9 5-4.7-2.4-4.7 2.4.9-5-3.7-3.5 5-.7Z"
        fill="#059669"
      />
    </svg>
  )
}
