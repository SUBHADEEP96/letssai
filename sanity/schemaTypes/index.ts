import { defineField, defineType, type SchemaTypeDefinition } from "sanity"
const seoFields = [
  defineField({
    name: "metaTitle",
    type: "string",
    validation: (r) => r.max(70),
  }),
  defineField({
    name: "metaDescription",
    type: "text",
    rows: 3,
    validation: (r) => r.max(170),
  }),
  defineField({ name: "ogImage", type: "image" }),
  defineField({ name: "canonicalUrl", type: "url" }),
]
const faqObject = defineType({
  name: "faqObject",
  title: "FAQ",
  type: "object",
  fields: [
    defineField({
      name: "question",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "answer",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
  ],
})
const sectionObject = defineType({
  name: "pageSection",
  title: "Page Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "body", type: "text", rows: 4 }),
    defineField({ name: "items", type: "array", of: [{ type: "string" }] }),
  ],
})
const servicePage = defineType({
  name: "servicePage",
  title: "Service Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "summary",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "sections",
      type: "array",
      of: [{ type: "pageSection" }],
    }),
    defineField({ name: "faqs", type: "array", of: [{ type: "faqObject" }] }),
    ...seoFields,
  ],
})
const industryPage = defineType({
  name: "industryPage",
  title: "Industry Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "useCase",
      type: "text",
      rows: 2,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "sections",
      type: "array",
      of: [{ type: "pageSection" }],
    }),
    defineField({ name: "faqs", type: "array", of: [{ type: "faqObject" }] }),
    ...seoFields,
  ],
})
const faqItem = defineType({
  name: "faqItem",
  title: "FAQ Item",
  type: "document",
  fields: [
    defineField({
      name: "question",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "answer",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({ name: "category", type: "string" }),
  ],
})
const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({ name: "contactEmail", type: "email" }),
    defineField({ name: "primaryCtaLabel", type: "string" }),
    ...seoFields,
  ],
})
const chatbotKnowledgeItem = defineType({
  name: "chatbotKnowledgeItem",
  title: "Chatbot Knowledge Item",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "content",
      type: "text",
      rows: 6,
      validation: (r) => r.required(),
    }),
    defineField({ name: "sourceUrl", type: "url" }),
    defineField({ name: "isActive", type: "boolean", initialValue: true }),
  ],
})
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    faqObject,
    sectionObject,
    servicePage,
    industryPage,
    faqItem,
    siteSettings,
    chatbotKnowledgeItem,
  ],
}
