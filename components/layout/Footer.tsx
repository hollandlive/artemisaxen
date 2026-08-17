import Link from "next/link"

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background:  "#FFF0E8",
        borderColor: "rgba(180,120,80,0.15)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-1.5">
        <p className="text-[12px] text-center sm:text-left" style={{ color: "#9B7060" }}>
          © 2026 Artemis Axen. All rights reserved. &ldquo;DON&rsquo;T DEVELOP&rdquo; is an original novel by Artem.
        </p>
        <div className="flex items-center gap-4 shrink-0">
          <Link href="/legal" className="text-[12px] underline underline-offset-2" style={{ color: "#9B7060" }}>
            Legal
          </Link>
          <p className="text-[12px]" style={{ color: "#9B7060" }}>
            Athens, Greece
          </p>
        </div>
      </div>
    </footer>
  )
}
