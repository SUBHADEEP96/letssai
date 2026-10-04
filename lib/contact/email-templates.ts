import type { ContactSubmissionInput } from "./validation"
import { getIndustryLabel, getPhoneCountry } from "./options"

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>'"]/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        character
      ]!
  )

const shell = (content: string) =>
  `<!doctype html><html><body style="margin:0;background:#f1f8f6;font-family:Arial,sans-serif;color:#10231f"><div style="max-width:600px;margin:32px auto;background:#fff;border-radius:20px;overflow:hidden;border:1px solid #d8e8e3"><div style="padding:24px;background:#016630;color:#fff;font-size:24px;font-weight:700">LetssAI</div><div style="padding:28px;line-height:1.6">${content}</div></div></body></html>`

export function ownerEmail(input: ContactSubmissionInput) {
  const country = getPhoneCountry(input.phoneCountry)
  return shell(
    `<h1 style="font-size:22px">New workflow review request</h1><p><strong>Name:</strong> ${escapeHtml(input.name)}<br><strong>Business Email:</strong> ${escapeHtml(input.email)}<br><strong>Company:</strong> ${escapeHtml(input.company)}<br><strong>Industry:</strong> ${escapeHtml(getIndustryLabel(input.industry))}<br><strong>Phone:</strong> ${escapeHtml(input.phone)}<br><strong>Phone country:</strong> ${escapeHtml(`${country.name} (${country.code})`)}<br><strong>Preferred contact:</strong> ${escapeHtml(input.preferredContactMethod)}</p><p><strong>What they want to automate</strong><br>${escapeHtml(input.automationNeed || "Not supplied").replaceAll("\n", "<br>")}</p>`
  )
}

export function autoReplyEmail(name: string, siteUrl: string) {
  return shell(
    `<h1 style="font-size:22px">Thanks for reaching out, ${escapeHtml(name)}.</h1><p>LetssAI received your request. We will review your workflow and follow up using your preferred contact method.</p><p><a href="${escapeHtml(siteUrl)}/contact" style="display:inline-block;background:#016630;color:#fff;text-decoration:none;padding:12px 18px;border-radius:999px">Visit LetssAI</a></p>`
  )
}
