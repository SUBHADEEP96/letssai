import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"
import heroImage from "@/public/media/services/hero-letssai.webp"
import { Breadcrumbs } from "@/components/site/Breadcrumbs"
import { CTAButton } from "@/components/site/CTAButton"

type HeroAction = {
  label: string
  href?: string
  opensChat?: boolean
}

export function ServiceHero({
  eyebrow,
  title,
  description,
  href,
  primaryCta = { label: "Talk to LetssAI", opensChat: true },
  secondaryCta = { label: "Contact LetssAI", href: "/contact" },
}: {
  eyebrow: string
  title: string
  description: string
  href: string
  primaryCta?: HeroAction
  secondaryCta?: HeroAction
}) {
  return (
    <section className="relative isolate min-h-[590px] overflow-hidden bg-emerald-950 text-white sm:min-h-[620px]">
      <Image
        src={heroImage}
        alt=""
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
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            ...(href === "/services" ? [] : [{ label: eyebrow, href }]),
          ]}
        />
        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-emerald-200 uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl leading-[1.08] font-semibold tracking-[-0.035em] text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50/85 sm:text-xl">
            {description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {primaryCta.opensChat ? (
              <CTAButton className="justify-center bg-white text-emerald-950 shadow-none hover:bg-emerald-50">
                {primaryCta.label}
              </CTAButton>
            ) : (
              <Link
                href={primaryCta.href ?? "/contact"}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta.opensChat ? (
              <CTAButton className="justify-center border border-white/35 bg-transparent shadow-none hover:bg-white/10">
                {secondaryCta.label}
              </CTAButton>
            ) : (
              <Link
                href={secondaryCta.href ?? "/contact"}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {secondaryCta.label}
                <ArrowRight aria-hidden />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
