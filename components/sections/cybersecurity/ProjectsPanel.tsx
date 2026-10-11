import { FolderGit2 } from 'lucide-react'
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
      {securityProjects.map((project) => (
        <GlassCard key={project.name} interactive className="p-6">
          <h4 className="font-display text-base font-medium text-text-primary">
            {project.name}
          </h4>
          <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
            {project.description}
          </p>
        </GlassCard>
      ))}
    </div>
  )
}
