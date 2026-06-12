export type ProjectScene = "sokole" | "livecity" | "travelhub"

export type Project = {
  id:           string
  name:         string
  category:     string
  tagline:      string
  description:  string
  url:          string
  scene:        ProjectScene
  accentColor:  string
  // Case study narrative — used in Phase C project scenes
  what:         string
  challenge:    string
  approach:     string
  outcome:      string
  quote:        string
}

export const projects: Project[] = [
  {
    id:          "sokole",
    name:        "Sokole",
    category:    "Shopify · Brand Project",
    tagline:     "A luxury fragrance brand built for two markets.",
    description: "Athens and beyond.",
    url:         "https://sokole.com",
    scene:       "sokole",
    accentColor: "#C9A84C",
    what:
      "Sokole is a luxury fragrance brand built for two markets: Greece and the international buyer who finds their way to a bottle through curiosity rather than advertising.",
    challenge:
      "Fragrance is the hardest product category in e-commerce. The entire purchase decision has to rest on something intangible: atmosphere, trust, desire. Most Shopify stores for this category fail because they treat design as decoration rather than the sales argument itself.",
    approach:
      "The Sense theme was rebuilt from its foundation. Every default rounded corner was removed — luxury doesn't bend. A custom brand stylesheet carries CSS tokens for two palette systems: deep burgundy and gold for dramatic sections, warm cream and blush for the product world. A full 382-key Greek translation was built to 100% coverage.",
    outcome:
      "A store where the design is doing the selling. The first impression holds: this is not a website about fragrance — it is the brand itself.",
    quote:
      "When the packaging is the product, the website has to be the packaging.",
  },
  {
    id:          "livecity",
    name:        "LiveCity.cam",
    category:    "Next.js · Platform",
    tagline:     "Real-time webcam discovery.",
    description: "12 languages. Hundreds of cities.",
    url:         "https://livecity.cam",
    scene:       "livecity",
    accentColor: "#00D4FF",
    what:
      "LiveCity.cam is a live webcam discovery platform — a place to watch the world in real time. Athens at sunset. A canal in Amsterdam. A beach in Portugal, live and unfiltered.",
    challenge:
      "The platform serves 12 languages across a database of cities, countries, categories, and real-time streams. Beyond the architecture, there was a harder design challenge: how do you make a grid of thumbnails feel alive?",
    approach:
      "Built on Next.js 16 App Router with Supabase handling the real-time data layer. Country pages at the intersection of 12 locales are statically generated. The discovery mode — a vertical swiper — presents cameras as an experience: full-screen, immersive, one at a time.",
    outcome:
      "A platform with genuine technical depth that doesn't announce itself as technically deep. The architecture supports scale. The design supports wonder.",
    quote:
      "The goal was to make sitting still feel like travelling.",
  },
  {
    id:          "travelhub",
    name:        "TravelHub.cam",
    category:    "Next.js · Travel",
    tagline:     "Travel discovery, rebuilt.",
    description: "Immersive destination content.",
    url:         "https://travelhub.cam",
    scene:       "travelhub",
    accentColor: "#93C5FD",
    what:
      "TravelHub.cam is a travel discovery platform built for the way people actually explore destinations — through video, atmosphere, and the feeling of a place before any booking decision is made.",
    challenge:
      "Travel is one of the most saturated content categories on the internet. For TravelHub.cam to be worth building, it needed its own quality of attention: the feeling of arriving somewhere, rendered digitally.",
    approach:
      "The foundation is the same proven architecture as LiveCity.cam — Next.js 16, Supabase, full internationalisation — but the design language is entirely its own. The gradient system moves through deep ocean blue to warmer horizon tones, creating a sense of depth that shifts as the user moves through the experience.",
    outcome:
      "A product with its own visual identity and technical foundation — ready to grow into the platform the concept deserves.",
    quote:
      "Before someone books a flight, they imagine the destination. TravelHub.cam is where that imagination starts.",
  },
]
