import type { Metadata } from 'next'
import { Projects } from '@/components/sections/Projects'
import { PageNavigation } from '@/components/navigation/PageNavigation'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Showcase of live projects across web development, esports, and technology.',
}

export default function ProjectsPage() {
  return (
    <div className="pt-12 sm:pt-16">
      <Projects />
      <PageNavigation
        prev={{ label: 'E-Commerce', href: '/ecommerce' }}
        next={{ label: 'Skills', href: '/skills' }}
      />
    </div>
  )
}
