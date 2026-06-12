const contacts = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/30XXXXXXXXXX",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 1.5C5.306 1.5 1.5 5.306 1.5 10c0 1.5.39 2.91 1.076 4.126L1.5 18.5l4.5-1.07A8.437 8.437 0 0010 18.5c4.694 0 8.5-3.806 8.5-8.5S14.694 1.5 10 1.5z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 6.5s-.5 1 0 2.5c.4 1.2 1.5 2.5 3.5 3.5 1 .5 2 .5 2 .5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "email",
    label: "Email",
    value: "hello@artemaxen.com",
    href: "mailto:hello@artemaxen.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    value: "@artemaxen",
    href: "https://instagram.com/artemaxen",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="14.5" cy="5.5" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-ink border-t border-[#2E2D2B]">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-widest text-[#6B6963] mb-2 font-medium">
            Contact
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-surface mb-4">
            Have a project in mind?
          </h2>
          <p className="text-sm text-[#9C9A95] leading-relaxed mb-12">
            I take on a limited number of projects each quarter. Reach out and
            tell me what you&apos;re building.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-3">
          {contacts.map((c) => (
            <a
              key={c.id}
              href={c.href}
              target={c.id !== "email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-[#242321] hover:bg-[#2C2B28] border border-[#2E2D2B] hover:border-[#3E3D3A] rounded-xl px-5 py-5 transition-colors"
            >
              <span className="text-[#6B6963] group-hover:text-[#9C9A95] transition-colors shrink-0">
                {c.icon}
              </span>
              <div>
                <p className="text-xs text-[#6B6963] mb-0.5">{c.label}</p>
                <p className="text-sm font-medium text-surface">{c.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
