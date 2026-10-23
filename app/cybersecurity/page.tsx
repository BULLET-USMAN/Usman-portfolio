import type { Metadata } from 'next'
import { Cybersecurity } from '@/components/sections/Cybersecurity'
import { PageNavigation } from '@/components/navigation/PageNavigation'

export const metadata: Metadata = {
  title: 'Cybersecurity',
  description: 'Hands-on technical exploration across networking fundamentals, Linux, and security concepts.',
}

export default function CybersecurityPage() {
  return (
    <div className="pt-12 sm:pt-16">
      <Cybersecurity />
      <PageNavigation
        prev={{ label: 'Matrix Esports', href: '/matrix' }}
        next={{ label: 'E-Commerce', href: '/ecommerce' }}
      />
    </div>
  )
}
