import { defineField, defineType } from "sanity"

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
      type: "email",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "company",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "phone", type: "string" }),
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
      validation: (rule) => rule.required(),
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
  preview: { select: { title: "name", subtitle: "email" } },
})
