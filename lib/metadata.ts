export const SITE_URL  = "https://artemisaxen.com"
export const SITE_NAME = "Artemis Axen"

export const META = {
  title:       "Artemis Axen — Freelance Shopify & Next.js Developer",
  description:
    "Freelance Shopify and Next.js developer, EU-based, working remotely. Case studies: the Sokole Shopify store, LiveCity.cam, TravelHub.cam, FamilyFound and AI video for the novel Don't Develop.",
  ogTitle:     "Artemis Axen — Freelance Shopify & Next.js Developer",
  ogImage:     `${SITE_URL}/opengraph-image`,
  twitterCard: "summary_large_image" as const,
} as const

export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name:      "Artemis Axen",
  jobTitle:  "Freelance Shopify & Next.js Developer",
  url:       SITE_URL,
  address: {
    "@type":          "PostalAddress",
    addressLocality:  "Athens",
    addressCountry:   "GR",
  },
  knowsLanguage: ["en", "el", "ru", "nl", "lv"],
} as const
