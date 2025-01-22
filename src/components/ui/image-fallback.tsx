import Image from "next/image"
import { useState } from "react"

interface ImageFallbackProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fallbackClassName?: string
}

export function ImageFallback({
  src,
  alt,
  width = 48,
  height = 48,
  className = "",
  fallbackClassName = "",
}: ImageFallbackProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div 
        className={`bg-muted flex items-center justify-center ${fallbackClassName}`}
        style={{ width, height }}
      >
        <span className="text-muted-foreground text-sm">暂无图片</span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setError(true)}
    />
  )
} 