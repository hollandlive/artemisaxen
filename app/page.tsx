import Navbar  from "@/components/layout/Navbar"
import Footer  from "@/components/layout/Footer"

/*
 * Phase A — skeleton page with section stubs.
 * Sections are replaced phase by phase:
 *   Phase B → HeroSection
 *   Phase C → WorkSection
 *   Phase D → AboutSection, ContactSection
 */

export default function Home() {
  return (
    <>
      {/* Skip to content — accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4
                   focus:z-[100] focus:px-4 focus:py-2 focus:bg-surface
                   focus:text-charcoal focus:text-sm focus:rounded-md focus:outline-none
                   focus:shadow-lg"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        {/* ── Phase B: HeroSection ─────────────────────────────── */}
        <section
          aria-label="Hero"
          className="h-[250vh] bg-ink flex items-start justify-center pt-[40vh]"
        >
          <div className="text-center px-6 space-y-4 pointer-events-none select-none">
            <p className="font-serif italic text-surface/20 text-[11px] uppercase tracking-[0.12em]">
              Phase B — Hero
            </p>
            <p className="font-serif italic text-surface/30" style={{ fontSize: "var(--text-display)" }}>
              Design is the argument.
            </p>
            <p className="font-serif italic text-surface/20" style={{ fontSize: "var(--text-display)" }}>
              Development is the proof.
            </p>
            <p className="text-surface/15 text-lg font-light mt-6">
              — Artemis Axen · Athens
            </p>
          </div>
        </section>

        {/* ── Phase C: WorkSection ─────────────────────────────── */}
        <section
          id="work"
          aria-label="Selected work"
          className="min-h-screen bg-canvas flex items-center justify-center"
        >
          <p className="font-serif italic text-muted/40 text-2xl">
            Phase C — Work
          </p>
        </section>

        {/* ── Phase D: AboutSection ────────────────────────────── */}
        <section
          id="about"
          aria-label="About"
          className="min-h-[60vh] bg-surface flex items-center justify-center"
        >
          <p className="font-serif italic text-muted/40 text-2xl">
            Phase D — About
          </p>
        </section>

        {/* ── Phase D: ContactSection ──────────────────────────── */}
        <section
          id="contact"
          aria-label="Contact"
          className="min-h-[60vh] bg-ink flex items-center justify-center"
        >
          <p className="font-serif italic text-surface/20 text-2xl">
            Phase D — Contact
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}
