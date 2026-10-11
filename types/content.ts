/**
 * Central type definitions for all site content.
 *
 * Every data file in /data implements one of these shapes. Components
 * should only ever import data through these types — never hardcode
 * copy inline. This keeps the whole site editable from /data alone.
 */

/** Marks a field as placeholder copy that must be replaced before launch. */
export interface Placeholder {
  isPlaceholder?: boolean
}

export interface NavItem {
  label: string
  href: string
}

export interface SocialLink extends Placeholder {
  label: string
  href: string
  /** lucide-react icon name, resolved in the Navbar/Footer/Contact components */
  icon: 'github' | 'linkedin' | 'mail' | 'discord' | 'external-link' | 'instagram' | 'twitter'
  /** True when `href` is a plain identifier (e.g. a Discord username) rather than a navigable URL — renders as copy-to-clipboard instead of a link. */
  isHandle?: boolean
}

export interface Stat extends Placeholder {
  label: string
  value: string
  /** Optional small sub-line — context or a short breakdown. */
  description?: string
  /**
   * If set, the card counts up from 0 to this number when it scrolls
   * into view. Omit for non-numeric/qualitative values and for
   * placeholder stats — a placeholder should never animate as if it
   * were real data.
   */
  countTo?: number
}

/** One tile in the About section's "focus areas" grid. */
export interface FocusArea {
  icon:
    | 'graduation-cap'
    | 'rocket'
    | 'gamepad'
    | 'cpu'
    | 'shield'
    | 'shopping-cart'
    | 'users'
    | 'calendar'
    | 'trending-up'
  title: string
  description: string
}

export interface SiteConfig {
  name: string
  /** Full legal name, used only in the footer's copyright line. */
  legalName: string
  roles: string[]
  tagline: string
  /** Shorter tagline used in the footer, distinct from the full hero tagline. */
  footerTagline: string
  description: string
  availability: {
    isAvailable: boolean
    label: string
  }
  seo: {
    title: string
    description: string
    keywords: string[]
    url: string
  }
  nav: NavItem[]
  socials: SocialLink[]
  contactEmail: string
  heroCtas: {
    primary: { label: string; href: string }
    secondary: { label: string; href: string }
  }
  finalCta: {
    eyebrow: string
    headline: string
    description: string
    primaryCta: { label: string; href: string }
  }
  contact: {
    headline: string
    description: string
    purposes: string[]
  }
}

/** Shared shape for the three pillar domains (esports / cybersecurity / e-commerce). */
export interface Pillar {
  id: 'esports' | 'cybersecurity' | 'ecommerce'
  title: string
  subtitle: string
}

/** One tile in the Matrix Esports "what we do" grid. */
export interface MatrixPillar {
  icon: 'swords' | 'trophy' | 'users' | 'handshake' | 'calendar-days' | 'share2'
  title: string
  description: string
}

/**
 * A tournament or community event. This array should stay empty until
 * there's a real event to list — see the empty-state handling in
 * `EventsPanel.tsx`. Never populate with example/sample entries; an
 * event card reads as a factual claim, unlike a dashed placeholder stat.
 */
export interface MatrixEvent {
  name: string
  date?: string
  description?: string
  href?: string
}

/**
 * A sponsor or partner logo/name. Same rule as MatrixEvent — stays
 * empty until real, confirmed partners exist.
 */
export interface MatrixSponsor {
  name: string
  href?: string
}

/** One skill/learning-area node in the cybersecurity network diagram. */
export interface SecurityNode {
  id: string
  label: string
  description: string
  /** Distinguishes a held skill from something currently being learned — reflected visually in the diagram and grid. */
  status: 'skill' | 'learning'
  icon: 'route' | 'router' | 'waypoints' | 'binary' | 'git-fork' | 'shield-check' | 'shield-alert' | 'bug' | 'lock' | 'globe' | 'key-round'
}

/** One item in a secondary cybersecurity-adjacent category (OS, programming, tools). */
export interface SecondarySkill {
  label: string
  description: string
  icon:
    | 'app-window'
    | 'terminal'
    | 'code'
    | 'boxes'
    | 'layers'
    | 'waves'
    | 'radar'
    | 'workflow'
}

/**
 * A hands-on security project. Stays empty until there's a real one to
 * list — same honesty rule as MatrixEvent/MatrixSponsor.
 */
export interface SecurityProject {
  name: string
  description: string
  href?: string
}

/** One stage in the e-commerce research pipeline. */
export interface EcommerceStage {
  id: string
  label: string
  description: string
  icon: 'search' | 'clipboard' | 'chart' | 'crosshair' | 'hash' | 'list' | 'package-plus'
}

/** One tool in the e-commerce toolkit grid. */
export interface EcommerceTool {
  name: string
  description: string
  icon: 'spreadsheet' | 'gauge' | 'radar'
}

/**
 * A project in the showcase. Stays an empty array until there's a real
 * one to list — same honesty rule as MatrixEvent/SecurityProject. Built
 * fully (cards, filtering) so adding a real entry here is all it takes
 * to activate the whole showcase.
 */
export interface Project {
  id: string
  title: string
  category: 'matrix-esports' | 'cybersecurity' | 'web-development' | 'ai-university' | 'ecommerce'
  description: string
  role: string
  technologies: string[]
  outcome?: string
  /**
   * Optional image path — a local path under /public (e.g.
   * '/projects/foo.png'), since this renders via next/image. An
   * external URL would need `images.remotePatterns` configured in
   * next.config.ts first. Without an image, the card renders a
   * generated placeholder visual instead of stock imagery.
   */
  image?: string
  externalUrl?: string
  githubUrl?: string
}

/** One category of skill tags in the Skills section. */
export interface SkillCategory {
  id: 'technology' | 'cybersecurity' | 'esports' | 'ecommerce'
  label: string
  icon: 'code' | 'shield' | 'gamepad' | 'shopping-cart'
  skills: string[]
}

/**
 * One stage of the Journey timeline. `category` drives an honest label
 * (Education / Experience / Founder / Ongoing Learning / Looking Ahead)
 * so nothing here is ever mistaken for formal employment it isn't.
 */
export interface JourneyStage {
  id: string
  /** A calendar date range where actually provided (e.g. "2023 \u2013 2027"); otherwise a qualitative phase label, not a fabricated date. */
  period: string
  title: string
  description: string
  category: 'education' | 'personal-project' | 'venture' | 'freelance' | 'experience' | 'learning' | 'future'
  skills: string[]
  /** Optional anchor link to a related section, e.g. '#matrix'. */
  relatedHref?: string
}

/**
 * A real achievement. Stays an empty array until one is confirmed —
 * same honesty rule as MatrixEvent/SecurityProject/Project. Never
 * populate with example/sample entries.
 */
export interface Achievement {
  title: string
  category:
    | 'esports'
    | 'tournament'
    | 'matrix'
    | 'certification'
    | 'project'
    | 'partnership'
    | 'community'
    | 'award'
  description: string
  date?: string
  href?: string
}
