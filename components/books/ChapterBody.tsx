import { getBodyParagraphs, getParagraphSegments } from "@/lib/books"
import type { ScenePlan } from "@/lib/books"
import SceneBreak from "@/components/books/SceneBreak"

export default function ChapterBody({
  body,
  scenes = [],
}: {
  body:    string
  scenes?: ScenePlan[]
}) {
  const paragraphs = getBodyParagraphs(body)
  const scenesByParagraph = new Map<number, ScenePlan[]>()
  for (const scene of scenes) {
    const list = scenesByParagraph.get(scene.afterParagraph) ?? []
    list.push(scene)
    scenesByParagraph.set(scene.afterParagraph, list)
  }

  // Only the first image on the page is a realistic LCP candidate —
  // giving every image `priority` would force them all to load eagerly.
  const firstReadySceneId = scenes.find((s) => s.asset.status === "ready")?.id

  return (
    <div className="space-y-6">
      {paragraphs.map((paragraph, i) => (
        <div key={i}>
          <p className="max-w-[680px] mx-auto">
            {getParagraphSegments(paragraph).map((seg, j) =>
              seg.italic ? <em key={j}>{seg.text}</em> : <span key={j}>{seg.text}</span>,
            )}
          </p>
          {(scenesByParagraph.get(i) ?? []).map((scene) => (
            <SceneBreak key={scene.id} scene={scene} priority={scene.id === firstReadySceneId} />
          ))}
        </div>
      ))}
    </div>
  )
}
