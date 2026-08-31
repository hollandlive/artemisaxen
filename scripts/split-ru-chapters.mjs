// One-off migration: explode data/books/dont-develop/ru/chapters.json into
// per-chapter Markdown files at data/books/dont-develop/ru/chapters/NN.md
// so the Russian manuscript can be hand-edited file-by-file (e.g. from an
// iPhone via the GitHub app) with changes deploying on push.
//
// Body is stored as blank-line-separated paragraphs. lib/books.ts'
// getBodyParagraphs() splits on \n and drops blank lines, so the rendered
// paragraph list is byte-identical to the old single-string form.

import fs from "node:fs"
import path from "node:path"

const ROOT = path.resolve(import.meta.dirname, "..")
const SRC = path.join(ROOT, "data/books/dont-develop/ru/chapters.json")
const OUT_DIR = path.join(ROOT, "data/books/dont-develop/ru/chapters")

const paragraphs = (body) =>
  body.split("\n").map((l) => l.trim()).filter(Boolean)

const chapters = JSON.parse(fs.readFileSync(SRC, "utf8"))
fs.mkdirSync(OUT_DIR, { recursive: true })

let written = 0
for (const ch of chapters) {
  const paras = paragraphs(ch.body)

  // Guard: a bare "---" line in the body would confuse frontmatter parsing.
  if (paras.some((p) => p === "---")) {
    throw new Error(`ch${ch.num}: body contains a bare "---" line`)
  }

  const nn = String(ch.num).padStart(2, "0")
  const file = path.join(OUT_DIR, `${nn}.md`)
  const md =
    `---\n` +
    `num: ${ch.num}\n` +
    `title: ${ch.title}\n` +
    `time: "${ch.time}"\n` +
    `---\n\n` +
    paras.join("\n\n") +
    `\n`
  fs.writeFileSync(file, md)

  // Round-trip check against the same parser lib/books.ts will use.
  const parsed = parseChapterFile(fs.readFileSync(file, "utf8"))
  const same =
    parsed.num === ch.num &&
    parsed.title === ch.title &&
    parsed.time === ch.time &&
    JSON.stringify(paragraphs(parsed.body)) === JSON.stringify(paras)
  if (!same) throw new Error(`ch${ch.num}: round-trip mismatch`)

  written++
}

console.log(`OK — wrote ${written} files to ${path.relative(ROOT, OUT_DIR)}/`)

// Mirror of the parser added to lib/books.ts — keep in sync.
function parseChapterFile(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!m) throw new Error("chapter file missing frontmatter")
  const [, fm, body] = m
  const meta = {}
  for (const line of fm.split(/\r?\n/)) {
    const mm = line.match(/^([A-Za-z_]+):\s*(.*)$/)
    if (!mm) continue
    let v = mm[2].trim()
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1)
    }
    meta[mm[1]] = v
  }
  return {
    num: Number(meta.num),
    title: meta.title,
    time: meta.time,
    body: body.replace(/^\s+|\s+$/g, ""),
  }
}
