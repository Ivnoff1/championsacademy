"use client"

import { useEffect, useRef, useState } from "react"
import PhotoSwipeLightbox from "photoswipe/lightbox"
import "photoswipe/style.css"

export interface GalleryImage {
  src: string
  alt?: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
  galleryId?: string
}

export function ImageGallery({ images, galleryId = "gallery" }: ImageGalleryProps) {
  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null)
  const [dimensions, setDimensions] = useState<Record<string, { width: number; height: number }>>({})

  useEffect(() => {
    if (!lightboxRef.current) {
      lightboxRef.current = new PhotoSwipeLightbox({
        gallery: `#${galleryId}`,
        children: "a",
        pswpModule: () => import("photoswipe"),
        paddingFn: () => ({ top: 30, bottom: 30, left: 70, right: 70 }),
      })
      lightboxRef.current.init()
    }

    return () => {
      if (lightboxRef.current) {
        lightboxRef.current.destroy()
        lightboxRef.current = null
      }
    }
  }, [galleryId])

  const handleImageLoad = (src: string, event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = event.currentTarget
    if (target.naturalWidth && target.naturalHeight) {
      setDimensions((prev) => ({
        ...prev,
        [src]: { width: target.naturalWidth, height: target.naturalHeight },
      }))
    }
  }

  return (
    <div id={galleryId} className="columns-2 md:columns-3 gap-4">
      {images.map((image, index) => {
        const dim = dimensions[image.src]
        return (
          <a
            key={index}
            href={image.src}
            data-pswp-width={dim?.width}
            data-pswp-height={dim?.height}
            className="block overflow-hidden rounded-md hover:opacity-90 transition-opacity mb-4 break-inside-avoid"
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt || `Imagen de galería ${index + 1}`}
              className="w-full h-auto object-cover rounded-md"
              loading="lazy"
              onLoad={(e) => handleImageLoad(image.src, e)}
              onError={(e) => {
                // Opcional: Manejo de error, e.g., mostrar placeholder
                console.warn(`Error cargando imagen: ${image.src}`)
              }}
            />
          </a>
        )
      })}
    </div>
  )
}