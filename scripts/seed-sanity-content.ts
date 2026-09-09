import { createClient } from "next-sanity"
import { fallbackServices } from "../lib/content/fallback-services"
import { fallbackIndustries } from "../lib/content/fallback-industries"

const token = process.env.SANITY_API_WRITE_TOKEN
const projectId = process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
const apiVersion = process.env.SANITY_API_VERSION || process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-07-03"
if (!token) throw new Error("SANITY_API_WRITE_TOKEN is required. No content was changed.")
if (!projectId) throw new Error("SANITY_PROJECT_ID is required. No content was changed.")
const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false })
const keyed = <T extends object>(items: T[]) => items.map((item, index) => ({ _key: `item-${index + 1}`, ...item }))

const mutations = [
  // Frontend-only fields are deliberately omitted from the Studio documents.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ...fallbackServices.map(({ href: _href, metaTitle, metaDescription, canonicalUrl, ogImage: _ogImage, workflowNodes, workflowEdges, faqs, ...page }) => ({
    id: `servicePage-${page.slug}`, type: "servicePage", value: { ...page, slug: { _type: "slug", current: page.slug }, workflowNodes: keyed(workflowNodes), workflowEdges: keyed(workflowEdges), faqs: keyed(faqs), seo: { _type: "seoFields", metaTitle, metaDescription, canonicalUrl } },
  })),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ...fallbackIndustries.map(({ href: _href, metaTitle, metaDescription, canonicalUrl, ogImage: _ogImage, galleryItems, faqs, ...page }) => ({
    id: `industryPage-${page.slug}`, type: "industryPage", value: { ...page, slug: { _type: "slug", current: page.slug }, galleryItems: keyed(galleryItems), faqs: keyed(faqs), seo: { _type: "seoFields", metaTitle, metaDescription, canonicalUrl } },
  })),
]
for (const item of mutations) {
  await client.createIfNotExists({ _id: item.id, _type: item.type, title: item.value.title, slug: item.value.slug })
  await client.patch(item.id).setIfMissing(item.value).commit()
  console.log(`Upserted ${item.type}: ${item.value.slug.current}`)
}
console.log(`Finished safely: ${fallbackServices.length} services and ${fallbackIndustries.length} industries. Existing fields were preserved.`)
