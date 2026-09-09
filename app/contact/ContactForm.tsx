"use client"

import { useRef, useState } from "react"

type Status = {
  kind: "idle" | "sending" | "success" | "error"
  message?: string
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" })
  const startedAt = useRef(0)

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
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
        throw new Error(result.message || "We could not send your request.")
      form.reset()
      setStatus({ kind: "success", message: result.message })
    } catch (error) {
      setStatus({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "We could not send your request. Please try again.",
      })
    }
  }

  const inputClass =
    "rounded-2xl border border-emerald-950/15 bg-white px-4 py-3 text-base outline-none transition focus:border-[#006452] focus:ring-2 focus:ring-emerald-700/15"
  return (
    <section className="section" aria-labelledby="contact-form-title">
      <form
        onSubmit={submit}
        onFocusCapture={() => {
          if (!startedAt.current) startedAt.current = Date.now()
        }}
        className="mx-auto grid max-w-3xl gap-5 rounded-[2rem] border border-emerald-950/10 bg-white p-6 shadow-xl shadow-emerald-950/5 md:p-9"
      >
        <div>
          <h2
            id="contact-form-title"
            className="text-2xl font-semibold tracking-tight"
          >
            Tell us about your workflow
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Share the manual process you want to improve. Fields marked * are
            required.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold">
            Name *
            <input
              name="name"
              required
              autoComplete="name"
              className={inputClass}
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            Email *
            <input
              name="email"
              required
              type="email"
              autoComplete="email"
              className={inputClass}
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            Company *
            <input
              name="company"
              required
              autoComplete="organization"
              className={inputClass}
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            Phone (optional)
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              className={inputClass}
            />
          </label>
        </div>
        <label className="grid gap-2 text-sm font-semibold">
          What do you want to automate? *
          <textarea
            name="automationNeed"
            required
            minLength={20}
            className={`${inputClass} min-h-32 resize-y`}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Preferred contact method *
          <select
            name="preferredContactMethod"
            required
            defaultValue="email"
            className={inputClass}
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </label>
        <input type="hidden" name="sourcePage" value="/contact" />
        <label className="absolute -left-[10000px]" aria-hidden="true">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <button
          disabled={status.kind === "sending"}
          className="rounded-full bg-[#006452] px-6 py-4 font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:cursor-wait disabled:opacity-60"
        >
          {status.kind === "sending"
            ? "Sending request…"
            : "Request a free AI workflow review"}
        </button>
        {status.kind !== "idle" && status.kind !== "sending" && (
          <p
            role="status"
            className={`rounded-2xl p-4 leading-relaxed ${status.kind === "success" ? "bg-emerald-50 text-emerald-900" : "bg-red-50 text-red-800"}`}
          >
            {status.message}
          </p>
        )}
      </form>
    </section>
  )
}
