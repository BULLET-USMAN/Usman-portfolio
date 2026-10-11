'use client'

import { motion } from 'framer-motion'
import { Code2, Shield, Gamepad2, ShoppingCart } from 'lucide-react'
import { useStaggerReveal } from '@/lib/use-stagger-reveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { skillCategories } from '@/data/skills.data'
import type { SkillCategory } from '@/types/content'

const ICONS: Record<SkillCategory['icon'], React.ComponentType<{ className?: string }>> = {
  code: Code2,
  shield: Shield,
  gamepad: Gamepad2,
  'shopping-cart': ShoppingCart,
}

export function SkillClusters() {
  const containerRef = useStaggerReveal<HTMLDivElement>({ selector: '[data-reveal]', stagger: 0.1 })

  return (
    <div ref={containerRef} className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {skillCategories.map((category) => {
        const Icon = ICONS[category.icon]
        return (
          <GlassCard key={category.id} data-reveal className="p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-line">
                <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
              </span>
              <h3 className="font-display text-base font-medium text-text-primary">
                {category.label}
              </h3>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.06, y: -1 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="rounded-full border border-border bg-surface-glass px-3 py-1.5 font-mono text-xs text-text-secondary transition-colors duration-200 hover:border-accent-line hover:text-accent"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </GlassCard>
        )
      })}
    </div>
  )
}
