import FadeIn       from "@/components/ui/FadeIn"
import SectionArrow from "@/components/ui/SectionArrow"
import { projects } from "@/lib/projects"

const p = projects.find((x) => x.id === "sokole")!

const PALETTE = ["#F5EFE6", "#EDD5CA", "#D4B896", "#C9A84C"]

export default function SokoleScene() {
  return (
    <article
      id="sokole"
      className="relative overflow-hidden min-h-screen"
      style={{
        background: "linear-gradient(135deg, #FDF5EE 0%, #F8E8D5 100%)",
      }}
      aria-label={`Project: ${p.name}`}
    >
      <div className="relative max-w-5xl mx-auto px-6 py-24 min-h-screen flex flex-col justify-center lg:flex-row lg:items-center lg:gap-20">

        {/* ── Text column ──────────────────────────────────────── */}
        <div className="lg:w-5/12 lg:shrink-0">
          <FadeIn direction="up" delay={0}>
            <p
              className="text-[11px] font-medium uppercase tracking-[0.14em]"
              style={{ color: "#C9A84C" }}
            >
              01 / {p.category}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.08}>
            <h2
              className="font-serif italic mt-4 leading-[0.95]"
              style={{ fontSize: "var(--text-title)", color: "#2A1209" }}
            >
              {p.name}
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.14}>
            <p
              className="font-serif mt-5 leading-snug"
              style={{
                fontSize: "clamp(1.15rem, 2vw, 1.375rem)",
                color:    "#8B4A2A",
              }}
            >
              {p.tagline}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.20}>
            <p
              className="mt-6 text-[14px] leading-[1.8]"
              style={{ color: "rgba(90,45,20,0.65)" }}
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
                color:         "#C9A84C",
                borderBottom:  "1px solid rgba(201,168,76,0.40)",
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

      <SectionArrow
        targetId="livecity"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      />
    </article>
  )
}

function SokoleVisual() {
  return (
    <div className="relative max-w-[420px]">

      {/* Ghost letterform */}
      <span
        className="absolute font-serif italic select-none pointer-events-none"
        style={{
          fontSize:   "340px",
          color:      "#C9A84C",
          opacity:    0.12,
          top:        "-48px",
          right:      "-8px",
          lineHeight: 1,
        }}
      >
        S
      </span>

      {/* Pull quote */}
      <blockquote className="relative" cite={p.url}>
        <p
          className="font-serif italic leading-[1.15]"
          style={{
            fontSize: "clamp(1.45rem, 2.8vw, 2.15rem)",
            color:    "#2A1209",
          }}
        >
          &ldquo;{p.quote}&rdquo;
        </p>
      </blockquote>

      {/* Brand palette */}
      <div className="mt-10 flex items-center gap-3">
        {PALETTE.map((hex) => (
          <div
            key={hex}
            className="w-7 h-7 rounded-full shrink-0 shadow-sm"
            style={{ backgroundColor: hex }}
          />
        ))}
        <span
          className="text-[10px] uppercase tracking-[0.16em] ml-1"
          style={{ color: "rgba(139,74,42,0.40)" }}
        >
          Brand Palette
        </span>
      </div>
    </div>
  )
}
