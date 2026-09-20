import Image from "next/image"
import { CheckCircle, Sparkle } from "@phosphor-icons/react/dist/ssr"
import type { Service } from "@/lib/site"
import { CTASection } from "@/components/site/CTASection"
import { FAQSection } from "@/components/site/FAQSection"
import { ServiceHero } from "./ServiceHero"

const pageCopy: Record<
  string,
  { title: string; description: string; eyebrow: string }
> = {
  "ai-sales-lead-follow-up": {
    title: "Turn every new enquiry into a clear next action",
    description:
      "Respond while interest is fresh, qualify consistently, and give your sales team the context they need to continue the conversation.",
    eyebrow: "A more responsive sales journey",
  },
  "ai-crm-development": {
    title: "Build a CRM that works the way your team does",
    description:
      "Bring customer information, conversations, follow-ups, and reporting into one practical system designed around your real process.",
    eyebrow: "One connected customer workspace",
  },
}

const media: Record<string, { benefits: string[]; steps: string[] }> = {
  "ai-crm-development": {
    benefits: ["crm-1.png", "crm-2.png", "crm3.png"],
    steps: ["crmstep-1.png", "crm2.png", "crmstep-3.png"],
  },
  "ai-sales-lead-follow-up": {
    benefits: ["sales-1.png", "sales-2.png", "sales-3.png"],
    steps: ["slstep-1.png", "slstep-2.png", "slstep-3.png", "slstep-4.png"],
  },
}

