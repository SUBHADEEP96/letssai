import {getTranslations,setRequestLocale} from 'next-intl/server'
import type {Locale} from '@/i18n/routing'
import {HomeHero} from '@/components/sections/HomeHero'
import {FAQSection} from '@/components/site/FAQSection'
import {CTASection} from '@/components/site/CTASection'
import {JsonLd} from '@/components/seo/JsonLd'
import {faqSchema} from '@/lib/seo'
import {homeFaqs} from '@/lib/site'
import {GlobalDeliveryMap} from '@/components/site/GlobalDeliveryMap'
import {VoiceConversationShowcase} from '@/components/sections/VoiceConversationShowcase'
import {localizedMetadata} from '@/lib/i18n-seo'
export async function generateMetadata({params}:{params:Promise<{locale:Locale}>}){const {locale}=await params;const t=await getTranslations({locale,namespace:'home'});return localizedMetadata(locale,t('metaTitle'),t('metaDescription'),'/')}
export default async function Home({params}:{params:Promise<{locale:Locale}>}){const {locale}=await params;setRequestLocale(locale);const t=await getTranslations('home');return <><JsonLd data={faqSchema(homeFaqs)}/><HomeHero/><VoiceConversationShowcase/><section className="section"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t('toolsTitle')}</h2><p className="mt-3 max-w-2xl leading-relaxed text-slate-600">{t('toolsText')}</p><div className="mt-8 flex flex-wrap gap-3">{['Website/Web App','Dashboards','WhatsApp','Email','CRM','Google Sheets','Calendars','Business documents'].map(x=><span className="rounded-full border border-emerald-200 bg-white px-4 py-2 font-mono text-xs font-semibold tracking-[.14em] text-emerald-800 uppercase" key={x}>{x}</span>)}</div></div></section><FAQSection faqs={homeFaqs}/><GlobalDeliveryMap/><CTASection title="" text=""/></>}
