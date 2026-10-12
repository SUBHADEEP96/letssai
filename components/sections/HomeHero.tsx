import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { OrbBackground } from "@/components/ui/OrbBackground"
import Image from "next/image"
import heroImage from "@/public/media/home-hero.jpg"

function renderHighlightedAI(text: string) {
  const parts = text.split(/(AI)/g)
  return parts.map((part, index) =>
    part === "AI" ? (
      <span key={index} className="text-[#016630]">
        AI
      </span>
    ) : (
      part
    )
  )
}

function renderDescriptionSentences(text: string) {
  const match = text.match(/^(.*?[.।])\s+([\s\S]+)$/)
  if (!match) {
    return <span className="block">{text}</span>
  }
  const [, firstSentence, secondSentence] = match
  return (
    <>
      <span className="block">{firstSentence}</span>
      <span className="mt-2 block text-slate-100/90">{secondSentence}</span>
    </>
  )
}

export async function HomeHero() {
  const t = await getTranslations("home.hero")

  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden bg-[#dce9e3] px-2.5 py-8 sm:px-6 sm:py-16 lg:min-h-[calc(100svh-4.5rem)] lg:px-8">
      <Image
        src={heroImage}
        alt=""
        fill
        sizes="100vw"
        quality={75}
        preload
        placeholder="blur"
        className="absolute inset-0 z-0 object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,47,37,.14),rgba(0,47,37,.28))]"
      />
      <OrbBackground
        backgroundColor="#6ee7b7"
        hoverIntensity={2}
        rotateOnHover
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl rounded-[1.5rem] border border-white/25 bg-emerald-950/25 px-3.5 py-7 text-center text-white shadow-[0_24px_90px_rgba(0,38,30,.22)] backdrop-blur-[3px] sm:rounded-[2.25rem] sm:px-10 sm:py-12 lg:px-14">
        <div
          aria-hidden="true"
          className="hero-sparkle mx-auto mb-4 w-fit text-white drop-shadow-[0_0_14px_rgba(255,255,255,.55)] sm:mb-6"
        >
          <svg
            viewBox="0 0 64 64"
            className="h-10 w-10 sm:h-14 sm:w-14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.25 15.17c.89-2.9 5-2.9 5.89 0l2.62 8.55a3.08 3.08 0 0 0 2.04 2.04l8.55 2.62c2.9.89 2.9 5 0 5.89l-8.55 2.62a3.08 3.08 0 0 0-2.04 2.04l-2.62 8.55c-.89 2.9-5 2.9-5.89 0l-2.62-8.55a3.08 3.08 0 0 0-2.04-2.04l-8.55-2.62c-2.9-.89-2.9-5 0-5.89l8.55-2.62a3.08 3.08 0 0 0 2.04-2.04l2.62-8.55Z"
              fill="currentColor"
            />
            <path
              d="M48 7v10M43 12h10M53 20v7M49.5 23.5h7"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h1 className="mx-auto max-w-5xl text-[clamp(1.22rem,5vw,4.5rem)] leading-[1.1] font-semibold tracking-[-.035em] sm:leading-[1.08]">
          <span className="block whitespace-nowrap">
            {t("titleBefore")}{" "}
            <span className="text-[#016630]">{t("titleHighlight")}</span>,
          </span>
          <span className="mt-1 block sm:mt-2">
            {renderHighlightedAI(t("titleAfter"))}
          </span>
        </h1>
        <div className="mx-auto mt-5 w-full max-w-[39rem] text-left text-base leading-6 text-slate-100 sm:mt-6 sm:w-fit sm:text-lg sm:leading-8">
          {renderDescriptionSentences(t("description"))}
        </div>
        <Link
          href="/contact"
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-emerald-950 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:scale-[.98] sm:mt-8"
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  )
}
