'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface ParallaxImageProps {
  src: string
  alt: string
  width: number
  height: number
  intensity?: number
  className?: string
}

export default function ParallaxImage({
  src,
  alt,
  width,
  height,
  intensity = 8,
  className = '',
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleScroll = () => {
      if (containerRef.current && !prefersReducedMotion) {
        const rect = containerRef.current.getBoundingClientRect()
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
        const parallaxOffset = (scrollProgress - 0.5) * intensity
        setOffset(parallaxOffset)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [intensity, prefersReducedMotion])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        transform: prefersReducedMotion ? 'none' : `translateY(${offset}px)`,
        transition: 'transform 0.1s linear',
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={95}
        priority
        className="w-full h-auto object-contain"
      />
    </div>
  )
}
