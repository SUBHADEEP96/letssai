"use client"

import { useEffect, useRef, useState } from "react"
import { ChatCircleDots, PaperPlaneTilt, X } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { siteConfig } from "@/lib/site"

type Source = { title: string; url: string }
type Message = {
  role: "assistant" | "user"
  content: string
  sources?: Source[]
}
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
        "Hi, I’m LetssAI’s AI business advisor. Tell me what your team wants to automate, and I’ll help you find the right next step.",
    },
  ])
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const endRef = useRef<HTMLDivElement>(null)
  const abortRef = useRef<AbortController>(null)
  const conversationStartedAt = useRef(0)

  useEffect(() => {
    conversationStartedAt.current = Date.now()
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
            sources?: Source[]
            lead?: {
              name: string
              company: string
              email: string
              phone?: string
              automationNeed: string
              preferredContactMethod: "email" | "phone" | "whatsapp"
              recommendedService?: string
              currentTools?: string
              timeline?: string
              conversationSummary: string
            }
          }
          if (event.type === "token" && event.token)
            setMessages((current) =>
              current.map((message, index) =>
                index === current.length - 1
                  ? { ...message, content: message.content + event.token }
                  : message
              )
            )
          if (event.type === "sources" && event.sources?.length)
            setMessages((current) =>
              current.map((message, index) =>
                index === current.length - 1
                  ? { ...message, sources: event.sources }
                  : message
              )
            )
          if (event.type === "lead_submission" && event.lead) {
            const submitted = await fetch("/api/contact", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({
                ...event.lead,
                sourcePage: window.location.pathname,
                website: "",
                formStartedAt: conversationStartedAt.current,
                chatbot: {
                  source: "chatbot",
                  conversationSummary: event.lead.conversationSummary,
                  identifiedBusinessChallenge: event.lead.automationNeed,
                  recommendedService: event.lead.recommendedService,
                  currentTools: event.lead.currentTools,
                  timeline: event.lead.timeline,
                  visitorPageUrl: window.location.href,
                  consentTimestamp: new Date(
                    conversationStartedAt.current
                  ).toISOString(),
                },
              }),
            })
            const result = (await submitted.json()) as { message?: string }
            setMessages((current) =>
              current.map((message, index) =>
                index === current.length - 1
                  ? {
                      ...message,
                      content: `${message.content}\n\n${submitted.ok ? "Your request has been submitted. The LetssAI team will review the context and contact you using your preferred method." : result.message || "I couldn’t submit the request. Please use the Contact LetssAI link below."}`,
                    }
                  : message
              )
            )
          }
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
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open LetssAI AI business advisor"
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
            aria-label="LetssAI AI business advisor"
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
                  <p className="text-xs text-emerald-100/75">
                    LetssAI CX-Agent
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
                  className={`mb-3 max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user" ? "ml-auto bg-[#006452] whitespace-pre-wrap text-white" : "border border-emerald-950/5 bg-white shadow-sm"}`}
                >
                  {message.role === "user" ? (
                    message.content
                  ) : (
                    <div className="space-y-2 [&_a]:cursor-pointer [&_a]:font-medium [&_a]:text-emerald-700 [&_a]:no-underline [&_a:focus-visible]:rounded-sm [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-2 [&_a:focus-visible]:outline-emerald-700 [&_a:hover]:text-emerald-900 [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-6">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          a: ({ children, ...props }) => (
                            <a
                              {...props}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {children}
                            </a>
                          ),
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                      {message.sources?.length ? (
                        <div className="pt-1">
                          <strong>Sources:</strong>
                          <ul className="mt-1 space-y-1">
                            {message.sources.map((source) => (
                              <li key={source.url} className="!ml-0 !list-none">
                                <a
                                  href={source.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={source.title}
                                >
                                  {source.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
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
                onClick={() => setOpen(false)}
                className="mt-3 block cursor-pointer text-center text-sm font-medium text-emerald-100 no-underline hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
