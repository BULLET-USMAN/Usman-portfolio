'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { siteConfig } from '@/data/site.config'
import { useActiveSection } from '@/lib/use-active-section'
import { Badge } from '@/components/ui/Badge'
import { MobileMenu } from '@/components/navigation/MobileMenu'
import { cn } from '@/lib/utils'

const SECTION_IDS = siteConfig.nav.map((item) => item.href.replace('#', ''))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <a href="#main" className="skip-link rounded-[var(--radius-sm)] bg-accent px-4 py-2 text-sm font-medium text-bg">
        Skip to content
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled ? 'py-3' : 'py-5'
        )}
      >
        <div className="shell">
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={cn(
              'flex items-center justify-between rounded-[var(--radius-md)] border px-4 py-3 backdrop-blur-md transition-colors duration-300 sm:px-5',
              scrolled
                ? 'border-border bg-surface-glass'
                : 'border-transparent bg-transparent'
            )}
          >
            <a href="#home" className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="relative flex h-7 w-7 items-center justify-center rounded-full border border-accent-line"
              >
                <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent-glow)]" />
              </span>
              <span className="font-display text-sm font-medium tracking-tight text-text-primary">
                {siteConfig.name}
              </span>
            </a>

            <div className="hidden items-center gap-1 xl:flex">
              {siteConfig.nav.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'relative rounded-[var(--radius-sm)] px-3 py-2 text-sm transition-colors duration-200',
                      isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        className="absolute inset-x-3 -bottom-px h-px bg-accent"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                )
              })}
            </div>

            <div className="hidden items-center gap-4 xl:flex">
              {siteConfig.availability.isAvailable && (
                <Badge dot>{siteConfig.availability.label}</Badge>
              )}
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex items-center justify-center rounded-[var(--radius-sm)] border border-border p-2 text-text-primary xl:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </motion.nav>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
