import { defineField, defineType } from "sanity"
export const ctaObject = defineType({ name: "ctaObject", title: "Call to action", type: "object", fields: [defineField({ name: "heading", type: "string", validation: (r) => r.required() }), defineField({ name: "text", type: "text", rows: 3 }), defineField({ name: "label", type: "string" }), defineField({ name: "href", type: "string" })] })
