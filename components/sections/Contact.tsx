import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { DirectContactPanel } from '@/components/sections/contact/DirectContactPanel'
import { ContactForm } from '@/components/sections/contact/ContactForm'
import { siteConfig } from '@/data/site.config'

export function Contact() {
  return (
    <SectionShell id="contact" elevated>
      <SectionHeading
        mark
        eyebrow="Contact"
        title={siteConfig.contact.headline}
        description={siteConfig.contact.description}
      />

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
            Direct contact
          </h3>
          <div className="mt-5">
            <DirectContactPanel />
          </div>
        </div>

        <GlassCard className="p-6 sm:p-8">
          <ContactForm />
        </GlassCard>
      </div>
    </SectionShell>
  )
}
