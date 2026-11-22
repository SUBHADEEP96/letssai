import Image, { type StaticImageData } from "next/image"
import cs1 from "@/public/media/services/ai-customer-support/cs1.webp"
import cs2 from "@/public/media/services/ai-customer-support/cs2.webp"
import cs3 from "@/public/media/services/ai-customer-support/cs3.webp"
import csstep1 from "@/public/media/services/ai-customer-support/csstep1.webp"
import csstep2 from "@/public/media/services/ai-customer-support/csstep2.webp"
import csstep3 from "@/public/media/services/ai-customer-support/csstep3.webp"
import csstep4 from "@/public/media/services/ai-customer-support/csstep4.webp"
import csstep5 from "@/public/media/services/ai-customer-support/csstep5.webp"
import { CTASection } from "@/components/site/CTASection"
import { FAQSection } from "@/components/site/FAQSection"
import { ServiceHero } from "./ServiceHero"
import type { Service } from "@/lib/site"
import type { Locale } from "@/i18n/routing"
import { getCustomerSupportContent } from "@/lib/service-content-translations"

const benefitImages = [cs1, cs2, cs3]
const featureImages = [csstep1, csstep2, csstep3, csstep4, csstep5]

const PAGE_TEXT: Record<
  Locale,
  {
    benefitsHeading: string
    featuresEyebrow: string
    featuresHeading: string
    faqTitle: string
    faqIntro: string
    ctaTitle: string
    ctaText: string
  }
> = {
  en: {
    benefitsHeading: "From simple questions to lasting customer loyalty",
    featuresEyebrow: "Designed around your customer journey",
    featuresHeading:
      "Helpful conversations that look and feel like your business",
    faqTitle: "AI customer support FAQs",
    faqIntro:
      "Practical answers about knowledge, channels, handoff, and finding the right place to begin.",
    ctaTitle: "Find the right starting point for customer support",
    ctaText:
      "Share the repeated questions and handoffs that take time today. We’ll help map a practical first workflow, the approved knowledge it needs, and where people should stay involved.",
  },
  fr: {
    benefitsHeading: "Des questions simples à la fidélisation durable",
    featuresEyebrow: "Conçu autour de votre parcours client",
    featuresHeading:
      "Des échanges utiles à l'image et aux couleurs de votre entreprise",
    faqTitle: "FAQ sur le support client par IA",
    faqIntro:
      "Des réponses concrètes sur les connaissances, les canaux et les étapes de démarrage.",
    ctaTitle: "Trouvez le bon point de départ pour votre support client",
    ctaText:
      "Partagez les questions répétitives qui prennent du temps aujourd'hui. Nous vous aiderons à définir un premier flux pratique, les connaissances requises et les points de contrôle humains.",
  },
  de: {
    benefitsHeading: "Von einfachen Fragen zu langfristiger Kundentreue",
    featuresEyebrow: "Abgestimmt auf Ihre Customer Journey",
    featuresHeading:
      "Hilfreiche Dialoge im Look & Feel Ihres Unternehmens",
    faqTitle: "Häufige Fragen zum AI-Kundensupport",
    faqIntro:
      "Praxisnahe Antworten zu Wissen, Kanälen und den ersten Schritten.",
    ctaTitle: "Finden Sie den richtigen Einstieg für Ihren Kundensupport",
    ctaText:
      "Nennen Sie uns zeitraubende Routinefragen. Wir definieren gemeinsam einen ersten Workflow, das nötige Wissen und die Übergabepunkte.",
  },
  es: {
    benefitsHeading: "De consultas simples a la fidelidad duradera",
    featuresEyebrow: "Diseñado para el recorrido de sus clientes",
    featuresHeading:
      "Conversaciones útiles que reflejan la identidad de su negocio",
    faqTitle: "Preguntas frecuentes sobre soporte con IA",
    faqIntro: "Respuestas prácticas sobre conocimiento, canales y cómo empezar.",
    ctaTitle: "Encuentre el punto de partida ideal para su soporte",
    ctaText:
      "Comparta las preguntas repetitivas que consumen tiempo hoy. Le ayudaremos a diseñar un primer flujo práctico con control humano.",
  },
  hi: {
    benefitsHeading: "सरल प्रश्नों से लेकर स्थायी ग्राहक निष्ठा तक",
    featuresEyebrow: "आपकी ग्राहक यात्रा के अनुरूप डिज़ाइन किया गया",
    featuresHeading: "उपयोगी बातचीत जो आपके व्यवसाय के अनुकूल लगे",
    faqTitle: "AI ग्राहक सहायता से जुड़े अक्सर पूछे जाने वाले प्रश्न",
    faqIntro:
      "ज्ञान, चैनल, हैंडऑफ़ और शुरुआत के बारे में व्यावहारिक उत्तर।",
    ctaTitle: "ग्राहक सहायता के लिए सही शुरुआत खोजें",
    ctaText:
      "उन दोहराए जाने वाले सवालों को साझा करें जिनमें आज समय लगता है। हम एक व्यावहारिक पहला वर्कफ़्लो तैयार करने में मदद करेंगे।",
  },
}

