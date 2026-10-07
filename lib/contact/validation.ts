import { z } from "zod"
import {
  getPhoneCountry,
  INDUSTRY_VALUES,
  PHONE_COUNTRY_CODES,
} from "./options"

const rawContactSubmissionSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(254),
  company: z.string().trim().min(2).max(150),
  phoneCountry: z.enum(PHONE_COUNTRY_CODES),
  phone: z
    .string()
    .trim()
    .min(1)
    .max(40)
    .regex(/^\+?[0-9\s().-]+$/, "Phone number contains invalid characters"),
  industry: z.enum(INDUSTRY_VALUES),
  preferredContactMethod: z.enum(["email", "phone", "whatsapp"]),
  automationNeed: z.string().trim().max(3000).optional().or(z.literal("")),
  consent: z.any().optional(),
  sourcePage: z.string().trim().max(300).optional(),
  website: z.string().max(0).optional(),
  formStartedAt: z.number().int().positive(),
})

export const contactSubmissionSchema = rawContactSubmissionSchema
  .superRefine((input, context) => {
    const country = getPhoneCountry(input.phoneCountry)
    let digits = input.phone.replace(/\D/g, "")
    const dialDigits = country.dialCode.slice(1)
    if (input.phone.startsWith("+") && digits.startsWith(dialDigits))
      digits = digits.slice(dialDigits.length)
    const fullLength = dialDigits.length + digits.length
    if (digits.length < 6 || fullLength > 15)
      context.addIssue({
        code: "custom",
        path: ["phone"],
        message: "Enter a valid phone number",
      })
  })
  .transform((input) => {
    const country = getPhoneCountry(input.phoneCountry)
    const dialDigits = country.dialCode.slice(1)
    let nationalPhone = input.phone.replace(/\D/g, "")
    if (input.phone.startsWith("+") && nationalPhone.startsWith(dialDigits))
      nationalPhone = nationalPhone.slice(dialDigits.length)
    return {
      ...input,
      automationNeed: input.automationNeed || undefined,
      phone: `${country.dialCode}${nationalPhone}`,
      phoneDialCode: country.dialCode,
      phoneNational: nationalPhone,
    }
  })

export type ContactSubmissionInput = z.infer<typeof contactSubmissionSchema>
