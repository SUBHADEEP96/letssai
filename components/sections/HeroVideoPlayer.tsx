"use client"

import { useCallback, useEffect, useRef, useState } from "react"

const HERO_VIDEO_SRC =
  "https://q6zraewjln8atxgp.public.blob.vercel-storage.com/Letssai-hero"

export function HeroVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Explicitly configure DOM video properties immediately upon node attachment
  const setVideoRef = useCallback((node: HTMLVideoElement | null) => {
    if (node) {
      // Critical WebKit / iOS Safari autoplay requirements:
      // In WebKit, DOM properties `muted` and `defaultMuted` MUST be explicitly true
      node.defaultMuted = true
      node.muted = true
      node.playsInline = true
      node.setAttribute("muted", "")
      node.setAttribute("playsinline", "")
      node.setAttribute("webkit-playsinline", "true")
      node.setAttribute("x5-playsinline", "true")
    }
    videoRef.current = node
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Ensure audio policy compliance
    video.defaultMuted = true
    video.muted = true

    const playVideo = () => {
      if (!video) return
      video.defaultMuted = true
      video.muted = true

      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Apply 0.75x speed once playback has actively initiated
            video.playbackRate = 0.75
            setIsLoaded(true)
          })
          .catch(() => {
            // Autoplay may be restricted (e.g. iOS Low Power Mode)
          })
      }
    }

    // Trigger playback as soon as enough data is buffered
    if (video.readyState >= 2) {
      playVideo()
    } else {
      video.addEventListener("canplay", playVideo, { once: true })
      video.addEventListener("loadeddata", playVideo, { once: true })
    }

    // Secondary fallback: if iOS Low Power Mode delays initial autoplay,
    // seamlessly trigger playback on the user's very first touch, scroll, or click
    const handleFirstInteraction = () => {
      if (video && video.paused) {
        video.defaultMuted = true
        video.muted = true
        video
          .play()
          .then(() => {
            video.playbackRate = 0.75
            setIsLoaded(true)
          })
          .catch(() => {})
      }
    }

    window.addEventListener("touchstart", handleFirstInteraction, {
      passive: true,
      once: true,
    })
    window.addEventListener("scroll", handleFirstInteraction, {
      passive: true,
      once: true,
    })
    window.addEventListener("click", handleFirstInteraction, {
      passive: true,
      once: true,
    })

    return () => {
      video.removeEventListener("canplay", playVideo)
      video.removeEventListener("loadeddata", playVideo)
      window.removeEventListener("touchstart", handleFirstInteraction)
      window.removeEventListener("scroll", handleFirstInteraction)
      window.removeEventListener("click", handleFirstInteraction)
    }
  }, [])

  return (
    <div className="relative h-[62vh] min-h-[360px] w-full max-h-[860px] overflow-hidden bg-slate-950 sm:h-[72vh] sm:min-h-[480px] lg:h-[calc(100vh-4.5rem)] lg:min-h-[580px]">
      {/* Safari iOS fix: completely suppress and hide native WebKit start playback button and overlay controls */}
      <style>{`
        video::-webkit-media-controls-start-playback-button,
        video::-webkit-media-controls-play-button,
        video::-webkit-media-controls,
        video::-webkit-media-controls-panel,
        video::-webkit-media-controls-overlay-play-button {
          display: none !important;
          -webkit-appearance: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          width: 0 !important;
          height: 0 !important;
        }
      `}</style>

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
        ref={setVideoRef}
        autoPlay
        muted
        playsInline
        webkit-playsinline="true"
        x5-playsinline="true"
        loop
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        onLoadedData={() => {
          if (videoRef.current) {
            videoRef.current.playbackRate = 0.75
          }
          setIsLoaded(true)
        }}
        onLoadedMetadata={() => {
          if (videoRef.current) {
            videoRef.current.playbackRate = 0.75
          }
        }}
        className={`pointer-events-none relative z-10 h-full w-full object-cover object-center transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        aria-label="LetssAI hero video showcase"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
    </div>
  )
}
