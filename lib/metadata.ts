export const SITE_URL  = "https://artemisaxen.com"
export const SITE_NAME = "Artemis Axen"

export const META = {
  title:       "Artemis Axen — Full-Stack Developer · Next.js · Shopify",
  description:
    "Full-stack developer (TypeScript, React / Next.js, Shopify) based in Athens, EU citizen. Case studies: the Sokole Shopify store, LiveCity.cam, TravelHub.cam, FamilyFound and AI video for the novel Don't Develop.",
  ogTitle:     "Artemis Axen — Full-Stack Developer · Next.js · Shopify",
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
