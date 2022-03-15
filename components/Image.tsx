import NextImage, { ImageProps } from "next/image"
import React from "react"

export const Image: React.FC<ImageProps> = (props) => {
  return (
    <div className="relative">
      <NextImage {...props} />
    </div>
  )
}
