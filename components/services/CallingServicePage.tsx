import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr"
import voice1 from "@/public/media/services/ai-calling-appointment-booking/voice1-letssai.webp"
import voice2 from "@/public/media/services/ai-calling-appointment-booking/voice2-letssai.webp"
import voice3 from "@/public/media/services/ai-calling-appointment-booking/voice3-letssai.webp"
import vstep1 from "@/public/media/services/ai-calling-appointment-booking/vstep1-letssai.webp"
import vstep2 from "@/public/media/services/ai-calling-appointment-booking/vstep2-letssai.webp"
import vstep3 from "@/public/media/services/ai-calling-appointment-booking/vstep3-letssai.webp"
import vstep4 from "@/public/media/services/ai-calling-appointment-booking/vstep4-letssai.webp"
import vstep5 from "@/public/media/services/ai-calling-appointment-booking/vstep5-letssai.webp"
import vstep6 from "@/public/media/services/ai-calling-appointment-booking/vstep6-letssai.webp"
import { CTAButton } from "@/components/site/CTAButton"
import { FAQSection } from "@/components/site/FAQSection"
import { ServiceHero } from "./ServiceHero"
import { VoiceFeatureRow } from "./VoiceFeatureRow"
import type { Service } from "@/lib/site"

const benefits = [
  {
    title: "Natural customer conversations",
    description:
      "Deliver clear inbound and outbound conversations with controlled tone, responsive turn-taking, and defined business objectives.",
    image: voice1,
    alt: "Customer speaking with an AI calling assistant by phone",
  },
  {
    title: "Adapted to your workflow",
    description:
      "Configure terminology, qualification questions, escalation rules, and booking logic around the way your team already works.",
    image: voice2,
    alt: "Business team configuring a voice and appointment workflow",
  },
  {
    title: "Serve customers across regions",
    description:
      "Support multilingual conversations and route enquiries by language, location, intent, and team availability.",
    image: voice3,
    alt: "Multilingual customer conversations across service regions",
  },
]

const features = [
  {
    eyebrow: "Responsive dialogue",
    title: "Advanced turn-taking",
    description:
      "The assistant can manage natural pauses, interruptions, and overlapping speech while keeping the conversation focused on the agreed outcome. It can clarify what it heard instead of rushing ahead.",
    image: vstep1,
    imageAlt: "Voice assistant managing an interruption during a conversation",
  },
  {
    eyebrow: "Brand experience",
    title: "Customizable voice profiles",
    description:
      "Select voice, pace, tone, terminology, and conversational behaviour to suit the brand, audience, and use case. Your team approves how the assistant introduces itself and responds.",
    image: vstep2,
    imageAlt: "Interface showing configurable AI voice profiles",
  },
  {
    eyebrow: "Human in the loop",
    title: "Seamless human escalation",
    description:
      "Qualified, sensitive, or complex conversations can be transferred to the right team member with useful context and a concise summary, reducing the need for customers to repeat themselves.",
    image: vstep3,
    imageAlt: "AI call being escalated to a human team member with a summary",
  },
  {
    eyebrow: "Approved outreach",
    title: "Outbound calling",
    description:
      "Build permitted outbound workflows for enquiry follow-up, appointment confirmations, reminders, and customer updates. Audience, consent, timing, and escalation rules are agreed during implementation.",
    image: vstep4,
    imageAlt: "Outbound appointment confirmation call in progress",
  },
  {
    eyebrow: "Everyday conditions",
    title: "Real-world conversation handling",
    description:
      "The workflow can account for accents, background noise, incomplete sentences, and clarification requests. When information is unclear, it asks again or escalates rather than inventing an answer.",
    image: vstep5,
    imageAlt:
      "Call transcript identifying background noise and a customer request",
  },
  {
    eyebrow: "Controlled delivery",
    title: "Built-in guardrails",
    description:
      "Set clear boundaries around what the assistant can discuss, which actions it can take, and when a person must review or continue the conversation.",
    image: vstep6,
    imageAlt: "Configuration panel for AI calling workflow guardrails",
    points: [
      "Approved knowledge boundaries",
      "Business-scope restrictions",
      "Consent-aware workflows",
      "Escalation policies",
      "Human review",
      "Auditable call outcomes",
      "Safe fallback behaviour",
    ],
  },
]

const useCases = [
  [
    "Lead qualification and follow-up",
    "Ask agreed questions and route promising enquiries with a useful summary.",
  ],
  [
    "Appointment booking and rescheduling",
    "Offer available times and keep connected calendars up to date.",
  ],
  [
    "Missed-call follow-up",
    "Reconnect with callers and capture their reason for contacting your business.",
  ],
  [
    "Customer-service triage",
    "Identify intent and direct routine, urgent, or sensitive requests appropriately.",
  ],
  [
    "Payment or document reminders",
    "Deliver approved reminders and record the customer’s next intended action.",
  ],
  [
    "Event and service confirmations",
    "Confirm attendance or service details and flag changes for the team.",
  ],
  [
    "Customer feedback collection",
    "Ask concise, approved questions and organize responses for review.",
  ],
  [
    "Human-agent escalation",
    "Transfer conversations that need judgment, empathy, or specialist knowledge.",
  ],
]

