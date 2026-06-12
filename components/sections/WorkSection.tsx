import SectionLabel from "@/components/ui/SectionLabel"
import SokoleScene   from "@/components/projects/SokoleScene"
import LiveCityScene from "@/components/projects/LiveCityScene"
import TravelHubScene from "@/components/projects/TravelHubScene"

export default function WorkSection() {
  return (
    <section aria-label="Selected work">
      {/* ── Section label strip ──────────────────────────────────── */}
      <div className="bg-canvas border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <SectionLabel className="mb-0">Selected Work</SectionLabel>
          <span className="hidden sm:block text-[11px] uppercase tracking-[0.12em] text-muted">
            2024 – 2026
          </span>
        </div>
      </div>

      <SokoleScene />
      <LiveCityScene />
      <TravelHubScene />
    </section>
  )
}
