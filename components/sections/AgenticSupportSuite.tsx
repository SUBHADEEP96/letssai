"use client"

import { useEffect, useRef, useState } from "react"
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react"
import {
  ArrowBendUpRight,
  CaretLeft,
  CaretRight,
  ChartBar,
  Chats,
  DotsThree,
  Flame,
  MagnifyingGlass,
  PaperPlaneTilt,
  PhoneCall,
  Robot,
  Sparkle,
  Users,
} from "@phosphor-icons/react"

/* -------------------------------------------------------------------------- */
/* Authentic Official Omnichannel Brand SVGs                                   */
/* -------------------------------------------------------------------------- */

function WhatsAppLogo({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="WhatsApp"
    >
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
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Instagram"
    >
      <defs>
        <radialGradient id="igCardGrad" cx="20%" cy="105%" r="115%">
          <stop offset="0%" stopColor="#ffd521" />
          <stop offset="30%" stopColor="#f50000" />
          <stop offset="70%" stopColor="#b900b4" />
          <stop offset="100%" stopColor="#4f00b4" />
        </radialGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#igCardGrad)" />
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
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Gmail"
    >
      <path
        d="M4 8.5C4 7.1 5.1 6 6.5 6h19C26.9 6 28 7.1 28 8.5v15c0 1.4-1.1 2.5-2.5 2.5h-19C5.1 26 4 24.9 4 23.5v-15z"
        fill="#FFFFFF"
      />
      <path
        d="M28 8.5v15c0 1.4-1.1 2.5-2.5 2.5h-4.5V14.5L28 8.5z"
        fill="#4CAF50"
      />
      <path
        d="M4 8.5v15C4 24.9 5.1 26 6.5 26H11V14.5L4 8.5z"
        fill="#1E88E5"
      />
      <path d="M21 26V14.5l-5 4-5-4V26H21z" fill="#EA4335" />
      <path
        d="M28 8.5l-12 9.5-12-9.5C4 7.1 5.1 6 6.5 6h19c1.4 0 2.5 1.1 2.5 2.5z"
        fill="#EA4335"
      />
      <path
        d="M16 18l5-3.5 7-6C27.5 7.4 26.6 6 25.5 6H6.5c-1.1 0-2 .4-2.5 1.5l7 6 5 4.5z"
        fill="#FBBC05"
      />
    </svg>
  )
}

