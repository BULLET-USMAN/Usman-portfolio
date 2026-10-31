import type { MatrixEvent, MatrixPillar, MatrixSponsor, SocialLink, Stat } from '@/types/content'

/**
 * Why Matrix Esports exists — used as a prominent callout in the
 * section, not just buried in the intro paragraph. Lightly tightened
 * for readability from what was provided; no claims added or changed.
 */
export const matrixMission =
  'Matrix Esports exists to fulfil the dreams of gamers and aspiring esports athletes — competing, representing themselves, and becoming part of the esports industry. It\u2019s a platform where talent can be discovered, opportunities created, and passionate gamers can turn their dreams into reality through competitive gaming, tournaments, communities, and partnerships.'

/** Titles Matrix currently competes in / hosts events for. */
export const matrixGames = ['Valorant', 'Tekken 8', 'FIFA']

/**
 * What Matrix Esports does, as six areas rather than invented metrics.
 */
export const matrixPillars: MatrixPillar[] = [
  {
    icon: 'swords',
    title: 'Competitive Gaming',
    description: 'Fielding and supporting players across titles including Valorant, Tekken 8, and FIFA.',
  },
  {
    icon: 'trophy',
    title: 'Tournament Organization',
    description: 'Planning and running the structure behind competitive events.',
  },
  {
    icon: 'users',
    title: 'Community Building',
    description: 'Growing a community through Discord and social media around shared competitive goals.',
  },
  {
    icon: 'handshake',
    title: 'Sponsorship Outreach',
    description: 'Developing partnerships to support the organization.',
  },
  {
    icon: 'calendar-days',
    title: 'Events',
    description: 'Coordinating events, from scrims to larger tournaments.',
  },
  {
    icon: 'share2',
    title: 'Content & Growth',
    description: 'Building Matrix Esports\u2019 presence and content across social platforms.',
  },
]

/**
 * Stat cards for Matrix. Same rule as About: real facts or self-evident
 * counts only, everything else marked `isPlaceholder` until verified.
 */
export const matrixStats: Stat[] = [
  { label: 'Role', value: 'Founder', description: 'Matrix Esports' },
  { label: 'Focus Areas', value: '6', countTo: 6, description: 'See below' },
  { label: 'Reach', value: '100K+', countTo: 100, description: 'Across social & community' },
  { label: 'Tournaments Hosted', value: '25+' },
]

/**
 * Tournament / community events. Real tournament names Matrix has
 * hosted — no dates, results, or attendance figures were provided, so
 * none are shown. See EventsPanel.tsx for how a partial list like this
 * (plus the empty-state case) renders.
 */
export const matrixEvents: MatrixEvent[] = [
  { name: 'Gamers Clash' },
  { name: 'Goal//ZERO' },
  { name: 'Nexus Esports League' },
]

/**
 * Sponsors / partners. Stays empty until real, confirmed partners
 * exist — see SponsorsPanel.tsx for how the empty state renders.
 */
export const matrixSponsors: MatrixSponsor[] = [
  { name: 'The Marauders', href: 'https://www.instagram.com/themarauders.tmrd/' },
  { name: 'Stack360' },
]

/**
 * Matrix Esports' own social presence and web platform, separate from the personal
 * socials in site.config.ts.
 */
export const matrixSocials: SocialLink[] = [
  { label: 'Website (matrixesports.org)', href: 'https://matrixesports.org', icon: 'globe' },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/matrixesports.pk/',
    icon: 'instagram',
  },
  { label: 'Twitter / X', href: 'https://x.com/Matrixesportspk', icon: 'twitter' },
  { label: 'Discord', href: 'https://discord.gg/Swc6pEkW6q', icon: 'discord' },
]

export const matrixCta = {
  label: 'Visit matrixesports.org',
  href: 'https://matrixesports.org',
  isPlaceholder: false,
}
