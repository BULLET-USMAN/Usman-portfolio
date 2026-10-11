'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin accent line at the very top of the viewport tracking scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-accent"
      aria-hidden="true"
    />
  )
}
