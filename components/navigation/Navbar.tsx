'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { siteConfig } from '@/data/site.config'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const pillListRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Auto-scroll the mobile pill bar to keep the active item in view
  useEffect(() => {
    if (!pillListRef.current) return
    const activeEl = pillListRef.current.querySelector<HTMLElement>('[data-active="true"]')
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [pathname])

  return (
    <>
      <a href="#main" className="skip-link rounded-[var(--radius-sm)] bg-accent px-4 py-2 text-sm font-medium text-bg">
        Skip to content
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled ? 'py-2.5 sm:py-3' : 'py-3 sm:py-5'
        )}
      >
        <div className="shell">
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={cn(
              'rounded-[var(--radius-md)] border px-3.5 py-2.5 backdrop-blur-md transition-colors duration-300 sm:px-5 sm:py-3',
              scrolled
                ? 'border-border bg-surface-glass'
                : 'border-border/40 bg-surface-glass/75'
            )}
          >
            {/* Top row */}
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="relative flex h-7 w-7 items-center justify-center rounded-full border border-accent-line"
                >
                  <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent-glow)]" />
                </span>
                <span className="font-display text-sm font-medium tracking-tight text-text-primary">
                  {siteConfig.name}
                </span>
              </Link>

              {/* Desktop links */}
              <div className="hidden items-center gap-1 xl:flex">
                {siteConfig.nav.map((item) => {
                  const isActive =
                    item.href === '/'
                      ? pathname === '/'
                      : pathname === item.href || pathname.startsWith(item.href + '/')

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
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
                    </Link>
                  )
                })}
              </div>

              {/* Status badge */}
              <div className="flex items-center gap-4">
                {siteConfig.availability.isAvailable && (
                  <Badge dot>{siteConfig.availability.label}</Badge>
                )}
              </div>
            </div>

            {/* Mobile horizontal pill navigation: directly visible and swipeable on phones */}
            <div
              ref={pillListRef}
              className="mt-2.5 flex items-center gap-1.5 overflow-x-auto pb-0.5 xl:hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {siteConfig.nav.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname === item.href || pathname.startsWith(item.href + '/')

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-active={isActive ? 'true' : undefined}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-all duration-200',
                      isActive
                        ? 'border border-accent/60 bg-accent/20 text-accent shadow-[0_0_12px_var(--color-accent-dim)]'
                        : 'border border-border/70 bg-surface/60 text-text-secondary hover:border-accent-line hover:text-text-primary'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </motion.nav>
        </div>
      </header>
    </>
  )
}
