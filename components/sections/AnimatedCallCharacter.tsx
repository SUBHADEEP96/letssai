"use client"

import { motion, useReducedMotion } from "motion/react"
import { PhoneCall, Waveform } from "@phosphor-icons/react"
import Image from "next/image"

export type CharacterState =
  "idle" | "listening" | "speaking" | "paused" | "completed"

type Props = {
  kind: "customer" | "agent"
  label: string
  state: CharacterState
  image: string
  imageAlt: string
}

const stateLabels: Record<CharacterState, string> = {
  idle: "Ready for the call",
  listening: "Listening",
  speaking: "Speaking",
  paused: "Call paused",
  completed: "Conversation complete",
}

export function AnimatedCallCharacter({
  kind,
  label,
  state,
  image,
  imageAlt,
}: Props) {
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
        <CharacterPortrait
          image={image}
          alt={imageAlt}
          speaking={speaking && !reduceMotion}
        />
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

function CharacterPortrait({
  speaking,
  image,
  alt,
}: {
  speaking: boolean
  image: string
  alt: string
}) {
  return (
    <div
      className={`relative size-full transition-all duration-300 ${
        speaking ? "scale-[1.04]" : "scale-100"
      } `}
    >
      <Image
        src={image}
        alt={alt}
        fill
        className="rounded-full object-contain"
        sizes="(min-width: 640px) 128px, 112px"
      />
    </div>
  )
}
