"use client"

import { useEffect, useRef, useState } from "react"
import { ChatCircleDots, PaperPlaneTilt, X } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/lib/site"

type Message = { role: "assistant" | "user"; content: string }
const chips = [
  "What can LetssAI automate?",
  "Help me choose a service",
  "Can you help with real estate leads?",
  "How does appointment booking work?",
  "Can LetssAI work with my CRM?",
  "I want to reduce manual work",
]

export function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi, I’m the LetssAI assistant. Tell me what your team wants to automate, and I’ll help you find the right next step.",
    },
  ])
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener("letssai:open-chatbot", handler)
    return () => window.removeEventListener("letssai:open-chatbot", handler)
  }, [])
  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    const mobile = window.matchMedia("(max-width: 767px)").matches
    if (mobile) document.body.style.overflow = "hidden"
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", escape)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", escape)
    }
  }, [open])
  useEffect(
    () => endRef.current?.scrollIntoView({ behavior: "smooth" }),
    [messages, loading]
  )

  async function send(text = input) {
    const content = text.trim()
    if (!content || loading) return
    const nextMessages = [...messages, { role: "user" as const, content }]
    setMessages(nextMessages)
    setInput("")
    setLoading(true)
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      })
      const data = (await response.json()) as { message?: string }
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            data.message ||
            "I couldn’t prepare an answer. Please try again or contact LetssAI.",
        },
      ])
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "The assistant is temporarily unavailable. You can still contact LetssAI about your workflow.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open LetssAI support assistant"
          className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-[#006452] px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:right-6 sm:bottom-6"
        >
          <Image
            src={siteConfig.assets.buttonIcon}
            alt=""
            aria-hidden
            width={26}
            height={26}
            className="size-6 object-contain"
          />
          <span className="hidden sm:inline">Ask LetssAI</span>
          <ChatCircleDots size={22} aria-hidden />
        </button>
      )}
      {open && (
        <div className="fixed inset-0 z-[60] bg-emerald-950/30 md:pointer-events-none md:bg-transparent">
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="LetssAI customer support"
            className="pointer-events-auto absolute inset-0 flex flex-col bg-[#062c25] text-white shadow-2xl md:inset-auto md:right-6 md:bottom-6 md:h-[min(680px,calc(100dvh-3rem))] md:w-[min(430px,calc(100vw-3rem))] md:rounded-[1.75rem]"
          >
            <header className="flex items-center justify-between border-b border-white/10 p-4">
              <div className="flex items-center gap-3">
                <Image
                  src={siteConfig.assets.icon}
                  alt=""
                  aria-hidden
                  width={42}
                  height={42}
                  className="size-10 rounded-xl bg-white object-contain p-1"
                />
                <div>
                  <h2 className="font-semibold tracking-tight">
                    LetssAI support
                  </h2>
                  <p className="text-xs text-emerald-100/75">
                    Website assistant
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-3 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
                aria-label="Close assistant"
              >
                <X size={21} />
              </button>
            </header>
            <div
              className="flex-1 overflow-y-auto bg-[#f7fbfa] p-4 text-slate-900"
              aria-live="polite"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-3 max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 whitespace-pre-wrap ${message.role === "user" ? "ml-auto bg-[#006452] text-white" : "border border-emerald-950/5 bg-white shadow-sm"}`}
                >
                  {message.content}
                </div>
              ))}
              {loading && (
                <div className="mb-3 inline-flex rounded-2xl bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
                  <span className="animate-pulse">Thinking…</span>
                </div>
              )}
              <div ref={endRef} />
            </div>
            <div className="border-t border-white/10 p-3">
              <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
                {chips.map((chip) => (
                  <button
                    key={chip}
                    disabled={loading}
                    onClick={() => send(chip)}
                    className="shrink-0 rounded-full border border-white/15 bg-white/8 px-3 py-2 text-left text-xs text-emerald-50 transition hover:bg-white/15 disabled:opacity-50"
                  >
                    {chip}
                  </button>
                ))}
              </div>
              <div className="flex items-end gap-2 rounded-2xl bg-white p-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  rows={1}
                  maxLength={2000}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault()
                      send()
                    }
                  }}
                  className="max-h-28 min-h-11 flex-1 resize-none rounded-xl px-3 py-2.5 text-sm text-slate-900 outline-none"
                  placeholder="Ask about services or your workflow…"
                  aria-label="Message"
                />
                <button
                  disabled={loading || !input.trim()}
                  onClick={() => send()}
                  className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#006452] text-white disabled:opacity-40"
                  aria-label="Send message"
                >
                  <PaperPlaneTilt size={20} />
                </button>
              </div>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 block text-center text-sm font-medium text-emerald-100 underline underline-offset-4"
              >
                Contact LetssAI
              </Link>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}
