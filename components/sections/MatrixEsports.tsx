import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SubsectionLabel } from '@/components/ui/SubsectionLabel'
import { StatsGrid } from '@/components/ui/StatsGrid'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { SocialLinksRow } from '@/components/ui/SocialLinksRow'
import { MatrixPillarGrid } from '@/components/sections/matrix/MatrixPillarGrid'
import { TournamentBracket } from '@/components/sections/matrix/TournamentBracket'
import { EventsPanel } from '@/components/sections/matrix/EventsPanel'
import { SponsorsPanel } from '@/components/sections/matrix/SponsorsPanel'
import { matrixStats, matrixSocials, matrixCta, matrixMission, matrixGames } from '@/data/matrix.data'

export function MatrixEsports() {
  return (
    <SectionShell id="matrix" elevated>
      <SectionHeading
        mark
        eyebrow="Matrix Esports"
        title="Building the next generation of competitive gaming"
        description="An esports organization built around competitive gaming, tournaments, community, and partnerships — spanning titles like Valorant, Tekken 8, and FIFA. The primary case study behind this portfolio."
      />

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div>
          <Badge className="mb-5">Founder</Badge>
          <p className="max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Matrix Esports is where entrepreneurship meets competitive gaming — an organization
            built around tournaments, community, content, and partnerships. Matrix hosts and
            organizes events across titles including Valorant, Tekken 8, and FIFA, and runs its
            community through Discord, social media, and its official platform at{' '}
            <a
              href="https://matrixesports.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 transition-colors hover:text-accent-hover"
            >
              matrixesports.org
            </a>
            .
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {matrixGames.map((game) => (
              <span
                key={game}
                className="rounded-full border border-border px-3 py-1 font-mono text-xs text-text-secondary"
              >
                {game}
              </span>
            ))}
            <span className="rounded-full border border-dashed border-border-strong px-3 py-1 font-mono text-xs text-text-muted">
              + more titles
            </span>
          </div>

          <div className="mt-7">
            <MagneticButton href={matrixCta.href} variant="primary">
              {matrixCta.label}
            </MagneticButton>
          </div>
        </div>

        <GlassCard className="aspect-[4/3] w-full p-4 sm:p-6">
          <TournamentBracket />
        </GlassCard>
      </div>

      <div className="mt-14 border-l-2 border-accent-line pl-6">
        <p className="max-w-2xl font-display text-lg leading-relaxed text-text-primary sm:text-xl">
          {matrixMission}
        </p>
      </div>

      <div className="mt-14">
        <StatsGrid stats={matrixStats} columns={2} />
      </div>

      <div className="mt-16">
        <SubsectionLabel>What Matrix Esports does</SubsectionLabel>
        <div className="mt-6">
          <MatrixPillarGrid />
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <SubsectionLabel>Events &amp; tournaments</SubsectionLabel>
          <div className="mt-6">
            <EventsPanel />
          </div>
        </div>

        <div>
          <SubsectionLabel>Sponsors &amp; partners</SubsectionLabel>
          <div className="mt-6">
            <SponsorsPanel />
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-start gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-text-muted">Follow Matrix Esports</p>
        <SocialLinksRow socials={matrixSocials} markPlaceholders />
      </div>
    </SectionShell>
  )
}
