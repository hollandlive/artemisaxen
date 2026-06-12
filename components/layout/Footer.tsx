export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background:   "#0D1822",
        borderColor:  "rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-1.5">
        <p className="text-[12px]" style={{ color: "#3D4E63" }}>
          © 2026 Artemis Axen
        </p>
        <p className="text-[12px]" style={{ color: "#3D4E63" }}>
          Athens, Greece
        </p>
      </div>
    </footer>
  )
}
