"use client"

import * as React from "react"
import Image from "next/image"

type Props = {
  src: string
  alt: string
  sizes?: string
}

export function ProjectImage({ src, alt, sizes }: Props) {
  const [resolvedSrc, setResolvedSrc] = React.useState(src || "/placeholder.svg")

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      fill
      sizes={sizes}
      className="object-cover"
      onError={() => setResolvedSrc("/placeholder.svg")}
    />
  )
}
