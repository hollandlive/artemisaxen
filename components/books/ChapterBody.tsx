import { getBodyParagraphs, getParagraphSegments } from "@/lib/books"

export default function ChapterBody({ body }: { body: string }) {
  return (
    <div className="space-y-6">
      {getBodyParagraphs(body).map((paragraph, i) => (
        <p key={i}>
          {getParagraphSegments(paragraph).map((seg, j) =>
            seg.italic ? <em key={j}>{seg.text}</em> : <span key={j}>{seg.text}</span>,
          )}
        </p>
      ))}
    </div>
  )
}
