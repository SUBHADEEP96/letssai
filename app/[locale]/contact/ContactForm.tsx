"use client"

import { useRef, useState } from "react"
import { useTranslations } from "next-intl"
import { INDUSTRIES, PHONE_COUNTRIES } from "@/lib/contact/options"

type Status = {
  kind: "idle" | "sending" | "success" | "error"
  message?: string
}

const fieldClass =
  "min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-[#016630] focus:ring-2 focus:ring-[#016630]/15 disabled:cursor-not-allowed disabled:bg-slate-50"

export function ContactForm() {
  const t = useTranslations("contact")
  const [status, setStatus] = useState<Status>({ kind: "idle" })
  const [phoneCountry, setPhoneCountry] = useState("IN")
  const startedAt = useRef(0)
  const sending = status.kind === "sending"

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sending) return
    setStatus({ kind: "sending" })
    const form = event.currentTarget
    const fields = Object.fromEntries(new FormData(form))
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...fields, formStartedAt: startedAt.current }),
      })
      const result = (await response.json()) as {
        ok?: boolean
        message?: string
      }
      if (!response.ok || !result.ok)
        throw new Error(result.message || t("error"))
      form.reset()
      setPhoneCountry("IN")
      startedAt.current = 0
      setStatus({ kind: "success", message: t("success") })
    } catch (error) {
      setStatus({
        kind: "error",
        message: error instanceof Error ? error.message : t("error"),
      })
    }
  }

  return (
    <form
      onSubmit={submit}
      onFocusCapture={() => {
        if (!startedAt.current) startedAt.current = Date.now()
      }}
      className="grid min-w-0 gap-5 rounded-[1.75rem] border border-emerald-950/10 bg-white p-5 shadow-[0_24px_70px_-32px_rgba(1,102,48,0.35)] sm:p-8 lg:p-10"
      aria-labelledby="contact-form-title"
    >
      <div className="mx-auto max-w-md text-center">
        <h2
          id="contact-form-title"
          className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl"
        >
          {t("formTitle")}
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("name")}>
          <input
            name="name"
            required
            autoComplete="name"
            disabled={sending}
            className={fieldClass}
          />
        </Field>
        <Field label={t("email")}>
          <input
            name="email"
            required
            type="email"
            autoComplete="email"
            disabled={sending}
            className={fieldClass}
          />
        </Field>
        <Field label={t("company")}>
          <input
            name="company"
            required
            autoComplete="organization"
            disabled={sending}
            className={fieldClass}
          />
        </Field>
        <Field label={t("industry")}>
          <select
            name="industry"
            required
            defaultValue=""
            disabled={sending}
            className={fieldClass}
          >
            <option value="" disabled>
              {t("industryPlaceholder")}
            </option>
            {INDUSTRIES.map((industry) => (
              <option key={industry.value} value={industry.value}>
                {industry.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid min-w-0 gap-2 text-sm font-semibold text-slate-800">
        <span>{t("phone")}</span>
        <div className="flex min-h-12 w-full rounded-xl border border-slate-300 bg-white transition focus-within:border-[#016630] focus-within:ring-2 focus-within:ring-[#016630]/15 hover:border-slate-400 has-[:invalid]:border-red-500">
          <label className="sr-only" htmlFor="phone-country">
            {t("countryLabel")}
          </label>
          <select
            id="phone-country"
            name="phoneCountry"
            value={phoneCountry}
            onChange={(event) => setPhoneCountry(event.target.value)}
            disabled={sending}
            aria-label={t("countryLabel")}
            className="max-w-[9.5rem] shrink-0 rounded-l-xl border-0 border-r border-slate-200 bg-transparent px-2 py-3 text-sm outline-none sm:max-w-none sm:px-3"
          >
            {PHONE_COUNTRIES.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.dialCode} {country.code}
              </option>
            ))}
          </select>
          <label className="sr-only" htmlFor="phone-number">
            {t("phoneInputLabel")}
          </label>
          <input
            id="phone-number"
            name="phone"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            disabled={sending}
            placeholder={t("phonePlaceholder")}
            className="min-w-0 flex-1 rounded-r-xl border-0 bg-transparent px-3 py-3 text-base outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <Field label={t("need")}>
        <textarea
          name="automationNeed"
          maxLength={3000}
          disabled={sending}
          className={`${fieldClass} min-h-28 resize-y`}
        />
      </Field>
      <Field label={t("method")}>
        <select
          name="preferredContactMethod"
          required
          defaultValue="email"
          disabled={sending}
          className={fieldClass}
        >
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="whatsapp">WhatsApp</option>
        </select>
      </Field>

      <input type="hidden" name="sourcePage" value="/contact" />
      <label className="absolute -left-[10000px]" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <button
        type="submit"
        disabled={sending}
        className="min-h-12 rounded-full bg-[#016630] px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#016630] disabled:cursor-wait disabled:opacity-60"
      >
        {sending ? t("sending") : t("submit")}
      </button>
      <div aria-live="polite" aria-atomic="true">
        {status.kind !== "idle" && status.kind !== "sending" && (
          <p
            role="status"
            className={`rounded-xl p-4 text-sm leading-6 ${status.kind === "success" ? "bg-emerald-50 text-emerald-900" : "bg-red-50 text-red-800"}`}
          >
            {status.message}
          </p>
        )}
      </div>
    </form>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="grid min-w-0 gap-2 text-sm font-semibold text-slate-800">
      {label}
      {children}
    </label>
  )
}
