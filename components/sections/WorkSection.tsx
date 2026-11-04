import SectionLabel from "@/components/ui/SectionLabel"
import CaseStudy    from "@/components/work/CaseStudy"
import { projects } from "@/lib/projects"

export default function WorkSection() {
  return (
    <section aria-label="Selected work">
      {/* ── Section label strip ──────────────────────────────────── */}
      <div className="bg-canvas border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <SectionLabel className="mb-0">Selected Work</SectionLabel>
          <span className="hidden sm:block text-[11px] uppercase tracking-[0.12em] text-muted">
            Four products · built and shipped in 2026
          </span>
        </div>
      </div>

      {projects.map((p, i) => (
        <CaseStudy key={p.id} project={p} index={i} />
      ))}
    </section>
  )
}
