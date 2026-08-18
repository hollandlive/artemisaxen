import ruChapters from "@/data/books/dont-develop/ru/chapters.json"

export type Chapter = {
  num:   number
  title: string
  time:  string
  body:  string
}

export const BOOK_SLUG  = "dont-develop"
export const BOOK_TITLE = "Don't Develop"

/* ─── Language registry ───────────────────────────────────────────
   Adding a language later is one import + one line here — no route
   or page changes required.
─────────────────────────────────────────────────────────────────── */
const CHAPTERS_BY_LANG: Record<string, Chapter[]> = {
  ru: ruChapters as Chapter[],
}

export function getSupportedLangs(): string[] {
  return Object.keys(CHAPTERS_BY_LANG)
}

export function getChapters(lang: string): Chapter[] | undefined {
  return CHAPTERS_BY_LANG[lang]
}

export function getChapter(lang: string, num: number): Chapter | undefined {
  return getChapters(lang)?.find((c) => c.num === num)
}

export function getAdjacentChapters(
  lang: string,
  num: number,
): { prev?: Chapter; next?: Chapter } {
  const chapters = getChapters(lang)
  if (!chapters) return {}
  const idx = chapters.findIndex((c) => c.num === num)
  if (idx === -1) return {}
  return { prev: chapters[idx - 1], next: chapters[idx + 1] }
}

/* ─── Body text rendering ─────────────────────────────────────────
   Reproduces the original reader's formatBody(): split on newlines,
   drop blank lines, treat *word* as italics. Returns plain data
   (paragraph/segment strings) — the JSX lives in ChapterBody.tsx.
─────────────────────────────────────────────────────────────────── */
export function getBodyParagraphs(body: string): string[] {
  return body
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
}

export type BodySegment = { text: string; italic: boolean }

export function getParagraphSegments(paragraph: string): BodySegment[] {
  return paragraph
    .split(/(\*[^*]+\*)/g)
    .filter(Boolean)
    .map((seg) =>
      seg.startsWith("*") && seg.endsWith("*") && seg.length > 1
        ? { text: seg.slice(1, -1), italic: true }
        : { text: seg, italic: false },
    )
}
