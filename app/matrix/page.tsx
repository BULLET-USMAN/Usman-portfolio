import type { Metadata } from 'next'
import { MatrixEsports } from '@/components/sections/MatrixEsports'
import { PageNavigation } from '@/components/navigation/PageNavigation'

export const metadata: Metadata = {
  title: 'Matrix Esports',
  description: 'Matrix Esports — competitive gaming organization founded by Usman Junaid.',
}

export default function MatrixPage() {
  return (
    <div className="pt-12 sm:pt-16">
      <MatrixEsports />
      <PageNavigation
        prev={{ label: 'About', href: '/about' }}
        next={{ label: 'Cybersecurity', href: '/cybersecurity' }}
      />
    </div>
  )
}
