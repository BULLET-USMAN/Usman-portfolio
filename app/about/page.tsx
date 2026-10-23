import type { Metadata } from 'next'
import { About } from '@/components/sections/About'
import { Journey } from '@/components/sections/Journey'
import { Achievements } from '@/components/sections/Achievements'
import { PageNavigation } from '@/components/navigation/PageNavigation'

export const metadata: Metadata = {
  title: 'About',
  description: 'Background, journey, and milestones of Muhammad Usman Junaid.',
}

export default function AboutPage() {
  return (
    <div className="pt-12 sm:pt-16">
      <About />
      <Journey />
      <Achievements />
      <PageNavigation
        prev={{ label: 'Home', href: '/' }}
        next={{ label: 'Matrix Esports', href: '/matrix' }}
      />
    </div>
  )
}
