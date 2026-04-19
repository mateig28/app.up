import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { CursorFollower } from '@/components/CursorFollower'
import { LenisProvider } from '@/components/LenisProvider'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://app.up.ro'),
  title: 'app.up — Aplicații interne și site-uri web pentru firme românești',
  description:
    'Construim aplicații interne custom pentru producție și distribuție, și site-uri de prezentare profesionale. Preț fix, termen fix. Livrare în 3–10 săptămâni.',
  keywords: [
    'aplicații interne custom',
    'dashboard producție România',
    'site prezentare Next.js',
    'software custom firme',
    'digitalizare producție',
    'site web profesional rapid',
  ],
  openGraph: {
    title: 'app.up — Aplicații interne și site-uri web pentru firme românești',
    description:
      'Aplicații interne pentru producție și distribuție. Site-uri de prezentare profesionale. Preț fix, termen fix.',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'app.up',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'app.up — Aplicații interne și site-uri web',
    description: 'Preț fix, termen fix. Livrare în 3–10 săptămâni.',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'app.up',
  description:
    'Agenție digitală care construiește aplicații interne custom și site-uri de prezentare pentru firme românești.',
  areaServed: { '@type': 'Country', name: 'Romania' },
  serviceType: [
    'Aplicații interne custom',
    'Dashboarduri live pentru producție',
    'Sisteme de stocuri și distribuție',
    'Site-uri de prezentare Next.js',
    'Landing pages',
  ],
  url: 'https://app.up.ro',
  email: 'contact@app.up',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased" style={{ background: '#08090A', color: '#F0F6FF' }}>
        <LenisProvider>
          <CursorFollower />
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
