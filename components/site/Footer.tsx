import { Link } from "@/i18n/navigation"
import { services, industries } from "@/lib/site"
import Image from "next/image"
import footerLogo from "@/public/media/letssai-logo-footer.svg"
import { getTranslations } from "next-intl/server"

export async function Footer() {
  const t = await getTranslations()
  return (
    <footer className="border-t border-emerald-950/10 bg-emerald-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link
            href="/"
            aria-label="LetssAI home"
            className="inline-flex focus-visible:outline-2"
          >
            <Image
              src={footerLogo}
              alt="LetssAI logo"
              sizes="160px"
              className="h-auto w-40 object-contain"
            />
          </Link>
          <p className="mt-4 text-sm text-emerald-50/75">
            {t("footer.tagline")}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase">
            {t("nav.services")}
          </h3>
          <div className="mt-4 grid gap-2">
            {services.map((service) => (
              <Link
                className="text-sm text-emerald-50/75 hover:text-white"
                href={service.href}
                key={service.slug}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase">
            {t("nav.industries")}
          </h3>
          <div className="mt-4 grid gap-2">
            {industries.map((industry) => (
              <Link
                className="text-sm text-emerald-50/75 hover:text-white"
                href={industry.href}
                key={industry.slug}
              >
                {industry.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase">
            {t("footer.company")}
          </h3>
          <div className="mt-4 grid gap-2">
            <Link href="/why-letssai">{t("nav.why")}</Link>
            <Link href="/contact">{t("nav.contact")}</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-emerald-50/70">
        © {new Date().getFullYear()} LetssAI. {t("footer.copyright")}
      </div>
    </footer>
  )
}
