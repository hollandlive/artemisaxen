const stats = [
  { value: "6+", label: "Years of experience" },
  { value: "30+", label: "Projects delivered" },
  { value: "EN · EL", label: "English & Greek" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-surface border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Text */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-2 font-medium">
              About
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">
              Designer &amp; developer,<br />based in Athens.
            </h2>
            <p className="text-sm text-dim leading-relaxed mb-4">
              I work with small businesses, local brands, and Shopify merchants
              who want a professional online presence without the agency
              overhead.
            </p>
            <p className="text-sm text-dim leading-relaxed">
              My focus is on websites that actually perform — clean design, fast
              builds, and direct communication throughout. I speak English and
              Greek and work with clients locally and remotely.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 md:grid-cols-1 gap-px bg-border rounded-xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface px-6 py-5">
                <p className="font-serif text-3xl text-ink mb-1">{s.value}</p>
                <p className="text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
