import Image from "next/image"
import { CheckCircle } from "@phosphor-icons/react/dist/ssr"
import voice1 from "@/public/media/services/ai-calling-appointment-booking/voice1-letssai.webp"
import voice2 from "@/public/media/services/ai-calling-appointment-booking/voice2-letssai.webp"
import voice3 from "@/public/media/services/ai-calling-appointment-booking/voice3-letssai.webp"
import vstep1 from "@/public/media/services/ai-calling-appointment-booking/vstep1-letssai.webp"
import vstep2 from "@/public/media/services/ai-calling-appointment-booking/vstep2-letssai.webp"
import vstep3 from "@/public/media/services/ai-calling-appointment-booking/vstep3-letssai.webp"
import vstep4 from "@/public/media/services/ai-calling-appointment-booking/vstep4-letssai.webp"
import vstep5 from "@/public/media/services/ai-calling-appointment-booking/vstep5-letssai.webp"
import vstep6 from "@/public/media/services/ai-calling-appointment-booking/vstep6-letssai.webp"
import { FAQSection } from "@/components/site/FAQSection"
import { CTASection } from "@/components/site/CTASection"
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
      "How is an AI voice agent different from a traditional phone menu (IVR)?",
    answer:
      "A phone menu forces callers through numbered options. An AI voice agent holds a natural conversation: callers say what they need in their own words, the assistant asks clarifying questions, and then takes an agreed next step such as booking, qualifying or transferring to a person.",
  },
  {
    question:
      "Can the AI call back missed calls and follow up on new enquiries?",
    answer:
      "Yes, within the approved scope. Missed-call follow-up reconnects with callers and captures why they got in touch, and outbound workflows can follow up enquiries, confirm appointments and send reminders. Audience, consent and timing rules are agreed during implementation.",
  },
  {
    question: "Can AI calling help reduce missed appointments?",
    answer:
      "It can help. Confirmation and reminder calls give customers a simple way to confirm, reschedule or cancel, and changes are flagged for your team and reflected in connected calendars. Results depend on your process, so we suggest tracking confirmation rates and missed appointments before and after launch.",
  },
  {
    question: "Does the voice assistant work in more than one language?",
    answer:
      "LetssAI can support multilingual conversations and route enquiries by language, location, intent and team availability. The languages and voices for your use case are confirmed during the workflow review. Our intelligent voice assistants can also auto detect and switch languages mid conversation as needed.",
  },
  {
    question:
      "How does the assistant cope with accents, background noise and interruptions?",
    answer:
      "The workflow is designed to handle natural pauses, interruptions, overlapping speech, incomplete sentences and background noise, and it asks for clarification instead of guessing. If it still cannot be sure, it escalates to a person rather than inventing an answer.",
  },
  {
    question: "What happens after the call ends?",
    answer:
      "The outcome is recorded: a concise summary, the customer's next step, and updates to connected calendars or CRM fields where integrations are in place. Auditable call outcomes let your team review what was said and decided.",
  },
  {
    question:
      "Are AI phone calls legal, and how are consent and call rules handled?",
    answer:
      "Rules on automated, recorded and outbound calls differ by country and by industry. LetssAI builds consent-aware workflows and agrees audience, timing and escalation rules during implementation, but each business remains responsible for meeting the regulations in the regions it calls, so we recommend reviewing requirements as part of scoping.",
  },
  {
    question:
      "Which businesses get the most from AI calling and appointment booking?",
    answer:
      "Businesses that depend on phone enquiries and bookings, such as clinics, real estate, automotive and finance teams, hospitality and service businesses. The best fit is a repeated, well-defined conversation where a clear outcome and a safe handoff can be designed.",
  },
  {
    question: "Can I hear what an AI call sounds like before committing?",
    answer:
      "Yes. The LetssAI home page includes example AI-assisted phone conversations for automotive, finance, real estate, ecommerce and hospitality scenarios, and a discovery call can map a similar conversation to your business.",
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
                className="group overflow-hidden rounded-[1.75rem] border border-emerald-950/10 bg-[#f7f8f4] shadow-[0_16px_45px_rgba(2,44,34,0.06)] transition duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_20px_55px_rgba(2,44,34,0.10)]"
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
                  className="rounded-2xl border border-emerald-950/10 bg-[#f7f8f4] p-5 shadow-sm"
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

      <CTASection
        title="Turn more customer conversations into clear next steps"
        text="Tell us how your team currently handles enquiries, follow-ups, and bookings. LetssAI will help identify a practical first workflow and the systems it needs to connect with."
      />
    </>
  )
}

export { callingFaqs }
