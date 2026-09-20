import Image from 'next/image'
import {getTranslations} from 'next-intl/server'
import {Link} from '@/i18n/navigation'
import {OrbBackground} from '@/components/ui/OrbBackground'
export async function HomeHero(){
 const t=await getTranslations('home.hero')
 return <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden px-4 py-10 sm:px-6 lg:min-h-[calc(100svh-4.5rem)] lg:px-8">
  <Image src="/media/home-hero.jpg" alt="" fill priority sizes="100vw" className="-z-30 object-cover object-[center_45%]"/>
  <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(4,30,25,.48),rgba(2,22,18,.68)),radial-gradient(circle_at_center,rgba(20,83,65,.08),rgba(1,15,12,.34))]"/>
  <OrbBackground backgroundColor="#5a9f7a" hoverIntensity={2} rotateOnHover/>
  <div className="relative z-10 mx-auto w-full max-w-5xl rounded-[2rem] border border-white/20 bg-slate-950/50 px-5 py-8 text-center text-white shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-10 sm:py-12 lg:px-14">
   <h1 className="mx-auto max-w-4xl text-[clamp(2.625rem,7vw,5.5rem)] leading-[.98] font-semibold tracking-[-.045em] text-balance">{t('titleBefore')} <span className="text-emerald-300">{t('titleHighlight')}</span>, {t('titleAfter')}</h1>
   <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">{t('description')}</p>
   <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-300 px-6 py-3 text-sm font-bold text-emerald-950 transition hover:bg-white active:scale-[.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{t('cta')}</Link>
  </div>
 </section>
}
