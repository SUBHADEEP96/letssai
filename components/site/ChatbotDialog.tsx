"use client"

import { useEffect, useRef, useState } from "react"
import { PaperPlaneTilt, X } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
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

export default function ChatbotDialog({ onClose }: { onClose: () => void }) {
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
  const abortRef = useRef<AbortController>(null)

  useEffect(() => {
    inputRef.current?.focus()
    const mobile = window.matchMedia("(max-width: 767px)").matches
    if (mobile) document.body.style.overflow = "hidden"
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", escape)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", escape)
    }
  }, [onClose])
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])
  useEffect(() => () => abortRef.current?.abort(), [])

  async function send(text = input) {
    const content = text.trim()
    if (!content || loading) return
    const nextMessages = [...messages, { role: "user" as const, content }]
    setMessages(nextMessages)
    setInput("")
    setLoading(true)
    setMessages((current) => [...current, { role: "assistant", content: "" }])
    const controller = new AbortController()
    abortRef.current = controller
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
        signal: controller.signal,
      })
      if (!response.body) throw new Error("Streaming is unavailable")
      const reader = response.body
        .pipeThrough(new TextDecoderStream())
        .getReader()
      let buffer = ""
      while (true) {
        const { value, done } = await reader.read()
        if (done) break
        buffer += value
        const lines = buffer.split("\n")
        buffer = lines.pop() || ""
        for (const line of lines) {
          if (!line) continue
          const event = JSON.parse(line) as {
            type: string
            token?: string
            message?: string
          }
          if (event.type === "token" && event.token)
            setMessages((current) =>
              current.map((message, index) =>
                index === current.length - 1
                  ? { ...message, content: message.content + event.token }
                  : message
              )
            )
          if (event.type === "error") throw new Error(event.message)
        }
      }
    } catch {
      if (!controller.signal.aborted)
        setMessages((current) =>
          current.map((message, index) =>
            index === current.length - 1 && !message.content
              ? {
                  ...message,
                  content:
                    "The assistant is temporarily unavailable. You can still contact LetssAI about your workflow.",
                }
              : message
          )
        )
    } finally {
      if (abortRef.current === controller) abortRef.current = null
      setLoading(false)
    }
  }

  return (
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
              <h2 className="font-semibold tracking-tight">Nora 👧🏻</h2>
              <p className="text-xs text-emerald-100/75">LetssAI CX-Agent</p>
            </div>
          </div>
          <button
            onClick={onClose}
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
              className={`mb-3 max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user" ? "ml-auto bg-[#006452] whitespace-pre-wrap text-white" : "border border-emerald-950/5 bg-white shadow-sm"}`}
            >
              {message.role === "user" ? (
                message.content
              ) : (
                <div className="space-y-2 [&_a]:font-medium [&_a]:text-emerald-700 [&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-6">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      a: ({ children, ...props }) => (
                        <a {...props} target="_blank" rel="noopener noreferrer">
                          {children}
                        </a>
                      ),
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>
                  {loading && index === messages.length - 1 && (
                    <span
                      aria-hidden
                      className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-emerald-700"
                    />
                  )}
                </div>
              )}
            </div>
          ))}
          {loading && !messages.at(-1)?.content && (
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
            onClick={onClose}
            className="mt-3 block text-center text-sm font-medium text-emerald-100 underline underline-offset-4"
          >
            Contact LetssAI
          </Link>
        </div>
      </aside>
    </div>
  )
}
