'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface StickySectionProps {
  children: ReactNode
  className?: string
}

export default function StickySection({ children, className = '' }: StickySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !contentRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const containerHeight = containerRef.current.offsetHeight
      const viewportHeight = window.innerHeight

      // Calculate how far past the container we've scrolled
      const scrollPastContainer = Math.max(0, -containerRect.bottom)
      const fadeDistance = viewportHeight * 0.5 // Fade over 50% of viewport height

      // Calculate opacity: 1 at start, fade to 0 as we scroll past
      const calculatedOpacity = Math.max(0, 1 - scrollPastContainer / fadeDistance)
      setOpacity(calculatedOpacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div
        ref={contentRef}
        className="sticky top-0 h-screen flex items-center justify-center"
        style={{ opacity }}
      >
        {children}
      </div>
    </div>
  )
}
