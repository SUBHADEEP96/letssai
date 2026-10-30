const fs = require('fs')
const { createMap } = require('svg-dotted-map')

const countries = [
  { name: "USA", code: "us", label: "USA", lat: 39, lng: -97, labelPos: "right" },
  { name: "Canada", code: "ca", label: "Canada", lat: 55, lng: -105, labelPos: "right" },
  { name: "Ireland", code: "ie", label: "Ireland", lat: 53.3, lng: -8, labelPos: "left" },
  { name: "United Kingdom", code: "gb", label: "UK", lat: 55.0, lng: -3.0, labelPos: "top" },
  { name: "Netherlands", code: "nl", label: "Netherlands", lat: 52.2, lng: 5.5, labelPos: "right" },
  { name: "France", code: "fr", label: "France", lat: 46.5, lng: 2.5, labelPos: "bottom" },
  { name: "Denmark", code: "dk", label: "Denmark", lat: 56.0, lng: 10.0, labelPos: "top" },
  { name: "Finland", code: "fi", label: "Finland", lat: 62.0, lng: 26.0, labelPos: "right" },
  { name: "United Arab Emirates", code: "ae", label: "UAE", lat: 24.0, lng: 54.0, labelPos: "left" },
  { name: "India", code: "in", label: "India", lat: 21.5, lng: 79.0, labelPos: "right" },
  { name: "Malaysia", code: "my", label: "Malaysia", lat: 4.2, lng: 101.9, labelPos: "left" },
  { name: "Singapore", code: "sg", label: "Singapore", lat: 1.3, lng: 103.8, labelPos: "right" },
  { name: "Australia", code: "au", label: "Australia", lat: -25.0, lng: 134.0, labelPos: "right" },
  { name: "New Zealand", code: "nz", label: "New Zealand", lat: -41.0, lng: 174.0, labelPos: "left" },
]

const width = 200
const height = 100
const map = createMap({ width, height, mapSamples: 9000 })
const markers = map.addMarkers(countries)

let svg = `<svg viewBox="0 0 ${width} ${height}" width="1000" height="500" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:16px;">
<style>
  text { font-family: system-ui, -apple-system, sans-serif; font-weight: 600; }
</style>
<defs>
`

markers.forEach((m, i) => {
  const flagR = 2.0
  svg += `  <clipPath id="clip-${i}">
    <circle cx="${m.x}" cy="${m.y}" r="${flagR}" />
  </clipPath>\n`
})

svg += `</defs>\n\n<!-- Map points -->\n`

map.points.forEach((p) => {
  svg += `<circle cx="${p.x}" cy="${p.y}" r="0.32" fill="#94a3b8" />\n`
})

svg += `\n<!-- Markers -->\n`

markers.forEach((m, i) => {
  const c = countries[i]
  const flagR = 2.0
  const flagUrl = `https://flagcdn.com/w80/${c.code}.png`
  const fontSize = 1.6
  const pillH = 2.7
  const pillW = c.label.length * 1.05 + 2.0

  let pillX = m.x + flagR + 0.6
  let pillY = m.y - pillH / 2

  if (c.labelPos === "left") {
    pillX = m.x - flagR - pillW - 0.6
  } else if (c.labelPos === "top") {
    pillX = m.x - pillW / 2
    pillY = m.y - flagR - pillH - 0.6
  } else if (c.labelPos === "bottom") {
    pillX = m.x - pillW / 2
    pillY = m.y + flagR + 0.6
  }

  svg += `
  <g id="marker-${c.code}">
    <!-- Pulse ring -->
    <circle cx="${m.x}" cy="${m.y}" r="4.5" fill="none" stroke="#f97316" stroke-width="0.3" opacity="0.4" />
    <circle cx="${m.x}" cy="${m.y}" r="3.2" fill="none" stroke="#f97316" stroke-width="0.3" opacity="0.7" />
    
    <!-- Flag image -->
    <image href="${flagUrl}" x="${m.x - flagR}" y="${m.y - flagR}" width="${flagR * 2}" height="${flagR * 2}" preserveAspectRatio="xMidYMid slice" clip-path="url(#clip-${i})" />
    
    <!-- Ring border -->
    <circle cx="${m.x}" cy="${m.y}" r="${flagR}" fill="none" stroke="#f97316" stroke-width="0.35" />
    
    <!-- Label Pill -->
    <rect x="${pillX}" y="${pillY}" width="${pillW}" height="${pillH}" rx="${pillH / 2}" fill="#475569" opacity="0.92" />
    <text x="${pillX + pillW / 2}" y="${pillY + pillH / 2 + 0.1}" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-size="${fontSize}">
      ${c.label}
    </text>
  </g>`
})

svg += `\n</svg>`

fs.writeFileSync('scratch/preview-map.svg', svg)
console.log('Successfully wrote preview-map.svg')
