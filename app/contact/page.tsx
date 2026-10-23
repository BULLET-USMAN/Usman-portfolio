import type { Metadata } from 'next'
import { Contact } from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Usman Junaid for collaborations, opportunities, or inquiries.',
}

export default function ContactPage() {
  return (
    <div className="pt-12 sm:pt-16">
      <Contact />
    </div>
  )
}
