'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { siteConfig } from '@/data/site.config'
import { Badge } from '@/components/ui/Badge'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-0 z-[60] flex flex-col bg-bg/98 backdrop-blur-lg xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="shell flex items-center justify-between py-5">
            <Link
              href="/"
              onClick={onClose}
              className="font-display text-sm font-medium text-text-primary"
            >
              {siteConfig.name}
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="flex items-center justify-center rounded-[var(--radius-sm)] border border-border p-2 text-text-primary"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="shell flex flex-1 flex-col justify-center gap-2">
            {siteConfig.nav.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.05 * index, ease: 'easeOut' }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block border-b border-border py-4 font-display text-3xl font-medium text-text-primary transition-colors duration-200 hover:text-accent"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="shell flex flex-col items-start gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
            {siteConfig.availability.isAvailable && (
              <Badge dot>{siteConfig.availability.label}</Badge>
            )}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-sm text-text-secondary">
              {siteConfig.contactEmail}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
