import type { Metadata } from 'next'
import { Projects } from '@/components/sections/Projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Showcase of live projects across web development, esports, and technology.',
}

export default function ProjectsPage() {
  return (
    <div className="pt-12 sm:pt-16">
      <Projects />
    </div>
  )
}
