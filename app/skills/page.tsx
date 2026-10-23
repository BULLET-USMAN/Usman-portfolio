import type { Metadata } from 'next'
import { Skills } from '@/components/sections/Skills'

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Technical skills, toolkits, and capabilities across technology, esports, and commerce.',
}

export default function SkillsPage() {
  return (
    <div className="pt-12 sm:pt-16">
      <Skills />
    </div>
  )
}
