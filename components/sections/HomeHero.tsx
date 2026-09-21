import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { OrbBackground } from "@/components/ui/OrbBackground"
import Image from "next/image"
import heroImage from "@/public/media/home-hero.jpg"
export async function HomeHero() {
  const t = await getTranslations("home.hero")

  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden bg-[#dce9e3] px-4 py-16 sm:px-6 lg:min-h-[calc(100svh-4.5rem)] lg:px-8">
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

      <div className="relative z-10 mx-auto w-full max-w-5xl rounded-[1.75rem] border border-white/25 bg-emerald-950/25 px-5 py-9 text-center text-white shadow-[0_24px_90px_rgba(0,38,30,.22)] backdrop-blur-[3px] sm:rounded-[2.25rem] sm:px-10 sm:py-12 lg:px-14">
        <div
          aria-hidden="true"
          className="hero-sparkle mx-auto mb-5 w-fit text-white drop-shadow-[0_0_14px_rgba(255,255,255,.55)] sm:mb-6"
        >
          <svg
            viewBox="0 0 64 64"
            className="h-12 w-12 sm:h-14 sm:w-14"
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
        <h1 className="mx-auto max-w-4xl text-[clamp(2.625rem,7vw,5.5rem)] leading-[.98] font-semibold tracking-[-.045em] text-balance">
          {t("titleBefore")}{" "}
          <span className="text-[#016630]">{t("titleHighlight")}</span>,{" "}
          {t("titleAfter")}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">
          {t("description")}
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-emerald-950 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:scale-[.98]"
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  )
}
