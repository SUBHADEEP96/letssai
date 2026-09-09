import { NextResponse } from "next/server"
import { Resend } from "resend"
import { autoReplyEmail, ownerEmail } from "@/lib/contact/email-templates"
import { saveContactSubmission, saveEmailIds } from "@/lib/contact/sanity"
import { contactSubmissionSchema } from "@/lib/contact/validation"

export const runtime = "nodejs"

const failureMessage = () =>
  process.env.NODE_ENV === "development"
    ? "Contact delivery is not configured. Check the server environment variables."
    : "We could not send your request. Please try again or contact LetssAI directly."

export async function POST(request: Request) {
  const json = await request.json().catch(() => null)
  const parsed = contactSubmissionSchema.safeParse(json)
  if (!parsed.success)
    return NextResponse.json(
      { ok: false, message: "Please check the form and try again." },
      { status: 400 }
    )
  if (
    Date.now() - parsed.data.formStartedAt < 1500 ||
    Date.now() - parsed.data.formStartedAt > 86_400_000
  ) {
    return NextResponse.json(
      { ok: false, message: "Please refresh the page and try again." },
      { status: 400 }
    )
  }

  const { RESEND_API_KEY, RESEND_FROM_EMAIL, LETSSAI_OWNER_EMAIL } = process.env
  if (
    !RESEND_API_KEY ||
    !RESEND_FROM_EMAIL ||
    !LETSSAI_OWNER_EMAIL ||
    !process.env.SANITY_API_WRITE_TOKEN
  ) {
    return NextResponse.json(
      { ok: false, message: failureMessage() },
      { status: 503 }
    )
  }

  try {
    const submission = await saveContactSubmission(
      parsed.data,
      request.headers.get("user-agent") || ""
    )
    const resend = new Resend(RESEND_API_KEY)
    const owner = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: LETSSAI_OWNER_EMAIL,
      replyTo: parsed.data.email,
      subject: `New LetssAI workflow review request from ${parsed.data.name}`,
      html: ownerEmail(parsed.data),
    })
    if (owner.error) throw new Error("Owner notification failed")
    const reply = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: parsed.data.email,
      subject: "Thanks for contacting LetssAI",
      html: autoReplyEmail(
        parsed.data.name,
        (process.env.NEXT_PUBLIC_SITE_URL || "https://letssai.com").replace(
          /\/$/,
          ""
        )
      ),
    })
    if (reply.error) throw new Error("Auto-reply failed")
    await saveEmailIds(submission._id, owner.data?.id, reply.data?.id)
    return NextResponse.json({
      ok: true,
      message: "Your request has been sent to LetssAI.",
    })
  } catch (error) {
    if (process.env.NODE_ENV === "development")
      console.error(
        "Contact delivery failed:",
        error instanceof Error ? error.message : "Unknown error"
      )
    return NextResponse.json(
      { ok: false, message: failureMessage() },
      { status: 502 }
    )
  }
}
