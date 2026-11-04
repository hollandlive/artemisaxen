import Image from "next/image"
import type { Project } from "@/lib/projects"

/* ─── Device showcase ────────────────────────────────────────────
   Browser frame (desktop) with phones overlapping its lower edge.
   Empty slots render labelled placeholders until screenshots
   land in /public/work/<id>/.
───────────────────────────────────────────────────────────────── */

const MOBILE_SLOTS = 2

function Placeholder({ label, accent }: { label: string; accent: string }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        background: `repeating-linear-gradient(135deg, ${accent}0D 0 12px, ${accent}05 12px 24px)`,
      }}
    >
      <span
        className="text-[10px] font-medium uppercase tracking-[0.14em]"
        style={{ color: `${accent}99` }}
      >
        {label}
      </span>
    </div>
  )
}

export default function DeviceShowcase({ project }: { project: Project }) {
  const { shots, accent, urlLabel, name } = project
  const mobiles = Array.from({ length: MOBILE_SLOTS }, (_, i) => shots.mobile[i])

  return (
    <div className="relative pb-16 sm:pb-20">
      {/* ── Browser frame ───────────────────────────────────────── */}
      <div
        className="rounded-xl overflow-hidden bg-surface"
        style={{
          boxShadow: "0 30px 60px -20px rgba(20,20,18,0.25), 0 0 0 1px rgba(20,20,18,0.06)",
        }}
      >
        <div className="flex items-center gap-3 px-4 h-9 border-b border-border bg-canvas">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5E3DE]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5E3DE]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5E3DE]" />
          </div>
          <div className="flex-1 max-w-xs mx-auto h-5 rounded-md bg-surface border border-border
                          flex items-center justify-center text-[10px] text-muted truncate px-2">
            {urlLabel}
          </div>
        </div>
        <div className="relative aspect-[16/10]">
          {shots.desktop ? (
            <Image
              src={shots.desktop.src}
              alt={shots.desktop.alt}
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover object-top"
            />
          ) : (
            <Placeholder label={`${name} · desktop`} accent={accent} />
          )}
        </div>
      </div>

      {/* ── Phones ──────────────────────────────────────────────── */}
      <div className="absolute right-3 sm:right-6 bottom-0 flex gap-3 sm:gap-4">
        {mobiles.map((shot, i) => (
          <div
            key={i}
            className="relative w-[84px] sm:w-[118px] aspect-[9/19.5] rounded-[18px] sm:rounded-[22px]
                       overflow-hidden bg-surface border-[3px] sm:border-4 border-charcoal"
            style={{
              boxShadow: "0 24px 40px -16px rgba(20,20,18,0.35)",
              transform: i === 0 ? "translateY(-18px)" : undefined,
            }}
          >
            {shot ? (
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="118px"
                className="object-cover object-top"
              />
            ) : (
              <Placeholder label="mobile" accent={accent} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
