import Link from "next/link"
import { services, industries } from "@/lib/site"
export function Footer() {
  return (
    <footer className="border-t border-emerald-950/10 bg-emerald-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="text-2xl font-semibold tracking-tight">LetssAI</div>
          <p className="mt-4 text-sm leading-6 text-emerald-50/75">
            Practical AI solutions for growing businesses. Reply faster, follow
            up better, and reduce manual work.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-[0.14em] uppercase">
            Services
          </h3>
          <div className="mt-4 grid gap-2">
            {services.map((s) => (
              <Link
                className="text-sm text-emerald-50/75 hover:text-white"
                href={s.href}
                key={s.slug}
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-[0.14em] uppercase">
            Industries
          </h3>
          <div className="mt-4 grid gap-2">
            {industries.map((i) => (
              <Link
                className="text-sm text-emerald-50/75 hover:text-white"
                href={i.href}
                key={i.slug}
              >
                {i.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-[0.14em] uppercase">
            Company
          </h3>
          <div className="mt-4 grid gap-2">
            <Link href="/why-letssai">Why LetssAI</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-emerald-50/70">
        © {new Date().getFullYear()} LetssAI. Practical AI solutions for growing
        businesses.
      </div>
    </footer>
  )
}
