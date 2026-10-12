import type { Metadata } from "next"
import { siteConfig } from "./site"
export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`
}
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image?: string,
  canonicalUrl?: string
): Metadata {
  const url = canonicalUrl || absoluteUrl(path)
  const socialImage = image || siteConfig.assets.ogImage
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: socialImage,
          alt: image
            ? `${siteConfig.name} ${title}`
            : `${siteConfig.name} — practical AI solutions`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  }
}
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }
}
export function breadcrumbsSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: "Artificial Intelligence Solutions & Workflow Automation",
    areaServed: "Worldwide",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: absoluteUrl(path),
  }
}
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.contactEmail || "contact@letssai.com",
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl(siteConfig.assets.icon),
    width: "512",
    height: "512",
  },
  image: absoluteUrl(siteConfig.assets.logoPrimary),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: siteConfig.contactEmail || "contact@letssai.com",
    availableLanguage: ["English", "Hindi", "German", "Spanish", "French"],
  },
}
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
}
