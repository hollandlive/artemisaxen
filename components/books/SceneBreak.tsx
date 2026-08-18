import Image from "next/image"
import type { ScenePlan } from "@/lib/books"

const WIDE_TYPES = new Set(["establishing", "atmospheric"])

export default function SceneBreak({
  scene,
  priority = false,
}: {
  scene:     ScenePlan
  priority?: boolean
}) {
  const { asset } = scene
  if (asset.status !== "ready" || !asset.url || !asset.width || !asset.height) return null

  const wide = WIDE_TYPES.has(scene.type)

  return (
    <div className={wide ? "max-w-[880px] mx-auto" : "max-w-[680px] mx-auto"}>
      <div
        style={{ width: 32, height: 1, background: "#8a96aa", opacity: 0.35, margin: "56px auto" }}
        aria-hidden="true"
      />
      <div
        className="relative w-full overflow-hidden rounded-md"
        style={{ aspectRatio: `${asset.width} / ${asset.height}` }}
      >
        <Image
          src={asset.url}
          alt={asset.alt ?? ""}
          fill
          sizes={wide ? "(min-width: 900px) 880px, 100vw" : "(min-width: 700px) 680px, 100vw"}
          className="object-cover"
          priority={priority}
        />
      </div>
    </div>
  )
}
