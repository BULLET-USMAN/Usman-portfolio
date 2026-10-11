import type { FocusArea, Stat } from '@/types/content'

/**
 * The nine areas the About section introduces. Descriptions stay general
 * and factual to what's already established about each domain — no
 * invented specifics (dates, tournament names, client names, etc.).
 */
export const focusAreas: FocusArea[] = [
  {
    icon: 'graduation-cap',
    title: 'Computer Science',
    description: 'Pursuing a BSCS at the University of Faisalabad.',
  },
  {
    icon: 'rocket',
    title: 'Entrepreneurship',
    description: 'Building and running Matrix Esports from the ground up.',
  },
  {
    icon: 'gamepad',
    title: 'Esports',
    description: 'Competitive gaming, tournaments, and community at scale.',
  },
  {
    icon: 'cpu',
    title: 'Technology',
    description: 'Broad technical curiosity — from web development to systems.',
  },
  {
    icon: 'shield',
    title: 'Cybersecurity',
    description: 'Hands-on learning across networking, Linux, and security fundamentals.',
  },
  {
    icon: 'shopping-cart',
    title: 'E-Commerce',
    description: 'Amazon virtual assistance, product research, and market analysis.',
  },
  {
    icon: 'users',
    title: 'Community Building',
    description: 'Growing and organizing communities around shared competitive goals.',
  },
  {
    icon: 'calendar',
    title: 'Event Organization',
    description: 'Planning and running esports tournaments and events.',
  },
  {
    icon: 'trending-up',
    title: 'Continuous Learning',
    description: 'Treating every domain as a work in progress, always improving.',
  },
]

/**
 * Stat cards. Every value here is one of:
 *
 *  1. A real, non-numeric fact ("Founder", "Computer Science") — static
 *     reveal, no count animation (there's nothing to count up to).
 *  2. A number that's true by construction, verifiable directly from
 *     this site's own content (e.g. "3" domains named above) — safe to
 *     animate, since it isn't a claim being made about the outside
 *     world.
 *  3. `isPlaceholder: true` — a metric that's real but not yet
 *     supplied (event count, social reach). These render with a
 *     visibly different "add your number" treatment and never
 *     count-animate, so nothing fabricated is ever shown as fact.
 *
 * Replace the placeholder entries with verified numbers (and flip
 * `isPlaceholder` to `false`) whenever you have them — nothing else
 * needs to change.
 */
export const stats: Stat[] = [
  {
    label: 'Role',
    value: 'Founder',
    description: 'Matrix Esports',
  },
  {
    label: 'Background',
    value: 'BSCS',
    description: 'University of Faisalabad',
  },
  {
    label: 'Active Domains',
    value: '3',
    countTo: 3,
    description: 'Esports · Cybersecurity · E-Commerce',
  },
  {
    label: 'Learning',
    value: 'Ongoing',
    description: 'Continuous, hands-on',
  },
  {
    label: 'Esports Events Organized',
    value: '—',
    isPlaceholder: true,
  },
  {
    label: 'Social Reach',
    value: '—',
    isPlaceholder: true,
  },
]
