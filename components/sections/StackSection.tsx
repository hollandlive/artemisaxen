import FadeIn       from "@/components/ui/FadeIn"
import SectionLabel from "@/components/ui/SectionLabel"

const GROUPS = [
  {
    title: "Frontend",
    items: ["React 19", "Next.js 16 App Router", "TypeScript", "Server Components", "Tailwind", "Framer Motion", "CSS architecture / BEM"],
  },
  {
    title: "Backend & data",
    items: ["Supabase / Postgres", "Row-level security", "Server Actions", "REST APIs", "PHP", "Symfony", "Python scripts"],
  },
  {
    title: "Platform & cost",
    items: ["Vercel ISR & data cache", "Cache invalidation", "Firewall & bot control", "Cron jobs", "Usage monitoring"],
  },
  {
    title: "Search",
    items: ["i18n & hreflang (13 locales)", "Structured data", "Sitemaps & IndexNow", "Search Console", "AI search visibility"],
  },
  {
    title: "Commerce & CMS",
    items: ["Shopify OS 2.0 / Liquid", "Shopify Markets", "WordPress", "Drupal 7/8"],
  },
  {
    title: "AI workflow",
    items: ["OpenAI — since 2025", "Claude Code — since 2026", "Anthropic API", "Human-reviewed AI pipelines"],
  },
]

export default function StackSection() {
  return (
    <section id="stack" aria-label="Stack" className="bg-surface border-y border-border">
      <div className="max-w-5xl mx-auto px-6 py-24 lg:py-28">
        <FadeIn direction="none">
          <SectionLabel>Stack</SectionLabel>
        </FadeIn>
        <FadeIn direction="up" delay={0.06}>
          <h2
            className="font-serif italic mt-2 leading-[1.0] text-charcoal"
            style={{ fontSize: "var(--text-title)" }}
          >
            Tools I use in production.
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {GROUPS.map(({ title, items }, i) => (
            <FadeIn key={title} direction="up" delay={0.06 + (i % 3) * 0.05}>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted pb-3 border-b border-border">
                {title}
              </h3>
              <ul className="mt-4 space-y-2" role="list">
                {items.map((it) => (
                  <li key={it} className="text-[14px] text-body">{it}</li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
