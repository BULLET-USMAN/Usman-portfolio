import type { Project } from '@/types/content'

/** Display metadata for each project category — label shown in filter tabs and card badges. */
export const PROJECT_CATEGORIES: Record<Project['category'], string> = {
  'matrix-esports': 'Matrix Esports',
  cybersecurity: 'Cybersecurity',
  'web-development': 'Web Development',
  'ai-university': 'AI / University',
  ecommerce: 'Amazon / E-Commerce',
}

/**
 * The project showcase. Stays empty until there's a real project to
 * list — the grid, filtering, and cards below are fully built and will
 * activate automatically the moment an entry is added here. Never
 * populate with example/sample projects, invented outcomes, or
 * technologies not actually used.
 */
export const projects: Project[] = [
  {
    id: 'cinelist',
    title: 'CineList',
    category: 'web-development',
    description:
      'A modern cinema discovery and personal watchlist platform. Explore trending films, browse by genre, watch official trailers, and curate a personalized watchlist with secure authentication.',
    role: 'Full-Stack Developer',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'TMDB API', 'Vercel'],
    outcome: 'Live web app with real-time watchlist tracking, user authentication, and TMDB API integration.',
    externalUrl: 'https://cinelist-kappa.vercel.app/',
  },
]