const callingFaqs = [
  {
    question:
      "Can the AI calling assistant handle both inbound and outbound calls?",
    answer:
      "Yes, within the approved implementation scope. It can answer inbound enquiries and support permitted outbound workflows such as follow-up, reminders, confirmations, and customer updates.",
  },
  {
    question: "Can it book appointments in our existing calendar?",
    answer:
      "It can check availability, book, reschedule, or cancel appointments when a suitable calendar integration is available. A workflow review confirms the systems and rules involved.",
  },
  {
    question: "Can it transfer a conversation to a human team member?",
    answer:
      "Yes. Qualified, sensitive, or complex calls can be routed to an agreed person or queue, with context and a concise summary where the connected systems support it.",
  },
  {
    question: "Can the voice and conversation style match our brand?",
    answer:
      "Voice, pace, tone, terminology, and conversational rules can be selected for the use case. Your team reviews and approves the experience before wider use.",
  },
  {
    question: "What happens when the assistant does not know an answer?",
    answer:
      "It can ask for clarification, use an approved fallback, take a message, or escalate to a person. It should not answer beyond the knowledge and business scope agreed for the workflow.",
  },
  {
    question: "How does LetssAI protect customer and business information?",
    answer:
      "Data access, retention, integrations, review steps, and escalation rules are defined for the approved implementation scope. We recommend a workflow review to identify the information required and minimize unnecessary access.",
  },
]

export function CallingServicePage({ service }: { service: Service }) {
  return (
    <>
      <ServiceHero
        eyebrow="AI Calling & Appointment Booking"
        title="AI conversations that move customers forward"
        description="Handle inbound and outbound conversations, qualify enquiries, answer approved questions, book appointments, and escalate sensitive cases to people—with a workflow shaped around your business."
        href={service.href}
        primaryCta={{
          label: "Request a free AI workflow review",
          href: "/contact",
        }}
        secondaryCta={{ label: "Talk to LetssAI", opensChat: true }}
      />

      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.14em] text-[#016630] uppercase">
              A better calling experience
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
              Make every business call effortless and useful
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Give customers a clear next step while your team keeps control of
              the message, workflow, and moments that require human judgment.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="group overflow-hidden rounded-[1.75rem] border border-emerald-950/10 bg-white shadow-[0_16px_45px_rgba(2,44,34,0.06)] transition duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_20px_55px_rgba(2,44,34,0.10)]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-emerald-50">
                  <Image
                    src={benefit.image}
                    alt={benefit.alt}
                    sizes="(max-width: 767px) calc(100vw - 32px), 33vw"
                    className="h-full w-full object-cover transition duration-500 motion-safe:group-hover:scale-[1.02]"
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

      <section className="bg-[#f7faf8] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl pt-16 md:pt-24">
            <p className="text-sm font-semibold tracking-[0.14em] text-[#016630] uppercase">
              From first word to next step
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
              Thoughtful conversations, connected to real work
            </h2>
          </div>
          <div className="mt-8">
            {features.map((feature, index) => (
              <VoiceFeatureRow
                key={feature.title}
                {...feature}
                imageSide={index % 2 === 0 ? "right" : "left"}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold tracking-[0.14em] text-[#016630] uppercase">
                Practical applications
              </p>
              <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
                Where can an AI calling workflow help your team?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Start with a repeated, well-defined conversation where a clear
                outcome and a safe handoff can be designed.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {useCases.map(([title, description]) => (
                <li
                  key={title}
                  className="rounded-2xl border border-emerald-950/10 bg-white p-5 shadow-sm"
                >
                  <div className="flex gap-3">
                    <CheckCircle
                      className="mt-1 shrink-0 text-[#016630]"
                      aria-hidden
                    />
                    <div>
                      <h3 className="font-semibold text-slate-950">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="bg-emerald-50/60 py-4 md:py-10">
        <FAQSection
          faqs={callingFaqs}
          title="AI calling and appointment booking FAQs"
          intro="Clear answers about how a calling workflow can fit your team, tools, and escalation process."
        />
      </div>

      <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="relative mx-auto overflow-hidden rounded-[2rem] bg-emerald-950 px-6 py-10 text-white sm:px-10 md:px-14 md:py-14">
          <div
            className="absolute -top-24 -right-20 size-64 rounded-full bg-emerald-500/15 blur-3xl"
            aria-hidden
          />
          <div className="relative max-w-4xl">
            <p className="text-sm font-semibold tracking-[0.14em] text-emerald-200 uppercase">
              Start with one practical workflow
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.03em] sm:text-5xl">
              Turn more customer conversations into clear next steps
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50/75">
              Tell us how your team currently handles enquiries, follow-ups, and
              bookings. LetssAI will help identify a practical first workflow
              and the systems it needs to connect with.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-950 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Request a free AI workflow review
              </Link>
              <CTAButton className="justify-center border border-white/30 bg-transparent shadow-none hover:bg-white/10">
                Contact LetssAI <ArrowRight aria-hidden />
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export { callingFaqs }
