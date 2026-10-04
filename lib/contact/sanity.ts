import { client } from "@/sanity/lib/client"
import type { ContactSubmissionInput } from "./validation"

export function contactWriteClient() {
  const token = process.env.SANITY_API_WRITE_TOKEN
  if (!token) throw new Error("SANITY_API_WRITE_TOKEN is not configured")
  return client.withConfig({ token, useCdn: false })
}

export async function saveContactSubmission(
  input: ContactSubmissionInput,
  userAgent: string
) {
  return contactWriteClient().create({
    _type: "contactSubmission",
    name: input.name,
    email: input.email,
    company: input.company,
    industry: input.industry,
    phone: input.phone,
    phoneCountry: input.phoneCountry,
    phoneDialCode: input.phoneDialCode,
    phoneNational: input.phoneNational,
    preferredContactMethod: input.preferredContactMethod,
    automationNeed: input.automationNeed || undefined,
    sourcePage: input.sourcePage,
    userAgent: userAgent.slice(0, 500),
    status: "new",
    createdAt: new Date().toISOString(),
  })
}

export async function saveEmailIds(
  documentId: string,
  ownerId?: string,
  autoReplyId?: string
) {
  await contactWriteClient()
    .patch(documentId)
    .set({
      ...(ownerId ? { resendOwnerEmailId: ownerId } : {}),
      ...(autoReplyId ? { resendAutoReplyEmailId: autoReplyId } : {}),
    })
    .commit()
}
