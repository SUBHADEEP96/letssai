"use client"
import {Link} from "@/i18n/navigation"
import { useEffect, useState } from "react"
import {useTranslations} from "next-intl"
import {LanguageSwitcher} from "./LanguageSwitcher"
import Image from "next/image"
import {
  List,
  X,
  CaretDown,
  ChatCircleText,
  TrendUp,
  PhoneCall,
  PlugsConnected,
  Database,
  HouseLine,
  FirstAidKit,
  Scales,
  GraduationCap,
  ShoppingCart,
  Receipt,
} from "@phosphor-icons/react"
import { navigation } from "@/lib/navigation"
const icons = {
  ChatCircleText,
  TrendUp,
  PhoneCall,
  PlugsConnected,
  Database,
  HouseLine,
  FirstAidKit,
  Scales,
  GraduationCap,
  ShoppingCart,
  Receipt,
} as const
export function Header() {
  const t=useTranslations("nav")
  const [mobile, setMobile] = useState(false)
  const [open, setOpen] = useState<string | null>(null)
  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : ""
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobile(false)
        setOpen(null)
      }
    }
    window.addEventListener("keydown", esc)
    return () => {
      window.removeEventListener("keydown", esc)
      document.body.style.overflow = ""
    }
  }, [mobile])
  return (
    <header className="sticky top-0 z-40 border-b border-emerald-950/10 bg-white/85 backdrop-blur-xl">
      <nav
        aria-label={t("main")}
        className="mx-auto flex h-16 max-w-7xl min-w-0 items-center justify-between gap-3 px-4 sm:gap-5 sm:px-6 lg:h-18 lg:px-8"
      >
        <Link
          href="/"
          aria-label="LetssAI home"
          className={`inline-flex shrink-0 items-center focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500`}
        >
          <Image
            src="/media/letssai_logo.png"
            alt="LetssAI logo"
            width={1536}
            height={1024}
            priority
            className="h-auto max-h-10 w-full object-contain"
          />
        </Link>

        <div className="hidden min-w-0 items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <div
              key={item.href}
              onMouseEnter={() => setOpen(item.label)}
              onMouseLeave={() => setOpen(null)}
              className="relative"
            >
              <Link
                href={item.href}
                className="text-md flex items-center gap-1 rounded-full px-4 py-2 font-medium tracking-tight text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 focus-visible:outline-2 focus-visible:outline-emerald-500"
              >
                {item.href === '/' ? t('home') : item.href === '/services' ? t('services') : item.href === '/industries' ? t('industries') : item.href === '/why-letssai' ? t('why') : t('contact')}
                {item.children && <CaretDown size={14} />}
              </Link>
              {item.children && open === item.label && (
                <div className="absolute top-full left-1/2 w-[760px] -translate-x-1/2 pt-4">
                  <div className="rounded-3xl border border-emerald-950/10 bg-white p-4 shadow-2xl shadow-emerald-950/10">
                    <div className="grid grid-cols-2 gap-2">
                      {item.children.map((c) => {
                        const I = icons[c.icon as keyof typeof icons]
                        return (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="group rounded-2xl p-4 hover:bg-emerald-50"
                          >
                            <div className="flex gap-3">
                              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-emerald-100 text-emerald-800 transition group-hover:bg-emerald-700 group-hover:text-white">
                                {I && <I size={20} />}
                              </span>
                              <span>
                                <span className="block text-lg font-semibold tracking-tight text-slate-950">
                                  {c.label}
                                </span>
                                <span className="mt-1 block text-sm leading-6 text-slate-600">
                                  {c.description}
                                </span>
                              </span>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                    <Link
                      href={item.href}
                      className="mt-3 inline-flex rounded-full bg-emerald-950 px-4 py-2 text-sm font-semibold tracking-tight text-white"
                    >
                      {t('explore')} {item.href === '/services' ? t('services') : t('industries')}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setMobile(true)}
            className="rounded-full border border-emerald-950/10 p-3 lg:hidden"
            aria-label={t("open")}
            aria-expanded={mobile}
          >
            <List size={22} />
          </button>
        </div>
      </nav>
      {mobile && (
        <div className="fixed inset-0 z-50 bg-emerald-950/40 lg:hidden">
          <div className="ml-auto flex h-dvh w-full max-w-md animate-in flex-col bg-white p-5 shadow-2xl slide-in-from-right">
            <div className="flex min-w-0 items-center justify-between gap-4">
              <button
                onClick={() => setMobile(false)}
                className="rounded-full p-3"
                aria-label={t("close")}
              >
                <X size={22} />
              </button>
            </div>
            <div className="mt-8 space-y-3 overflow-y-auto">
              {navigation.map((item) => (
                <div
                  key={item.href}
                  className="rounded-3xl border border-emerald-950/10"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      onClick={() => !item.children && setMobile(false)}
                      href={item.href}
                      className="block flex-1 px-5 py-4 font-semibold tracking-tight"
                    >
                      {item.href === '/' ? t('home') : item.href === '/services' ? t('services') : item.href === '/industries' ? t('industries') : item.href === '/why-letssai' ? t('why') : t('contact')}
                    </Link>
                    {item.children && (
                      <button
                        aria-controls={`mobile-${item.label}`}
                        aria-expanded={open === item.label}
                        onClick={() =>
                          setOpen(open === item.label ? null : item.label)
                        }
                        className="p-5"
                      >
                        <CaretDown
                          className={open === item.label ? "rotate-180" : ""}
                        />
                      </button>
                    )}
                  </div>
                  {item.children && open === item.label && (
                    <div
                      id={`mobile-${item.label}`}
                      className="space-y-2 border-t border-emerald-950/10 p-3"
                    >
                      {item.children.map((c) => {
                        const I = icons[c.icon as keyof typeof icons]
                        return (
                          <Link
                            onClick={() => setMobile(false)}
                            className="flex gap-3 rounded-2xl bg-emerald-50 p-4"
                            key={c.href}
                            href={c.href}
                          >
                            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-emerald-100 text-emerald-800">
                              {I && <I size={18} aria-hidden />}
                            </span>
                            <span>
                              <span className="font-semibold tracking-tight">
                                {c.label}
                              </span>
                              <span className="mt-1 block text-sm leading-6 text-slate-600">
                                {c.description}
                              </span>
                            </span>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
