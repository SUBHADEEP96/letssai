import { CheckCircle, ImageSquare } from "@phosphor-icons/react/dist/ssr"
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
  "ai-workflow-automation": {
    title: "Move routine work forward without the manual handoffs",
    description:
      "Connect repeated tasks across teams and tools while keeping exceptions, approvals, and important decisions with your people.",
    eyebrow: "Daily operations, thoughtfully automated",
  },
  "ai-system-integration": {
    title: "Put useful AI inside the tools your team already trusts",
    description:
      "Connect approved systems and data flows so information can move reliably without adding another disconnected tool to the day.",
    eyebrow: "Connected by design",
  },
}

function MediaPlaceholder({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={`Placeholder for ${label} media`}
      className="grid aspect-[4/3] place-items-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 p-8 text-center"
    >
      <div>
        <ImageSquare
          className="mx-auto text-emerald-700"
          size={38}
          aria-hidden
        />
        <p className="mt-3 text-xs font-semibold tracking-[0.14em] text-emerald-800 uppercase">
          Media placeholder
        </p>
        <p className="mt-2 text-sm text-slate-500">{label}</p>
      </div>
    </div>
  )
}

export function StandardServicePage({ service }: { service: Service }) {
  const copy = pageCopy[service.slug] ?? {
    title: `Make ${service.title.toLowerCase()} practical for your team`,
    description: service.description,
    eyebrow: "Designed around your workflow",
  }

  return (
    <>
      <ServiceHero
        eyebrow={service.title}
        title={`${service.title} for faster, clearer business communication`}
        description={service.metaDescription}
        href={service.href}
      />

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
            {service.benefits.slice(0, 3).map((benefit) => (
              <article
                key={benefit}
                className="overflow-hidden rounded-[1.75rem] border border-emerald-950/10 bg-white shadow-[0_16px_45px_rgba(2,44,34,0.06)]"
              >
                <MediaPlaceholder label={benefit} />
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
            {service.does.map((item, index) => (
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
                    {service.workflow[index] ?? service.description} The scope,
                    access, and review points are agreed before rollout.
                  </p>
                </div>
                <div
                  className={`overflow-hidden rounded-[1.75rem] border border-emerald-950/10 shadow-[0_18px_50px_rgba(2,44,34,0.08)] ${index % 2 ? "md:order-1" : ""}`}
                >
                  <MediaPlaceholder label={item} />
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
