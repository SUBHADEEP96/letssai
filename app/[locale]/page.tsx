import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Locale } from "@/i18n/routing"
import { HomeHero } from "@/components/sections/HomeHero"
import { FAQSection } from "@/components/site/FAQSection"
import { CTASection } from "@/components/site/CTASection"
import { JsonLd } from "@/components/seo/JsonLd"
import { faqSchema } from "@/lib/seo"
import { homeFaqs } from "@/lib/site"
import { GlobalDeliveryMap } from "@/components/site/GlobalDeliveryMap"
import { VoiceConversationShowcase } from "@/components/sections/VoiceConversationShowcase"
import { ToolsSection } from "@/components/sections/ToolsSection"
import { localizedMetadata } from "@/lib/i18n-seo"
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "home" })
  return localizedMetadata(locale, t("metaTitle"), t("metaDescription"), "/")
}
export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("home")
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <HomeHero />
      <VoiceConversationShowcase />
      <ToolsSection title={t("toolsTitle")} description={t("toolsText")} />
      <FAQSection faqs={homeFaqs} />
      <GlobalDeliveryMap />
      <CTASection title="" text="" />
    </>
  )
}
