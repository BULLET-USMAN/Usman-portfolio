import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
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

      <div className="mx-auto mt-12 max-w-2xl">
        <GlassCard className="p-6 sm:p-8">
          <ContactForm />
        </GlassCard>
      </div>
    </SectionShell>
  )
}
