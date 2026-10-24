"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "motion/react"

const HERO_VIDEO_SRC =
  "https://q6zraewjln8atxgp.public.blob.vercel-storage.com/Letssai-hero"

interface HeroVideoPlayerProps {
  headerContent?: React.ReactNode
  ctaButton?: React.ReactNode
  dialogueCard?: React.ReactNode
}

export function HeroVideoPlayer({
  headerContent,
  ctaButton,
  dialogueCard,
}: HeroVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  // Mark video as loaded to trigger fast CTA appearance
  const markLoaded = useCallback(() => {
    setIsVideoLoaded(true)
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  // Explicitly configure DOM video properties immediately upon node attachment
  const setVideoRef = useCallback(
    (node: HTMLVideoElement | null) => {
      if (node) {
        // Critical WebKit / iOS Safari autoplay requirements
        node.defaultMuted = true
        node.muted = true
        node.playsInline = true
        node.setAttribute("muted", "")
        node.setAttribute("playsinline", "")
        node.setAttribute("webkit-playsinline", "true")
        node.setAttribute("x5-playsinline", "true")

        if (node.readyState >= 2) {
          markLoaded()
        }
      }
      videoRef.current = node
    },
    [markLoaded]
  )

  useEffect(() => {
    const video = videoRef.current

    // Safety fallback: ensure CTA appears fast even if video buffering is slow
    const fallbackTimer = setTimeout(() => {
      setIsVideoLoaded(true)
    }, 500)

    if (!video) return () => clearTimeout(fallbackTimer)

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
            video.playbackRate = 0.75
            markLoaded()
          })
          .catch(() => {
            // Autoplay may be restricted (e.g. iOS Low Power Mode)
            markLoaded()
          })
      }
    }

    if (video.readyState >= 2) {
      playVideo()
    } else {
      video.addEventListener("canplay", playVideo, { once: true })
      video.addEventListener("loadeddata", playVideo, { once: true })
    }

    const handleFirstInteraction = () => {
      if (video && video.paused) {
        video.defaultMuted = true
        video.muted = true
        video
          .play()
          .then(() => {
            video.playbackRate = 0.75
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
      clearTimeout(fallbackTimer)
      video.removeEventListener("canplay", playVideo)
      video.removeEventListener("loadeddata", playVideo)
      window.removeEventListener("touchstart", handleFirstInteraction)
      window.removeEventListener("scroll", handleFirstInteraction)
      window.removeEventListener("click", handleFirstInteraction)
    }
  }, [markLoaded])

  return (
    <div className="relative min-h-[640px] w-full overflow-hidden bg-slate-950 sm:min-h-[700px] lg:h-[calc(100vh-4.5rem)] lg:min-h-[640px] lg:max-h-[880px]">
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
        onLoadedData={markLoaded}
        onLoadedMetadata={markLoaded}
        onCanPlay={markLoaded}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        aria-label="LetssAI hero video showcase"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Main content grid: Left Typography & CTA + Right Floating Dialogue Card */}
      <div className="relative z-20 mx-auto flex h-full min-h-[580px] w-full max-w-[1240px] flex-col justify-between p-4 sm:min-h-[700px] sm:p-8 md:p-12 lg:h-[calc(100vh-4.5rem)] lg:min-h-[640px] lg:max-h-[880px] lg:p-16">
        {/* Top spacer on desktop */}
        <div className="hidden lg:block h-6" aria-hidden="true" />

        {/* Content row: Stacks on mobile, splits into left/right on desktop */}
        <div className="flex w-full flex-1 flex-col justify-between pt-2 sm:pt-6 lg:pt-0 lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8 pb-3 lg:pb-8">
          {/* Left Column: Heading + Fast CTA Button */}
          <div className="flex flex-col gap-4 sm:gap-6 items-start">
            {headerContent}

            {ctaButton && (
              <div className="w-full sm:w-auto">
                {isVideoLoaded ? (
                  <motion.div
                    initial={
                      prefersReducedMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: 12, scale: 0.95 }
                    }
                    animate={
                      prefersReducedMotion
                        ? { opacity: 1 }
                        : { opacity: 1, y: 0, scale: 1 }
                    }
                    transition={{
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full sm:w-auto"
                  >
                    {ctaButton}
                  </motion.div>
                ) : (
                  <div className="h-12 w-48 opacity-0 pointer-events-none" />
                )}
              </div>
            )}
          </div>

          {/* Right Column: Floating Frosted Glass Dialogue Card */}
          {dialogueCard && (
            <div className="flex w-full items-center justify-center lg:w-auto lg:justify-end pb-2 lg:pb-0">
              {dialogueCard}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
