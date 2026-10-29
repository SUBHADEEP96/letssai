"use client"

import { useTranslations } from "next-intl"
import { HeroVideoPlayer } from "./HeroVideoPlayer"
import { HeroDialogueCard } from "./HeroDialogueCard"
import { TextAnimate } from "@/components/magicui/text-animate"
import { Link } from "@/i18n/navigation"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { AuroraText } from "@/components/ui/aurora-text"
import { WordRotate } from "@/components/ui/word-rotate"
import { SparklesText } from "@/components/ui/sparkles-text"
import { ComicText } from "@/components/ui/comic-text"
export function HomeHero() {
  const t = useTranslations("home.hero")

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f8f4]">
      <div className="relative w-full overflow-hidden rounded-b-[2.25rem] bg-slate-950 shadow-sm sm:rounded-b-[3.25rem] lg:rounded-b-[4.25rem]">
        <HeroVideoPlayer
          headerContent={
            <div className="flex max-w-xl flex-col gap-4 sm:gap-6">
              <h2 className="flex flex-col gap-1 text-4xl leading-[1.08] font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl xl:text-7xl">
                {/* <TextAnimate animation="blurInUp" by="word" delay={0.1}>
                  Better outcomes.
                </TextAnimate> */}
                <WordRotate
                  duration={4000}
                  words={[
                    "Human-like Conversations.",
                    "Smarter Automations.",
                    "Faster Executions.",
                    "Better outcomes.",
                  ]}
                />
                <div className="flex space-x-2">
                  <TextAnimate animation="blurInUp" by="word" delay={0.35}>
                    Built on
                  </TextAnimate>

                  {/* <SparklesText className=""></SparklesText> */}
                  <ComicText
                    fontSize={4}
                    style={{
                      color: "#00a63e",
                      backgroundColor: "#00a63e",
                      backgroundImage:
                        "radial-gradient(circle, #FF4040 1.5px, transparent 1.6px)",
                      backgroundSize: "10px 10px",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      WebkitTextStroke: "2px #000000",
                    }}
                  >
                    LetssAi.
                  </ComicText>
                </div>
              </h2>
            </div>
          }
          ctaButton={
            <RainbowButton
              variant="outline"
              asChild
              className="group h-11 w-fit rounded-full px-6 text-sm font-semibold shadow-xl transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] sm:h-14 sm:px-8 sm:text-base"
            >
              <Link href="/ai-discovery">
                <span>{t("cta")}</span>
              </Link>
            </RainbowButton>
          }
          dialogueCard={<HeroDialogueCard />}
        />
      </div>
    </section>
  )
}
