"use client"

import { useCallback, useEffect, useState } from "react"
import { useReducedMotion } from "motion/react"
import {
  Sparkle,
  PhoneCall,
  ChatCircleDots,
  Gauge,
  ChartLineUp,
} from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { TextAnimate } from "@/components/magicui/text-animate"
import { HERO_STORIES, type HeroStoryItem } from "./hero-story-data"

const STORY_ICONS = [Sparkle, PhoneCall, ChatCircleDots, Gauge, ChartLineUp]

const STORY_DURATION_MS = 6000

interface HeroDialogueCardProps {
  className?: string
}

export function HeroDialogueCard({ className }: HeroDialogueCardProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const activeStory: HeroStoryItem = HERO_STORIES[activeIndex]
  const IconComponent = STORY_ICONS[activeIndex % STORY_ICONS.length]

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % HERO_STORIES.length)
  }, [])

  // Auto-rotate stories
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return

    const timer = setInterval(() => {
      goToNext()
    }, STORY_DURATION_MS)

    return () => clearInterval(timer)
  }, [isPaused, prefersReducedMotion, goToNext])

  return (
    <div
      role="region"
      aria-roledescription="dialogue preview"
      aria-label="LetssAI Live Scenario"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      className={cn(
        "relative w-full max-w-[340px] select-none transition-all duration-500 sm:max-w-[360px] md:w-[360px]",
        className
      )}
    >
      {/* Main chat message bubble body */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/15 bg-black/45 p-4 shadow-2xl [box-shadow:inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-xl sm:p-6 md:rounded-3xl">
        {/* Ambient speaking pulse glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <div className="absolute inset-0 origin-bottom animate-pulse bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Speaker Avatar */}
          <div className="relative mb-3 flex items-center justify-center">
            <div className="relative flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-inner backdrop-blur-md">
              <IconComponent
                className="size-5.5 text-emerald-400"
                weight="fill"
              />
            </div>
          </div>

          {/* Story Headline with Magic UI TextAnimate */}
          <div className="mt-1 flex min-h-[3rem] items-center justify-center">
            <TextAnimate
              key={`head-${activeStory.id}`}
              animation="blurInUp"
              by="word"
              delay={0.05}
              className="text-sm leading-snug font-semibold text-white sm:text-base text-center"
            >
              {activeStory.headline}
            </TextAnimate>
          </div>
        </div>
      </div>

      {/* Chat message tail pointing downwards to the left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-3 left-8 z-30"
      >
        <svg
          width="22"
          height="14"
          viewBox="0 0 22 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]"
        >
          {/* Tail fill matching card */}
          <path
            d="M0 -0.5 L0 10 C0 12.2 2 13.5 3.5 12 L16 -0.5 Z"
            fill="rgba(0, 0, 0, 0.55)"
          />
          {/* Tail stroke matching card border */}
          <path
            d="M0 -0.5 L0 10 C0 12.2 2 13.5 3.5 12 L16 -0.5"
            stroke="rgba(255, 255, 255, 0.18)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Blend seam at top border of tail */}
          <line
            x1="0"
            y1="-0.5"
            x2="16"
            y2="-0.5"
            stroke="rgba(0, 0, 0, 0.55)"
            strokeWidth="2.5"
          />
        </svg>
      </div>
    </div>
  )
}
