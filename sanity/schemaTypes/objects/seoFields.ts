import { defineField, defineType } from "sanity"
export const seoFields = defineType({ name: "seoFields", title: "Search & social", type: "object", fields: [
  defineField({ name: "metaTitle", type: "string", validation: (rule) => rule.max(70) }),
  defineField({ name: "metaDescription", type: "text", rows: 3, validation: (rule) => rule.max(170) }),
  defineField({ name: "canonicalUrl", type: "url" }), defineField({ name: "ogImage", type: "image", options: { hotspot: true } }),
] })
