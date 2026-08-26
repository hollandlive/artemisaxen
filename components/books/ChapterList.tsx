import Link from "next/link"
import type { Chapter } from "@/lib/books"

export default function ChapterList({
  lang,
  chapters,
  label,
}: {
  lang:     string
  chapters: Chapter[]
  label?:   string
}) {
  return (
    <section
      className="pb-32"
      style={{ padding: "0 min(10vw, 100px) 128px" }}
      aria-label="Chapters"
    >
      <div className="max-w-2xl mx-auto">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#8a96aa] mb-6">
          {label ? `${label} · ` : ""}{chapters.length} chapters
        </p>

        <ol>
          {chapters.map((chapter) => (
            <li key={chapter.num} style={{ borderColor: "#1e3050" }} className="border-b">
              <Link
                href={`/books/dont-develop/${lang}/chapter/${chapter.num}`}
                className="flex items-baseline justify-between gap-4 py-4 group"
              >
                <span
                  className="font-serif text-[17px] group-hover:opacity-70 transition-opacity"
                  style={{ color: "#e8e6e1" }}
                >
                  {chapter.title}
                </span>
                <span
                  className="text-[13px] tabular-nums shrink-0"
                  style={{ color: "#8a96aa" }}
                >
                  {chapter.time}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
