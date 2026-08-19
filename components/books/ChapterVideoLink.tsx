import Image from "next/image"
import type { ChapterVideo } from "@/lib/books"

export default function ChapterVideoLink({ video }: { video: ChapterVideo }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block max-w-[680px] mx-auto mb-14 rounded-[12px] overflow-hidden border transition-colors duration-300"
      style={{ borderColor: "#1e3050" }}
    >
      <div className="relative aspect-video">
        <Image
          src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
          alt="Watch this chapter on YouTube"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/10"
          style={{ background: "rgba(6,17,30,0.25)" }}
        >
          <span
            className="flex items-center justify-center w-16 h-16 rounded-full transition-transform duration-300 group-hover:scale-110"
            style={{ background: "rgba(6,17,30,0.75)" }}
            aria-hidden="true"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#e8e6e1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      </div>
      <p
        className="text-center text-[13px] uppercase tracking-[0.1em] py-3"
        style={{ color: "#c98a4b" }}
      >
        Watch this chapter on YouTube →
      </p>
    </a>
  )
}
