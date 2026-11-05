export type ProjectStatus = "Live" | "Live MVP" | "Launching soon"

export type Metric = {
  value: string
  label: string
}

export type Screenshot = {
  src:  string   // path under /public, e.g. "/work/livecity/desktop.webp"
  alt:  string
}

export type Project = {
  id:          string
  name:        string
  category:    string
  status:      ProjectStatus
  period:      string
  url?:        string   // omitted while a project is not publicly reachable
  urlLabel:    string
  codeUrl?:    string
  accent:      string   // brand colour used for labels and frames
  tint:        string   // soft section background
  summary:     string
  stack:       string[]
  metrics:     Metric[]
  problem:     string
  decisions:   string[]
  outcome:     string
  // Filled in once screenshots are captured — empty slots render placeholders
  shots: {
    desktop?: Screenshot
    mobile:   Screenshot[]
  }
}

export const projects: Project[] = [
  {
    id:       "livecity",
    name:     "LiveCity.cam",
    category: "Full-stack platform",
    status:   "Live",
    period:   "Feb 2026 – now · 982 commits",
    url:      "https://livecity.cam",
    urlLabel: "livecity.cam",
    codeUrl:  "https://github.com/hollandlive/livecity-showcase",
    accent:   "#3B5BDB",
    tint:     "linear-gradient(135deg, #EEF2FF 0%, #E4ECFF 100%)",
    summary:
      "A multilingual directory of live webcams worldwide — beaches, cities, airports, volcanoes, aurora. Started as a hobby, grew into a production platform with real search traffic.",
    stack: [
      "Next.js 16", "React 19", "TypeScript", "Supabase / Postgres",
      "Vercel ISR", "YouTube Data API", "Python batch pipeline", "Leaflet + CARTO maps",
    ],
    metrics: [
      { value: "1,574", label: "live cameras" },
      { value: "13",    label: "locales incl. RTL" },
      { value: "30k+",  label: "indexable URLs" },
      { value: "+55%",  label: "Google clicks, 28-day period" },
    ],
    problem:
      "Serve ~30,000 localised pages from a small Postgres instance and a Vercel budget — while streams go offline every few days and crawlers hammer the site.",
    decisions: [
      "ISR strategy: English prerendered at build, other locales on demand, 30-day revalidation and tag-based invalidation after content deploys.",
      "Catalogue cached in 200-row chunks after the list silently exceeded the 2 MB data-cache limit and production showed zero cameras.",
      "Homepage payload cut from 219 KB to 61 KB gzipped (3.6×) by moving the full camera list to a CDN-cached API; TTFB ~1 s → 0.3–0.5 s.",
      "Disabled unthrottled Link prefetch and extended revalidation — daily Vercel usage down ~35%.",
      "Blocked a scraper responsible for 71% of requests at the Vercel firewall after it exhausted the database IO budget.",
      "Python batch pipeline: YouTube Data API checks for duplicates, live status and embeddability, preflight before insert, translation-completeness verification across 13 locales.",
      "Postmortem — a cache stampede we caused: purging the catalogue tag twice in one day made every page refetch 1,500+ heavy rows at once. ~169k requests stalled the database, and functions waiting up to 300 s billed ~6× a normal day in provisioned memory. Fixes in rollout: a lean catalogue rebuilt with one fetch (heavy fields load per page), a ~10 s database timeout to fail fast, at most one purge a day, and batched, tested deploys.",
    ],
    outcome:
      "Grew from ~190 to ~1,600 cameras in two months through a semi-automated pipeline. Approved for Google AdSense; organic traffic growing month over month.",
    shots: {
      desktop: { src: "/work/livecity/desktop.jpg", alt: "LiveCity.cam homepage with live camera discovery" },
      mobile: [
        { src: "/work/livecity/mobile-1.jpg", alt: "LiveCity.cam mobile homepage" },
        { src: "/work/livecity/mobile-2.jpg", alt: "LiveCity.cam camera page with local time and weather" },
      ],
    },
  },
  {
    id:       "travelhub",
    name:     "TravelHub.cam",
    category: "Content platform",
    status:   "Live",
    period:   "May 2026 – now",
    url:      "https://travelhub.cam",
    urlLabel: "travelhub.cam",
    accent:   "#1D5C8C",
    tint:     "linear-gradient(135deg, #E6F0F8 0%, #DCE9F3 100%)",
    summary:
      "A travel video platform built around my own 4K walking tours, webcam recordings and ferry trips — each video becomes an editorial journey page with route map, chapters and a city essay.",
    stack: [
      "Next.js 16", "React 19", "TypeScript", "Tailwind 4",
      "Supabase Auth + RLS", "proxy.ts", "YouTube OAuth", "GA4 Consent Mode",
    ],
    metrics: [
      { value: "237", label: "videos imported" },
      { value: "12",  label: "locales" },
      { value: "693", label: "translation rows" },
      { value: "285", label: "commits since May" },
    ],
    problem:
      "A large multilingual catalogue on a young domain: Search Console showed ~1,200 thin, untranslated pages diluting the whole site.",
    decisions: [
      "Locale handling in proxy.ts: detection, 404 for unknown locales, 308 to English for untranslated pages, x-locale header for the correct <html lang>.",
      "A content-only locale pattern so a single translated article doesn't spawn hundreds of empty pages.",
      "Sitemap and indexing limited to editorially processed pages; everything else noindex.",
      "Review-then-apply pipeline: AI drafts copy, a human approves, scripts geocode and write — nothing auto-publishes.",
      "OAuth write-back that adds deep links into YouTube descriptions, plus a JSON feed consumed by LiveCity.",
      "Google sign-in, comments with moderation and reactions on Supabase with row-level security.",
    ],
    outcome:
      "Clean index, a working editorial pipeline, and two sister sites that feed each other traffic and content.",
    shots: {
      desktop: { src: "/work/travelhub/desktop.jpg", alt: "TravelHub.cam homepage" },
      mobile: [
        { src: "/work/travelhub/mobile-1.jpg", alt: "TravelHub.cam mobile homepage" },
        { src: "/work/travelhub/mobile-2.jpg", alt: "TravelHub.cam walking-tour journey page" },
      ],
    },
  },
  {
    id:       "familyfound",
    name:     "FamilyFound",
    category: "Content platform · MVP",
    status:   "Live MVP",
    period:   "Jul 2026 – now",
    url:      "https://familyfound.io",
    urlLabel: "familyfound.io",
    accent:   "#B4536A",
    tint:     "linear-gradient(135deg, #FBEFF1 0%, #F6E6EA 100%)",
    summary:
      "A knowledge platform for people building families outside the traditional route — co-parenting, known donors, IVF, surrogacy — across the Netherlands, UK, Canada, Australia and the US.",
    stack: [
      "Next.js 16", "Server Components", "Server Actions", "TypeScript",
      "Tailwind", "shadcn/ui", "next-intl", "Supabase RPC", "Vercel Cron",
    ],
    metrics: [
      { value: "~60",     label: "guides & comparisons" },
      { value: "6",       label: "countries in directory" },
      { value: "61",      label: "pages indexed" },
      { value: "54 → 11", label: "avg. search position" },
    ],
    problem:
      "Legal and medical topics where mistakes hurt people, and user data that falls under GDPR special categories.",
    decisions: [
      "Privacy by design: no accounts until demand is measured — demand is tracked through tagged email signups instead.",
      "Supabase locked down: RLS on with no policies; the public key can only call two SECURITY DEFINER functions and never read a row.",
      "Every claim checked against primary sources — caught a closed regulator and a destination that stopped accepting foreigners before publishing.",
      "Fully static: typed TypeScript content modules rendered by shared templates, no CMS, JS only in small islands.",
      "Twice-daily Vercel Cron heartbeat keeps the free database from auto-pausing.",
      "Intro video cut from 42 MB to 3.4 MB with faststart; images 100–300 KB.",
    ],
    outcome:
      "A credible, fast MVP that validates demand before taking on the responsibility of storing sensitive data.",
    shots: {
      desktop: { src: "/work/familyfound/desktop.jpg", alt: "FamilyFound homepage" },
      mobile: [
        { src: "/work/familyfound/mobile-1.jpg", alt: "FamilyFound mobile homepage" },
        { src: "/work/familyfound/mobile-2.jpg", alt: "FamilyFound resources library on mobile" },
      ],
    },
  },
  {
    id:       "sokole",
    name:     "Sokole",
    category: "Shopify e-commerce",
    status:   "Launching soon",
    period:   "2026",
    urlLabel: "sokole.eu · launching soon",
    accent:   "#9A7B2F",
    tint:     "linear-gradient(135deg, #F5EFE6 0%, #EDE3D3 100%)",
    summary:
      "A bilingual store for a Greek niche-fragrance brand selling to Greece and the EU. Built end to end: platform choice, design, theme, localisation, markets and handover.",
    stack: [
      "Shopify OS 2.0", "Liquid", "Sense theme", "CSS custom properties",
      "Shopify CLI", "Shopify Markets", "Translate & Adapt",
    ],
    metrics: [
      { value: "2",  label: "design iterations" },
      { value: "2",  label: "languages EN / GR" },
      { value: "27", label: "countries shipped" },
      { value: "16", label: "products launched" },
    ],
    problem:
      "A small brand with a luxury product, a Greek and an EU audience, and Greek payment rules that most gateways don't support.",
    decisions: [
      "Chose Shopify over WooCommerce from the client briefs — lower maintenance, built-in Markets and payments — and walked the client through why.",
      "Delivered a second, more luxurious design direction after the first review.",
      "Custom sections: split editorial hero, olfactory-pyramid notes, product showcase, trust bar — on a CSS-token design system.",
      "All hardcoded theme strings moved to locale keys; Greek content bulk-updated through a CSV export → merge → import pipeline.",
      "Researched the Greek IRIS payment mandate: found the bank's gateway had no Shopify integration and proposed a working provider combination.",
      "Git-versioned theme with diff-before-push to live and theme-check.",
    ],
    outcome:
      "A complete store ready to open as soon as payments are connected.",
    shots: {
      desktop: { src: "/work/sokole/desktop.jpg", alt: "Sokole storefront hero, English version" },
      mobile: [
        { src: "/work/sokole/mobile-1.jpg", alt: "Sokole mobile header and hero" },
        { src: "/work/sokole/mobile-2.jpg", alt: "Sokole philosophy section and signature fragrances" },
      ],
    },
  },
]
