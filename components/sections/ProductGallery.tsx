import Link from "next/link"

export function ProductGallery({ industry, items }: { industry: string; items: string[] }) {
  const named: Record<string, string[]> = {
    "Real Estate": ["Lead pipeline dashboard", "Property inquiry assistant", "Site visit scheduler", "WhatsApp follow-up panel"],
    "Healthcare & Clinics": ["Appointment booking board", "Patient FAQ assistant", "Reminder timeline", "Feedback summary dashboard"],
    "Legal Firms": ["Client intake tracker", "Case document finder", "Hearing and task reminder panel", "Draft review checklist"],
    "Education & Coaching": ["Admission inquiry dashboard", "Demo class booking flow", "Student FAQ assistant", "Payment reminder panel"],
    "Retail & E-commerce": ["Order support panel", "Product FAQ assistant", "Returns and exchange workflow", "Review collection dashboard"],
    "Finance & Accounting": ["Invoice intake dashboard", "Document collection tracker", "Client reminder assistant", "Monthly report preparation panel"],
  }
  items = named[industry] ?? items
  return (
    <section className="section bg-slate-950 text-white" aria-labelledby="gallery-title">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-bold tracking-[.18em] text-emerald-300 uppercase">Original interface concepts</p>
        <h2 id="gallery-title" className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">What could AI for {industry} look like?</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-300">These illustrative product views show how everyday work could be organized. Final interfaces are designed around your approved workflow and connected systems.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map((title, index) => (
            <article key={title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3">
              <div role="img" aria-label={`${title}, an original LetssAI interface concept for ${industry}`} className="min-h-64 rounded-3xl bg-[#effaf6] p-5 text-slate-900">
                <div className="flex items-center justify-between border-b border-emerald-900/10 pb-4"><div className="flex gap-1.5"><i className="size-2 rounded-full bg-emerald-300"/><i className="size-2 rounded-full bg-emerald-500"/><i className="size-2 rounded-full bg-emerald-700"/></div><span className="font-mono text-[10px] text-emerald-800">LIVE WORKSPACE</span></div>
                <div className="mt-5 grid grid-cols-[.7fr_1.3fr] gap-4"><div className="space-y-2">{[1,2,3,4].map((x) => <div key={x} className={`h-8 rounded-lg ${x === index + 1 ? "bg-emerald-700" : "bg-white"}`} />)}</div><div className="rounded-2xl bg-white p-4 shadow-lg shadow-emerald-950/5"><div className="h-3 w-2/3 rounded bg-emerald-900/15"/><div className="mt-5 flex h-24 items-end gap-2">{[40,72,52,90,65].map((h, i) => <i key={i} style={{height:`${h}%`}} className="flex-1 rounded-t bg-emerald-500/70" />)}</div><div className="mt-4 h-8 rounded-lg bg-emerald-50"/></div></div>
              </div>
              <div className="p-4"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">A clear, business-readable view for review, handoff, and daily action.</p><Link href="/contact" className="mt-4 inline-flex text-sm font-semibold text-emerald-300">Discuss this workflow →</Link></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
