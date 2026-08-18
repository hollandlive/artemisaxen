import ruChapters from "@/data/books/dont-develop/ru/chapters.json"
import ruScenes from "@/data/books/dont-develop/ru/scenes.json"
import charactersData from "@/data/books/dont-develop/characters.json"
import { SITE_URL } from "@/lib/metadata"

export type Chapter = {
  num:   number
  title: string
  time:  string
  body:  string
}

export type SceneImage = {
  id:        string
  type:      "scene" | "character" | "location"
  url:       string
  width:     number
  height:    number
  alt:       string
  caption?:  string
  video?: {
    prompt?:      string
    seed?:        string
    sourceModel?: string
  }
}

export type Character = {
  id:              string
  name:            string
  aliases:         string[]
  type:            "human" | "voice"
  referenceImages: SceneImage[]
}

export type Scene = {
  id:         string
  chapter:    number
  order:      number
  location:   string
  timeOfDay:  string
  characters: string[]
  images:     SceneImage[]
}

/* ─── Scene plan (Step 3b) ───────────────────────────────────────────
   The single canonical visual layer of the book: one Scene = one
   atomic visual beat, generated once per chapter from the manuscript
   + Character/Truth Bible. Not a container of several images like the
   Step 3a `Scene` type above.

   This is the one and only scene breakdown per chapter — the website
   and the video pipeline both consume it (video derives multiple
   "beats" downstream from a Scene's asset; it does not get its own
   separate scene breakdown). Lives in bible/scenes/chapter-NN-scenes.json.

   Not wired into any page yet — reader UI changes are a separate,
   later, separately-approved step.
─────────────────────────────────────────────────────────────────── */
export type SceneAsset = {
  status:   "needed" | "ready"
  filename: string
  url?:     string
  width?:   number
  height?:  number
  alt?:     string
  note?:    string
}

export type ScenePlan = {
  id:             string
  chapter:        number
  order:          number
  afterParagraph: number
  type:           "establishing" | "character" | "close-up" | "action" | "atmospheric"
  characters:     string[]
  location:       string
  mood:           string
  narrative:      string
  imagePrompt:    string
  videoPrompt?:   string
  asset:          SceneAsset
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

/* ─── Language alternates (hreflang plumbing) ───────────────────────
   Only returns languages that actually have this chapter — today
   that's always just { ru: ... }. Adding an `en` entry to a language
   registry above automatically makes this emit both, once a chapter
   exists in both languages. No fabricated alternates.
─────────────────────────────────────────────────────────────────── */
export function getLanguageAlternates(
  bookSlug: string,
  num: number,
): Record<string, string> {
  const alternates: Record<string, string> = {}
  for (const lang of getSupportedLangs()) {
    if (getChapter(lang, num)) {
      alternates[lang] = `${SITE_URL}/books/${bookSlug}/${lang}/chapter/${num}`
    }
  }
  return alternates
}

/* ─── Characters ─────────────────────────────────────────────────── */
const CHARACTERS: Character[] = charactersData as Character[]

export function getCharacters(): Character[] {
  return CHARACTERS
}

export function getCharacter(id: string): Character | undefined {
  return CHARACTERS.find((c) => c.id === id)
}

/* ─── Scenes ─────────────────────────────────────────────────────────
   Per-language, per-chapter. Only chapter 0 has data today — every
   other chapter's getScenes() returns [] until it's populated.
─────────────────────────────────────────────────────────────────── */
const SCENES_BY_LANG: Record<string, Scene[]> = {
  ru: ruScenes as Scene[],
}

export function getScenes(lang: string, chapterNum: number): Scene[] {
  return (SCENES_BY_LANG[lang] ?? [])
    .filter((s) => s.chapter === chapterNum)
    .sort((a, b) => a.order - b.order)
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
