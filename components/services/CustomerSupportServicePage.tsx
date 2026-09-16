import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import cs1 from "@/public/media/services/ai-customer-support/cs1.webp"
import cs2 from "@/public/media/services/ai-customer-support/cs2.webp"
import cs3 from "@/public/media/services/ai-customer-support/cs3.webp"
import csstep1 from "@/public/media/services/ai-customer-support/csstep1.webp"
import csstep2 from "@/public/media/services/ai-customer-support/csstep2.webp"
import csstep3 from "@/public/media/services/ai-customer-support/csstep3.webp"
import csstep4 from "@/public/media/services/ai-customer-support/csstep4.webp"
import csstep5 from "@/public/media/services/ai-customer-support/csstep5.webp"
import { Breadcrumbs } from "@/components/site/Breadcrumbs"
import { FAQSection } from "@/components/site/FAQSection"
import type { Service } from "@/lib/site"

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
    question: "What can the LetssAI customer-support assistant handle?",
    answer:
      "It can answer repeated questions, guide customers through defined next steps, capture useful details, and route conversations using the support workflows your team approves.",
  },
  {
    question: "Can it use our website, documents, and approved knowledge?",
    answer:
      "Yes. The assistant can use approved website content, documents, FAQs, and connected knowledge sources. Its scope and source material are agreed as part of the workflow.",
  },
  {
    question: "Can it hand a conversation to a human?",
    answer:
      "Yes. Sensitive, unclear, complex, or high-value conversations can be routed to the right person with the useful context already gathered.",
  },
  {
    question: "Can the assistant match our brand voice?",
    answer:
      "Yes. Its name, colors, visual identity, terminology, tone, greetings, and response rules can be shaped around your approved brand guidance.",
  },
  {
    question: "Which customer channels or business tools can it connect with?",
    answer:
      "LetssAI can support website chat, WhatsApp, and email, and can connect with tools such as CRM systems, forms, calendars, and Google Sheets where a suitable integration is available.",
  },
  {
    question: "How are unclear or sensitive questions handled?",
    answer:
      "The assistant can ask for clarification, use an approved fallback, or hand the conversation to a person. It is designed not to answer beyond its approved knowledge and business scope.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Setup depends on the workflow, content, channels, and systems involved. A workflow review is used to define a practical scope before implementation begins.",
  },
  {
    question: "How do we start with a suitable support workflow?",
    answer:
      "Start with a repeated, well-defined customer question or handoff. In a free AI workflow review, we map the current process, the approved knowledge required, and the points where your team should stay involved.",
  },
]

export function CustomerSupportServicePage({ service }: { service: Service }) {
  return (
    <>
      <section className="bg-[#f5faf7] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: service.title, href: service.href },
              ]}
            />
            <p className="mt-10 text-sm font-semibold tracking-[0.16em] text-[#016630] uppercase">
              AI Customer Support
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.06] font-semibold tracking-[-0.04em] text-balance text-slate-950 sm:text-5xl lg:text-6xl">
              Give customers a faster answer—and your team a better handoff
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Reduce repeated support work across website chat, WhatsApp, and
              email while keeping sensitive, unclear, or high-value
              conversations with your people.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-emerald-950/10 bg-emerald-100 shadow-[0_24px_70px_rgba(2,44,34,0.12)]">
            <Image
              src={csstep5}
              alt="LetssAI customer support assistants configured for different workflows"
              priority
              sizes="(max-width: 1023px) calc(100vw - 32px), 52vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-3xl leading-tight font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl">
            From simple questions to lasting customer loyalty
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="overflow-hidden rounded-[1.75rem] border border-emerald-950/10 bg-white shadow-[0_16px_45px_rgba(2,44,34,0.06)]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-emerald-50">
                  <Image
                    src={benefit.image}
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
              Designed around your customer journey
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
              Helpful conversations that look and feel like your business
            </h2>
          </div>
          <div className="mt-12 divide-y divide-emerald-950/10">
            {features.map((feature, index) => (
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
                    src={feature.image}
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
          title="AI customer support FAQs"
          intro="Practical answers about knowledge, channels, handoff, and finding the right place to begin."
        />
      </div>
      <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-emerald-950 px-6 py-10 text-white sm:px-10 md:px-14 md:py-14">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-[0.14em] text-emerald-200 uppercase">
              Start with one practical workflow
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.03em] sm:text-5xl">
              Find the right starting point for customer support
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50/75">
              Share the repeated questions and handoffs that take time today.
              We’ll help map a practical first workflow, the approved knowledge
              it needs, and where people should stay involved.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-950 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request a free AI workflow review
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
