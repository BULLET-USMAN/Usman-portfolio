'use client'

import { useState } from 'react'
import { Mail, Briefcase, Terminal, MessageCircle, Swords, Check } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/data/site.config'
import { matrixCta } from '@/data/matrix.data'

const ICONS: Record<string, LucideIcon> = {
  mail: Mail,
  github: Terminal,
  linkedin: Briefcase,
  discord: MessageCircle,
}

interface ContactMethod {
  label: string
  href: string
  icon: LucideIcon
  isPlaceholder?: boolean
  isHandle?: boolean
}

/**
 * Direct contact methods, combining site.config's personal socials with
 * the Matrix Esports link from matrix.data — one source of truth per
 * link, nothing hardcoded here.
 */
export function DirectContactPanel() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null)

  const methods: ContactMethod[] = [
    ...siteConfig.socials.map((social) => ({
      label: social.label,
      href: social.href,
      icon: ICONS[social.icon] ?? Mail,
      isPlaceholder: social.isPlaceholder,
      isHandle: social.isHandle,
    })),
    {
      label: 'Matrix Esports',
      href: matrixCta.href,
      icon: Swords,
      isPlaceholder: matrixCta.isPlaceholder,
    },
  ]

  async function handleCopy(method: ContactMethod) {
    try {
      await navigator.clipboard.writeText(method.href)
      setCopiedLabel(method.label)
      setTimeout(() => setCopiedLabel((current) => (current === method.label ? null : current)), 1600)
    } catch {
      // Clipboard API unavailable — the handle is still shown as text below.
    }
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {methods.map((method) => {
        const displayValue = method.isPlaceholder
          ? 'Not yet added'
          : method.isHandle
            ? method.href
            : method.href.replace(/^mailto:/, '').replace(/^https?:\/\//, '')

        const content = (
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-line">
              {method.isHandle && copiedLabel === method.label ? (
                <Check className="h-4 w-4 text-accent" aria-hidden="true" />
              ) : (
                <method.icon className="h-4 w-4 text-accent" aria-hidden="true" />
              )}
            </span>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.15em] text-text-muted">
                {method.label}
              </p>
              <p
                className={cn(
                  'truncate font-display text-sm',
                  method.isPlaceholder ? 'text-text-muted' : 'text-text-primary'
                )}
              >
                {method.isHandle && copiedLabel === method.label ? 'Copied!' : displayValue}
              </p>
            </div>
          </div>
        )

        return (
          <GlassCard
            key={method.label}
            interactive
            className={cn('p-5', method.isPlaceholder && 'border-dashed')}
          >
            {method.isHandle ? (
              <button
                type="button"
                onClick={() => handleCopy(method)}
                aria-label={`Copy ${method.label} (${method.href}) to clipboard`}
                className="w-full text-left"
              >
                {content}
              </button>
            ) : (
              <a
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {content}
              </a>
            )}
          </GlassCard>
        )
      })}
    </div>
  )
}
