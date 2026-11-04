import FadeIn       from "@/components/ui/FadeIn"
import SectionLabel from "@/components/ui/SectionLabel"

const GH = "https://github.com/hollandlive"

type Role = {
  period:  string
  title:   string
  company: string
  place:   string
  detail:  string
  repos?:  { label: string; href: string }[]
}

const ROLES: Role[] = [
  {
    period:  "2026 – now",
    title:   "Full-Stack Developer",
    company: "Own products",
    place:   "Remote",
    detail:  "LiveCity.cam, TravelHub.cam, FamilyFound and the Sokole store — Next.js, TypeScript, Supabase, Vercel, Shopify. AI-assisted engineering with OpenAI and Claude Code.",
  },
  {
    period:  "2018 – 2025",
    title:   "Independent projects",
    company: "Freelance",
    place:   "Remote",
    detail:  "Rebuilt and maintained multilingual WordPress sites, including dutchnews.ru and fastgreece.",
    repos: [
      { label: "dutchnews",  href: `${GH}/dutchnews` },
      { label: "fastgreece", href: `${GH}/fastgreece` },
    ],
  },
  {
    period:  "2017 – 2018",
    title:   "Frontend Developer",
    company: "WEBSOLVE B.V.",
    place:   "Netherlands",
    detail:  "Portals and websites on a custom PHP framework and Symfony 3; responsive layouts and HTML email templates, from design to production.",
    repos: [
      { label: "emails", href: `${GH}/emails` },
    ],
  },
  {
    period:  "2016 – 2017",
    title:   "Software Engineer (Frontend)",
    company: "Marviq BV",
    place:   "Netherlands",
    detail:  "Frontend for Drupal projects with SASS, JavaScript and PHP; cross-browser implementation of UI designs.",
  },
  {
    period:  "2016",
    title:   "Drupal Developer",
    company: "Atom Group B.V.",
    place:   "Netherlands",
    detail:  "Drupal 7/8 sub-themes, e-commerce and custom modules.",
    repos: [
      { label: "current_posts (D7 module)", href: `${GH}/current_posts` },
      { label: "artom (D8 subtheme)",       href: `${GH}/artom` },
    ],
  },
  {
    period:  "2015",
    title:   "WordPress Developer (Intern)",
    company: "KIIROO",
    place:   "Netherlands",
    detail:  "WordPress development, customisation and frontend maintenance.",
    repos: [
      { label: "arthemis (WP theme)", href: `${GH}/arthemis` },
    ],
  },
  {
    period:  "2014",
    title:   "PHP Programmer (Intern)",
    company: "Zorgcampus",
    place:   "Netherlands",
    detail:  "PHP backend development and object-oriented fundamentals.",
    repos: [
      { label: "MVC sample",  href: `${GH}/MVC--PHP--sample` },
      { label: "Calculator (OOP)", href: `${GH}/Calculator` },
      { label: "Login (PDO)", href: `${GH}/login` },
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" aria-label="Experience" className="bg-canvas">
      <div className="max-w-5xl mx-auto px-6 py-24 lg:py-32">
        <FadeIn direction="none">
          <SectionLabel>Experience</SectionLabel>
        </FadeIn>
        <FadeIn direction="up" delay={0.06}>
          <h2
            className="font-serif italic mt-2 leading-[1.0] text-charcoal"
            style={{ fontSize: "var(--text-title)" }}
          >
            Writing code since before AI wrote it.
          </h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.12}>
          <p className="mt-6 max-w-2xl text-[15px] text-body leading-[1.8]">
            PHP, Drupal, WordPress and Symfony in Dutch agencies from 2014 — the public
            repositories from those years are still on GitHub.
          </p>
        </FadeIn>

        <ol className="mt-16 list-none p-0 border-t border-border" role="list">
          {ROLES.map((r, i) => (
            <FadeIn key={r.period + r.company} direction="up" delay={0.04 + i * 0.03}>
              <li className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-x-8 py-8 border-b border-border">
                <p className="md:col-span-3 text-[12px] font-medium tracking-wide text-dim tabular-nums">
                  {r.period}
                </p>
                <div className="md:col-span-9">
                  <h3 className="text-[16px] text-charcoal">
                    <span className="font-medium">{r.title}</span>
                    <span className="text-dim"> · {r.company}</span>
                  </h3>
                  <p className="mt-0.5 text-[12px] text-muted">{r.place}</p>
                  <p className="mt-3 text-[14px] text-body leading-[1.75]">{r.detail}</p>
                  {r.repos && (
                    <ul className="mt-3 flex flex-wrap items-baseline gap-x-5 gap-y-1" role="list">
                      <li className="text-[11px] uppercase tracking-[0.12em] text-muted">Repos from this period</li>
                      {r.repos.map((repo) => (
                        <li key={repo.href}>
                          <a
                            href={repo.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[12px] text-dim transition-opacity hover:opacity-60"
                            style={{ borderBottom: "1px solid rgba(107,105,99,0.3)", paddingBottom: 1 }}
                          >
                            {repo.label} ↗
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>

        <FadeIn direction="up">
          <p className="mt-10 text-[13px] text-dim leading-[1.8]">
            Education — Brunel University London · Design &amp; Branding Strategy (MA programme) · 2006–2007.
            Omsk State Technical University · Engineering, printing &amp; design · 1994–1999.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
