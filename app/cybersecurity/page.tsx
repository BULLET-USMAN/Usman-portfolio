import type { Metadata } from 'next'
import { Cybersecurity } from '@/components/sections/Cybersecurity'

export const metadata: Metadata = {
  title: 'Cybersecurity',
  description: 'Hands-on technical exploration across networking fundamentals, Linux, and security concepts.',
}

export default function CybersecurityPage() {
  return (
    <div className="pt-12 sm:pt-16">
      <Cybersecurity />
    </div>
  )
}
