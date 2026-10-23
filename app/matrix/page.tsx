import type { Metadata } from 'next'
import { MatrixEsports } from '@/components/sections/MatrixEsports'

export const metadata: Metadata = {
  title: 'Matrix Esports',
  description: 'Matrix Esports — competitive gaming organization founded by Usman Junaid.',
}

export default function MatrixPage() {
  return (
    <div className="pt-12 sm:pt-16">
      <MatrixEsports />
    </div>
  )
}
