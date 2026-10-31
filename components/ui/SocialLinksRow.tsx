'use client'

import { useState } from 'react'
import { Terminal, Briefcase, Mail, ExternalLink, Check, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { SocialLink } from '@/types/content'

/* Brand SVG icons — lucide-react doesn't ship trademarked logos. */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function XTwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  )
}

const ICONS: Record<SocialLink['icon'], React.ComponentType<{ className?: string }>> = {
  github: Terminal,
  linkedin: Briefcase,
  mail: Mail,
  discord: DiscordIcon,
  'external-link': ExternalLink,
  instagram: InstagramIcon,
  twitter: XTwitterIcon,
  globe: Globe,
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
