"use client"

import React, { useCallback, useEffect, useId, useRef, useState } from "react"
import { useReducedMotion } from "motion/react"
import { DottedMap, type Marker } from "@/components/ui/dotted-map"

export type DeliveryCountryMarker = Marker & {
  name: string
  code: string
  label: string
  labelPos?: "right" | "left" | "top" | "bottom"
}

export const DELIVERY_COUNTRIES: DeliveryCountryMarker[] = [
  {
    name: "USA",
    code: "us",
    label: "USA",
    lat: 39.0,
    lng: -97.0,
    labelPos: "right",
    size: 2.2,
    pulse: true,
  },
  {
    name: "Canada",
    code: "ca",
    label: "Canada",
    lat: 55.0,
    lng: -105.0,
    labelPos: "right",
    size: 2.2,
    pulse: true,
  },
  {
    name: "Ireland",
    code: "ie",
    label: "Ireland",
    lat: 53.3,
    lng: -8.0,
    labelPos: "left",
    size: 2.2,
    pulse: true,
  },
  {
    name: "United Kingdom",
    code: "gb",
    label: "UK",
    lat: 55.0,
    lng: -3.0,
    labelPos: "top",
    size: 2.2,
    pulse: true,
  },
  {
    name: "Netherlands",
    code: "nl",
    label: "Netherlands",
    lat: 52.2,
    lng: 5.5,
    labelPos: "right",
    size: 2.2,
    pulse: true,
  },
  {
    name: "France",
    code: "fr",
    label: "France",
    lat: 46.5,
    lng: 2.5,
    labelPos: "bottom",
    size: 2.2,
    pulse: true,
  },
  {
    name: "Denmark",
    code: "dk",
    label: "Denmark",
    lat: 56.0,
    lng: 10.0,
    labelPos: "top",
    size: 2.2,
    pulse: true,
  },
  {
    name: "Finland",
    code: "fi",
    label: "Finland",
    lat: 62.0,
    lng: 26.0,
    labelPos: "right",
    size: 2.2,
    pulse: true,
  },
  {
    name: "United Arab Emirates",
    code: "ae",
    label: "UAE",
    lat: 24.0,
    lng: 54.0,
    labelPos: "left",
    size: 2.2,
    pulse: true,
  },
  {
    name: "India",
    code: "in",
    label: "India",
    lat: 21.5,
    lng: 79.0,
    labelPos: "right",
    size: 2.2,
    pulse: true,
  },
  {
    name: "Malaysia",
    code: "my",
    label: "Malaysia",
    lat: 4.2,
    lng: 101.9,
    labelPos: "left",
    size: 2.2,
    pulse: true,
  },
  {
    name: "Singapore",
    code: "sg",
    label: "Singapore",
    lat: 1.3,
    lng: 103.8,
    labelPos: "right",
    size: 2.2,
    pulse: true,
  },
  {
    name: "Australia",
    code: "au",
    label: "Australia",
    lat: -25.0,
    lng: 134.0,
    labelPos: "right",
    size: 2.2,
    pulse: true,
  },
  {
    name: "New Zealand",
    code: "nz",
    label: "New Zealand",
    lat: -41.0,
    lng: 174.0,
    labelPos: "left",
    size: 2.2,
    pulse: true,
  },
]

// 4 duplicate sets to provide plenty of width for continuous wrapping on any display
const CAROUSEL_SETS = [0, 1, 2, 3]

