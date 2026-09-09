import { defineQuery } from "next-sanity"

export const servicePageQuery = defineQuery(`*[_type == "servicePage" && slug.current == $slug][0]{..., "slug": slug.current, "href": "/services/" + slug.current, "metaTitle": seo.metaTitle, "metaDescription": seo.metaDescription, "canonicalUrl": seo.canonicalUrl, "ogImage": seo.ogImage.asset->url}`)
export const industryPageQuery = defineQuery(`*[_type == "industryPage" && slug.current == $slug][0]{..., "slug": slug.current, "href": "/industries/" + slug.current, "metaTitle": seo.metaTitle, "metaDescription": seo.metaDescription, "canonicalUrl": seo.canonicalUrl, "ogImage": seo.ogImage.asset->url}`)
