import Image from "next/image"
import type { Scene } from "@/lib/books"

export default function SceneGallery({ scene }: { scene: Scene }) {
  if (scene.images.length === 0) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-10">
      {scene.images.map((image) => (
        <figure key={image.id} className="m-0">
          <div
            className="relative w-full overflow-hidden rounded-md"
            style={{ aspectRatio: `${image.width} / ${image.height}` }}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          {image.caption && (
            <figcaption
              className="mt-2 text-[13px]"
              style={{ color: "#8a96aa" }}
            >
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}