function MessengerLogo({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Messenger"
    >
      <defs>
        <radialGradient id="msgCardGrad" cx="20%" cy="100%" r="120%">
          <stop offset="0%" stopColor="#00C6FF" />
          <stop offset="50%" stopColor="#0078FF" />
          <stop offset="100%" stopColor="#A033FF" />
        </radialGradient>
      </defs>
      <path
        d="M16 3C8.8 3 3 8.4 3 15.2c0 3.8 1.9 7.3 5 9.5.3.2.4.5.3.8l-1 3.5c-.1.5.4.9.8.7l3.9-1.8c.3-.1.6-.1.8 0 1 .3 2.1.4 3.2.4 7.2 0 13-5.5 13-12.2S23.2 3 16 3z"
        fill="url(#msgCardGrad)"
      />
      <path
        d="M8.5 19.5l4.8-7.5c.7-1.1 2.3-1.4 3.3-.5l3.6 3.4c.3.3.7.3 1 0l4.8-3.7c.6-.5 1.5.3 1.1 1l-4.8 7.5c-.7 1.1-2.3 1.4-3.3.5l-3.6-3.4c-.3-.3-.7-.3-1 0l-4.8 3.7c-.7.5-1.5-.3-1.1-1z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

/* -------------------------------------------------------------------------- */
/* Sub-components for Each Feature Block                                      */
/* -------------------------------------------------------------------------- */

function UnifiedInboxCardContent() {
  return (
    <div className="flex w-full min-w-0 flex-col">
      {/* Block Header */}
      <div className="mb-4 flex flex-col gap-2.5 sm:mb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-2xl">
            Unified Support Inbox
          </h3>
          <p className="mt-0.5 text-xs leading-relaxed text-slate-600 sm:mt-1 sm:text-sm">
            Manage WhatsApp, Email, Instagram, and website chat from one dynamic
            dashboard so your team responds instantly.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 self-start rounded-xl border border-slate-200/80 bg-slate-50/80 px-2.5 py-1 shadow-2xs sm:self-auto sm:px-3 sm:py-1.5">
          <span className="text-[11px] font-semibold text-slate-600 sm:text-xs">
            Channels:
          </span>
          <WhatsAppLogo className="size-4 sm:size-4.5" />
          <InstagramLogo className="size-4 sm:size-4.5" />
          <GmailLogo className="size-4 sm:size-4.5" />
          <MessengerLogo className="size-4 sm:size-4.5" />
        </div>
      </div>

      {/* Software Window Mockup */}
      <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-950/5">
        {/* Window Bar */}
        <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50/90 px-3 py-2 sm:px-4 sm:py-2.5">
          <div className="flex items-center gap-1.5">
            <div className="size-2 rounded-full bg-[#ff5f56]" />
            <div className="size-2 rounded-full bg-[#ffbd2e]" />
            <div className="size-2 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[10px] text-slate-600 shadow-2xs sm:text-[11px]">
            <span className="truncate text-slate-400">app.letssai.com</span>
            <span className="text-slate-300">/</span>
            <span className="font-medium text-slate-800">inbox</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-slate-500 sm:text-[11px]">
            <span className="size-2 rounded-full bg-emerald-500" />
            <span className="hidden xs:inline">Active Session</span>
          </div>
        </div>

        {/* Responsive Multi-pane Interface */}
        <div className="grid min-h-[380px] w-full min-w-0 grid-cols-1 lg:grid-cols-12">
          {/* Left: Conversations List (Hidden on small mobile to give full stage to the live AI conversation, visible on lg) */}
          <div className="hidden border-b border-slate-200/70 p-3.5 lg:col-span-4 lg:block lg:border-r lg:border-b-0">
            <div className="relative mb-2.5">
              <MagnifyingGlass
                size={14}
                className="absolute top-2.5 left-2.5 text-slate-400"
              />
              <input
                type="text"
                readOnly
                value="Search messages, contacts, orders..."
                className="w-full rounded-lg border border-slate-200 bg-slate-50/70 py-1.5 pr-2.5 pl-8 text-xs text-slate-600 focus:outline-none"
              />
            </div>

            <div className="mb-2.5 flex items-center gap-2 text-[11px] font-semibold text-slate-600">
              <span className="border-b-2 border-emerald-950 pb-0.5 text-slate-900">
                Mine (1)
              </span>
              <span className="pb-0.5 text-slate-500">Unassigned (178)</span>
              <span className="pb-0.5 text-slate-500">All (599)</span>
            </div>

            <div className="space-y-1.5">
              {/* Active Chat Item */}
              <div className="rounded-xl border border-emerald-300/80 bg-emerald-50/40 p-2.5 shadow-2xs">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="flex size-7 items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white">
                        SS
                      </div>
                      <div className="absolute -right-1 -bottom-1">
                        <WhatsAppLogo className="size-3" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Sam S.</p>
                      <p className="text-[10px] text-slate-500">WhatsApp</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400">10:15 AM</span>
                </div>
                <p className="mt-1.5 line-clamp-1 text-xs font-medium text-slate-800">
                  Hey, need 3 sets of these? What&apos;s the discount...
                </p>
              </div>

              {/* Chat Item 2 */}
              <div className="rounded-xl border border-transparent p-2.5 transition hover:bg-slate-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="flex size-7 items-center justify-center rounded-full bg-slate-700 text-[11px] font-semibold text-white">
                        VH
                      </div>
                      <div className="absolute -right-1 -bottom-1">
                        <InstagramLogo className="size-3" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">
                        Victoria Hanson
                      </p>
                      <p className="text-[10px] text-slate-500">Instagram</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400">10:11 AM</span>
                </div>
                <p className="mt-1.5 line-clamp-1 text-xs text-slate-600">
                  Could you please provide detailed serum ingredients?
                </p>
              </div>

              {/* Chat Item 3 */}
              <div className="rounded-xl border border-transparent p-2.5 transition hover:bg-slate-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="flex size-7 items-center justify-center rounded-full bg-slate-700 text-[11px] font-semibold text-white">
                        GS
                      </div>
                      <div className="absolute -right-1 -bottom-1">
                        <GmailLogo className="size-3" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">
                        Gary M. Sobers
                      </p>
                      <p className="text-[10px] text-slate-500">Email</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400">09:42 AM</span>
                </div>
                <p className="mt-1.5 line-clamp-1 text-xs text-slate-600">
                  Inquiry regarding wholesale enterprise pricing...
                </p>
              </div>
            </div>
          </div>

          {/* Middle: Active Conversation Thread (Primary View on all screens) */}
          <div className="flex min-w-0 flex-1 flex-col justify-between p-3.5 sm:p-4 lg:col-span-5 lg:border-r">
            <div>
              {/* Customer Info Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="flex size-7 items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white sm:size-8">
                      SS
                    </div>
                    <div className="absolute -right-1 -bottom-1 lg:hidden">
                      <WhatsAppLogo className="size-3" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-xs font-bold text-slate-900 sm:text-sm">
                        Sam S.
                      </p>
                      <span className="rounded bg-emerald-50 px-1 py-0.5 text-[9px] font-semibold text-emerald-800 lg:hidden">
                        WhatsApp
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500">
                      +1 (555) 392-8190
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <PhoneCall
                    size={15}
                    className="cursor-pointer hover:text-slate-700"
                  />
                  <DotsThree
                    size={18}
                    weight="bold"
                    className="cursor-pointer hover:text-slate-700"
                  />
                </div>
              </div>

              {/* Message Thread */}
              <div className="mt-3.5 space-y-3">
                {/* Outbound Agent message */}
                <div className="flex justify-start">
                  <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-slate-100 px-3.5 py-2 text-xs text-slate-800 break-words sm:max-w-[85%]">
                    <p>
                      Hi Sam, how can I help you with the product you shared?
                    </p>
                    <span className="mt-1 block text-right text-[9px] text-slate-400">
                      10:14 AM
                    </span>
                  </div>
                </div>

                {/* Customer inquiry */}
                <div className="flex justify-end">
                  <div className="max-w-[88%] rounded-2xl rounded-tr-sm bg-slate-900 px-3.5 py-2 text-xs text-white break-words sm:max-w-[85%]">
                    <div className="mb-1.5 rounded-lg border border-white/10 bg-slate-800/80 p-2 text-[10px]">
                      <p className="font-semibold text-slate-200">
                        Ceramic Stoneware Mug Set
                      </p>
                      <p className="text-slate-400">$75.00 · In Stock</p>
                    </div>
                    <p>
                      Hey, need 3 sets of these for our team? What&apos;s the
                      discount offer and total amount?
                    </p>
                    <span className="mt-1 block text-right text-[9px] text-slate-400">
                      10:15 AM
                    </span>
                  </div>
                </div>

                {/* LetssAI Bot Auto-Response */}
                <div className="flex justify-start">
                  <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-emerald-200 bg-emerald-50/70 px-3.5 py-2 text-xs text-emerald-950 break-words sm:max-w-[85%]">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-800">
                      <Sparkle size={12} weight="fill" />
                      <span>LetssAI Bot</span>
                    </div>
                    <p className="mt-1 leading-relaxed">
                      Sure! I have reserved 3 sets in inventory and applied code{" "}
                      <span className="font-bold text-emerald-900">
                        STUDIO10
                      </span>{" "}
                      (10% off). Your total is{" "}
                      <span className="font-bold">$65.00</span> with free
                      express delivery.
                    </p>
                    <span className="mt-1 block text-right text-[9px] text-emerald-700">
                      10:16 AM
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Embedded Order Drawer Preview */}
              <div className="mt-3 rounded-xl border border-emerald-200/80 bg-emerald-50/40 p-2.5 text-xs text-emerald-950 lg:hidden">
                <div className="flex items-center justify-between font-semibold">
                  <span>Cart #84920 · 3x Ceramic Mug Sets</span>
                  <span className="font-mono font-bold">$65.00</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-[11px] text-emerald-800">
                  <span>Discount: STUDIO10 (-$10.00)</span>
                  <span className="font-medium text-emerald-900 underline">
                    Payment link sent
                  </span>
                </div>
              </div>
            </div>

            {/* Text Input */}
            <div className="mt-3.5 border-t border-slate-100 pt-2.5">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs">
                <input
                  type="text"
                  readOnly
                  value="Type a reply or press '/' for shortcuts..."
                  className="w-full min-w-0 bg-transparent text-slate-700 focus:outline-none"
                />
                <button
                  type="button"
                  aria-label="Send message"
                  className="shrink-0 rounded-lg bg-emerald-900 p-1.5 text-white transition hover:bg-emerald-800"
                >
                  <PaperPlaneTilt size={13} weight="fill" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Cart Drawer (Desktop 3-column view) */}
          <div className="hidden bg-slate-50/50 p-3.5 lg:col-span-3 lg:block">
            <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <p className="text-xs font-bold text-slate-900">Order Summary</p>
                <span className="text-[10px] text-slate-500">#84920</span>
              </div>

              <div className="mt-2.5 space-y-2 text-xs">
                <div>
                  <p className="font-semibold text-slate-800">
                    Ceramic Stoneware Mug Set
                  </p>
                  <p className="text-[10px] text-slate-500">Quantity: 3</p>
                </div>

                <div className="space-y-1 border-t border-slate-100 pt-1.5 text-[11px] text-slate-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-mono text-slate-800">$75.00</span>
                  </div>
                  <div className="flex justify-between font-semibold text-emerald-700">
                    <span>Discount (STUDIO10)</span>
                    <span className="font-mono">-$10.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-semibold text-emerald-700">Free</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-100 pt-1 text-xs font-bold text-slate-950">
                    <span>Total</span>
                    <span className="font-mono">$65.00</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-2 w-full rounded-lg bg-emerald-950 py-2 text-xs font-semibold text-white shadow-2xs transition hover:bg-emerald-900"
                >
                  Send Payment Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LiveAgentAnalyticsCardContent() {
  return (
    <div className="flex w-full min-w-0 flex-col">
      {/* Block Header */}
      <div className="mb-4 sm:mb-5">
        <h3 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-2xl">
          Live Agent Analytics
        </h3>
        <p className="mt-0.5 text-xs leading-relaxed text-slate-600 sm:mt-1 sm:text-sm">
          Track conversation volume, monitor unattended and unassigned chats, and
          view real-time agent performance.
        </p>
      </div>

      {/* Analytics Dashboard Content */}
      <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-xl shadow-slate-950/5 sm:p-5">
        {/* Responsive Metrics Table with clean horizontal scrolling on mobile */}
        <div className="w-full max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden touch-pan-x">
          <table className="w-full min-w-[340px] text-left text-xs sm:min-w-[480px]">
            <thead>
              <tr className="border-b border-slate-200 text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                <th className="pr-3 pb-2.5 sm:pr-4">Agent Name</th>
                <th className="px-2 pb-2.5 sm:px-4">Resolved</th>
                <th className="px-2 pb-2.5 sm:px-4">Avg First Response</th>
                <th className="hidden px-2 pb-2.5 sm:table-cell sm:px-4">
                  Avg Resolution
                </th>
                <th className="hidden pl-2 pb-2.5 sm:table-cell sm:pl-4">
                  Avg Response
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
              {/* LetssAI Bot Row */}
              <tr className="bg-emerald-50/50">
                <td className="py-2.5 pr-3 sm:py-3 sm:pr-4">
                  <div className="flex items-center gap-2">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-emerald-950 text-white sm:size-7">
                      <Sparkle size={13} weight="fill" />
                    </div>
                    <div className="min-w-0">
                      <span className="block truncate font-bold text-emerald-950">
                        LetssAI Bot
                      </span>
                      <span className="block text-[10px] text-slate-400">
                        Autonomous AI
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2.5 font-mono font-bold text-slate-900 sm:px-4 sm:py-3">
                  798
                </td>
                <td className="px-2 py-2.5 font-mono font-semibold text-emerald-800 sm:px-4 sm:py-3">
                  1 Min
                </td>
                <td className="hidden px-2 py-2.5 font-mono text-slate-700 sm:table-cell sm:px-4 sm:py-3">
                  0 Hr 22 Min
                </td>
                <td className="hidden pl-2 py-2.5 font-mono font-bold text-emerald-900 sm:table-cell sm:pl-4 sm:py-3">
                  1 Min
                </td>
              </tr>

              {/* Phoenix Baker */}
              <tr>
                <td className="py-2 pr-3 sm:py-2.5 sm:pr-4">
                  <span className="font-semibold text-slate-900">
                    Phoenix Baker
                  </span>
                </td>
                <td className="px-2 py-2 font-mono sm:px-4 sm:py-2.5">566</td>
                <td className="px-2 py-2 font-mono sm:px-4 sm:py-2.5">5 Min</td>
                <td className="hidden px-2 py-2 font-mono sm:table-cell sm:px-4 sm:py-2.5">
                  4 Hr 19 Min
                </td>
                <td className="hidden pl-2 py-2 font-mono sm:table-cell sm:pl-4 sm:py-2.5">
                  26 Min
                </td>
              </tr>

              {/* Lana Steiner */}
              <tr>
                <td className="py-2 pr-3 sm:py-2.5 sm:pr-4">
                  <span className="font-semibold text-slate-900">
                    Lana Steiner
                  </span>
                </td>
                <td className="px-2 py-2 font-mono sm:px-4 sm:py-2.5">451</td>
                <td className="px-2 py-2 font-mono sm:px-4 sm:py-2.5">2 Min</td>
                <td className="hidden px-2 py-2 font-mono sm:table-cell sm:px-4 sm:py-2.5">
                  3 Hr 35 Min
                </td>
                <td className="hidden pl-2 py-2 font-mono sm:table-cell sm:pl-4 sm:py-2.5">
                  2 Hr 11 Min
                </td>
              </tr>

              {/* Demi Wilkinson */}
              <tr>
                <td className="py-2 pr-3 sm:py-2.5 sm:pr-4">
                  <span className="font-semibold text-slate-900">
                    Demi Wilkinson
                  </span>
                </td>
                <td className="px-2 py-2 font-mono sm:px-4 sm:py-2.5">335</td>
                <td className="px-2 py-2 font-mono sm:px-4 sm:py-2.5">4 Min</td>
                <td className="hidden px-2 py-2 font-mono sm:table-cell sm:px-4 sm:py-2.5">
                  7 Hr 19 Min
                </td>
                <td className="hidden pl-2 py-2 font-mono sm:table-cell sm:pl-4 sm:py-2.5">
                  4 Hr 35 Min
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Live Metrics Overview */}
        <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-5 sm:grid-cols-2">
          {/* Live Queue Overview */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3 sm:p-3.5">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
              <p className="text-xs font-bold text-slate-900">Queue Overview</p>
              <span className="text-[10px] text-slate-500">Last 30 days</span>
            </div>
            <div className="mt-2.5 grid grid-cols-3 gap-1.5 sm:gap-2">
              <div>
                <p className="text-[10px] text-slate-500">Open</p>
                <p className="font-mono text-sm font-bold text-slate-900 sm:text-base">
                  8,864
                </p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500">Unattended</p>
                <p className="font-mono text-sm font-bold text-slate-900 sm:text-base">
                  5,100
                </p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500">Unassigned</p>
                <p className="font-mono text-sm font-bold text-slate-900 sm:text-base">
                  828
                </p>
              </div>
            </div>
          </div>

          {/* CSAT Reports */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3 sm:p-3.5">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
              <p className="text-xs font-bold text-slate-900">CSAT Telemetry</p>
              <span className="text-[10px] text-slate-500">
                456 verified reviews
              </span>
            </div>
            <div className="mt-2.5 grid grid-cols-2 gap-2">
              <div>
                <p className="text-[10px] text-slate-500">Satisfaction score</p>
                <p className="font-mono text-sm font-bold text-emerald-800 sm:text-base">
                  85%
                </p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500">Response rate</p>
                <p className="font-mono text-sm font-bold text-slate-900 sm:text-base">
                  92%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function WorkflowAutomationsCardContent() {
  return (
    <div className="flex w-full min-w-0 flex-col">
      {/* Block Header */}
      <div className="mb-4 sm:mb-5">
        <h3 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-2xl">
          Workflow Automations
        </h3>
        <p className="mt-0.5 text-xs leading-relaxed text-slate-600 sm:mt-1 sm:text-sm">
          Auto-resolve repetitive queries and route conversations to the right
          agent to speed up responses and improve efficiency.
        </p>
      </div>

      {/* Workflow Interface Mockup */}
      <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-xl shadow-slate-950/5 sm:p-5">
        <div className="grid grid-cols-1 items-start gap-4 sm:gap-5 lg:grid-cols-12">
          {/* Left: Multi-channel Inbound Stream */}
          <div className="w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50/60 p-3 sm:p-3.5 lg:col-span-5">
            <div className="border-b border-slate-200/80 pb-2">
              <p className="text-xs font-bold text-slate-900">
                Multi-channel Support Inbox
              </p>
              <p className="text-[10px] text-slate-500">
                Live incoming customer questions
              </p>
            </div>

            <div className="mt-2.5 space-y-2">
              {/* Ticket 1 */}
              <div className="rounded-lg border border-slate-200 bg-white p-2.5 shadow-2xs">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                    <WhatsAppLogo className="size-3.5" />
                    Victoria Hanson
                  </span>
                  <span className="text-[10px] text-slate-400">Now</span>
                </div>
                <p className="mt-1 text-xs font-bold text-slate-950">
                  Could you please provide a detailed breakdown?
                </p>
                <p className="mt-0.5 line-clamp-1 text-[11px] text-slate-500">
                  Can you tell me what&apos;s inside this serum? I&apos;m
                  particular about ingredients...
                </p>
              </div>

              {/* Ticket 2 */}
              <div className="rounded-lg border border-slate-200 bg-white p-2.5 shadow-2xs">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                    <GmailLogo className="size-3.5" />
                    Janice Nelson
                  </span>
                  <span className="text-[10px] text-slate-400">Now</span>
                </div>
                <p className="mt-1 text-xs font-bold text-slate-950">
                  Re: Query for product availability
                </p>
                <p className="mt-0.5 line-clamp-1 text-[11px] text-slate-500">
                  Hi, Please take a look at the availability of the matte
                  case...
                </p>
              </div>

              {/* Ticket 3 (shown on sm and above) */}
              <div className="hidden rounded-lg border border-slate-200 bg-white p-2.5 shadow-2xs sm:block">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                    <InstagramLogo className="size-3.5" />
                    Victoria Hanson
                  </span>
                  <span className="text-[10px] text-slate-400">Now</span>
                </div>
                <p className="mt-1 text-xs font-bold text-slate-950">
                  Hey, can you share some tips
                </p>
                <p className="mt-0.5 line-clamp-1 text-[11px] text-slate-500">
                  What&apos;s the best way to use the cleanser so I don&apos;t
                  dry out my skin?
                </p>
              </div>
            </div>
          </div>

          {/* Right: 4 Workflow Action Cards */}
          <div className="w-full min-w-0 lg:col-span-7">
            <div className="space-y-2 sm:space-y-2.5">
              {/* Card 1 */}
              <div className="flex items-center gap-2.5 rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-2xs transition hover:border-emerald-300 sm:gap-3 sm:p-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600 sm:size-9">
                  <Sparkle size={17} weight="fill" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-slate-900 sm:text-sm">
                    Automate routine order updates with AI
                  </h4>
                  <p className="text-[10px] text-slate-500 sm:text-[11px]">
                    Instantly resolves status, refunds, and delivery inquiries.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-center gap-2.5 rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-2xs transition hover:border-emerald-300 sm:gap-3 sm:p-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:size-9">
                  <ArrowBendUpRight size={17} weight="bold" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-slate-900 sm:text-sm">
                    Route technical issues to the right experts
                  </h4>
                  <p className="text-[10px] text-slate-500 sm:text-[11px]">
                    Classifies complexity and routes to specialized tier-2 agents.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-center gap-2.5 rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-2xs transition hover:border-emerald-300 sm:gap-3 sm:p-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 sm:size-9">
                  <Flame size={17} weight="fill" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-slate-900 sm:text-sm">
                    Flag frustrated customers for priority handling
                  </h4>
                  <p className="text-[10px] text-slate-500 sm:text-[11px]">
                    Sentiment analysis flags churn risk for immediate human manager intervention.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex items-center gap-2.5 rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-2xs transition hover:border-emerald-300 sm:gap-3 sm:p-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 sm:size-9">
                  <Users size={17} weight="fill" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-slate-900 sm:text-sm">
                    Balance workload by sending tickets to available agents
                  </h4>
                  <p className="text-[10px] text-slate-500 sm:text-[11px]">
                    Evenly distributes queue load across active agents based on capacity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Main AI Customer Support Suite: Spreaded Cards Scroll Carousel             */
/* -------------------------------------------------------------------------- */

export function AgenticSupportSuite() {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [activeStep, setActiveStep] = useState(0)

  // Track vertical scroll progress across the parent track (0.0 to 1.0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Physics-based spring smoothing for a liquid, stutter-free scroll feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  })

  // Synchronize active indicator pill with scroll position
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest < 0.33) setActiveStep(0)
      else if (latest < 0.68) setActiveStep(1)
      else setActiveStep(2)
    })
  }, [scrollYProgress])

  // Smooth scroll to target card section on desktop
  const scrollToCard = (index: number) => {
    if (!containerRef.current) return
    const containerTop = containerRef.current.offsetTop
    const totalScrollable =
      containerRef.current.offsetHeight - window.innerHeight
    const targets = [0.08, 0.5, 0.9]
    window.scrollTo({
      top: containerTop + totalScrollable * targets[index],
      behavior: "smooth",
    })
  }

  /* ---------------- CARD 1 (Inbox) Transforms ---------------- */
  // Active: 0.00 -> 0.28
  // Fades and spreads/stacks behind: 0.28 -> 0.58
  const card1Y = useTransform(smoothProgress, [0, 0.28, 0.58], [0, 0, -32])
  const card1Scale = useTransform(smoothProgress, [0, 0.28, 0.58], [1, 1, 0.94])
  const card1Rotate = useTransform(
    smoothProgress,
    [0, 0.28, 0.58],
    [0, 0, -1.8]
  )
  const card1Opacity = useTransform(smoothProgress, [0.28, 0.58], [1, 0.12])
  const card1Shade = useTransform(smoothProgress, [0.28, 0.58], [0, 0.25])

  /* ---------------- CARD 2 (Analytics) Transforms ------------ */
  // Enters: 0.24 -> 0.44
  // Active: 0.44 -> 0.64
  // Fades and spreads/stacks behind: 0.64 -> 0.86
  const card2Y = useTransform(
    smoothProgress,
    [0.22, 0.44, 0.64, 0.86],
    [120, 0, 0, -28]
  )
  const card2Scale = useTransform(
    smoothProgress,
    [0.22, 0.44, 0.64, 0.86],
    [0.94, 1, 1, 0.95]
  )
  const card2Rotate = useTransform(smoothProgress, [0.64, 0.86], [0, 1.4])
  const card2Opacity = useTransform(
    smoothProgress,
    [0.22, 0.42, 0.66, 0.86],
    [0, 1, 1, 0.12]
  )
  const card2Shade = useTransform(smoothProgress, [0.66, 0.86], [0, 0.25])

  /* ---------------- CARD 3 (Automations) Transforms ---------- */
  // Enters: 0.60 -> 0.82
  // Active: 0.82 -> 1.00
  const card3Y = useTransform(smoothProgress, [0.6, 0.82], [120, 0])
  const card3Scale = useTransform(smoothProgress, [0.6, 0.82], [0.94, 1])
  const card3Opacity = useTransform(smoothProgress, [0.6, 0.8], [0, 1])

  const steps = [
    {
      id: 0,
      label: "Unified Support Inbox",
      icon: Chats,
    },
    {
      id: 1,
      label: "Live Agent Analytics",
      icon: ChartBar,
    },
    {
      id: 2,
      label: "Workflow Automations",
      icon: Robot,
    },
  ]

  return (
    <section
      ref={containerRef}
      id="agentic-support-suite"
      aria-labelledby="agentic-suite-heading"
      className="relative w-full max-w-full overflow-x-clip bg-[#f7f8f4] md:h-[320vh]"
    >
      {/* Subtle depth lighting glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-1/2 -z-10 h-[500px] w-[850px] -translate-x-1/2 rounded-full bg-gradient-to-b from-emerald-100/30 via-teal-50/20 to-transparent blur-3xl"
      />

      {/* ================================================================ */}
      {/* DESKTOP & TABLET: Pinned Spreaded Cards Deck Carousel (md:)       */}
      {/* ================================================================ */}
      <div className="hidden px-4 py-10 sm:px-6 md:sticky md:top-14 md:flex md:min-h-[calc(100vh-4rem)] md:flex-col md:justify-center lg:px-8 lg:md:top-16">
        <div className="mx-auto w-full max-w-6xl">
          {/* Section Heading & Subtitle */}
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="agentic-suite-heading"
              className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl"
            >
              AI Customer Support Suite
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Unified inbox management, live response telemetry, and autonomous
              workflow routing across your customer channels.
            </p>

            {/* Step Switcher Pill Bar (Desktop) */}
            <div className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white/90 p-1 shadow-xs backdrop-blur-md">
              {steps.map((step) => {
                const Icon = step.icon
                const isActive = activeStep === step.id
                return (
                  <button
                    key={step.id}
                    onClick={() => scrollToCard(step.id)}
                    type="button"
                    className={`relative flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                      isActive
                        ? "text-emerald-950"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeDeckPill"
                        className="absolute inset-0 rounded-full bg-emerald-100/90"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <Icon size={14} weight={isActive ? "fill" : "regular"} />
                      <span>{step.label}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Spreaded Cards Stage Container */}
          <div className="relative mt-7 min-h-[520px] w-full">
            {/* CARD 1: Unified Support Inbox */}
            <motion.div
              style={
                prefersReducedMotion
                  ? {}
                  : {
                      y: card1Y,
                      scale: card1Scale,
                      rotate: card1Rotate,
                      opacity: card1Opacity,
                      transformOrigin: "50% 0%",
                      zIndex: 10,
                    }
              }
              className="absolute inset-0 overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-5 shadow-2xl shadow-slate-950/8 will-change-transform sm:p-6"
            >
              <motion.div
                style={{ opacity: card1Shade }}
                className="pointer-events-none absolute inset-0 z-20 rounded-3xl bg-slate-950 transition-opacity"
              />
              <div className="relative z-10">
                <UnifiedInboxCardContent />
              </div>
            </motion.div>

            {/* CARD 2: Live Agent Analytics */}
            <motion.div
              style={
                prefersReducedMotion
                  ? {}
                  : {
                      y: card2Y,
                      scale: card2Scale,
                      rotate: card2Rotate,
                      opacity: card2Opacity,
                      transformOrigin: "50% 0%",
                      zIndex: 20,
                    }
              }
              className="absolute inset-0 overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-5 shadow-2xl shadow-slate-950/8 will-change-transform sm:p-6"
            >
              <motion.div
                style={{ opacity: card2Shade }}
                className="pointer-events-none absolute inset-0 z-20 rounded-3xl bg-slate-950 transition-opacity"
              />
              <div className="relative z-10">
                <LiveAgentAnalyticsCardContent />
              </div>
            </motion.div>

            {/* CARD 3: Workflow Automations */}
            <motion.div
              style={
                prefersReducedMotion
                  ? {}
                  : {
                      y: card3Y,
                      scale: card3Scale,
                      opacity: card3Opacity,
                      transformOrigin: "50% 0%",
                      zIndex: 30,
                    }
              }
              className="absolute inset-0 overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-5 shadow-2xl shadow-slate-950/8 will-change-transform sm:p-6"
            >
              <div className="relative z-10">
                <WorkflowAutomationsCardContent />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* MOBILE & SMALL TABLET: 100% Responsive Carousel (< md)           */}
      {/* ================================================================ */}
      <div className="block w-full max-w-full px-3.5 py-12 sm:px-6 md:hidden">
        <div className="mx-auto w-full max-w-xl">
          {/* Header (Identical copy & hierarchy to desktop) */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              AI Customer Support Suite
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-slate-600 sm:text-sm">
              Unified inbox management, live response telemetry, and autonomous
              workflow routing across your customer channels.
            </p>

            {/* Mobile Tab Bar (Full Names with Icons, Horizontally Scrollable without breaking page) */}
            <div className="mt-5 w-full max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="inline-flex min-w-max items-center justify-start gap-1.5 rounded-full border border-slate-200/90 bg-white p-1 shadow-2xs">
                {steps.map((step) => {
                  const Icon = step.icon
                  const isActive = activeStep === step.id
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      type="button"
                      className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-all ${
                        isActive
                          ? "bg-emerald-950 text-white shadow-2xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <Icon
                        size={14}
                        weight={isActive ? "fill" : "regular"}
                        className="shrink-0"
                      />
                      <span>{step.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Active Mobile Card Display with Smooth Fade Transition */}
          <div className="mt-5 w-full min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="w-full min-w-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-xl shadow-slate-950/5 sm:p-5"
              >
                {activeStep === 0 && <UnifiedInboxCardContent />}
                {activeStep === 1 && <LiveAgentAnalyticsCardContent />}
                {activeStep === 2 && <WorkflowAutomationsCardContent />}
              </motion.div>
            </AnimatePresence>

            {/* Mobile Next / Previous Controls */}
            <div className="mt-3.5 flex items-center justify-between text-xs text-slate-600">
              <button
                type="button"
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-medium shadow-2xs disabled:opacity-35"
              >
                <CaretLeft size={14} />
                <span>Previous</span>
              </button>
              <div className="flex items-center gap-1 text-[11px] font-medium text-slate-500">
                {steps.map((s) => (
                  <span
                    key={s.id}
                    className={`inline-block size-1.5 rounded-full transition-all ${
                      activeStep === s.id
                        ? "w-4 bg-emerald-900"
                        : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setActiveStep((prev) => Math.min(2, prev + 1))}
                disabled={activeStep === 2}
                className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-medium shadow-2xs disabled:opacity-35"
              >
                <span>Next</span>
                <CaretRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
