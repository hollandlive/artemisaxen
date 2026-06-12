import FadeIn from "@/components/ui/FadeIn"
import { projects } from "@/lib/projects"

const p = projects.find((x) => x.id === "sokole")!

export default function SokoleScene() {
  return (
    <article
      className="relative overflow-hidden min-h-screen bg-sokole-bg"
      aria-label={`Project: ${p.name}`}
    >
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(201,168,76,0.10) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6 py-24 min-h-screen flex flex-col justify-center lg:flex-row lg:items-center lg:gap-20">

        {/* ── Text column ──────────────────────────────────────── */}
        <div className="lg:w-5/12 lg:shrink-0">
          <FadeIn direction="up" delay={0}>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-sokole-gold">
              01 / {p.category}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.08}>
            <h2
              className="font-serif italic mt-4 leading-[0.95] text-sokole-cream"
              style={{ fontSize: "var(--text-title)" }}
            >
              {p.name}
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.14}>
            <p
              className="font-serif mt-5 leading-snug text-sokole-blush"
              style={{ fontSize: "clamp(1.15rem, 2vw, 1.375rem)" }}
            >
              {p.tagline}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.20}>
            <p
              className="mt-6 text-[14px] leading-[1.8]"
              style={{ color: "rgba(212,184,150,0.65)" }}
            >
              {p.what}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.26}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-8 text-[13px] font-medium
                         transition-opacity hover:opacity-60"
              style={{
                color: "#C9A84C",
                borderBottom: "1px solid rgba(201,168,76,0.35)",
                paddingBottom: "1px",
              }}
            >
              Visit {p.name} →
            </a>
          </FadeIn>
        </div>

        {/* ── Visual column ────────────────────────────────────── */}
        <div
          className="hidden lg:flex lg:w-7/12 items-center justify-center"
          aria-hidden="true"
        >
          <SokoleVisual />
        </div>
      </div>
    </article>
  )
}

function SokoleVisual() {
  return (
    <div className="relative w-[380px] h-[480px] flex items-center justify-center">

      {/* Ghost letterform */}
      <span
        className="absolute font-serif italic select-none"
        style={{
          fontSize: "420px",
          color: "#C9A84C",
          opacity: 0.055,
          top: "-48px",
          right: "-32px",
          lineHeight: 1,
        }}
      >
        S
      </span>

      {/* Back card — deep wine */}
      <div
        className="absolute bg-sokole-deep border border-sokole-gold/10"
        style={{
          width: "210px",
          height: "290px",
          top: "95px",
          left: "38px",
          transform: "rotate(-3.5deg)",
        }}
      />

      {/* Mid card — cream */}
      <div
        className="absolute bg-sokole-cream"
        style={{
          width: "195px",
          height: "272px",
          top: "84px",
          left: "75px",
          transform: "rotate(2deg)",
        }}
      />

      {/* Front frame — gold outline with label */}
      <div
        className="absolute flex flex-col items-center justify-center gap-2"
        style={{
          width: "152px",
          height: "212px",
          border: "1px solid #C9A84C",
          top: "134px",
          left: "112px",
          transform: "rotate(0.5deg)",
        }}
      >
        <span
          className="font-serif italic"
          style={{
            fontSize: "22px",
            color: "#2A1209",
            letterSpacing: "-0.01em",
          }}
        >
          Sokole
        </span>
        <span
          style={{
            fontSize: "7px",
            letterSpacing: "0.28em",
            color: "#C9A84C",
            textTransform: "uppercase",
          }}
        >
          Athens
        </span>
      </div>
    </div>
  )
}
