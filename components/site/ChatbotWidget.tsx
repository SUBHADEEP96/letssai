"use client"

import { ChatCircleDots } from "@phosphor-icons/react"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { siteConfig } from "@/lib/site"

type DialogComponent = typeof import("./ChatbotDialog").default

export function ChatbotWidget() {
  const [Dialog, setDialog] = useState<DialogComponent | null>(null)

  const open = useCallback(() => {
    void import("./ChatbotDialog").then(({ default: ChatbotDialog }) =>
      setDialog(() => ChatbotDialog)
    )
  }, [])

  useEffect(() => {
    window.addEventListener("letssai:open-chatbot", open)
    return () => window.removeEventListener("letssai:open-chatbot", open)
  }, [open])

  if (Dialog) return <Dialog onClose={() => setDialog(null)} />

  return (
    <button
      onClick={open}
      aria-label="Open LetssAI support assistant"
      className="fixed right-4 bottom-4 z-50 flex min-h-12 items-center gap-2 rounded-full bg-[#006452] px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-950/30 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:right-6 sm:bottom-6"
    >
      <Image
        src={siteConfig.assets.buttonIcon}
        alt=""
        width={26}
        height={26}
        sizes="24px"
        className="size-6 object-contain"
      />
      <span className="hidden sm:inline">Ask LetssAI</span>
      <ChatCircleDots size={22} aria-hidden />
    </button>
  )
}
