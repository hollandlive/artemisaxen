import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ChapterBody from "@/components/books/ChapterBody"
import { SITE_NAME, SITE_URL } from "@/lib/metadata"
import { getChapter, getChapters, getAdjacentChapters, getSupportedLangs, BOOK_TITLE } from "@/lib/books"

type Params = { lang: string; chapter: string }

export function generateStaticParams(): Params[] {
  return getSupportedLangs().flatMap((lang) =>
    (getChapters(lang) ?? []).map((c) => ({ lang, chapter: String(c.num) })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { lang, chapter: chapterParam } = await params
  const num = Number(chapterParam)
  const chapter = getChapter(lang, num)
  if (!chapter) return {}

  const url = `${SITE_URL}/books/dont-develop/${lang}/chapter/${num}`
  return {
    title: `${chapter.title} · ${BOOK_TITLE} · ${SITE_NAME}`,
    description: `${BOOK_TITLE} — ${chapter.title}. A psychological techno-thriller by Artemis Axen.`,
    alternates: { canonical: url },
  }
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { lang, chapter: chapterParam } = await params
  const num = Number(chapterParam)
  const chapter = getChapter(lang, num)
  if (!chapter) notFound()

  const { prev, next } = getAdjacentChapters(lang, num)

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4
                   focus:z-[100] focus:px-4 focus:py-2 focus:bg-surface
                   focus:text-charcoal focus:text-sm focus:rounded-md focus:outline-none
                   focus:shadow-lg"
      >
        Skip to content
      </a>

      <Navbar />

      <main
        id="main"
        className="min-h-[100dvh]"
        style={{
          backgroundColor:  "#06111e",
          backgroundImage:  "radial-gradient(ellipse at 50% 0%, #1e3a5f 0%, #0d1829 50%, #06111e 100%)",
          backgroundRepeat: "no-repeat",
          backgroundSize:   "100% 100vh",
        }}
      >
        <div className="max-w-[680px] mx-auto" style={{ padding: "120px 24px 100px" }}>
          <Link
            href="/books/dont-develop"
            className="text-[13px] uppercase tracking-[0.1em] hover:opacity-70 transition-opacity"
            style={{ color: "#8a96aa" }}
          >
            ← {BOOK_TITLE}
          </Link>

          <div className="text-center mt-12 mb-14">
            <h1 className="font-serif text-[28px] mb-2" style={{ color: "#e8e6e1" }}>
              {chapter.title}
            </h1>
            <p className="text-[13px] tabular-nums" style={{ color: "#c98a4b" }}>
              {chapter.time}
            </p>
          </div>

          <div
            className="font-serif text-[17px] leading-[1.85]"
            style={{ color: "#e8e6e1" }}
          >
            <ChapterBody body={chapter.body} />
          </div>

          <div className="flex gap-3 mt-20">
            <ChapterNavLink lang={lang} chapter={prev} label="Назад" />
            <ChapterNavLink lang={lang} chapter={next} label="Далее" align="right" />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

function ChapterNavLink({
  lang,
  chapter,
  label,
  align = "left",
}: {
  lang:    string
  chapter: { num: number; title: string } | undefined
  label:   string
  align?:  "left" | "right"
}) {
  const disabledClasses = "opacity-30 pointer-events-none"
  const className = [
    "flex-1 rounded-[10px] border px-4 py-3 transition-colors duration-300",
    align === "right" ? "text-right" : "text-left",
    !chapter && disabledClasses,
  ]
    .filter(Boolean)
    .join(" ")

  const content = (
    <>
      <span className="block text-[11px] uppercase tracking-[0.1em] mb-1" style={{ color: "#8a96aa" }}>
        {label}
      </span>
      <span className="font-serif text-[15px]" style={{ color: "#e8e6e1" }}>
        {chapter?.title ?? "—"}
      </span>
    </>
  )

  if (!chapter) {
    return <div className={className} style={{ borderColor: "#1e3050" }}>{content}</div>
  }

  return (
    <Link
      href={`/books/dont-develop/${lang}/chapter/${chapter.num}`}
      className={className}
      style={{ borderColor: "#1e3050" }}
    >
      {content}
    </Link>
  )
}
