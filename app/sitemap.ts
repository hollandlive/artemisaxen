import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/metadata"
import { BOOK_SLUG, getChapters } from "@/lib/books"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const chapterEntries: MetadataRoute.Sitemap = (getChapters("ru") ?? []).map((chapter) => ({
    url:             `${SITE_URL}/books/${BOOK_SLUG}/ru/chapter/${chapter.num}`,
    lastModified:    now,
    changeFrequency: "yearly",
    priority:        0.6,
  }))

  return [
    {
      url:             SITE_URL,
      lastModified:    now,
      changeFrequency: "monthly",
      priority:        1,
    },
    {
      url:             `${SITE_URL}/books`,
      lastModified:    now,
      changeFrequency: "monthly",
      priority:        0.8,
    },
    {
      url:             `${SITE_URL}/books/${BOOK_SLUG}`,
      lastModified:    now,
      changeFrequency: "monthly",
      priority:        0.9,
    },
    ...chapterEntries,
  ]
}