const benefits = [
  {
    title: "Deliver always-on, personalized support at scale",
    description:
      "Give customers consistent, approved answers across time zones and connected channels, while keeping your team available for conversations that need human judgment.",
    image: cs1,
    alt: "Customer support professional ready to help customers across time zones",
  },
  {
    title: "Resolve high-volume enquiries instantly",
    description:
      "Handle repeated questions across website chat, WhatsApp, and email when those channels are connected, so customers can get a useful response without waiting in a queue.",
    image: cs2,
    alt: "Customer receiving a prompt support response on her phone",
  },
  {
    title: "Turn every chat into a conversation that matters",
    description:
      "Guide customers towards a clear next step, collect the context your team needs, and hand the conversation to a person when appropriate.",
    image: cs3,
    alt: "Support team member continuing a meaningful customer conversation",
  },
]

const features: {
  title: string
  eyebrow: string
  description: string
  image: StaticImageData
  alt: string
}[] = [
  {
    eyebrow: "On-brand by design",
    title: "Chat appearance",
    description:
      "Match the customer-facing assistant to your brand colors, name, and visual identity, creating an experience that feels like a considered part of your website—not an add-on.",
    image: csstep1,
    alt: "LetssAI chatbot customization showing its name, brand color, icon, and customer conversation",
  },
  {
    eyebrow: "Relevant from the first message",
    title: "Personalized welcome messages",
    description:
      "Create dynamic greetings based on the context, language, or journey stage available through your connected systems. When that context is not available, the assistant uses an approved, helpful welcome.",
    image: csstep2,
    alt: "Multilingual personalized welcome message in a customer support chat",
  },
  {
    eyebrow: "Less back and forth",
    title: "Quick replies and guided forms",
    description:
      "Offer predefined choices and capture structured information so customers can explain what they need quickly and your team receives clear, useful context.",
    image: csstep3,
    alt: "Customer support chat offering quick reply choices for plan selection",
  },
  {
    eyebrow: "Clearer next steps",
    title: "Interactive recommendations",
    description:
      "Make answers easier to act on with helpful visuals, relevant product or service options, and guided next steps drawn from your approved content and workflow.",
    image: csstep4,
    alt: "Customer support chat presenting visual product recommendations and next steps",
  },
  {
    eyebrow: "One platform, distinct experiences",
    title: "Multi-brand and multi-workflow support",
    description:
      "Configure distinct assistants, greetings, styling, and approved knowledge for different brands or business workflows while maintaining clear boundaries for each experience.",
    image: csstep5,
    alt: "Layered LetssAI chat interfaces representing distinct brand and workflow experiences",
  },
]

