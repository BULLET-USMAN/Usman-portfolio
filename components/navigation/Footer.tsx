import { SectionMark } from '@/components/ui/SectionMark'
import { SocialLinksRow } from '@/components/ui/SocialLinksRow'
import { siteConfig } from '@/data/site.config'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="shell py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <SectionMark />
              <span className="font-display text-sm font-medium uppercase tracking-tight text-text-primary">
                {siteConfig.name}
              </span>
            </a>
            <p className="mt-3 max-w-[16rem] text-sm text-text-secondary">
              {siteConfig.footerTagline}
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              Navigate
            </p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-text-secondary transition-colors duration-200 hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              Connect
            </p>
            <div className="mt-4">
              <SocialLinksRow socials={siteConfig.socials} markPlaceholders />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
