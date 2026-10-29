"use client"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import { RainbowButton } from "../ui/rainbow-button"
export function CTASection({
  eyebrow = "START WITH ONE PRACTICAL WORKFLOW",
  title,
  text,
}: CTASectionProps) {
  const t = useTranslations("common")
  return (
    <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-emerald-950 px-6 py-10 text-white sm:px-10 md:px-14 md:py-14">
        <p className="text-sm font-semibold tracking-[0.14em] text-emerald-200 uppercase">
          {eyebrow || t("ctaEyebrow")}
        </p>
        <h2 className="mt-4 max-w-4xl text-3xl leading-tight font-semibold tracking-[-0.03em] sm:text-5xl">
          {title || t("ctaTitle")}
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50/75">
          {text || t("ctaText")}
        </p>

        <RainbowButton
          variant="outline"
          asChild
          className="group h-11 w-fit rounded-full px-6 text-sm font-semibold shadow-xl transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] sm:h-14 sm:px-8 sm:text-base"
        >
          <Link
            href="/ai-discovery"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {t("cta")}
          </Link>
        </RainbowButton>
      </div>
    </section>
  )
}

type CTASectionProps = {
  eyebrow?: string
  title: string
  text: string
}
