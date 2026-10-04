export const PHONE_COUNTRIES = [
  { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳" },
  { code: "US", name: "USA", dialCode: "+1", flag: "🇺🇸" },
  { code: "IE", name: "Ireland", dialCode: "+353", flag: "🇮🇪" },
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧" },
  { code: "NL", name: "Netherlands", dialCode: "+31", flag: "🇳🇱" },
  { code: "SG", name: "Singapore", dialCode: "+65", flag: "🇸🇬" },
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺" },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971", flag: "🇦🇪" },
  { code: "NZ", name: "New Zealand", dialCode: "+64", flag: "🇳🇿" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦" },
  { code: "DK", name: "Denmark", dialCode: "+45", flag: "🇩🇰" },
  { code: "FI", name: "Finland", dialCode: "+358", flag: "🇫🇮" },
] as const

export type PhoneCountryCode = (typeof PHONE_COUNTRIES)[number]["code"]

export const PHONE_COUNTRY_CODES = PHONE_COUNTRIES.map(({ code }) => code) as [
  PhoneCountryCode,
  ...PhoneCountryCode[],
]

export const INDUSTRIES = [
  { value: "real-estate", label: "Real Estate" },
  { value: "ecommerce", label: "Ecommerce" },
  { value: "legal-firms", label: "Legal Firms" },
  { value: "healthcare-clinics", label: "Healthcare and Clinics" },
  { value: "automotive", label: "Automotive" },
  {
    value: "financial-services-fintech",
    label: "Financial services and fintech",
  },
  { value: "education-coaching", label: "Education and Coaching" },
  { value: "logistics", label: "Logistics" },
  { value: "tourism", label: "Tourism" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "other", label: "Other" },
] as const

export type IndustryValue = (typeof INDUSTRIES)[number]["value"]
export const INDUSTRY_VALUES = INDUSTRIES.map(({ value }) => value) as [
  IndustryValue,
  ...IndustryValue[],
]

export function getPhoneCountry(code: PhoneCountryCode) {
  return PHONE_COUNTRIES.find((country) => country.code === code)!
}

export function getIndustryLabel(value: IndustryValue) {
  return INDUSTRIES.find((industry) => industry.value === value)!.label
}
