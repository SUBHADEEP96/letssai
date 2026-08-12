import { siteConfig } from "@/lib/site"

export function GlobalDeliveryMap() {
  const pins = siteConfig.deliveryLocations
  return (
    <section className="section overflow-hidden bg-[#eefaf6]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div><p className="font-mono text-xs font-bold tracking-[.18em] text-emerald-700 uppercase">Remote-first delivery</p><h2 className="mt-4 text-3xl leading-tight font-semibold tracking-tight md:text-5xl">Built remotely. Delivered wherever your business works.</h2><p className="mt-5 text-lg leading-8 text-slate-600">LetssAI works with businesses remotely to design, build, and integrate practical AI solutions into existing tools and workflows.</p><div className="mt-6 flex flex-wrap gap-2">{pins.map((p) => <span key={p.label} className="rounded-full border border-emerald-200 bg-white px-3 py-2 text-xs font-semibold text-emerald-900">{p.label}</span>)}</div></div>
        <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white shadow-2xl shadow-emerald-950/10">
          <svg viewBox="0 0 1000 560" role="img" aria-label="Abstract world map showing LetssAI remote-first delivery connections" className="h-full w-full">
            <defs><radialGradient id="glow"><stop stopColor="#38c9a5" stopOpacity=".5"/><stop offset="1" stopColor="#38c9a5" stopOpacity="0"/></radialGradient></defs>
            <g fill="#cceee3" stroke="#86cdb9" strokeWidth="2"><path d="M83 185l75-65 131 18 72 76-29 87-102 17-43 86-60-69-55-41z"/><path d="M371 137l79-42 101 27 29 52-47 28-38 79-65-19-43-61z"/><path d="M523 118l118-38 219 47 80 72-41 89-126-5-48 68-89-37-25-92-75-31z"/><path d="M730 367l84-35 99 50-31 86-101 13-63-55z"/></g>
            {pins.slice(1).map((p, i) => <path key={p.label} d={`M690 325 Q ${500 + i*45} ${70+i*30} ${p.x*10} ${p.y*5.6}`} fill="none" stroke="#0f8a70" strokeDasharray="8 9" strokeWidth="3" className="map-route" />)}
            {pins.map((p) => <g key={p.label} transform={`translate(${p.x*10} ${p.y*5.6})`}><circle r="34" fill="url(#glow)" className="map-pulse"/><circle r="8" fill="#006452" stroke="white" strokeWidth="4"/></g>)}
          </svg>
        </div>
      </div>
    </section>
  )
}
