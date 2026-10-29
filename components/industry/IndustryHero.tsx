import Image from "next/image"
import heroImage from "@/public/media/services/hero-letssai.webp"
import { Breadcrumbs } from "@/components/site/Breadcrumbs"
import type { IndustryPageData } from "@/lib/content/types"
import { RainbowButton } from "../ui/rainbow-button"
import Link from "next/dist/client/link"

export function IndustryHero({ industry }: { industry: IndustryPageData }) {
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
            { label: "Industries", href: "/industries" },
            { label: industry.title, href: industry.href },
          ]}
        />
        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-emerald-200 uppercase">
            AI for {industry.title}
          </p>
          <h1 className="mt-5 text-4xl leading-[1.08] font-semibold tracking-[-0.035em] text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            {industry.heroHeadline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50/85 sm:text-xl">
            {industry.heroSubheadline}
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
            Book a Free AI Consultation
          </Link>
        </RainbowButton>
      </div>
    </section>
  )
}
