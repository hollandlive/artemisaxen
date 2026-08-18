import ruChapters from "@/data/books/dont-develop/ru/chapters.json"
import charactersData from "@/data/books/dont-develop/characters.json"
import chapter00Scenes from "@/bible/scenes/chapter-00-scenes.json"
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

/* ─── Scene plan ─────────────────────────────────────────────────────
   The single canonical visual layer of the book: one Scene = one
   atomic visual beat, generated once per chapter from the manuscript
   + Character/Truth Bible. This is the one and only scene breakdown
   per chapter — the website and the video pipeline both consume it
   (video derives multiple "beats" downstream from a Scene's asset; it
   does not get its own separate scene breakdown). Lives in
   bible/scenes/chapter-NN-scenes.json.
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

/* ─── Scene plans ────────────────────────────────────────────────────
   Chapter-keyed, same registry shape as CHAPTERS_BY_LANG above. Only
   chapter 0 has data today — adding a chapter later is one import +
   one map entry here, nothing else changes.
─────────────────────────────────────────────────────────────────── */
const SCENE_PLANS_BY_CHAPTER: Record<number, ScenePlan[]> = {
  0: chapter00Scenes as ScenePlan[],
}

export function getScenePlan(chapter: number): ScenePlan[] {
  return (SCENE_PLANS_BY_CHAPTER[chapter] ?? []).slice().sort((a, b) => a.order - b.order)
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
