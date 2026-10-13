"use client"

import { useEffect, useRef, useState } from "react"

const HERO_VIDEO_SRC =
  "https://q6zraewjln8atxgp.public.blob.vercel-storage.com/Letssai-hero"

export function HeroVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Enforce default 0.75x playback speed
    video.playbackRate = 0.75

    const handlePlay = () => {
      if (video.playbackRate !== 0.75) {
        video.playbackRate = 0.75
      }
    }

    video.addEventListener("play", handlePlay)

    // Attempt autoplay gracefully if paused
    if (video.paused) {
      video.play().catch(() => {
        // Autoplay policy prevented playback until user interaction
      })
    }

    return () => {
      video.removeEventListener("play", handlePlay)
    }
  }, [])

  const handleLoadedData = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
    setIsLoaded(true)
  }

  return (
    <div className="relative h-[62vh] min-h-[360px] w-full max-h-[860px] overflow-hidden bg-slate-950 sm:h-[72vh] sm:min-h-[480px] lg:h-[calc(100vh-4.5rem)] lg:min-h-[580px]">
      {/* Background skeleton while video is buffering */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 z-0 flex items-center justify-center bg-slate-950 transition-opacity duration-700 ${
          isLoaded ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900" />
        <div className="relative z-10 flex flex-col items-center gap-3 text-emerald-500/60">
          <div className="size-10 rounded-full border-2 border-emerald-500/20 border-t-emerald-400 animate-spin" />
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-400/50">
            Loading preview...
          </span>
        </div>
      </div>

      {/* Hero background video */}
      <video
        ref={videoRef}
        src={HERO_VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={handleLoadedData}
        onLoadedMetadata={() => {
          if (videoRef.current) videoRef.current.playbackRate = 0.75
        }}
        className={`relative z-10 h-full w-full object-cover object-center transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        aria-label="LetssAI hero video showcase"
      />
    </div>
  )
}
