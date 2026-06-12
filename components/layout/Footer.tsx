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
        <p className="text-[12px]" style={{ color: "#9B7060" }}>
          © 2026 Artemis Axen
        </p>
        <p className="text-[12px]" style={{ color: "#9B7060" }}>
          Athens, Greece
        </p>
      </div>
    </footer>
  )
}
