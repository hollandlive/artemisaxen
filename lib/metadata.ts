export const SITE_URL  = "https://artemaxen.com"
export const SITE_NAME = "Artemis Axen"

export const META = {
  title:       "Artemis Axen — Web Design & Development, Athens",
  description:
    "I design and build Shopify stores, custom platforms, and digital experiences. Based in Athens, working internationally. English, Greek, Russian, Dutch, Latvian.",
  ogTitle:     "Artemis Axen — Digital Experiences",
  ogImage:     `${SITE_URL}/opengraph-image`,
  twitterCard: "summary_large_image" as const,
} as const

export const CONTACT = {
  email:     "hello@artemaxen.com",
  whatsapp:  "https://wa.me/30XXXXXXXXXX", // replace before launch
  instagram: "https://instagram.com/artemaxen", // replace before launch
} as const

export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name:      "Artemis Axen",
  jobTitle:  "Web Designer & Developer",
  url:       SITE_URL,
  address: {
    "@type":          "PostalAddress",
    addressLocality:  "Athens",
    addressCountry:   "GR",
  },
  knowsLanguage: ["en", "el", "ru", "nl", "lv"],
} as const
