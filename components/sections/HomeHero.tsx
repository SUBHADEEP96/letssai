"use client"

import dynamic from "next/dynamic"
import { HeroVideoSkeleton } from "./HeroVideoSkeleton"
import { Link } from "@/i18n/navigation"

const HeroVideoPlayer = dynamic(
  () => import("./HeroVideoPlayer").then((mod) => mod.HeroVideoPlayer),
  {
    loading: () => <HeroVideoSkeleton />,
    ssr: false,
  }
)

export function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f8f4]">
      {/* Curved modern video container */}
      <div className="relative w-full overflow-hidden rounded-b-[2.25rem] bg-slate-950 sm:rounded-b-[3.25rem] lg:rounded-b-[4.25rem] shadow-sm">
        <HeroVideoPlayer />
      </div>

      {/* Accessible contact navigation anchor */}
      <Link href="/contact" className="sr-only">
        Contact LetssAI
      </Link>
    </section>
  )
}
