import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/metadata"
import { BOOK_SLUG, getChapters, getSupportedLangs } from "@/lib/books"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const chapterEntries: MetadataRoute.Sitemap = getSupportedLangs().flatMap((lang) =>
    (getChapters(lang) ?? []).map((chapter) => ({
      url:             `${SITE_URL}/books/${BOOK_SLUG}/${lang}/chapter/${chapter.num}`,
      lastModified:    now,
      changeFrequency: "yearly" as const,
      priority:        0.6,
    })),
  )

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
    {
      url:             `${SITE_URL}/legal`,
      lastModified:    now,
      changeFrequency: "yearly",
      priority:        0.3,
    },
    {
      url:             `${SITE_URL}/privacy`,
      lastModified:    now,
      changeFrequency: "yearly",
      priority:        0.3,
    },
    {
      url:             `${SITE_URL}/terms`,
      lastModified:    now,
      changeFrequency: "yearly",
      priority:        0.3,
    },
    {
      url:             `${SITE_URL}/books/${BOOK_SLUG}/about`,
      lastModified:    now,
      changeFrequency: "yearly",
      priority:        0.5,
    },
    ...chapterEntries,
  ]
}
