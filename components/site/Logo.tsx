import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/lib/site"

export type LogoVariant = "primary" | "white" | "icon"
export type LogoSize = "sm" | "md" | "lg"

const assets: Record<LogoVariant, string> = {
  primary: siteConfig.assets.logoPrimary,
  white: siteConfig.assets.logoWhite,
  icon: siteConfig.assets.icon,
}

const dimensions: Record<LogoVariant, { width: number; height: number }> = {
  primary: { width: 1536, height: 1024 },
  white: { width: 1536, height: 1024 },
  icon: { width: 512, height: 512 },
}

const sizes: Record<LogoSize, string> = {
  sm: "w-[120px] sm:w-[132px]",
  md: "w-[132px] sm:w-[154px] xl:w-[174px]",
  lg: "w-[154px] sm:w-[180px]",
}

export function Logo({
  variant = "primary",
  size = "md",
  className = "",
  priority = false,
}: {
  variant?: LogoVariant
  size?: LogoSize
  className?: string
  priority?: boolean
}) {
  const dimension = dimensions[variant]

  return (
    <Link
      href="/"
      aria-label="LetssAI home"
      className={`inline-flex shrink-0 items-center focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 ${variant === "icon" ? "size-10" : sizes[size]} ${className}`}
    >
      <Image
        src={assets[variant]}
        alt="LetssAI"
        width={dimension.width}
        height={dimension.height}
        priority={priority}
        className="h-auto max-h-10 w-full object-contain"
        sizes={
          variant === "icon"
            ? "40px"
            : "(max-width: 639px) 132px, (max-width: 1279px) 154px, 174px"
        }
      />
    </Link>
  )
}
