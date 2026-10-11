import Image from 'next/image'
import { Swords, Shield, Code2, Brain, ShoppingCart, ArrowUpRight, Terminal } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { PROJECT_CATEGORIES } from '@/data/projects.data'
import type { Project } from '@/types/content'

const CATEGORY_ICONS: Record<Project['category'], LucideIcon> = {
  'matrix-esports': Swords,
  cybersecurity: Shield,
  'web-development': Code2,
  'ai-university': Brain,
  ecommerce: ShoppingCart,
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const CategoryIcon = CATEGORY_ICONS[project.category]

  return (
    <GlassCard interactive className="flex h-full flex-col overflow-hidden">
      <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-border bg-surface">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 30% 30%, var(--color-accent-dim) 0%, transparent 60%)',
              }}
              aria-hidden="true"
            />
            <CategoryIcon
              className="h-12 w-12 text-border-strong"
              strokeWidth={1}
              aria-hidden="true"
            />
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <Badge className="self-start">{PROJECT_CATEGORIES[project.category]}</Badge>

        <h3 className="mt-4 font-display text-lg font-medium text-text-primary">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <p className="mt-3 font-mono text-[11px] uppercase tracking-wide text-text-muted">
          Role — {project.role}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-2.5 py-1 text-[11px] text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.outcome && (
          <p className="mt-4 text-sm text-text-secondary">
            <span className="text-accent">Outcome — </span>
            {project.outcome}
          </p>
        )}

        {(project.externalUrl || project.githubUrl) && (
          <div className="mt-auto flex items-center gap-3 pt-5">
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-text-secondary transition-colors duration-200 hover:text-accent"
              >
                Visit <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-text-secondary transition-colors duration-200 hover:text-accent"
              >
                <Terminal className="h-3.5 w-3.5" /> Code
              </a>
            )}
          </div>
        )}
      </div>
    </GlassCard>
  )
}
