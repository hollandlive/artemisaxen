import FadeIn         from "@/components/ui/FadeIn"
import DeviceShowcase from "@/components/work/DeviceShowcase"
import type { Project } from "@/lib/projects"

type Props = {
  project: Project
  index:   number
}

export default function CaseStudy({ project: p, index }: Props) {
  const n = String(index + 1).padStart(2, "0")

  return (
    <article
      id={p.id}
      aria-label={`Case study: ${p.name}`}
      className="relative"
      style={{ background: p.tint }}
    >
      <div className="max-w-5xl mx-auto px-6 py-24 lg:py-32">

        {/* ── Header ─────────────────────────────────────────────── */}
        <FadeIn direction="none">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p
              className="text-[11px] font-medium uppercase tracking-[0.14em]"
              style={{ color: p.accent }}
            >
              {n} / {p.category}
            </p>
            <span
              className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase
                         tracking-[0.12em] px-2 py-0.5 rounded-full border"
              style={{ color: p.accent, borderColor: `${p.accent}40` }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: p.status === "Launching soon" ? "#D4A017" : "#22C55E" }}
              />
              {p.status}
            </span>
            <span className="text-[11px] text-dim tracking-wide">{p.period}</span>
          </div>
        </FadeIn>

        <div className="mt-6 lg:flex lg:items-start lg:gap-16">
          <div className="lg:w-5/12">
            <FadeIn direction="up" delay={0.06}>
              <h2
                className="font-serif italic leading-[0.95] text-charcoal"
                style={{ fontSize: "var(--text-title)" }}
              >
                {p.name}
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.12}>
              <p className="mt-6 text-[15px] text-body leading-[1.8]">{p.summary}</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-medium">
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-60"
                    style={{ color: p.accent, borderBottom: `1px solid ${p.accent}59`, paddingBottom: 1 }}
                  >
                    {p.urlLabel} →
                  </a>
                ) : (
                  <span className="text-dim">{p.urlLabel}</span>
                )}
                {p.codeUrl && (
                  <a
                    href={p.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dim transition-opacity hover:opacity-60"
                    style={{ borderBottom: "1px solid rgba(107,105,99,0.3)", paddingBottom: 1 }}
                  >
                    Code samples →
                  </a>
                )}
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.14} className="mt-14 lg:mt-0 lg:w-7/12">
            <DeviceShowcase project={p} />
          </FadeIn>
        </div>

        {/* ── Metrics ────────────────────────────────────────────── */}
        <FadeIn direction="up" delay={0.06}>
          <dl className="mt-20 grid grid-cols-2 lg:grid-cols-4 border-t border-charcoal/10">
            {p.metrics.map(({ value, label }) => (
              <div key={label} className="pt-6 pb-2 pr-4">
                <dt className="sr-only">{label}</dt>
                <dd className="font-serif text-charcoal leading-none"
                    style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  {value}
                </dd>
                <p className="mt-2 text-[12px] text-dim">{label}</p>
              </div>
            ))}
          </dl>
        </FadeIn>

        {/* ── Problem / decisions / outcome ──────────────────────── */}
        <div className="mt-16 lg:grid lg:grid-cols-12 lg:gap-16">
          <FadeIn direction="up" className="lg:col-span-4">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              The problem
            </h3>
            <p className="mt-4 font-serif italic text-charcoal leading-snug"
               style={{ fontSize: "clamp(1.15rem, 2vw, 1.35rem)" }}>
              {p.problem}
            </p>
            <h3 className="mt-10 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              Stack
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2" role="list">
              {p.stack.map((s) => (
                <li key={s}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-surface/70 border border-border text-body">
                  {s}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn direction="up" delay={0.08} className="mt-12 lg:mt-0 lg:col-span-8">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              Engineering decisions
            </h3>
            <ol className="mt-4 list-none p-0" role="list">
              {p.decisions.map((d, i) => (
                <li key={i} className="flex gap-4 py-3.5 border-b border-charcoal/10 last:border-b-0">
                  <span className="text-[11px] font-medium tabular-nums pt-[3px]" style={{ color: p.accent }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] text-body leading-[1.75]">{d}</span>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-[14px] leading-[1.8] text-charcoal">
              <span className="font-medium">Outcome — </span>{p.outcome}
            </p>
          </FadeIn>
        </div>
      </div>
    </article>
  )
}
