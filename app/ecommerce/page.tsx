import type { Metadata } from 'next'
import { Ecommerce } from '@/components/sections/Ecommerce'

export const metadata: Metadata = {
  title: 'E-Commerce',
  description: 'Amazon product research, market analysis, and digital commerce experience.',
}

export default function EcommercePage() {
  return (
    <div className="pt-12 sm:pt-16">
      <Ecommerce />
    </div>
  )
}
