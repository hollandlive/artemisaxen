import FadeIn       from "@/components/ui/FadeIn"
import SectionLabel from "@/components/ui/SectionLabel"

const SERVICES = [
  {
    title: "Shopify store, end to end",
    body:
      "From platform setup to launch: a custom theme, products, markets and shipping, a second language, payment research and a clean handover to an account you own.",
    proof: "Sokole",
  },
  {
    title: "Shopify fixes & migrations",
    body:
      "Theme changes, translations, redirects and broken links, speed, and moving a store between accounts or from WooCommerce without losing content.",
    proof: "Sokole",
  },
  {
    title: "Next.js sites & MVPs",
    body:
      "Fast, multilingual, search-ready sites and MVPs on Vercel and Supabase, built with the running costs in mind.",
    proof: "LiveCity · TravelHub · FamilyFound",
  },
  {
    title: "Product visuals & video",
    body:
      "AI-assisted imagery and video for stores and launches: hero loops, product scenes and short promos, with a consistent look from shot to shot.",
    proof: "Don't Develop",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" aria-label="Services" className="bg-canvas border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-24 lg:py-32">
        <FadeIn direction="none">
          <SectionLabel>Freelance</SectionLabel>
        </FadeIn>

        <FadeIn direction="up" delay={0.06}>
          <h2
            className="mt-8 font-serif italic text-charcoal leading-[1.05]"
            style={{ fontSize: "var(--text-title)" }}
          >
            What I can build for you.
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.12}>
          <p className="mt-6 max-w-2xl text-[15px] text-body leading-[1.85]">
            Fixed-price projects, remote, for clients across the EU. You get a written
            scope before work starts and a store or site you fully own at the end.
          </p>
        </FadeIn>

        <ul className="mt-14 grid sm:grid-cols-2 border-t border-border" role="list">
          {SERVICES.map(({ title, body, proof }, i) => (
            <li key={title} className="border-b border-border">
              <FadeIn direction="up" delay={0.06 + i * 0.05} className="h-full py-8 sm:pr-10">
                <h3 className="font-serif text-charcoal leading-snug"
                    style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.45rem)" }}>
                  {title}
                </h3>
                <p className="mt-3 text-[14px] text-body leading-[1.75]">{body}</p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.12em] text-muted">
                  See: {proof}
                </p>
              </FadeIn>
            </li>
          ))}
        </ul>

        <FadeIn direction="up" delay={0.1}>
          <a
            href="#contact"
            className="mt-12 inline-block text-[13px] font-medium text-charcoal transition-opacity
                       hover:opacity-60 border-b border-charcoal/30 pb-px"
          >
            Send a short brief →
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
