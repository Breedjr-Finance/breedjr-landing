'use client'

import Image, { ImageProps } from 'next/image'
import { useState, useEffect, useRef } from 'react'
// import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

interface Props extends Omit<ImageProps, 'src'> {
  src: string
  fallbackSrc?: string
  className?: string
  classNameImage?: string
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  useBlur?: boolean
  customPlaceholder?: React.ReactNode
  priority?: boolean
}

const ImageWithFallback = ({
  src,
  fallbackSrc = '/images/xante-fallback.png',
  alt,
  width,
  height,
  className = '',
  classNameImage = "",
  objectFit = 'cover',
  useBlur = false,
  // customPlaceholder,
  priority = false,
  ...rest
}: Props) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true)
      },
      { rootMargin: '200px' }
    )
    const newRef = ref.current
    if (newRef) observer.observe(newRef)
    return () => {
      if (newRef) {
        observer.disconnect()
      }
    }
  }, [])

  const blurProps = useBlur
    ? {
      placeholder: 'blur' as const,
      blurDataURL: '/images/xante-blur.png',
    }
    : {}

  const isFixedSize = width && height
  // const placeholder = customPlaceholder ?? (
  //   <Skeleton className="absolute inset-0 w-full h-full rounded-md" />
  // )
  const imageClass = `rounded-[2px] transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* {isLoading && placeholder} */}
      {isInView && (
        <Image
          {...rest}
          src={imgSrc}
          onError={() => setImgSrc(fallbackSrc)}
          onLoad={() => setIsLoading(false)}
          alt={alt}
          {...(isFixedSize
            ? { width, height }
            : {
              fill: true,
              // sizes: '(max-width: 768px) 100vw, 50vw',
              sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw',
            })}
          style={{ objectFit }}
          className={cn(imageClass, classNameImage)}
          {...blurProps}
          // placeholder='blur'

          priority={priority}
        />
      )}
    </div>
  )
}

export default ImageWithFallback