function ServiceArtwork({
  service,
  file,
  alt,
}: {
  service: Service
  file: string
  alt: string
}) {
  return (
    <div className="relative aspect-[4/3] w-full bg-slate-50">
      <Image
        src={`/media/services/${service.slug}/${file}`}
        alt={alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-contain"
      />
    </div>
  )
}

const integrationFeatures = [
  {
    heading: "Seamlessly integrate with your support tools",
    image: "03-integration-ecosystem-letssai.webp",
    alt: "Integration ecosystem connecting support tools to LetssAI",
    items: [
      [
        "CRM, helpdesk, and ticketing",
        "Connect support tickets and customer context across the systems your team already uses.",
      ],
      [
        "Knowledge-base synchronisation",
        "Keep approved support knowledge available for accurate, useful responses.",
      ],
      [
        "Calling or CPaaS integrations",
        "Connect calling platforms for joined-up voice support and handoffs.",
      ],
    ],
  },
  {
    heading: "Handle conversations and escalations across any channel",
    image: "02-checkout-support-workflow-letssai.webp",
    alt: "Customer support conversation and escalation workflow",
    reverse: true,
    items: [
      [
        "Live-chat escalations",
        "Pass complex conversations to a person with the useful context already gathered.",
      ],
      [
        "Automated email routing",
        "Direct incoming support email to the right workflow or team.",
      ],
      [
        "Call forwarding and human handoff",
        "Route voice conversations to a person when escalation is required.",
      ],
    ],
  },
  {
    heading:
      "Extend your support stack by connecting with any system or custom endpoint",
    image: "01-api-mcp-sip-integrations-letssai.webp",
    alt: "API, MCP, and SIP connections for custom support systems",
    items: [
      [
        "MCP connectivity",
        "Connect approved tools and data sources through an extensible MCP layer.",
      ],
      [
        "API integrations",
        "Retrieve data and trigger permitted actions through secure APIs and endpoints.",
      ],
      [
        "SIP trunking for voice workflows",
        "Connect existing telephony infrastructure to supported voice workflows.",
      ],
    ],
  },
]

function IntegrationBody() {
  return (
    <main className="overflow-hidden bg-[#f7f7f8] px-4 pb-20 sm:px-6 md:pb-28 lg:px-8">
      <div className="mx-auto max-w-7xl py-10 sm:py-14 md:py-20">
        <div className="relative aspect-[3/1] min-h-36 w-full">
          <Image
            src="/media/services/ai-system-integration/04-integrations-hero-letssai.webp"
            alt="Mosaic of business platforms that can connect with LetssAI"
            fill
            priority
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-contain"
          />
        </div>
      </div>
      <section className="mx-auto max-w-7xl rounded-[2rem] bg-[#090a0b] px-6 py-24 sm:px-10 md:py-36 lg:py-44">
        <div className="mx-auto max-w-3xl space-y-7 text-center text-xl leading-relaxed font-medium sm:text-2xl md:text-3xl">
          <p className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-orange-200 bg-clip-text text-transparent">
            LetssAI integrations connect your AI support experience to the
            systems your team already relies on—including CRMs, help desks, call
            platforms, and knowledge bases.
          </p>
          <p className="bg-gradient-to-r from-indigo-300 via-pink-300 to-rose-200 bg-clip-text text-transparent">
            Bring approved data, actions, and human escalation together across
            chat, email, and voice, while keeping access and review points
            clearly defined.
          </p>
        </div>
      </section>
      <section className="mx-auto mt-20 max-w-6xl md:mt-28">
        <div className="border-t border-slate-300 pt-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-800">
            <Sparkle size={13} weight="fill" aria-hidden /> Features
          </span>
        </div>
        <div className="mt-8 space-y-24 md:mt-12 md:space-y-32">
          {integrationFeatures.map((feature) => (
            <article
              key={feature.heading}
              className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-24"
            >
              <div className={feature.reverse ? "md:order-2" : ""}>
                <h2 className="text-3xl leading-tight font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
                  {feature.heading}
                </h2>
                <div className="mt-7 divide-y divide-slate-300 border-y border-slate-300">
                  {feature.items.map(([title, copy]) => (
                    <div key={title} className="py-5">
                      <h3 className="font-semibold text-slate-950">{title}</h3>
                      <p className="mt-2 leading-7 text-slate-600">{copy}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`relative aspect-square overflow-hidden rounded-2xl ${feature.reverse ? "md:order-1" : ""}`}
              >
                <Image
                  src={`/media/services/ai-system-integration/${feature.image}`}
                  alt={feature.alt}
                  fill
                  sizes="(min-width: 1280px) 520px, (min-width: 768px) 45vw, 100vw"
                  className="object-contain"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function StandardBody({ service }: { service: Service }) {
  const copy = pageCopy[service.slug]
  const artwork = media[service.slug]
  const steps =
    service.slug === "ai-crm-development"
      ? service.does.slice(0, 3)
      : service.does
  return (
    <>
      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.14em] text-[#016630] uppercase">
              {copy.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {copy.description}
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <article
                key={benefit}
                className="overflow-hidden rounded-[1.75rem] border border-emerald-950/10 bg-white shadow-[0_16px_45px_rgba(2,44,34,0.06)]"
              >
                <ServiceArtwork
                  service={service}
                  file={artwork.benefits[index]}
                  alt={`${benefit} for ${service.title}`}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                    {benefit}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Built around an agreed process, clear ownership, and the
                    systems your team uses every day.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#f7faf8] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold tracking-[0.14em] text-[#016630] uppercase">
            From first input to useful outcome
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl leading-tight font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
            A clear workflow with people in control
          </h2>
          <div className="mt-12 divide-y divide-emerald-950/10">
            {steps.map((item, index) => (
              <article
                key={item}
                className="grid items-center gap-9 py-14 first:pt-4 md:grid-cols-2 md:gap-14 lg:gap-20"
              >
                <div className={index % 2 ? "md:order-2" : ""}>
                  <p className="text-sm font-semibold tracking-[0.13em] text-[#016630] uppercase">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                    {item}
                  </h3>
                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    {service.workflow[index]} The scope, access, and review
                    points are agreed before rollout.
                  </p>
                </div>
                <div
                  className={`overflow-hidden rounded-[1.75rem] border border-emerald-950/10 shadow-[0_18px_50px_rgba(2,44,34,0.08)] ${index % 2 ? "md:order-1" : ""}`}
                >
                  <ServiceArtwork
                    service={service}
                    file={artwork.steps[index]}
                    alt={`Step ${index + 1}: ${item}`}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-[#016630] uppercase">
              Practical applications
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
              Where can {service.title.toLowerCase()} help?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Start with a repeated, well-defined process and expand only after
              the first workflow is useful, safe, and measurable.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[...service.problems, ...service.tools].slice(0, 8).map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-emerald-950/10 bg-white p-5 shadow-sm"
              >
                <CheckCircle
                  className="mt-0.5 shrink-0 text-[#016630]"
                  aria-hidden
                />
                <span className="leading-6 font-medium text-slate-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export function StandardServicePage({ service }: { service: Service }) {
  return (
    <>
      <ServiceHero
        eyebrow={service.title}
        title={`${service.title} for faster, clearer business communication`}
        description={service.metaDescription}
        href={service.href}
      />
      {service.slug === "ai-system-integration" ? (
        <IntegrationBody />
      ) : (
        <StandardBody service={service} />
      )}
      <div className="bg-emerald-50/60 py-4 md:py-10">
        <FAQSection
          faqs={service.faqs}
          title={`${service.title} FAQs`}
          intro="Practical answers about scope, integrations, review, and finding the right place to begin."
        />
      </div>
      <CTASection
        title={`Find the right starting point for ${service.title.toLowerCase()}`}
        text="Share the process that takes too much time today. We’ll map a practical, reviewable first workflow, the approved information it needs, and where your team should stay involved."
      />
    </>
  )
}
