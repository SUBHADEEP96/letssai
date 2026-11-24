import Image from "next/image"
import heroImage from "@/public/media/services/hero-letssai.webp"
import { Breadcrumbs } from "@/components/site/Breadcrumbs"
import { RainbowButton } from "../ui/rainbow-button"
import { Link } from "@/i18n/navigation"
import type { Locale } from "@/i18n/routing"

const LABELS: Record<
  Locale,
  { home: string; industries: string; eyebrow: string; cta: string }
> = {
  en: {
    home: "Home",
    industries: "Industries",
    eyebrow: "LetssAI industries",
    cta: "Book a Free AI Consultation",
  },
  fr: {
    home: "Accueil",
    industries: "Secteurs",
    eyebrow: "Secteurs LetssAI",
    cta: "Réserver une consultation IA gratuite",
  },
  de: {
    home: "Startseite",
    industries: "Branchen",
    eyebrow: "LetssAI Branchen",
    cta: "Kostenlose KI-Beratung buchen",
  },
  es: {
    home: "Inicio",
    industries: "Sectores",
    eyebrow: "Sectores LetssAI",
    cta: "Reserve una consulta de IA gratuita",
  },
  hi: {
    home: "होम",
    industries: "उद्योग",
    eyebrow: "LetssAI उद्योग",
    cta: "निःशुल्क AI परामर्श बुक करें",
  },
}

export function IndustriesHero({
  eyebrow,
  title,
  description,
  locale = "en",
}: {
  eyebrow?: string
  title: string
  description: string
  locale?: Locale
}) {
  const t = LABELS[locale] || LABELS.en
  const displayEyebrow = eyebrow || t.eyebrow

  return (
    <section className="relative isolate min-h-[590px] overflow-hidden bg-emerald-950 text-white sm:min-h-[620px]">
      <Image
        src={heroImage}
        alt="LetssAI industry-specific AI solutions and workflow automation"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,44,34,0.97)_0%,rgba(2,44,34,0.90)_42%,rgba(2,44,34,0.45)_72%,rgba(2,44,34,0.62)_100%)]" />
      <div className="mx-auto flex min-h-[590px] max-w-7xl flex-col justify-center px-4 py-16 sm:min-h-[620px] sm:px-6 lg:px-8">
        <Breadcrumbs
          light
          items={[
            { label: t.home, href: "/" },
            { label: t.industries, href: "/industries" },
          ]}
        />
        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-emerald-200 uppercase">
            {displayEyebrow}
          </p>
          <h1 className="mt-5 text-4xl leading-[1.08] font-semibold tracking-[-0.035em] text-balance sm:text-4xl md:text-5xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50/85 sm:text-xl">
            {description}
          </p>
        </div>
        <RainbowButton
          variant="outline"
          asChild
          className="group h-11 w-fit rounded-full px-6 text-sm font-semibold shadow-xl transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] sm:h-14 sm:px-8 sm:text-base"
        >
          <Link
            href="/ai-discovery"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {t.cta}
          </Link>
        </RainbowButton>
      </div>
    </section>
  )
}
