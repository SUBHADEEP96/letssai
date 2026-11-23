export interface Brochure {
  slug: string
  aliases: string[]
  title: string
  subtitle: string
  description: string
  pdfUrl: string
  fileName: string
  fileSize: string
  pageCount: number
  industry: string
  industryHref: string
  publishedDate: string
  highlights: {
    title: string
    description: string
  }[]
}

export const brochures: Brochure[] = [
  {
    slug: 'Letssai-Solutions-for-Real-Estate-Businesses',
    aliases: ['real-estate', 'letssai-solutions-for-real-estate-businesses'],
    title: 'LetssAI Solutions for Real Estate Businesses',
    subtitle: 'AI Lead Follow-Up, Site Visit Scheduling & CRM Workflow Automation',
    description:
      'Official LetssAI brochure showcasing autonomous AI solutions for real estate businesses: under-60-second lead engagement, automated site visit booking, multilingual voice calling, and zero-data-loss CRM integration.',
    pdfUrl: '/brochures/Letssai-Solutions-for-Real-Estate-Businesses.pdf',
    fileName: 'Letssai-Solutions-for-Real-Estate-Businesses.pdf',
    fileSize: '2.3 MB',
    pageCount: 8,
    industry: 'Real Estate',
    industryHref: '/industries/real-estate',
    publishedDate: '2026-11-23',
    highlights: [
      {
        title: 'Instant Lead Follow-Up (<60s)',
        description:
          'Engage buyer and tenant enquiries from 99acres, MagicBricks, Meta ads, and website chat within seconds across WhatsApp and SMS.',
      },
      {
        title: 'Autonomous Site Visit Booking',
        description:
          'Qualify buyer budget and timeline, match with available agent calendar slots, and confirm appointments with automated reminder cadences.',
      },
      {
        title: 'Multilingual Inbound & Outbound Calling',
        description:
          'AI voice agents answer incoming project queries, conduct initial qualification, and handle no-show follow-ups in natural human voice.',
      },
      {
        title: 'Zero Data Loss CRM Auto-Sync',
        description:
          'Seamless two-way integration with Salesforce, HubSpot, LeadSquared, or Zoho with automatic conversation summaries and lead tagging.',
      },
    ],
  },
]

export function getBrochure(slug: string): Brochure | undefined {
  const normalized = slug.trim().toLowerCase()
  return brochures.find(
    (b) =>
      b.slug.toLowerCase() === normalized ||
      b.aliases.some((alias) => alias.toLowerCase() === normalized)
  )
}

export function getAllBrochures(): Brochure[] {
  return brochures
}
