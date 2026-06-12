const projects = [
  {
    id: "sokole",
    name: "Sokole",
    category: "Shopify · E-commerce",
    description:
      "Luxury fragrance brand store — custom theme, bilingual Greek/English, dual-market setup.",
    url: "https://sokole.com",
    bg: "#2A1209",
    preview: (
      /* Sokole brand preview */
      <div className="w-full h-full bg-[#2A1209] flex flex-col">
        <div className="h-7 bg-[#F5EFE6]/5 border-b border-[#C9A84C]/20 flex items-center px-5 gap-4">
          <div className="w-12 h-1.5 bg-[#F5EFE6]/70 rounded-sm" />
          <div className="flex-1" />
          <div className="w-5 h-1 bg-[#C9A84C]/40 rounded-sm" />
          <div className="w-5 h-1 bg-[#C9A84C]/40 rounded-sm" />
          <div className="w-12 h-4 border border-[#C9A84C]/60 rounded-sm" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-3 px-8">
          <div className="w-1 h-6 bg-[#C9A84C]/40" />
          <div className="w-28 h-3 bg-[#F5EFE6]/80 rounded" />
          <div className="w-20 h-1.5 bg-[#F5EFE6]/30 rounded" />
          <div className="mt-3 w-16 h-5 bg-[#C9A84C] rounded-sm" />
        </div>
        <div className="h-16 flex gap-2 px-5 pb-4">
          <div className="flex-1 bg-[#EDD5CA]/20 rounded" />
          <div className="flex-1 bg-[#D4B896]/20 rounded" />
          <div className="flex-1 bg-[#C4837A]/20 rounded" />
        </div>
      </div>
    ),
    textColor: "#F5EFE6",
    accentColor: "#C9A84C",
    large: true,
  },
  {
    id: "livecity",
    name: "LiveCity.cam",
    category: "Next.js · Platform",
    description:
      "Live webcam discovery platform — 12 languages, hundreds of cities, real-time streams.",
    url: "https://livecity.cam",
    bg: "#0C1117",
    preview: (
      /* LiveCity brand preview */
      <div className="w-full h-full bg-[#0C1117] flex flex-col">
        <div className="h-7 bg-white/5 border-b border-white/10 flex items-center px-4 gap-3">
          <div className="w-10 h-1.5 bg-[#00d4ff]/70 rounded-sm" />
          <div className="flex-1" />
          <div className="w-4 h-1 bg-white/20 rounded-sm" />
          <div className="w-4 h-1 bg-white/20 rounded-sm" />
        </div>
        <div className="flex-1 px-4 py-3 grid grid-cols-3 gap-1.5">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white/10 rounded flex items-end p-1.5">
              <div className="w-full">
                <div className="w-4/5 h-1 bg-[#00d4ff]/50 rounded mb-1" />
                <div className="w-1/2 h-0.5 bg-white/20 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    textColor: "#FFFFFF",
    accentColor: "#00d4ff",
    large: false,
  },
  {
    id: "travelhub",
    name: "TravelHub.cam",
    category: "Next.js · Travel",
    description:
      "Travel video discovery platform with immersive destination content.",
    url: "https://travelhub.cam",
    bg: "#1e3a5f",
    preview: (
      /* TravelHub brand preview */
      <div className="w-full h-full flex flex-col" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #0f1923 100%)" }}>
        <div className="h-7 bg-white/5 border-b border-white/10 flex items-center px-4 gap-3">
          <div className="w-12 h-1.5 bg-white/60 rounded-sm" />
          <div className="flex-1" />
          <div className="w-4 h-1 bg-white/20 rounded-sm" />
          <div className="w-4 h-1 bg-white/20 rounded-sm" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-2 px-6">
          <div className="w-24 h-2 bg-white/70 rounded" />
          <div className="w-16 h-1 bg-white/30 rounded" />
          <div className="mt-3 grid grid-cols-3 gap-1.5 w-full">
            <div className="aspect-video bg-white/10 rounded" />
            <div className="aspect-video bg-white/10 rounded" />
            <div className="aspect-video bg-white/10 rounded" />
          </div>
        </div>
      </div>
    ),
    textColor: "#FFFFFF",
    accentColor: "#93c5fd",
    large: false,
  },
];

function ProjectCard({ project, className = "" }: { project: typeof projects[0]; className?: string }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-xl overflow-hidden border border-border hover:border-[#C5C3BE] transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] ${className}`}
    >
      {/* Visual area */}
      <div className="relative overflow-hidden" style={{ aspectRatio: project.large ? "4/3" : "16/9" }}>
        {project.preview}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs"
            style={{ backgroundColor: project.accentColor, color: project.bg }}
          >
            ↗
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="bg-surface px-5 py-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-ink mb-0.5">{project.name}</p>
          <p className="text-xs text-muted">{project.category}</p>
        </div>
        <span className="text-xs text-muted mt-0.5 shrink-0 group-hover:text-ink transition-colors">
          ↗
        </span>
      </div>
    </a>
  );
}

export default function ProjectsSection() {
  const [sokole, ...rest] = projects;

  return (
    <section id="work" className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
        <p className="text-xs uppercase tracking-widest text-muted mb-2 font-medium">
          Projects
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-12">
          Selected work
        </h2>

        <div className="grid md:grid-cols-12 gap-5">
          {/* Large card */}
          <div className="md:col-span-7">
            <ProjectCard project={sokole} className="h-full" />
          </div>

          {/* Two stacked small cards */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {rest.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
