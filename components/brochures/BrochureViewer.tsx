"use client"

import { useState } from "react"
import { Link } from "@/i18n/navigation"
import type { Brochure } from "@/lib/brochures"
import {
  DownloadSimple,
  ArrowSquareOut,
  CalendarDots,
  FileText,
  CheckCircle,
  ArrowLeft,
  Sparkle,
  Copy,
  Check,
} from "@phosphor-icons/react"

interface BrochureViewerProps {
  brochure: Brochure
}

export function BrochureViewer({ brochure }: BrochureViewerProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      }
    } catch {
      // ignore
    }
  }

  return (
    <div className="min-h-screen bg-background pb-20 text-foreground">
      {/* Top Floating / Sticky Action Header */}
      <div className="sticky top-0 z-30 w-full border-b border-border/80 bg-background/95 px-4 py-3 backdrop-blur-md sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          {/* Back link & Title */}
          <div className="flex min-w-0 items-center gap-3">
            <Link
              href={brochure.industryHref}
              className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
              title="Back to Industry"
            >
              <ArrowLeft size={16} weight="bold" />
              <span className="hidden sm:inline">Back</span>
            </Link>

            <span className="hidden h-4 w-px shrink-0 bg-border sm:block" />
          </div>

          {/* Quick Actions */}
          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
            {/* Share / Copy link */}
            <button
              onClick={handleCopyLink}
              className="hidden items-center gap-1.5 rounded-xl border border-border px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted sm:inline-flex"
              title="Copy link to brochure"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-primary" weight="bold" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Share</span>
                </>
              )}
            </button>

            {/* Direct Open in new tab / fullscreen */}
            <a
              href={brochure.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted"
              title="Open full PDF in browser tab"
            >
              <ArrowSquareOut size={15} weight="bold" />
              <span className="hidden md:inline">Full Screen</span>
            </a>

            {/* Download PDF button */}
            <a
              href={brochure.pdfUrl}
              download={brochure.fileName}
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:scale-[1.02] hover:bg-primary/90 active:scale-[0.98] sm:text-sm"
              title="Download PDF to your device"
            >
              <DownloadSimple size={16} weight="bold" />
              <span>Download PDF</span>
            </a>

            {/* Book Call */}
            <Link
              href="/ai-discovery"
              className="hidden items-center gap-1.5 rounded-xl border border-primary/30 bg-primary/5 px-3.5 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/10 sm:text-sm lg:inline-flex"
            >
              <CalendarDots size={16} weight="bold" />
              <span>Book Call</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-10 px-4 pt-6 sm:px-8 sm:pt-8">
        {/* Document Headline & Subtitle */}
        <div className="mx-auto max-w-3xl space-y-2.5 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <Sparkle size={13} weight="fill" />
            <span>Official Client Guide</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {brochure.title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            {brochure.subtitle}
          </p>
        </div>

        {/* Mobile notice & quick actions banner */}
        <div className="block rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-4 sm:p-5 lg:hidden">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-primary" weight="fill" />
                <span className="text-sm font-semibold text-foreground sm:text-base">
                  Download or View the 8-Page Brochure
                </span>
              </div>
              <p className="text-xs text-muted-foreground sm:text-sm">
                For the best mobile viewing experience, open directly in your
                device’s PDF reader or download the document.
              </p>
            </div>
            <div className="flex w-full items-center gap-2 sm:w-auto">
              <a
                href={brochure.pdfUrl}
                download={brochure.fileName}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow sm:flex-none sm:text-sm"
              >
                <DownloadSimple size={16} weight="bold" />
                <span>Download ({brochure.fileSize})</span>
              </a>
              <a
                href={brochure.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-medium text-foreground hover:bg-muted sm:flex-none sm:text-sm"
              >
                <ArrowSquareOut size={16} weight="bold" />
                <span>Open in Tab</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main PDF Embed Container */}
        <div className="relative w-full rounded-2xl border border-border bg-neutral-950/40 p-1 shadow-2xl backdrop-blur-sm sm:p-2">
          <div className="relative aspect-[3/4] min-h-[500px] w-full overflow-hidden rounded-xl bg-white sm:aspect-auto sm:h-[82vh]">
            <iframe
              src={`${brochure.pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
              className="h-full w-full border-0"
              title={brochure.title}
              loading="lazy"
            />
          </div>
        </div>

        {/* What's Inside / Key Capabilities Summary */}
        <div className="space-y-8 rounded-3xl border border-border bg-card p-6 sm:p-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">
              What’s Covered in this Brochure
            </span>
            <h3 className="mt-1 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Core AI Solutions for Real Estate
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              How LetssAI helps real estate developers, brokerage firms, and
              property managers convert cold leads into booked site tours
              without manual follow-up overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {brochure.highlights.map((item, idx) => (
              <div
                key={idx}
                className="space-y-2 rounded-2xl border border-border/80 bg-background/60 p-5 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-primary sm:text-base">
                  <CheckCircle size={18} weight="fill" />
                  <h4>{item.title}</h4>
                </div>
                <p className="pl-6 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to action card */}
          <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-4 sm:flex-row sm:items-center">
            <div>
              <h4 className="text-base font-semibold text-foreground">
                Want to see a custom live demo for your project?
              </h4>
              <p className="text-xs text-muted-foreground sm:text-sm">
                We'll show you how AI calling and WhatsApp automation work with
                your current listings.
              </p>
            </div>
            <div className="flex w-full items-center gap-3 sm:w-auto">
              <a
                href={brochure.pdfUrl}
                download={brochure.fileName}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border px-4 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-muted sm:flex-none sm:text-sm"
              >
                <DownloadSimple size={16} weight="bold" />
                <span>Save PDF</span>
              </a>
              <Link
                href="/ai-discovery"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 sm:flex-none sm:text-sm"
              >
                <CalendarDots size={16} weight="bold" />
                <span>Book 30-Min Discovery Call</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
