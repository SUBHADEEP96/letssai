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
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Top Floating / Sticky Action Header */}
      <div className="sticky top-0 z-30 w-full border-b border-border/80 bg-background/95 backdrop-blur-md px-4 py-3 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Back link & Title */}
          <div className="flex items-center gap-3 min-w-0">
            <Link
              href={brochure.industryHref}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors shrink-0"
              title="Back to Industry"
            >
              <ArrowLeft size={16} weight="bold" />
              <span className="hidden sm:inline">Back</span>
            </Link>

            <span className="h-4 w-px bg-border shrink-0 hidden sm:block" />

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary shrink-0">
                  <FileText size={12} weight="fill" />
                  PDF Brochure
                </span>
                <span className="text-xs text-muted-foreground hidden md:inline">
                  {brochure.pageCount} Pages • {brochure.fileSize}
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-semibold truncate text-foreground">
                {brochure.title}
              </h1>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-3 ml-auto shrink-0">
            {/* Share / Copy link */}
            <button
              onClick={handleCopyLink}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-border px-3 py-2 text-xs font-medium text-foreground hover:bg-muted transition-colors"
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
              className="inline-flex items-center gap-1.5 rounded-xl border border-border px-3 py-2 text-xs font-medium text-foreground hover:bg-muted transition-colors"
              title="Open full PDF in browser tab"
            >
              <ArrowSquareOut size={15} weight="bold" />
              <span className="hidden md:inline">Full Screen</span>
            </a>

            {/* Download PDF button */}
            <a
              href={brochure.pdfUrl}
              download={brochure.fileName}
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-xs sm:text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              title="Download PDF to your device"
            >
              <DownloadSimple size={16} weight="bold" />
              <span>Download PDF</span>
            </a>

            {/* Book Call */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-1.5 rounded-xl border border-primary/30 bg-primary/5 px-3.5 py-2 text-xs sm:text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
            >
              <CalendarDots size={16} weight="bold" />
              <span>Book Call</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 sm:pt-8 space-y-10">
        {/* Document Headline & Subtitle */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <Sparkle size={13} weight="fill" />
            <span>Official Client Guide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            {brochure.title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            {brochure.subtitle}
          </p>
        </div>

        {/* Mobile notice & quick actions banner */}
        <div className="block lg:hidden rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-primary" weight="fill" />
                <span className="font-semibold text-sm sm:text-base text-foreground">
                  Download or View the 8-Page Brochure
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                For the best mobile viewing experience, open directly in your device’s PDF reader or download the document.
              </p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={brochure.pdfUrl}
                download={brochure.fileName}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow"
              >
                <DownloadSimple size={16} weight="bold" />
                <span>Download ({brochure.fileSize})</span>
              </a>
              <a
                href={brochure.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium text-foreground hover:bg-muted"
              >
                <ArrowSquareOut size={16} weight="bold" />
                <span>Open in Tab</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main PDF Embed Container */}
        <div className="relative w-full rounded-2xl border border-border bg-neutral-950/40 p-1 sm:p-2 shadow-2xl backdrop-blur-sm">
          <div className="relative w-full overflow-hidden rounded-xl bg-white aspect-[3/4] sm:aspect-auto sm:h-[82vh] min-h-[500px]">
            <iframe
              src={`${brochure.pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
              className="w-full h-full border-0"
              title={brochure.title}
              loading="lazy"
            />
          </div>
        </div>

        {/* What's Inside / Key Capabilities Summary */}
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">
              What’s Covered in this Brochure
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-1">
              Core AI Solutions for Real Estate
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              How LetssAI helps real estate developers, brokerage firms, and property managers convert cold leads into booked site tours without manual follow-up overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {brochure.highlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/80 bg-background/60 p-5 space-y-2 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-primary font-semibold text-sm sm:text-base">
                  <CheckCircle size={18} weight="fill" />
                  <h4>{item.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to action card */}
          <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-semibold text-foreground">
                Want to see a custom live demo for your project?
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                We'll show you how AI calling and WhatsApp automation work with your current listings.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={brochure.pdfUrl}
                download={brochure.fileName}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border px-4 py-2.5 text-xs sm:text-sm font-medium text-foreground hover:bg-muted transition-colors flex-1 sm:flex-none"
              >
                <DownloadSimple size={16} weight="bold" />
                <span>Save PDF</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-all flex-1 sm:flex-none"
              >
                <CalendarDots size={16} weight="bold" />
                <span>Book 15-Min Discovery Call</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
