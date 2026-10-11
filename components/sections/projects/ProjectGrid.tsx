'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FolderKanban } from 'lucide-react'
import { EmptyStatePanel } from '@/components/ui/EmptyStatePanel'
import { ProjectCard } from '@/components/sections/projects/ProjectCard'
import { ProjectFilters } from '@/components/sections/projects/ProjectFilters'
import { projects } from '@/data/projects.data'
import type { Project } from '@/types/content'

export function ProjectGrid() {
  const [active, setActive] = useState<Project['category'] | 'all'>('all')

  const categories = useMemo(() => Array.from(new Set(projects.map((p) => p.category))), [])
  const visible = active === 'all' ? projects : projects.filter((p) => p.category === active)

  if (projects.length === 0) {
    return (
      <EmptyStatePanel icon={<FolderKanban className="h-4 w-4" />}>
        Projects will appear here once added to{' '}
        <code className="font-mono text-text-secondary">data/projects.data.ts</code>.
      </EmptyStatePanel>
    )
  }

  return (
    <div>
      {categories.length > 1 && (
        <div className="mb-8">
          <ProjectFilters categories={categories} active={active} onChange={setActive} />
        </div>
      )}

      <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
