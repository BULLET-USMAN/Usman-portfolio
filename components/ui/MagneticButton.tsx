'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

const MAGNET_STRENGTH = 0.25
const MAGNET_RADIUS = 60

/**
 * Anchor-based button that drifts gently toward the cursor within a small
 * radius, then springs back. Disabled automatically for reduced-motion —
 * the motion values simply never move, the button behaves like a normal link.
 */
export function MagneticButton({ href, children, variant = 'primary', className }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 })

  function handleMouseMove(event: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = el.getBoundingClientRect()
    const relX = event.clientX - (rect.left + rect.width / 2)
    const relY = event.clientY - (rect.top + rect.height / 2)
    x.set(Math.max(Math.min(relX * MAGNET_STRENGTH, MAGNET_RADIUS), -MAGNET_RADIUS))
    y.set(Math.max(Math.min(relY * MAGNET_STRENGTH, MAGNET_RADIUS), -MAGNET_RADIUS))
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const isExternal = href.startsWith('http')

  return (
    <motion.a
      ref={ref}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn(
        'inline-flex items-center justify-center rounded-[var(--radius-sm)] px-6 py-3',
        'font-medium text-sm transition-colors duration-300',
        variant === 'primary'
          ? 'bg-accent text-bg hover:bg-accent/90'
          : 'border border-border-strong bg-transparent text-text-primary hover:border-accent-line hover:text-accent',
        className
      )}
    >
      {children}
    </motion.a>
  )
}