export const customerSupportFaqs = [
  {
    question:
      "What is the difference between an AI chatbot and an AI customer support agent?",
    answer:
      "A basic chatbot follows scripts and answers a fixed set of questions. An AI customer support agent understands open-ended requests, draws on your approved knowledge, collects the details your team needs, and can take defined actions or hand them over to a person. LetssAI builds the second kind, shaped around your support workflow and connected channels.",
  },
  {
    question:
      "Can AI handle customer support on WhatsApp, email and website chat from one place?",
    answer:
      "Yes. LetssAI's support suite brings WhatsApp, email, Instagram/Facebook, SMS and website chat into one unified inbox, so the AI and your team see the same conversations in one place. Channels are connected as part of the agreed scope.",
  },
  {
    question:
      "Can AI answer order status, refund and delivery questions automatically?",
    answer:
      "Yes, when the assistant is connected to the relevant order or customer data. Routine requests such as order updates, refund status and delivery enquiries can be resolved instantly, while exceptions go to an agent with the details already gathered.",
  },
  {
    question: "How does the AI decide when to pass a conversation to a human?",
    answer:
      "Escalation rules are set during implementation. Typical triggers include complex or technical issues, sensitive topics, high-value customers and signs of frustration. LetssAI workflows can route technical issues to specialists and flag frustrated customers for priority handling. When the assistant is unsure, it asks a clarifying question, uses an approved fallback or hands over.",
  },
  {
    question:
      "How can AI customer support reduce support costs without hurting service quality?",
    answer:
      "By absorbing repeated, predictable questions so your team spends its time on conversations that need judgment. Quality is protected through approved knowledge, scope limits and human handoff. Savings depend on your volumes, so the practical measures are the share of enquiries resolved without an agent, response time and customer satisfaction.",
  },
  {
    question: "Can I see how the AI assistant is performing?",
    answer:
      "Yes. Live agent analytics track conversation volume, open, unattended and unassigned chats, average response and resolution times, and customer satisfaction, with the AI shown alongside human agents so you can compare them.",
  },
  {
    question: "Can one setup support multiple brands or business lines?",
    answer:
      "Yes. Separate assistants can be configured with their own name, styling, greetings and approved knowledge for different brands or workflows, with clear boundaries between them.",
  },
  {
    question: "Will AI customer support replace my support team?",
    answer:
      "No. It handles repeat questions and prepares context so your people can focus on sensitive, complex or high-value conversations. Your team keeps control through approval steps, handoff rules and monitoring. It can reduce the number of support team members needed as most of the repeat tasks are handled by AI.",
  },
]

export function CustomerSupportServicePage({
  service,
  locale = "en",
}: {
  service: Service
  locale?: Locale
}) {
  const content = getCustomerSupportContent(locale)
  const pageText = PAGE_TEXT[locale] || PAGE_TEXT.en

  return (
    <>
      <ServiceHero
        eyebrow={content.meta.heroEyebrow}
        title={content.meta.heroTitle}
        description={content.meta.heroDescription}
        href={service.href}
        locale={locale}
      />

      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-3xl leading-tight font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl">
            {pageText.benefitsHeading}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="overflow-hidden rounded-[1.75rem] border border-emerald-950/10 bg-[#f7f8f4] shadow-[0_16px_45px_rgba(2,44,34,0.06)]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-emerald-50">
                  <Image
                    src={benefitImages[index] || cs1}
                    alt={benefit.alt}
                    sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1023px) 50vw, 33vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7faf8] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.14em] text-[#016630] uppercase">
              {pageText.featuresEyebrow}
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
              {pageText.featuresHeading}
            </h2>
          </div>
          <div className="mt-12 divide-y divide-emerald-950/10">
            {content.features.map((feature, index) => (
              <article
                key={feature.title}
                className="grid items-center gap-9 py-14 first:pt-4 md:grid-cols-2 md:gap-14 lg:gap-20"
              >
                <div className={index % 2 ? "md:order-2" : ""}>
                  <p className="text-sm font-semibold tracking-[0.13em] text-[#016630] uppercase">
                    {feature.eyebrow}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                    {feature.title}
                  </h3>
                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    {feature.description}
                  </p>
                </div>
                <div
                  className={`overflow-hidden rounded-[1.75rem] border border-emerald-950/10 bg-emerald-100 shadow-[0_18px_50px_rgba(2,44,34,0.08)] ${index % 2 ? "md:order-1" : ""}`}
                >
                  <Image
                    src={featureImages[index] || csstep1}
                    alt={feature.alt}
                    sizes="(max-width: 767px) calc(100vw - 32px), 50vw"
                    className="h-auto w-full"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-emerald-50/60 py-4 md:py-10">
        <FAQSection
          faqs={customerSupportFaqs}
          title={pageText.faqTitle}
          intro={pageText.faqIntro}
        />
      </div>
      <CTASection
        title={pageText.ctaTitle}
        text={pageText.ctaText}
      />
    </>
  )
}
