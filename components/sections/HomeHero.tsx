"use client"

import { useTranslations } from "next-intl"
import { HeroVideoPlayer } from "./HeroVideoPlayer"
import { HeroDialogueCard } from "./HeroDialogueCard"
import { TextAnimate } from "@/components/magicui/text-animate"
import { Link } from "@/i18n/navigation"

export function HomeHero() {
  const t = useTranslations("home.hero")

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f8f4]">
      {/* Curved modern video container matching Sierra style */}
      <div className="relative w-full overflow-hidden rounded-b-[2.25rem] bg-slate-950 shadow-sm sm:rounded-b-[3.25rem] lg:rounded-b-[4.25rem]">
        <HeroVideoPlayer
          headerContent={
            <div className="flex max-w-xl flex-col gap-4 sm:gap-6">
              {/* Big, Clean Sierra-Style Heading */}
              <h1 className="flex flex-col gap-1 text-4xl leading-[1.08] font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl xl:text-7xl">
                <TextAnimate animation="blurInUp" by="word" delay={0.1}>
                  Better outcomes.
                </TextAnimate>
                <TextAnimate animation="blurInUp" by="word" delay={0.35}>
                  Built on LetssAI.
                </TextAnimate>
              </h1>
            </div>
          }
          ctaButton={
            <Link
              href="/contact"
              className="group inline-flex h-11 w-fit cursor-pointer items-center justify-between rounded-full bg-white px-6 text-sm font-semibold text-slate-900 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-500 hover:text-white hover:shadow-2xl active:scale-[0.98] sm:h-14 sm:px-8 sm:text-base"
            >
              <span>{t("cta")}</span>
            </Link>
          }
          dialogueCard={<HeroDialogueCard />}
        />
      </div>
    </section>
  )
}
