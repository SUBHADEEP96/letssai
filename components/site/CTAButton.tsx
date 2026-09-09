"use client"
import Image from "next/image"
import { siteConfig } from "@/lib/site"
export function openChatbot() {
  window.dispatchEvent(new Event("letssai:open-chatbot"))
}
export function CTAButton({
  children = "Talk to LetssAI",
  className = "",
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <button
      onClick={openChatbot}
      className={`inline-flex items-center gap-2 rounded-full bg-[#006452] px-5 py-3 text-sm font-semibold tracking-tight text-white shadow-lg shadow-emerald-900/10 transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 ${className}`}
    >
      <Image
        src={siteConfig.assets.buttonIcon}
        alt=""
        aria-hidden="true"
        width={22}
        height={22}
        className="size-[22px] shrink-0 object-contain"
      />
      {children}
    </button>
  )
}
