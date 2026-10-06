import { Gemini, Grok, OpenAI, Perplexity, type IconType } from "@lobehub/icons"
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr"
import { getTranslations } from "next-intl/server"
import {
  aiSummaryProviders,
  buildAISummaryUrl,
  type AISummaryProviderId,
} from "@/lib/ai-summary-links"

const providerIcons = {
  chatgpt: OpenAI,
  "google-ai-mode": Gemini,
  perplexity: Perplexity,
  grok: Grok,
} satisfies Record<AISummaryProviderId, IconType>

export async function AISummaryLinks() {
  const t = await getTranslations("footer.aiSummary")

  return (
    <section
      aria-labelledby="ai-summary-heading"
      className="border-t border-primary/20 bg-primary/[0.03] py-14 pb-28 sm:py-16 sm:pb-28"
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-primary">
          {t("eyebrow")}
        </p>
        <h2
          id="ai-summary-heading"
          className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          {t("title")}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/75">
          {t("description")}
        </p>
        <div
          role="region"
          aria-labelledby="ai-summary-heading"
          tabIndex={0}
          className="mt-8 [scrollbar-width:thin] overflow-x-auto overscroll-x-contain scroll-auto rounded-xl p-2 [-webkit-overflow-scrolling:touch] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <ul className="mx-auto flex w-max min-w-full gap-3 sm:justify-center">
            {aiSummaryProviders.map((provider) => {
              const Icon = providerIcons[provider.id]
              return (
                <li key={provider.id} className="shrink-0">
                  <a
                    href={buildAISummaryUrl(provider)}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label={`${t("askProvider", { provider: provider.label })} — ${t("opensNewTab")}`}
                    className="inline-flex min-h-12 min-w-36 items-center justify-center gap-2 rounded-full border border-primary/40 bg-background px-4 py-3 text-sm font-semibold whitespace-nowrap text-primary shadow-sm transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:bg-primary/90 active:text-primary-foreground motion-reduce:transition-none"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-flex size-5 shrink-0 items-center justify-center"
                    >
                      <Icon size={20} />
                    </span>
                    <span>{provider.label}</span>
                    <ArrowUpRightIcon
                      aria-hidden="true"
                      size={14}
                      className="shrink-0"
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-foreground/70">
          {t("disclaimer")}
        </p>
      </div>
    </section>
  )
}
