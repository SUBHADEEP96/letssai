import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/lib/site"

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" aria-label="LetssAI home" className="inline-flex shrink-0 items-center">
      <Image
        src={inverse ? siteConfig.logos.white : siteConfig.logos.primary}
        alt="LetssAI"
        width={420}
        height={108}
        priority={!inverse}
        className="h-auto w-[132px] sm:w-[150px]"
        sizes="(max-width: 640px) 132px, 150px"
      />
    </Link>
  )
}
