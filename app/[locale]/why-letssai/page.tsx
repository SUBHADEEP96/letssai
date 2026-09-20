import {getTranslations} from 'next-intl/server'
import {CTASection} from '@/components/site/CTASection'
import {GlobalDeliveryMap} from '@/components/site/GlobalDeliveryMap'
export default async function Why(){const t=await getTranslations('why');return <><section className="section bg-emerald-50"><div className="mx-auto max-w-5xl"><h1 className="text-4xl font-semibold md:text-6xl">{t('title')}</h1><p className="mt-5 text-lg text-slate-600">{t('description')}</p></div></section><GlobalDeliveryMap/><CTASection title="" text=""/></>}
