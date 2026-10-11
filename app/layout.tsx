import type { Metadata, Viewport } from 'next'
import { MotionConfig } from 'framer-motion'
import '@fontsource-variable/space-grotesk'
import '@fontsource-variable/inter'
import '@fontsource-variable/jetbrains-mono'
import './globals.css'
import { siteConfig } from '@/data/site.config'
import { Navbar } from '@/components/navigation/Navbar'
import { Footer } from '@/components/navigation/Footer'
import { ScrollProgress } from '@/components/navigation/ScrollProgress'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.url),
  title: {
    default: siteConfig.seo.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: siteConfig.seo.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.seo.url,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#08090b',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

// Structured data (Person) — only confirmed real information: the
// display/legal name, the real bio, and real social profile URLs.
// Placeholder links (GitHub) and non-URL entries (the Discord handle)
// are deliberately excluded, since `sameAs` should only cite genuine
// profile URLs.
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  alternateName: siteConfig.legalName,
  url: siteConfig.seo.url,
  description: siteConfig.description,
  jobTitle: 'Founder, Matrix Esports',
  sameAs: siteConfig.socials
    .filter((social) => !social.isPlaceholder && !social.isHandle && social.href.startsWith('http'))
    .map((social) => social.href),
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col overflow-x-hidden bg-bg font-body text-text-primary antialiased">
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <MotionConfig reducedMotion="user">
          <ScrollProgress />
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  )
}
