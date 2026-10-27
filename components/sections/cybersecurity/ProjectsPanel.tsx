import { FolderGit2, ArrowUpRight } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { EmptyStatePanel } from '@/components/ui/EmptyStatePanel'
import { securityProjects } from '@/data/cybersecurity.data'

export function ProjectsPanel() {
  if (securityProjects.length === 0) {
    return (
      <EmptyStatePanel icon={<FolderGit2 className="h-4 w-4" />}>
        Hands-on security projects and labs will appear here once added to{' '}
        <code className="font-mono text-text-secondary">data/cybersecurity.data.ts</code>.
      </EmptyStatePanel>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {securityProjects.map((project) => {
        const cardContent = (
          <GlassCard key={project.name} interactive className="h-full p-6">
            <div className="flex items-start justify-between gap-3">
              <h4 className="font-display text-base font-medium text-text-primary transition-colors group-hover:text-accent">
                {project.name}
              </h4>
              {project.href && (
                <ArrowUpRight className="h-4 w-4 shrink-0 text-text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              )}
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
              {project.description}
            </p>
          </GlassCard>
        )

        return project.href ? (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full"
          >
            {cardContent}
          </a>
        ) : (
          cardContent
        )
      })}
    </div>
  )
}
