"use client"

import { usePathname } from "@/i18n/navigation"
import type { ReactNode } from "react"

export function FooterWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  if (pathname === "/ai-discovery" || pathname?.startsWith("/ai-discovery/")) {
    return null
  }
  return <>{children}</>
}
