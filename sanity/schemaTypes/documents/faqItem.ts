import { defineField, defineType } from "sanity"

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ Item",
  type: "document",
  fields: [
    defineField({
      name: "question",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "question" },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "isActive", type: "boolean", initialValue: true }),
    defineField({ name: "updatedAt", type: "datetime" }),
  ],
})
