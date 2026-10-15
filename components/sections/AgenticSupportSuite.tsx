"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react"
import {
  ArrowBendUpRight,
  ChartBar,
  Chats,
  Clock,
  DotsThree,
  EnvelopeSimple,
  Flame,
  MagnifyingGlass,
  PaperPlaneTilt,
  PhoneCall,
  ShieldCheck,
  Sparkle,
  Star,
  Users,
} from "@phosphor-icons/react"

/* -------------------------------------------------------------------------- */
/* Authentic Official Omnichannel Brand SVGs                                   */
/* -------------------------------------------------------------------------- */

function WhatsAppLogo({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="WhatsApp">
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.5 8.5C21.5 6.5 18.8 5.4 16 5.4 10.2 5.4 5.5 10.1 5.5 15.9c0 1.9.5 3.7 1.4 5.3L5.4 26.6l5.6-1.5c1.5.8 3.2 1.3 5 1.3h0c5.8 0 10.5-4.7 10.5-10.5 0-2.8-1.1-5.5-3-7.4zm-7.5 16.1h0c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3.3.9.9-3.2-.2-.3c-.9-1.4-1.3-3-1.3-4.7 0-4.8 3.9-8.7 8.7-8.7 2.3 0 4.5.9 6.2 2.5 1.6 1.7 2.5 3.9 2.5 6.2 0 4.8-3.9 8.7-8.7 8.7zm4.8-6.5c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.9 1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.4.1-.2.1-.3 0-.4-.1-.1-.6-1.5-.8-2-.2-.6-.5-.5-.6-.5h-.5c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.4 5.3 4.8.7.3 1.3.5 1.8.7.8.2 1.4.2 2 .1.6-.1 1.6-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

function InstagramLogo({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Instagram">
      <defs>
        <radialGradient id="igRealGrad" cx="20%" cy="105%" r="115%">
          <stop offset="0%" stopColor="#ffd521" />
          <stop offset="30%" stopColor="#f50000" />
          <stop offset="70%" stopColor="#b900b4" />
          <stop offset="100%" stopColor="#4f00b4" />
        </radialGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#igRealGrad)" />
      <path
        d="M22 6H10C7.8 6 6 7.8 6 10v12c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zm2 16c0 1.1-.9 2-2 2H10c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v12z"
        fill="#FFFFFF"
      />
      <circle cx="16" cy="16" r="4.5" stroke="#FFFFFF" strokeWidth="2" />
      <circle cx="21.5" cy="10.5" r="1.2" fill="#FFFFFF" />
    </svg>
  )
}

function GmailLogo({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Gmail">
      <path d="M4 8.5C4 7.1 5.1 6 6.5 6h19C26.9 6 28 7.1 28 8.5v15c0 1.4-1.1 2.5-2.5 2.5h-19C5.1 26 4 24.9 4 23.5v-15z" fill="#FFFFFF" />
      <path d="M28 8.5v15c0 1.4-1.1 2.5-2.5 2.5h-4.5V14.5L28 8.5z" fill="#4CAF50" />
      <path d="M4 8.5v15C4 24.9 5.1 26 6.5 26H11V14.5L4 8.5z" fill="#1E88E5" />
      <path d="M21 26V14.5l-5 4-5-4V26H21z" fill="#EA4335" />
      <path d="M28 8.5l-12 9.5-12-9.5C4 7.1 5.1 6 6.5 6h19c1.4 0 2.5 1.1 2.5 2.5z" fill="#EA4335" />
      <path d="M16 18l5-3.5 7-6C27.5 7.4 26.6 6 25.5 6H6.5c-1.1 0-2 .4-2.5 1.5l7 6 5 4.5z" fill="#FBBC05" />
    </svg>
  )
}

function MessengerLogo({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Messenger">
      <defs>
        <radialGradient id="msgRealGrad" cx="20%" cy="100%" r="120%">
          <stop offset="0%" stopColor="#00C6FF" />
          <stop offset="50%" stopColor="#0078FF" />
          <stop offset="100%" stopColor="#A033FF" />
        </radialGradient>
      </defs>
      <path
        d="M16 3C8.8 3 3 8.4 3 15.2c0 3.8 1.9 7.3 5 9.5.3.2.4.5.3.8l-1 3.5c-.1.5.4.9.8.7l3.9-1.8c.3-.1.6-.1.8 0 1 .3 2.1.4 3.2.4 7.2 0 13-5.5 13-12.2S23.2 3 16 3z"
        fill="url(#msgRealGrad)"
      />
      <path
        d="M8.5 19.5l4.8-7.5c.7-1.1 2.3-1.4 3.3-.5l3.6 3.4c.3.3.7.3 1 0l4.8-3.7c.6-.5 1.5.3 1.1 1l-4.8 7.5c-.7 1.1-2.3 1.4-3.3.5l-3.6-3.4c-.3-.3-.7-.3-1 0l-4.8 3.7c-.7.5-1.5-.3-1.1-1z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

/* -------------------------------------------------------------------------- */
/* Smooth Scroll-Driven Parallax Container                                    */
/* -------------------------------------------------------------------------- */

function ParallaxCard({
  children,
  speed = 35,
}: {
  children: React.ReactNode
  speed?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const yRaw = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [speed, -speed]
  )
  const y = useSpring(yRaw, { stiffness: 90, damping: 28, restDelta: 0.001 })

  return (
    <motion.div ref={ref} style={{ y }} className="will-change-transform">
      {children}
    </motion.div>
  )
}

function FloatingParallaxLayer({
  children,
  offset = 20,
}: {
  children: React.ReactNode
  offset?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const yRaw = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-offset, offset]
  )
  const y = useSpring(yRaw, { stiffness: 80, damping: 26, restDelta: 0.001 })

  return (
    <motion.div ref={ref} style={{ y }} className="will-change-transform">
      {children}
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/* Main Agentic Support Suite Section                                         */
/* -------------------------------------------------------------------------- */

export function AgenticSupportSuite() {
  return (
    <section
      id="agentic-support-suite"
      aria-labelledby="agentic-suite-heading"
      className="relative overflow-hidden bg-[#f7f8f4] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      {/* Subtle depth lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-emerald-100/30 via-teal-50/20 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-bold tracking-[.18em] text-emerald-800 uppercase">
            Support Suite
          </p>
          <h2
            id="agentic-suite-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl"
          >
            Agentic Support Suite
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:mt-4 sm:text-lg sm:leading-8">
            Unified inbox management, live response telemetry, and autonomous workflow routing across your customer channels.
          </p>
        </div>

        {/* The 3 Blocks Displayed Sequentially with Vertical Parallax */}
        <div className="mt-16 space-y-24 sm:mt-24 sm:space-y-36">
          {/* ================================================================ */}
          {/* BLOCK 1: Unified Support Inbox                                    */}
          {/* ================================================================ */}
          <ParallaxCard speed={30}>
            <div className="mx-auto max-w-6xl">
              <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    Unified Support Inbox
                  </h3>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
                    Manage WhatsApp, Email, Instagram, and website chat from one dynamic dashboard so your team works faster and never misses a conversation.
                  </p>
                </div>

                {/* Real Logos Indicator */}
                <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white px-3.5 py-2 shadow-xs">
                  <span className="text-xs font-semibold text-slate-600 mr-1">Channels:</span>
                  <WhatsAppLogo className="size-5" />
                  <InstagramLogo className="size-5" />
                  <GmailLogo className="size-5" />
                  <MessengerLogo className="size-5" />
                </div>
              </div>

              {/* Realistic Software Window Mockup */}
              <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-950/6">
                {/* Window Bar */}
                <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50/90 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-[#ff5f56]" />
                    <div className="size-3 rounded-full bg-[#ffbd2e]" />
                    <div className="size-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-2xs">
                    <span className="text-slate-400">app.letssai.com</span>
                    <span className="text-slate-300">/</span>
                    <span className="font-medium text-slate-800">inbox</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="size-2 rounded-full bg-emerald-500" />
                    <span className="hidden sm:inline">Active Session</span>
                  </div>
                </div>

                {/* Main 3-Column Interface */}
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
                  {/* Left: Conversations List */}
                  <div className="border-b border-slate-200/70 p-4 lg:col-span-4 lg:border-b-0 lg:border-r">
                    <div className="relative mb-3">
                      <MagnifyingGlass size={15} className="absolute left-3 top-2.5 text-slate-400" />
                      <input
                        type="text"
                        readOnly
                        value="Search messages, contacts, orders..."
                        className="w-full rounded-lg border border-slate-200 bg-slate-50/70 py-2 pl-9 pr-3 text-xs text-slate-600 focus:outline-none"
                      />
                    </div>

                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-slate-600">
                      <span className="text-slate-900 border-b-2 border-emerald-950 pb-1">Mine (1)</span>
                      <span className="text-slate-500 pb-1">Unassigned (178)</span>
                      <span className="text-slate-500 pb-1">All (599)</span>
                    </div>

                    <div className="space-y-2">
                      {/* Active Chat Item */}
                      <div className="rounded-xl border border-emerald-300/80 bg-emerald-50/40 p-3 shadow-2xs">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="relative">
                              <div className="flex size-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                                SS
                              </div>
                              <div className="absolute -bottom-1 -right-1">
                                <WhatsAppLogo className="size-3.5" />
                              </div>
                            </div>
                            <div>
                              <p className="text-xs font-bold text-slate-900">Sam S.</p>
                              <p className="text-[11px] text-slate-500">WhatsApp</p>
                            </div>
                          </div>
                          <span className="text-[11px] text-slate-400">10:15 AM</span>
                        </div>
                        <p className="mt-2 text-xs font-medium text-slate-800 line-clamp-1">
                          Hey, need 3 sets of these? What&apos;s the discount...
                        </p>
                      </div>

                      {/* Chat Item 2 */}
                      <div className="rounded-xl border border-transparent p-3 hover:bg-slate-50 transition">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="relative">
                              <div className="flex size-8 items-center justify-center rounded-full bg-slate-700 text-xs font-semibold text-white">
                                VH
                              </div>
                              <div className="absolute -bottom-1 -right-1">
                                <InstagramLogo className="size-3.5" />
                              </div>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-slate-900">Victoria Hanson</p>
                              <p className="text-[11px] text-slate-500">Instagram</p>
                            </div>
                          </div>
                          <span className="text-[11px] text-slate-400">10:11 AM</span>
                        </div>
                        <p className="mt-2 text-xs text-slate-600 line-clamp-1">
                          Could you please provide detailed serum ingredients?
                        </p>
                      </div>

                      {/* Chat Item 3 */}
                      <div className="rounded-xl border border-transparent p-3 hover:bg-slate-50 transition">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="relative">
                              <div className="flex size-8 items-center justify-center rounded-full bg-slate-700 text-xs font-semibold text-white">
                                GS
                              </div>
                              <div className="absolute -bottom-1 -right-1">
                                <GmailLogo className="size-3.5" />
                              </div>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-slate-900">Gary M. Sobers</p>
                              <p className="text-[11px] text-slate-500">Email</p>
                            </div>
                          </div>
                          <span className="text-[11px] text-slate-400">09:42 AM</span>
                        </div>
                        <p className="mt-2 text-xs text-slate-600 line-clamp-1">
                          Inquiry regarding wholesale enterprise pricing...
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Middle: Active Conversation */}
                  <div className="flex flex-col justify-between border-b border-slate-200/70 p-4 lg:col-span-5 lg:border-b-0 lg:border-r">
                    <div>
                      {/* Customer Info Header */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="flex size-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                            SS
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900">Sam S.</p>
                            <p className="text-[11px] text-slate-500">+1 (555) 392-8190</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                          <PhoneCall size={16} className="hover:text-slate-700 cursor-pointer" />
                          <DotsThree size={20} weight="bold" className="hover:text-slate-700 cursor-pointer" />
                        </div>
                      </div>

                      {/* Message Thread */}
                      <div className="mt-4 space-y-3.5">
                        {/* Outbound Agent message */}
                        <div className="flex justify-start">
                          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-2.5 text-xs text-slate-800">
                            <p>Hi Sam, how can I help you with the product you shared?</p>
                            <span className="mt-1 block text-right text-[10px] text-slate-400">10:14 AM</span>
                          </div>
                        </div>

                        {/* Customer inquiry */}
                        <div className="flex justify-end">
                          <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-slate-900 px-4 py-2.5 text-xs text-white">
                            <div className="mb-2 rounded-lg bg-slate-800/80 p-2 text-[11px] border border-white/10">
                              <p className="font-semibold text-slate-200">Ceramic Stoneware Mug Set</p>
                              <p className="text-slate-400">$75.00 · In Stock</p>
                            </div>
                            <p>Hey, need 3 sets of these for our team? What&apos;s the discount offer and total amount?</p>
                            <span className="mt-1 block text-right text-[10px] text-slate-400">10:15 AM</span>
                          </div>
                        </div>

                        {/* LetssAI Bot Auto-Response */}
                        <div className="flex justify-start">
                          <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-emerald-200 bg-emerald-50/60 px-4 py-2.5 text-xs text-emerald-950">
                            <div className="flex items-center gap-1.5 font-bold text-emerald-800 text-[11px]">
                              <Sparkle size={13} weight="fill" />
                              <span>LetssAI Bot</span>
                            </div>
                            <p className="mt-1 leading-relaxed">
                              Sure! I have reserved 3 sets in inventory and applied code <span className="font-bold text-emerald-900">STUDIO10</span> (10% off). Your total is <span className="font-bold">$65.00</span> with free express delivery.
                            </p>
                            <span className="mt-1 block text-right text-[10px] text-emerald-700">10:16 AM</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Text Input */}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs">
                        <input
                          type="text"
                          readOnly
                          value="Type a reply or press '/' for shortcuts..."
                          className="w-full bg-transparent text-slate-700 focus:outline-none"
                        />
                        <button type="button" className="rounded-lg bg-emerald-900 p-1.5 text-white hover:bg-emerald-800 transition">
                          <PaperPlaneTilt size={14} weight="fill" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right: Floating Cart Parallax Layer */}
                  <div className="p-4 lg:col-span-3 bg-slate-50/50">
                    <FloatingParallaxLayer offset={15}>
                      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                          <p className="text-xs font-bold text-slate-900">Order Summary</p>
                          <span className="text-[11px] text-slate-500">#84920</span>
                        </div>

                        <div className="mt-3 space-y-2.5 text-xs">
                          <div>
                            <p className="font-semibold text-slate-800">Ceramic Stoneware Mug Set</p>
                            <p className="text-slate-500 text-[11px]">Quantity: 3</p>
                          </div>

                          <div className="space-y-1.5 border-t border-slate-100 pt-2 text-[11px] text-slate-600">
                            <div className="flex justify-between">
                              <span>Subtotal</span>
                              <span className="font-mono text-slate-800">$75.00</span>
                            </div>
                            <div className="flex justify-between text-emerald-700 font-semibold">
                              <span>Discount (STUDIO10)</span>
                              <span className="font-mono">-$10.00</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Shipping</span>
                              <span className="font-semibold text-emerald-700">Free</span>
                            </div>
                            <div className="border-t border-slate-100 pt-1.5 flex justify-between font-bold text-slate-950 text-xs">
                              <span>Total</span>
                              <span className="font-mono">$65.00</span>
                            </div>
                          </div>

                          <button
                            type="button"
                            className="mt-2 w-full rounded-lg bg-emerald-950 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-emerald-900 transition flex items-center justify-center gap-1.5"
                          >
                            <span>Send Payment Link</span>
                          </button>
                        </div>
                      </div>
                    </FloatingParallaxLayer>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxCard>

          {/* ================================================================ */}
          {/* BLOCK 2: Live Agent Analytics                                     */}
          {/* ================================================================ */}
          <ParallaxCard speed={35}>
            <div className="mx-auto max-w-6xl">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Live Agent Analytics
                </h3>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
                  Track conversation volume, monitor unattended, open, and unassigned chats, and view real-time agent performance and workload.
                </p>
              </div>

              {/* Analytics Dashboard Card */}
              <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xl shadow-slate-950/6 sm:p-7">
                {/* Clean Metrics Table */}
                <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        <th className="pb-3 pr-4">Agent Name</th>
                        <th className="pb-3 px-4">Resolved</th>
                        <th className="pb-3 px-4">Avg First Response</th>
                        <th className="pb-3 px-4">Avg Resolution Time</th>
                        <th className="pb-3 pl-4">Avg Response Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                      {/* LetssAI Bot Row */}
                      <tr className="bg-emerald-50/50">
                        <td className="py-3.5 pr-4">
                          <div className="flex items-center gap-2">
                            <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-950 text-white">
                              <Sparkle size={14} weight="fill" />
                            </div>
                            <div>
                              <span className="font-bold text-emerald-950">LetssAI Bot</span>
                              <span className="text-slate-400 text-[11px] block">Automated System</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 font-mono font-bold text-slate-900">798</td>
                        <td className="py-3.5 px-4 font-mono text-emerald-800 font-semibold">1 Min</td>
                        <td className="py-3.5 px-4 font-mono text-slate-700">0 Hr 22 Min</td>
                        <td className="py-3.5 pl-4 font-mono font-bold text-emerald-900">1 Min</td>
                      </tr>

                      {/* Phoenix Baker */}
                      <tr>
                        <td className="py-3.5 pr-4">
                          <span className="font-semibold text-slate-900">Phoenix Baker</span>
                        </td>
                        <td className="py-3.5 px-4 font-mono">566</td>
                        <td className="py-3.5 px-4 font-mono">5 Min</td>
                        <td className="py-3.5 px-4 font-mono">4 Hr 19 Min</td>
                        <td className="py-3.5 pl-4 font-mono">26 Min</td>
                      </tr>

                      {/* Lana Steiner */}
                      <tr>
                        <td className="py-3.5 pr-4">
                          <span className="font-semibold text-slate-900">Lana Steiner</span>
                        </td>
                        <td className="py-3.5 px-4 font-mono">451</td>
                        <td className="py-3.5 px-4 font-mono">2 Min</td>
                        <td className="py-3.5 px-4 font-mono">3 Hr 35 Min</td>
                        <td className="py-3.5 pl-4 font-mono">2 Hr 11 Min</td>
                      </tr>

                      {/* Demi Wilkinson */}
                      <tr>
                        <td className="py-3.5 pr-4">
                          <span className="font-semibold text-slate-900">Demi Wilkinson</span>
                        </td>
                        <td className="py-3.5 px-4 font-mono">335</td>
                        <td className="py-3.5 px-4 font-mono">4 Min</td>
                        <td className="py-3.5 px-4 font-mono">7 Hr 19 Min</td>
                        <td className="py-3.5 pl-4 font-mono">4 Hr 35 Min</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Bottom Live Metrics Overview with Floating Parallax */}
                <FloatingParallaxLayer offset={15}>
                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Live Queue Overview */}
                    <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                      <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                        <p className="text-xs font-bold text-slate-900">Overview</p>
                        <span className="text-[11px] text-slate-500">Last 30 days</span>
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-3">
                        <div>
                          <p className="text-[11px] text-slate-500">Open</p>
                          <p className="font-mono text-base font-bold text-slate-900">8,864</p>
                        </div>
                        <div>
                          <p className="text-[11px] text-slate-500">Unattended</p>
                          <p className="font-mono text-base font-bold text-slate-900">5,100</p>
                        </div>
                        <div>
                          <p className="text-[11px] text-slate-500">Unassigned</p>
                          <p className="font-mono text-base font-bold text-slate-900">828</p>
                        </div>
                      </div>
                    </div>

                    {/* CSAT Reports */}
                    <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                      <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                        <p className="text-xs font-bold text-slate-900">CSAT Reports</p>
                        <span className="text-[11px] text-slate-500">456 responses</span>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-[11px] text-slate-500">Satisfaction score</p>
                          <p className="font-mono text-base font-bold text-emerald-800">85%</p>
                        </div>
                        <div>
                          <p className="text-[11px] text-slate-500">Response rate</p>
                          <p className="font-mono text-base font-bold text-slate-900">92%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FloatingParallaxLayer>
              </div>
            </div>
          </ParallaxCard>

          {/* ================================================================ */}
          {/* BLOCK 3: Workflow Automations                                     */}
          {/* ================================================================ */}
          <ParallaxCard speed={30}>
            <div className="mx-auto max-w-6xl">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Workflow Automations
                </h3>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
                  Auto-resolve repetitive queries and route conversations to the right agent to speed up responses and improve efficiency.
                </p>
              </div>

              {/* Workflow Interface Mockup */}
              <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xl shadow-slate-950/6 sm:p-7">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
                  {/* Left: Multi-channel Inbound Stream */}
                  <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 lg:col-span-5">
                    <div className="border-b border-slate-200/80 pb-2.5">
                      <p className="text-xs font-bold text-slate-900">Multi-channel Support Inbox</p>
                      <p className="text-[11px] text-slate-500">Live incoming customer questions</p>
                    </div>

                    <div className="mt-3 space-y-2.5">
                      {/* Ticket 1 */}
                      <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-2xs">
                        <div className="flex items-center justify-between text-xs">
                          <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                            <WhatsAppLogo className="size-3.5" />
                            Victoria Hanson
                          </span>
                          <span className="text-[11px] text-slate-400">Now</span>
                        </div>
                        <p className="mt-1 text-xs font-bold text-slate-950">
                          Could you please provide a detailed breakdown?
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-500 line-clamp-1">
                          Can you tell me what&apos;s inside this serum? I&apos;m particular about ingredients...
                        </p>
                      </div>

                      {/* Ticket 2 */}
                      <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-2xs">
                        <div className="flex items-center justify-between text-xs">
                          <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                            <GmailLogo className="size-3.5" />
                            Janice Nelson
                          </span>
                          <span className="text-[11px] text-slate-400">Now</span>
                        </div>
                        <p className="mt-1 text-xs font-bold text-slate-950">
                          Re: Query for product availability
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-500 line-clamp-1">
                          Hi, Please take a look at the availability of the matte case...
                        </p>
                      </div>

                      {/* Ticket 3 */}
                      <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-2xs">
                        <div className="flex items-center justify-between text-xs">
                          <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                            <InstagramLogo className="size-3.5" />
                            Victoria Hanson
                          </span>
                          <span className="text-[11px] text-slate-400">Now</span>
                        </div>
                        <p className="mt-1 text-xs font-bold text-slate-950">
                          Hey, can you share some tips
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-500 line-clamp-1">
                          What&apos;s the best way to use the cleanser so I don&apos;t dry out my skin?
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: 4 Workflow Action Cards with Floating Parallax */}
                  <div className="lg:col-span-7">
                    <FloatingParallaxLayer offset={15}>
                      <div className="space-y-3">
                        {/* Card 1 */}
                        <div className="flex items-center gap-3.5 rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm hover:border-emerald-300 transition">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                            <Sparkle size={20} weight="fill" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900">
                              Automate routine order updates with AI
                            </h4>
                          </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex items-center gap-3.5 rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm hover:border-emerald-300 transition">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <ArrowBendUpRight size={20} weight="bold" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900">
                              Route technical issues to the right experts
                            </h4>
                          </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex items-center gap-3.5 rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm hover:border-emerald-300 transition">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                            <Flame size={20} weight="fill" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900">
                              Flag frustrated customers for priority handling
                            </h4>
                          </div>
                        </div>

                        {/* Card 4 */}
                        <div className="flex items-center gap-3.5 rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm hover:border-emerald-300 transition">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                            <Users size={20} weight="fill" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900">
                              Balance workload by sending tickets to available agents
                            </h4>
                          </div>
                        </div>
                      </div>
                    </FloatingParallaxLayer>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxCard>
        </div>
      </div>
    </section>
  )
}
