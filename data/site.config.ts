import type { SiteConfig } from '@/types/content'

/**
 * Single source of truth for site-wide content.
 * Update this file to change copy, links, and navigation across the whole site.
 *
 * Fields marked `isPlaceholder: true` are not real yet — swap them for your
 * actual links/details before sending this site to anyone. See
 * PLACEHOLDER_CONTENT.md at the project root for the full checklist.
 */
export const siteConfig: SiteConfig = {
  name: 'Usman Junaid',
  legalName: 'Muhammad Usman Junaid',
  roles: ['Esports Entrepreneur', 'Cybersecurity Enthusiast', 'E-Commerce Professional'],
  tagline: 'Esports Entrepreneur • Cybersecurity Enthusiast • E-Commerce Professional',
  footerTagline: 'Esports • Cybersecurity • E-Commerce',
  description:
    'A Computer Science student at the University of Faisalabad, I build communities, businesses and technology-driven experiences at the intersection of esports, cybersecurity and digital commerce.',

  availability: {
    isAvailable: true,
    label: 'Available for collaborations',
  },

  seo: {
    title: 'Usman Junaid — Esports • Cybersecurity • E-Commerce',
    description:
      'Portfolio of Usman Junaid — Computer Science student at the University of Faisalabad, Founder of Matrix Esports, cybersecurity learner, and Amazon / e-commerce professional building at the intersection of technology and entrepreneurship.',
    keywords: [
      'Usman Junaid',
      'Muhammad Usman Junaid',
      'University of Faisalabad',
      'Matrix Esports',
      'Esports Organization',
      'Cybersecurity',
      'Amazon Virtual Assistant',
      'E-commerce',
      'Product Research',
    ],
    // Configurable via NEXT_PUBLIC_SITE_URL at deploy time — falls back
    // to a clearly-placeholder domain since the real one isn't known yet.
    // No code change needed at launch, just set the env var.
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://usmanjunaid.com',
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Matrix', href: '/matrix' },
    { label: 'Cybersecurity', href: '/cybersecurity' },
    { label: 'E-Commerce', href: '/ecommerce' },
    { label: 'Projects', href: '/projects' },
    { label: 'Skills', href: '/skills' },
    { label: 'Contact', href: '/contact' },
  ],

  socials: [
    { label: 'Email', href: 'mailto:usmanjunaid809@gmail.com', icon: 'mail' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/usman-junaid-400764300/',
      icon: 'linkedin',
    },
    { label: 'Discord', href: 'usman_1.34', icon: 'discord', isHandle: true },
    { label: 'Instagram', href: 'https://www.instagram.com/ttyl__usman/', icon: 'instagram' },
    { label: 'GitHub', href: 'https://github.com/', icon: 'github', isPlaceholder: true },
  ],

  contactEmail: 'usmanjunaid809@gmail.com',

  heroCtas: {
    primary: { label: 'Explore My Work', href: '/projects' },
    secondary: { label: 'Contact Me', href: '#contact' },
  },

  finalCta: {
    eyebrow: 'Let\u2019s connect',
    headline: 'Let\u2019s build something.',
    description:
      'Open to collaborations, esports partnerships, technology opportunities and projects that create real impact.',
    primaryCta: { label: 'Start a Conversation', href: '#contact' },
    // The second CTA ("Explore Matrix Esports") reuses matrixCta from
    // matrix.data.ts directly in the component, rather than duplicating
    // that link here — one source of truth for where it points.
  },

  contact: {
    headline: 'Get in touch',
    description:
      'Whether it\u2019s a collaboration, sponsorship, project, opportunity or simply an idea worth discussing — let\u2019s connect.',
    purposes: [
      'Sponsorship',
      'Esports Collaboration',
      'Business Inquiry',
      'Technology / Cybersecurity',
      'Freelance / Project',
      'General Inquiry',
    ],
  },
}
