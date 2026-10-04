import assert from "node:assert/strict"
import test from "node:test"
import {
  INDUSTRIES,
  PHONE_COUNTRIES,
  getPhoneCountry,
} from "../lib/contact/options"
import { ownerEmail } from "../lib/contact/email-templates"
import { contactSubmissionSchema } from "../lib/contact/validation"

const validPayload = {
  name: "Asha Patel",
  email: "asha@example.com",
  company: "Acme Ltd",
  industry: "healthcare-clinics",
  phoneCountry: "IN",
  phone: "09876 543-210",
  preferredContactMethod: "email",
  automationNeed: "",
  sourcePage: "/contact",
  website: "",
  formStartedAt: 1_700_000_000_000,
} as const

test("phone configuration is the exact supported 12-country allowlist", () => {
  assert.deepEqual(
    PHONE_COUNTRIES.map(({ code }) => code),
    ["IN", "US", "IE", "GB", "NL", "SG", "AU", "AE", "NZ", "CA", "DK", "FI"]
  )
  assert.deepEqual(
    Object.fromEntries(
      PHONE_COUNTRIES.map(({ code, dialCode }) => [code, dialCode])
    ),
    {
      IN: "+91",
      US: "+1",
      IE: "+353",
      GB: "+44",
      NL: "+31",
      SG: "+65",
      AU: "+61",
      AE: "+971",
      NZ: "+64",
      CA: "+1",
      DK: "+45",
      FI: "+358",
    }
  )
})

test("phone country controls server-side normalization", () => {
  const parsed = contactSubmissionSchema.parse(validPayload)
  assert.equal(parsed.phone, "+9109876543210")
  assert.equal(parsed.phoneNational, "09876543210")
  assert.equal(parsed.phoneDialCode, getPhoneCountry("IN").dialCode)
  const alreadyInternational = contactSubmissionSchema.parse({
    ...validPayload,
    phone: "+91 98765 43210",
  })
  assert.equal(alreadyInternational.phone, "+919876543210")
})

test("phone is required and rejects unsupported countries, letters, and invalid lengths", () => {
  assert.equal(
    contactSubmissionSchema.safeParse({ ...validPayload, phone: "" }).success,
    false
  )
  assert.equal(
    contactSubmissionSchema.safeParse({ ...validPayload, phoneCountry: "FR" })
      .success,
    false
  )
  assert.equal(
    contactSubmissionSchema.safeParse({ ...validPayload, phone: "CALL-ME" })
      .success,
    false
  )
  assert.equal(
    contactSubmissionSchema.safeParse({ ...validPayload, phone: "123" })
      .success,
    false
  )
})

test("industry accepts every configured value and rejects missing or arbitrary values", () => {
  for (const { value } of INDUSTRIES)
    assert.equal(
      contactSubmissionSchema.safeParse({ ...validPayload, industry: value })
        .success,
      true
    )
  assert.equal(
    contactSubmissionSchema.safeParse({ ...validPayload, industry: "" })
      .success,
    false
  )
  assert.equal(
    contactSubmissionSchema.safeParse({
      ...validPayload,
      industry: "technology",
    }).success,
    false
  )
})

test("automation details may be omitted or blank but are capped at 3000 characters", () => {
  const withoutAutomation: Omit<typeof validPayload, "automationNeed"> = {
    name: validPayload.name,
    email: validPayload.email,
    company: validPayload.company,
    industry: validPayload.industry,
    phoneCountry: validPayload.phoneCountry,
    phone: validPayload.phone,
    preferredContactMethod: validPayload.preferredContactMethod,
    sourcePage: validPayload.sourcePage,
    website: validPayload.website,
    formStartedAt: validPayload.formStartedAt,
  }
  assert.equal(
    contactSubmissionSchema.safeParse(withoutAutomation).success,
    true
  )
  assert.equal(contactSubmissionSchema.safeParse(validPayload).success, true)
  assert.equal(
    contactSubmissionSchema.safeParse({
      ...validPayload,
      automationNeed: "x".repeat(3001),
    }).success,
    false
  )
})

test("owner email renders readable industry and complete phone details with fallback", () => {
  const html = ownerEmail(contactSubmissionSchema.parse(validPayload))
  assert.match(html, /Business Email:<\/strong> asha@example\.com/)
  assert.match(html, /Healthcare and Clinics/)
  assert.match(html, /\+9109876543210/)
  assert.match(html, /India \(IN\)/)
  assert.match(html, /Not supplied/)
})
