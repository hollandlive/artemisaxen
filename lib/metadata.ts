export const SITE_URL  = "https://artemisaxen.com"
export const SITE_NAME = "Artemis Axen"

export const META = {
  title:       "Artemis Axen — Full-Stack Developer · Next.js, TypeScript, Supabase",
  description:
    "Full-stack developer with 18 years in the Netherlands. Case studies: LiveCity.cam, TravelHub.cam, FamilyFound and a Shopify store — Next.js, TypeScript, Supabase, Vercel.",
  ogTitle:     "Artemis Axen — Full-Stack Developer",
  ogImage:     `${SITE_URL}/opengraph-image`,
  twitterCard: "summary_large_image" as const,
} as const

export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name:      "Artemis Axen",
  jobTitle:  "Full-Stack Developer",
  url:       SITE_URL,
  address: {
    "@type":          "PostalAddress",
    addressLocality:  "Athens",
    addressCountry:   "GR",
  },
  knowsLanguage: ["en", "el", "ru", "nl", "lv"],
} as const
