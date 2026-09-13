import { z } from "zod"

export const contactSubmissionSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(254),
  company: z.string().trim().min(2).max(150),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  preferredContactMethod: z.enum(["email", "phone", "whatsapp"]),
  automationNeed: z.string().trim().min(20).max(3000),
  sourcePage: z.string().trim().max(300).optional(),
  website: z.string().max(0).optional(),
  formStartedAt: z.number().int().positive(),
  chatbot: z
    .object({
      source: z.literal("chatbot"),
      conversationSummary: z.string().trim().min(10).max(3000),
      identifiedBusinessChallenge: z.string().trim().min(2).max(1000),
      recommendedService: z.string().trim().max(200).optional(),
      currentTools: z.string().trim().max(500).optional(),
      timeline: z.string().trim().max(200).optional(),
      visitorPageUrl: z.string().url().max(500),
      consentTimestamp: z.iso.datetime(),
    })
    .optional(),
})

export type ContactSubmissionInput = z.infer<typeof contactSubmissionSchema>
