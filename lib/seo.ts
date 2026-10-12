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
    category: "AI & Automation Services",
    areaServed: "Worldwide",
    termsOfService: absoluteUrl("/terms-and-conditions"),
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
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
  areaServed: "Worldwide",
  knowsAbout: [
    "Artificial Intelligence Solutions",
    "Autonomous AI Agents",
    "Voice AI Telephony & Appointment Booking",
    "AI Customer Support Automation",
    "AI Sales Follow-Up Systems",
    "Custom AI CRM Development",
    "AI System Integration & Middleware",
    "Deterministic Workflow Automation",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "LetssAI Enterprise AI Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Customer Support",
          url: absoluteUrl("/services/ai-customer-support"),
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Calling & Appointment Booking",
          url: absoluteUrl("/services/ai-calling-appointment-booking"),
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Sales & Lead Follow-up",
          url: absoluteUrl("/services/ai-sales-lead-follow-up"),
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI CRM Development",
          url: absoluteUrl("/services/ai-crm-development"),
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI System Integration",
          url: absoluteUrl("/services/ai-system-integration"),
        },
      },
    ],
  },
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
  inLanguage: ["en", "hi", "de", "es", "fr"],
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
