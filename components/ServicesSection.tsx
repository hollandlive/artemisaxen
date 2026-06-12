const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="1" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M1 8h20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 12h8M7 15h5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
    title: "Shopify Stores",
    body: "Full store setup, custom theme design, and product page optimization — built to convert visitors into customers. Greek and international markets.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="2" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 7h8M7 11h8M7 15h5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
    title: "Custom Websites",
    body: "Fast, clean Next.js sites for businesses that need more than a template. Built for performance, easy to manage, and designed to last.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 17l4-5 3 3 4-6 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="19" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "SEO & Optimization",
    body: "Technical SEO, page speed improvements, and conversion audits. I identify what's holding your site back and fix it with measurable results.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-surface border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
        <p className="text-xs uppercase tracking-widest text-muted mb-2 font-medium">
          Services
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-12">
          What I build
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-surface p-8 flex flex-col gap-4"
            >
              <span className="text-dim">{s.icon}</span>
              <h3 className="text-base font-medium text-ink">{s.title}</h3>
              <p className="text-sm text-dim leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
