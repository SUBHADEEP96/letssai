import { defineField, defineType } from "sanity"
import { INDUSTRIES } from "../../../lib/contact/options"

export const contactSubmission = defineType({
  name: "contactSubmission",
  title: "Contact Submission",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Business Email",
      type: "email",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "company",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "industry",
      type: "string",
      options: {
        list: INDUSTRIES.map(({ label, value }) => ({ title: label, value })),
      },
    }),
    defineField({ name: "phone", title: "Full phone number", type: "string" }),
    defineField({
      name: "phoneCountry",
      title: "Phone country",
      type: "string",
    }),
    defineField({ name: "phoneDialCode", title: "Dial code", type: "string" }),
    defineField({
      name: "phoneNational",
      title: "National phone number",
      type: "string",
    }),
    defineField({
      name: "preferredContactMethod",
      type: "string",
      options: { list: ["email", "phone", "whatsapp"] },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "automationNeed",
      title: "Automation need",
      type: "text",
      rows: 5,
    }),
    defineField({ name: "sourcePage", type: "string" }),
    defineField({ name: "userAgent", type: "string", readOnly: true }),
    defineField({
      name: "status",
      type: "string",
      options: { list: ["new", "contacted", "qualified", "archived"] },
      initialValue: "new",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "createdAt",
      type: "datetime",
      readOnly: true,
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "resendOwnerEmailId", type: "string", readOnly: true }),
    defineField({
      name: "resendAutoReplyEmailId",
      type: "string",
      readOnly: true,
    }),
  ],
  preview: {
    select: { title: "name", email: "email", industry: "industry" },
    prepare: ({ title, email, industry }) => ({
      title,
      subtitle: [
        industry && INDUSTRIES.find((item) => item.value === industry)?.label,
        email,
      ]
        .filter(Boolean)
        .join(" · "),
    }),
  },
})
