"use client"

import React, { useId, useState } from "react"
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

export function GlobalDeliveryMap() {
  const reactId = useId()
  const [activeCode, setActiveCode] = useState<string | null>(null)

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
            <div className="relative w-full overflow-x-auto overflow-y-hidden pb-2 sm:pb-0 scrollbar-thin">
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
                        onMouseEnter={() => setActiveCode(country.code)}
                        onMouseLeave={() => setActiveCode(null)}
                        className="cursor-pointer transition-transform duration-200"
                        style={{
                          transformOrigin: `${x}px ${y}px`,
                          transform: isActive ? "scale(1.15)" : "scale(1)",
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

                        {/* Orange ring border around flag matching demo */}
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

        {/* Client Countries Grid / Badge Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {DELIVERY_COUNTRIES.map((c) => {
            const isActive = activeCode === c.code
            return (
              <button
                key={c.code}
                type="button"
                onMouseEnter={() => setActiveCode(c.code)}
                onMouseLeave={() => setActiveCode(null)}
                onClick={() =>
                  setActiveCode((prev) => (prev === c.code ? null : c.code))
                }
                className={`group inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "border-[#016630] bg-[#016630] text-white shadow-sm scale-105"
                    : "border-emerald-200 bg-white text-emerald-950 hover:border-emerald-400 hover:bg-emerald-50/50"
                }`}
              >
                <img
                  src={`https://flagcdn.com/w40/${c.code}.png`}
                  alt=""
                  width={16}
                  height={12}
                  className="h-3 w-4 rounded-2xs object-cover shadow-2xs"
                  loading="lazy"
                />
                <span>{c.name}</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
