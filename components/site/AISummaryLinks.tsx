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
    <div className="mt-6" role="group" aria-label={t("title")}>
      <ul className="flex gap-3">
        {aiSummaryProviders.map((provider) => {
          const Icon = providerIcons[provider.id]
          const label = `${t("askProvider", { provider: provider.label })} — ${t("opensNewTab")}`
          return (
            <li key={provider.id}>
              <a
                href={buildAISummaryUrl(provider)}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={label}
                aria-describedby="ai-summary-disclaimer"
                title={label}
                className="relative inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-white/50 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:bg-white/25 motion-reduce:transition-none"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex size-5 items-center justify-center"
                >
                  <Icon size={20} />
                </span>
                <ArrowUpRightIcon
                  aria-hidden="true"
                  size={10}
                  className="absolute top-1.5 right-1.5"
                />
              </a>
            </li>
          )
        })}
      </ul>
      <p id="ai-summary-disclaimer" className="sr-only">
        {t("disclaimer")}
      </p>
    </div>
  )
}
