'use client'

import { useState } from 'react'
import { Terminal, Briefcase, Mail, MessageCircle, ExternalLink, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { SocialLink } from '@/types/content'

// lucide-react ships no trademarked brand/logo glyphs — these generic
// icons stand in for each platform; the accessible label carries the name.
const ICONS: Record<SocialLink['icon'], React.ComponentType<{ className?: string }>> = {
  github: Terminal,
  linkedin: Briefcase,
  mail: Mail,
  discord: MessageCircle,
  'external-link': ExternalLink,
  instagram: ExternalLink,
  twitter: ExternalLink,
}

interface SocialLinksRowProps {
  socials: SocialLink[]
  size?: 'sm' | 'md' | 'lg'
  /** Dashes the border on entries flagged `isPlaceholder` instead of rendering them identically to real links. */
  markPlaceholders?: boolean
  className?: string
}

/** Row of circular icon links, resolved from a SocialLink[] — shared by Footer, Contact, and Matrix. */
export function SocialLinksRow({
  socials,
  size = 'md',
  markPlaceholders = false,
  className,
}: SocialLinksRowProps) {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null)
  const dimension = size === 'lg' ? 'h-11 w-11' : size === 'md' ? 'h-9 w-9' : 'h-8 w-8'

  async function handleCopy(social: SocialLink) {
    try {
      await navigator.clipboard.writeText(social.href)
      setCopiedLabel(social.label)
      setTimeout(() => setCopiedLabel((current) => (current === social.label ? null : current)), 1600)
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — the handle is
      // still visible via the accessible label; nothing to do here.
    }
  }

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {socials.map((social) => {
        const Icon = ICONS[social.icon]
        const isMarkedPlaceholder = markPlaceholders && social.isPlaceholder
        const justCopied = copiedLabel === social.label
        const sharedClassName = cn(
          'flex items-center justify-center rounded-full border text-text-secondary transition-colors duration-200 hover:border-accent-line hover:text-accent',
          isMarkedPlaceholder ? 'border-dashed border-border-strong' : 'border-border',
          dimension
        )

        // Discord (and anything else marked isHandle) is a plain identifier,
        // not a URL — copy-to-clipboard instead of a broken <a href>.
        if (social.isHandle) {
          return (
            <button
              key={social.label}
              type="button"
              onClick={() => handleCopy(social)}
              aria-label={`Copy ${social.label} (${social.href}) to clipboard`}
              className={sharedClassName}
            >
              {justCopied ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
            </button>
          )
        }

        return (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith('http') ? '_blank' : undefined}
            rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
            aria-label={isMarkedPlaceholder ? `${social.label} (not yet added)` : social.label}
            className={sharedClassName}
          >
            <Icon className="h-4 w-4" />
          </a>
        )
      })}
    </div>
  )
}
