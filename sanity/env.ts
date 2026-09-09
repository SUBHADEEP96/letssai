export const apiVersion =
  process.env.SANITY_API_VERSION || process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-07-03"

export const sanityConfigured = Boolean((process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) && (process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET))
export const dataset = process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
// A syntactically valid build-only value lets public pages use local fallbacks.
export const projectId = process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "letssaifallback"