export function GlobalDeliveryMap() {
  const reactId = useId()
  const [activeCode, setActiveCode] = useState<string | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  const viewportRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const setRef = useRef<HTMLDivElement | null>(null)
  const mapScrollRef = useRef<HTMLDivElement | null>(null)

  const posRef = useRef(0)
  const setWidthRef = useRef(2000)
  const isInteractingRef = useRef(false)
  const isDraggingRef = useRef(false)
  const hasDraggedRef = useRef(false)
  const isHoveredRef = useRef(false)
  const dragStartXRef = useRef(0)
  const dragStartPosRef = useRef(0)
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null)
  const animFrameRef = useRef<number | null>(null)
  const centeringAnimRef = useRef<number | null>(null)

  const prefersReducedMotion = useReducedMotion()

  // Precisely track the subpixel rendered width of one set of 14 countries using ResizeObserver
  useEffect(() => {
    const el = setRef.current
    if (!el) return

    const updateWidth = () => {
      const rect = el.getBoundingClientRect()
      if (rect.width > 0) {
        setWidthRef.current = rect.width
      }
    }

    updateWidth()

    const observer = new ResizeObserver(() => {
      updateWidth()
    })

    observer.observe(el)
    window.addEventListener("resize", updateWidth)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", updateWidth)
    }
  }, [])

  // Hardware-accelerated GPU translation loop with subpixel accuracy
  useEffect(() => {
    if (prefersReducedMotion) return

    let lastTime = performance.now()
    const speed = 32 // ~32px per second for a smooth, steady glide

    const tick = (now: number) => {
      const elapsed = Math.min(now - lastTime, 64) // cap to prevent delta jumps if tab is inactive
      lastTime = now

      if (!isPaused && !isInteractingRef.current && trackRef.current) {
        posRef.current -= (speed * elapsed) / 1000

        const setWidth = setWidthRef.current
        if (setWidth > 0) {
          // Seamless infinite wrap: when passing -2*setWidth, jump forward by setWidth
          if (posRef.current <= -setWidth * 2) {
            posRef.current += setWidth
          } else if (posRef.current >= 0) {
            posRef.current -= setWidth
          }
        }

        trackRef.current.style.transform = `translate3d(${posRef.current.toFixed(2)}px, 0, 0)`
      }

      animFrameRef.current = requestAnimationFrame(tick)
    }

    animFrameRef.current = requestAnimationFrame(tick)

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [isPaused, prefersReducedMotion])

  // Center a country in the carousel and map upon selection
  const selectCountry = useCallback(
    (country: DeliveryCountryMarker, targetButton?: HTMLElement) => {
      setActiveCode(country.code)
      setIsPaused(true)
      isInteractingRef.current = true

      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current)
      if (centeringAnimRef.current) cancelAnimationFrame(centeringAnimRef.current)

      const viewport = viewportRef.current
      const track = trackRef.current

      if (viewport && track) {
        const viewportRect = viewport.getBoundingClientRect()
        const viewportCenter = viewportRect.left + viewportRect.width / 2

        // If targetButton is not passed (e.g. clicked on the SVG map),
        // pick the country badge instance closest to the current viewport center
        let button = targetButton
        if (!button) {
          const candidates = Array.from(
            track.querySelectorAll<HTMLElement>(
              `[data-country-code="${country.code}"]`
            )
          )
          let minDiff = Infinity
          for (const cand of candidates) {
            const rect = cand.getBoundingClientRect()
            const candCenter = rect.left + rect.width / 2
            const diff = Math.abs(candCenter - viewportCenter)
            if (diff < minDiff) {
              minDiff = diff
              button = cand
            }
          }
        }

        if (button) {
          const buttonRect = button.getBoundingClientRect()
          const buttonCenter = buttonRect.left + buttonRect.width / 2
          const currentOffsetFromCenter = buttonCenter - viewportCenter

          // Target translate3d: adjust current posRef by the offset needed to center it
          let targetX = posRef.current - currentOffsetFromCenter

          const setWidth = setWidthRef.current || 2000
          // Keep targetX within the duplicate bounds
          while (targetX > 0) targetX -= setWidth
          while (targetX < -setWidth * 2) targetX += setWidth

          // Slide to center the country using easeOutCubic
          const startX = posRef.current
          const distance = targetX - startX
          const startTime = performance.now()
          const duration = 600 // ms

          const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

          const animateStep = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(1, elapsed / duration)
            const eased = easeOutCubic(progress)

            posRef.current = startX + distance * eased
            if (trackRef.current) {
              trackRef.current.style.transform = `translate3d(${posRef.current.toFixed(2)}px, 0, 0)`
            }

            if (progress < 1) {
              centeringAnimRef.current = requestAnimationFrame(animateStep)
            } else {
              isInteractingRef.current = false
              // Resume auto-scroll after 4.5 seconds if the user is not hovering
              pauseTimerRef.current = setTimeout(() => {
                if (!isHoveredRef.current) {
                  setIsPaused(false)
                }
              }, 4500)
            }
          }

          centeringAnimRef.current = requestAnimationFrame(animateStep)
        }
      }

      // Smoothly pan mobile map container to the marker's coordinate
      const mapContainer = mapScrollRef.current
      if (mapContainer && mapContainer.scrollWidth > mapContainer.clientWidth) {
        const found = DELIVERY_COUNTRIES.find((c) => c.code === country.code)
        if (found) {
          const lngRatio = (found.lng + 180) / 360
          const targetMapLeft =
            lngRatio * mapContainer.scrollWidth - mapContainer.clientWidth / 2

          mapContainer.scrollTo({
            left: Math.max(0, targetMapLeft),
            behavior: "smooth",
          })
        }
      }
    },
    []
  )

  // Drag and swipe handling for fluid user gesture control
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true
    hasDraggedRef.current = false
    isInteractingRef.current = true
    dragStartXRef.current = e.clientX
    dragStartPosRef.current = posRef.current
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current)
    if (centeringAnimRef.current) cancelAnimationFrame(centeringAnimRef.current)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !trackRef.current) return
    const deltaX = e.clientX - dragStartXRef.current
    if (Math.abs(deltaX) > 6) {
      hasDraggedRef.current = true
    }
    posRef.current = dragStartPosRef.current + deltaX

    const setWidth = setWidthRef.current
    if (setWidth > 0) {
      if (posRef.current <= -setWidth * 2) {
        posRef.current += setWidth
        dragStartPosRef.current += setWidth
      } else if (posRef.current >= 0) {
        posRef.current -= setWidth
        dragStartPosRef.current -= setWidth
      }
    }

    trackRef.current.style.transform = `translate3d(${posRef.current.toFixed(2)}px, 0, 0)`
  }

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false

    if (hasDraggedRef.current) {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current)
      pauseTimerRef.current = setTimeout(() => {
        isInteractingRef.current = false
        if (!isHoveredRef.current) {
          setIsPaused(false)
        }
      }, 3000)
    } else {
      isInteractingRef.current = false
    }
  }

  return (
    <section
      id="global-delivery"
      aria-labelledby="delivery-heading"
      className="relative overflow-hidden bg-[#f7f8f4] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-bold tracking-[.18em] text-emerald-700 uppercase">
            Remote-first delivery
          </p>
          <h2
            id="delivery-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Built remotely. Delivered wherever your business works.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            LetssAI designs, implements, and deploys production-ready AI
            solutions for businesses across international markets and time
            zones.
          </p>
        </div>

        {/* Map Showcase Card */}
        <div className="mt-10 sm:mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3 sm:rounded-3xl sm:p-6 lg:p-8 shadow-sm">
            {/* Ambient radial fade matching reference image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-slate-50/50"
            />

            {/* Scrollable container for mobile responsiveness */}
            <div
              ref={mapScrollRef}
              className="relative w-full overflow-x-auto overflow-y-hidden pb-2 sm:pb-0 scrollbar-thin"
            >
              <div className="min-w-[720px] sm:min-w-0 w-full aspect-[2/1]">
                <DottedMap<DeliveryCountryMarker>
                  width={200}
                  height={100}
                  mapSamples={9000}
                  dotRadius={0.32}
                  dotColor="#94a3b8"
                  markerColor="#f97316"
                  pulse={true}
                  markers={DELIVERY_COUNTRIES}
                  className="w-full h-full select-none"
                  renderMarkerOverlay={({ marker, x, y, r, index }) => {
                    const country = DELIVERY_COUNTRIES[index]
                    const clipId = `${reactId}-flag-clip-${index}`.replace(
                      /:/g,
                      "-"
                    )
                    const flagUrl = `https://flagcdn.com/w80/${country.code}.png`
                    const isActive = activeCode === country.code

                    const flagR = r
                    const fontSize = 1.7
                    const pillH = 2.8
                    const pillW = country.label.length * 1.08 + 2.2

                    let pillX = x + flagR + 0.6
                    let pillY = y - pillH / 2

                    if (country.labelPos === "left") {
                      pillX = x - flagR - pillW - 0.6
                    } else if (country.labelPos === "top") {
                      pillX = x - pillW / 2
                      pillY = y - flagR - pillH - 0.6
                    } else if (country.labelPos === "bottom") {
                      pillX = x - pillW / 2
                      pillY = y + flagR + 0.6
                    }

                    return (
                      <g
                        key={`overlay-${country.code}-${index}`}
                        onClick={() => selectCountry(country)}
                        onMouseEnter={() => {
                          setActiveCode(country.code)
                          setIsPaused(true)
                        }}
                        onMouseLeave={() => {
                          setIsPaused(false)
                        }}
                        className="cursor-pointer transition-transform duration-200"
                        style={{
                          transformOrigin: `${x}px ${y}px`,
                          transform: isActive ? "scale(1.18)" : "scale(1)",
                        }}
                      >
                        <defs>
                          <clipPath id={clipId}>
                            <circle cx={x} cy={y} r={flagR} />
                          </clipPath>
                        </defs>

                        {/* Base circle background */}
                        <circle cx={x} cy={y} r={flagR} fill="#f8fafc" />

                        {/* Flag image from FlagCDN */}
                        <image
                          href={flagUrl}
                          x={x - flagR}
                          y={y - flagR}
                          width={flagR * 2}
                          height={flagR * 2}
                          preserveAspectRatio="xMidYMid slice"
                          clipPath={`url(#${clipId})`}
                        />

                        {/* Ring border around flag */}
                        <circle
                          cx={x}
                          cy={y}
                          r={flagR}
                          fill="none"
                          stroke={isActive ? "#016630" : "#f97316"}
                          strokeWidth={isActive ? 0.45 : 0.35}
                          className="transition-colors duration-200"
                        />

                        {/* Label Pill */}
                        <g>
                          <rect
                            x={pillX}
                            y={pillY}
                            width={pillW}
                            height={pillH}
                            rx={pillH / 2}
                            fill={isActive ? "#016630" : "#475569"}
                            opacity={0.94}
                            className="transition-colors duration-200 shadow-sm"
                          />
                          <text
                            x={pillX + pillW / 2}
                            y={pillY + pillH / 2 + 0.12}
                            textAnchor="middle"
                            dominantBaseline="central"
                            fill="#ffffff"
                            fontSize={fontSize}
                            fontWeight={600}
                            className="pointer-events-none"
                            style={{
                              fontFamily:
                                "var(--font-plus-jakarta), system-ui, sans-serif",
                            }}
                          >
                            {country.label}
                          </text>
                        </g>
                      </g>
                    )
                  }}
                />
              </div>
            </div>

            {/* Mobile swipe hint */}
            <div className="mt-2 flex items-center justify-center text-xs text-slate-400 sm:hidden">
              <span>← Swipe map to view all regions →</span>
            </div>
          </div>
        </div>

        {/* Liquid-Smooth Hardware-Accelerated Country Badges Carousel */}
        <div className="relative mt-8 w-full overflow-hidden">
          {/* Gradient fade edges matching background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 sm:w-28 bg-gradient-to-r from-[#f7f8f4] to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 sm:w-28 bg-gradient-to-l from-[#f7f8f4] to-transparent"
          />

          {/* Viewport container */}
          <div
            ref={viewportRef}
            onMouseEnter={() => {
              isHoveredRef.current = true
              setIsPaused(true)
            }}
            onMouseLeave={() => {
              isHoveredRef.current = false
              if (!isInteractingRef.current) setIsPaused(false)
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="relative w-full overflow-hidden py-2 select-none cursor-grab active:cursor-grabbing"
          >
            {/* GPU hardware-accelerated animated track with sub-pixel glide */}
            <div
              ref={trackRef}
              className="flex flex-nowrap items-center will-change-transform"
              style={{
                transform: "translate3d(0px, 0, 0)",
              }}
            >
              {CAROUSEL_SETS.map((setIndex) => (
                <div
                  key={`set-${setIndex}`}
                  ref={setIndex === 0 ? setRef : undefined}
                  className="flex flex-nowrap items-center gap-2.5 sm:gap-3 pr-2.5 sm:pr-3 shrink-0"
                >
                  {DELIVERY_COUNTRIES.map((c) => {
                    const isActive = activeCode === c.code
                    return (
                      <button
                        key={`${c.code}-${setIndex}`}
                        data-country-code={c.code}
                        type="button"
                        onClick={(e) => {
                          if (hasDraggedRef.current) return
                          selectCountry(c, e.currentTarget)
                        }}
                        className={`group inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "border-[#016630] bg-[#016630] text-white shadow-md scale-105 ring-2 ring-emerald-500/20"
                            : "border-emerald-200 bg-white text-emerald-950 hover:border-emerald-400 hover:bg-emerald-50/70 hover:shadow-xs active:scale-95"
                        }`}
                      >
                        <img
                          src={`https://flagcdn.com/w40/${c.code}.png`}
                          alt=""
                          width={18}
                          height={13}
                          className="h-3.5 w-4.5 rounded-2xs object-cover shadow-2xs"
                          loading="lazy"
                        />
                        <span className="whitespace-nowrap">{c.name}</span>
                      </button>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
