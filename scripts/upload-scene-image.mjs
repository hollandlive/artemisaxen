// One-off, reusable upload helper for the manual scene-generation workflow.
//
// Usage:
//   set -a; source .env.local; set +a
//   node scripts/upload-scene-image.mjs <localFilePath> <blobPath>
//
// Example:
//   node scripts/upload-scene-image.mjs \
//     ~/Desktop/ch00-scene-01.png \
//     books/dont-develop/ru/chapter-00/scene-01.png
//
// Prints the resulting public Blob URL — paste it into the matching
// scene's `image.url` field.

import { put } from "@vercel/blob"
import { readFile } from "node:fs/promises"

const [, , localPath, blobPath] = process.argv

if (!localPath || !blobPath) {
  console.error("Usage: node scripts/upload-scene-image.mjs <localFilePath> <blobPath>")
  process.exit(1)
}

const buf = await readFile(localPath)
const blob = await put(blobPath, buf, { access: "public", addRandomSuffix: false })

console.log(blob.url)
