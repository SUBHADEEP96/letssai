import Link from "next/link"
import { services, industries } from "@/lib/site"
import { Logo } from "./Logo"
export function Footer() {
  return (
    <footer className="border-t border-emerald-950/10 bg-emerald-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="min-w-0 lg:col-span-1">
           <Link
      href="/"
      aria-label="LetssAI home"
      className={`inline-flex shrink-0 items-center focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 `}
    >

  <img
      src="/media/letssai_logo_footer.png"
      alt="LetssAI footer logo"
      className="h-auto max-h-10 w-full object-contain"
      />
    </Link>
          
          {/* <Logo variant="white" size="lg" /> */}
          <p className="mt-4 text-sm leading-6 text-emerald-50/75">
            Practical AI solutions for growing businesses.
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
        © {new Date().getFullYear()} LetssAI. Built for teams that want AI
        inside their existing tools.
      </div>
    </footer>
  )
}
