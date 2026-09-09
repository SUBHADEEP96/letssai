import { defineField, defineType } from "sanity"
export const faqObject = defineType({ name: "faqObject", title: "FAQ", type: "object", fields: [defineField({ name: "question", type: "string", validation: (r) => r.required() }), defineField({ name: "answer", type: "text", rows: 4, validation: (r) => r.required() })] })
