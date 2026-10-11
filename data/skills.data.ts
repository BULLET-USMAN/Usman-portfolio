import type { SkillCategory } from '@/types/content'

/**
 * Skills grouped by domain. Shown as tags, not percentage bars — there's
 * no real proficiency data to back specific numbers, and a fake "95%"
 * would be exactly the kind of invented statistic this site avoids
 * everywhere else.
 *
 * The cybersecurity and e-commerce lists are kept in sync with the
 * fuller, more specific breakdowns in cybersecurity.data.ts and
 * ecommerce.data.ts (Phases 10C/10D) — this is a condensed summary of
 * the same real information, not a separate claim.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'technology',
    label: 'Technology',
    icon: 'code',
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'SQL', 'Git'],
  },
  {
    id: 'cybersecurity',
    label: 'Cybersecurity',
    icon: 'shield',
    skills: [
      'TCP/IP',
      'Cisco Networking',
      'Routing & Switching',
      'Network Security',
      'Vulnerability Assessment',
      'Linux',
      'Nmap',
      'Wireshark',
    ],
  },
  {
    id: 'esports',
    label: 'Esports',
    icon: 'gamepad',
    skills: [
      'Tournament Management',
      'Community Management',
      'Sponsorship Outreach',
      'Event Organization',
      'Discord Management',
    ],
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    icon: 'shopping-cart',
    skills: [
      'Amazon VA',
      'Product Hunting',
      'Product Research',
      'Market Research',
      'Competitor Analysis',
      'Keyword Research',
      'Listing Research',
      'Product Listing',
      'Excel',
      'Helium 10',
      'SellerSprite',
    ],
  },
]
