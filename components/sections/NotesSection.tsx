import FadeIn       from "@/components/ui/FadeIn"
import SectionLabel from "@/components/ui/SectionLabel"

/* Short production incidents — each one is something that broke
   (or cost money) and what was changed so it doesn't happen again. */
const NOTES = [
  {
    tag:   "Cost",
    title: "Prefetch is not free",
    body:  "Unthrottled Link prefetch on camera cards triggered mass ISR writes, and routes without generateStaticParams were silently dynamic. Prefetch off, longer revalidation, English-only prebuild: daily Vercel usage down ~35%.",
  },
  {
    tag:   "Bots",
    title: "The scraper that drained the database",
    body:  "A crawler spike burned through the Supabase IO budget, saturated the connection pool and pushed functions into 300 s timeouts. Lookups cached, and one scraper — 71% of all requests — blocked at the Vercel firewall.",
  },
  {
    tag:   "Limits",
    title: "Zero cameras, no errors",
    body:  "At ~600 cameras the cached catalogue crossed the 2 MB data-cache entry limit and production quietly rendered an empty list. Reads are now chunked at 200 rows per cache entry.",
  },
  {
    tag:   "Performance",
    title: "A homepage 3.6× lighter",
    body:  "1,600 camera records were serialised into the RSC payload of every homepage view. Moved to a CDN-cached API loaded on demand; the page is now static per locale. 219 KB → 61 KB gzipped.",
  },
  {
    tag:   "SEO",
    title: "Thin pages are a liability",
    body:  "~1,200 untranslated duplicates were diluting a young domain. Unprocessed pages went noindex, untranslated locales 308 to English, and a content-only locale lets one article exist in one language.",
  },
  {
    tag:   "Data",
    title: "Don't trust a cron that writes",
    body:  "An automated liveness job flagged 33 working streams as offline. Rolled back: checks now produce a report, and a human approves every write.",
  },
]

export default function NotesSection() {
  return (
    <section id="notes" aria-label="Engineering notes" className="bg-ink">
      <div className="max-w-5xl mx-auto px-6 py-24 lg:py-32">
        <FadeIn direction="none">
          <SectionLabel light>Engineering notes</SectionLabel>
        </FadeIn>
        <FadeIn direction="up" delay={0.06}>
          <h2
            className="font-serif italic mt-2 leading-[1.0] text-surface"
            style={{ fontSize: "var(--text-title)" }}
          >
            What production taught me.
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-dark">
          {NOTES.map(({ tag, title, body }, i) => (
            <FadeIn key={title} direction="up" delay={0.06 + (i % 3) * 0.06} className="bg-ink">
              <article className="h-full p-7">
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#8FA3FF]">
                  {tag}
                </p>
                <h3
                  className="mt-4 font-serif italic leading-[1.15] text-surface"
                  style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.4rem)" }}
                >
                  {title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.8] text-[#A8A6A0]">{body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
