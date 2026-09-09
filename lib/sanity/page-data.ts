import { client } from "@/sanity/lib/client"
import { sanityConfigured } from "@/sanity/env"
import { fallbackServices } from "@/lib/content/fallback-services"
import { fallbackIndustries } from "@/lib/content/fallback-industries"
import type { IndustryPageData, ServicePageData } from "@/lib/content/types"
import { industryPageQuery, servicePageQuery } from "./queries"

async function preferSanity<T>(query: string, slug: string, fallback: T): Promise<T> {
  if (!sanityConfigured) return fallback
  try { const document = await client.fetch<Partial<T> | null>(query, { slug }, { next: { revalidate: 300 } }); return document ? { ...fallback, ...document } : fallback }
  catch { return fallback }
}
export async function getServicePage(slug: string) {
  const fallback = fallbackServices.find((item) => item.slug === slug)
  if (!fallback) return null
  return preferSanity<ServicePageData>(servicePageQuery, slug, fallback)
}
export async function getIndustryPage(slug: string) {
  const fallback = fallbackIndustries.find((item) => item.slug === slug)
  if (!fallback) return null
  return preferSanity<IndustryPageData>(industryPageQuery, slug, fallback)
}
