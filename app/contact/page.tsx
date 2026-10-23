import type { Metadata } from 'next'
import { Contact } from '@/components/sections/Contact'
import { PageNavigation } from '@/components/navigation/PageNavigation'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Usman Junaid for collaborations, opportunities, or inquiries.',
}

export default function ContactPage() {
  return (
    <div className="pt-12 sm:pt-16">
      <Contact />
      <PageNavigation
        prev={{ label: 'Skills', href: '/skills' }}
        next={{ label: 'Home', href: '/' }}
      />
    </div>
  )
}
