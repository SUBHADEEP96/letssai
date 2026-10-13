export function HeroVideoSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-[62vh] min-h-[360px] w-full max-h-[860px] items-center justify-center overflow-hidden bg-slate-950 sm:h-[72vh] sm:min-h-[480px] lg:h-[calc(100vh-4.5rem)] lg:min-h-[580px]"
    >
      {/* Ambient shimmering background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 animate-pulse" />

      {/* Subtle modern placeholder spinner */}
      <div className="relative z-10 flex flex-col items-center gap-3 text-emerald-500/60">
        <div className="size-10 rounded-full border-2 border-emerald-500/20 border-t-emerald-400 animate-spin" />
        <span className="font-mono text-xs tracking-wider uppercase text-emerald-400/50">
          Loading preview...
        </span>
      </div>
    </div>
  )
}
