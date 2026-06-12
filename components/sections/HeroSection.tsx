"use client"

import { useRef } from "react"
import { m, useScroll, useTransform, useReducedMotion } from "framer-motion"

/* ─── Reduced-motion variant ─────────────────────────────────────
   All copy visible immediately, warm white background, no animation.
───────────────────────────────────────────────────────────────── */
function HeroStatic() {
  return (
    <section
      className="min-h-[100dvh] bg-canvas flex items-center justify-center px-6"
      aria-label="Hero"
    >
      <h1 className="sr-only">
        Artemis Axen — Web Design &amp; Development, Athens
      </h1>

      <div className="text-center max-w-5xl w-full" aria-hidden="true">
        <p
          className="font-serif italic text-charcoal leading-[1.1] mb-4"
          style={{ fontSize: "var(--text-display)" }}
        >
          Design is the argument.
        </p>
        <p
          className="font-serif italic text-body leading-[1.1]"
          style={{ fontSize: "var(--text-display)" }}
        >
          Development is the proof.
        </p>
        <p
          className="mt-10 font-serif text-muted tracking-tight"
          style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}
        >
          <span className="opacity-40">— </span>
          Artemis Axen
          <span className="opacity-40"> · Athens</span>
        </p>
      </div>
    </section>
  )
}

/* ─── Scroll indicator ───────────────────────────────────────────
   Static SVG — opacity is controlled by parent scroll-driven m.div.
   No internal animation keeps it premium and avoids stacking issues.
───────────────────────────────────────────────────────────────── */
function ScrollIndicator() {
  return (
    <svg
      width="18"
      height="26"
      viewBox="0 0 18 26"
      fill="none"
      aria-hidden="true"
    >
      <line
        x1="9" y1="2" x2="9" y2="20"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.35"
      />
      <path
        d="M3 14l6 7 6-7"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.35"
      />
    </svg>
  )
}

/* ─── Animated hero ──────────────────────────────────────────────
   Separated from the default export so useReducedMotion() can bail
   early without calling the scroll hooks unnecessarily.
───────────────────────────────────────────────────────────────── */
function HeroAnimated() {
  const containerRef = useRef<HTMLDivElement>(null)

  /* scrollYProgress: 0 → 1 as the 250vh container scrolls past */
  const { scrollYProgress } = useScroll({
    target:  containerRef,
    offset:  ["start start", "end start"],
  })

  /* ── Dark overlay ────────────────────────────────────────────
     GPU-composited opacity fade. The warm white canvas (#F7F5F0)
     sits underneath — it's always there, the overlay just hides it.
     Fades out between 55–80% scroll progress.
  ─────────────────────────────────────────────────────────────── */
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.80],
    [1, 0],
  )

  /* ── Scroll indicator ────────────────────────────────────────
     Disappears before the first headline fades in on scroll.
  ─────────────────────────────────────────────────────────────── */
  const indicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.04, 0.10],
    [1, 1, 0],
  )

  /* ── Line 1: "Design is the argument." ──────────────────────
     Enters at the first scroll touch, holds, then dissolves
     just before Line 2 arrives — a gentle cross-fade.
  ─────────────────────────────────────────────────────────────── */
  const line1Opacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.22, 0.30],
    [0, 1,    1,    0],
  )
  const line1Y = useTransform(
    scrollYProgress,
    [0, 0.08],
    [28, 0],
  )

  /* ── Line 2: "Development is the proof." ────────────────────
     Fades in while Line 1 is still dissolving (0.26–0.30 window
     of cross-dissolve is intentional and cinematic).
  ─────────────────────────────────────────────────────────────── */
  const line2Opacity = useTransform(
    scrollYProgress,
    [0.26, 0.34, 0.48, 0.56],
    [0,    1,    1,    0],
  )
  const line2Y = useTransform(
    scrollYProgress,
    [0.26, 0.34],
    [28, 0],
  )

  /* ── Name: "— Artemis Axen · Athens" ────────────────────────
     The final reveal. Does not exit — it holds as the dark overlay
     fades and the warm white canvas settles beneath it. The name
     transitions from white (on dark) to charcoal (on warm white)
     as a natural result of the overlay disappearing.
  ─────────────────────────────────────────────────────────────── */
  const nameOpacity = useTransform(
    scrollYProgress,
    [0.52, 0.64],
    [0, 1],
  )
  const nameY = useTransform(
    scrollYProgress,
    [0.52, 0.64],
    [18, 0],
  )

  /* ── Name text color: white on dark → charcoal on warm white ─
     Interpolates alongside the overlay fade so the text is always
     readable against whatever background is beneath it.
  ─────────────────────────────────────────────────────────────── */
  const nameColor = useTransform(
    scrollYProgress,
    [0.55, 0.85],
    ["rgba(250,250,248,0.60)", "rgba(107,105,99,0.90)"],
  )

  return (
    <section
      ref={containerRef}
      className="relative h-[250vh]"
      aria-label="Hero"
    >
      {/* Accessible h1 — never visible, always readable by screen readers */}
      <h1 className="sr-only">
        Artemis Axen — Web Design &amp; Development, Athens
      </h1>

      {/* ── Sticky viewport shell ─────────────────────────────── */}
      <div className="sticky top-0 h-[100dvh] bg-canvas overflow-hidden">

        {/* Dark overlay — sits above canvas, fades via scroll-linked opacity */}
        <m.div
          className="absolute inset-0 bg-ink z-0"
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        />

        {/* ── Line 1 ──────────────────────────────────────────── */}
        <div
          className="absolute inset-0 z-10 flex items-center justify-center px-6 pointer-events-none"
          aria-hidden="true"
        >
          <m.p
            className="font-serif italic text-surface text-center w-full max-w-5xl leading-[1.1]"
            style={{
              fontSize: "var(--text-display)",
              opacity:  line1Opacity,
              y:        line1Y,
            }}
          >
            Design is the argument.
          </m.p>
        </div>

        {/* ── Line 2 ──────────────────────────────────────────── */}
        <div
          className="absolute inset-0 z-10 flex items-center justify-center px-6 pointer-events-none"
          aria-hidden="true"
        >
          <m.p
            className="font-serif italic text-surface text-center w-full max-w-5xl leading-[1.1]"
            style={{
              fontSize: "var(--text-display)",
              opacity:  line2Opacity,
              y:        line2Y,
            }}
          >
            Development is the proof.
          </m.p>
        </div>

        {/* ── Name + location ─────────────────────────────────── */}
        <div
          className="absolute inset-0 z-10 flex items-center justify-center px-6 pointer-events-none"
          aria-hidden="true"
        >
          <m.div
            className="text-center"
            style={{ opacity: nameOpacity, y: nameY }}
          >
            <m.p
              className="font-serif tracking-tight"
              style={{
                fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                color:    nameColor,
              }}
            >
              — Artemis Axen · Athens
            </m.p>
          </m.div>
        </div>

        {/* ── Scroll indicator ────────────────────────────────── */}
        <m.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          style={{ opacity: indicatorOpacity }}
          aria-hidden="true"
        >
          <ScrollIndicator />
        </m.div>

      </div>
    </section>
  )
}

/* ─── Default export ─────────────────────────────────────────────
   Bails to the static version when prefers-reduced-motion is set.
───────────────────────────────────────────────────────────────── */
export default function HeroSection() {
  const prefersReduced = useReducedMotion()
  if (prefersReduced) return <HeroStatic />
  return <HeroAnimated />
}
