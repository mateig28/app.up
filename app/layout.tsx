import type { Metadata } from 'next'
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { CursorFollower } from '@/components/CursorFollower'
import { LenisProvider } from '@/components/LenisProvider'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://croit.ro'),
  title: 'Croit — Digital pe măsura ta',
  description:
    'Croit construiește aplicații interne și site-uri de prezentare pentru firme românești. Livrăm în termen fix, la preț fix. De la Excel la vizibilitate în timp real.',
  keywords: [
    'aplicații interne custom',
    'dashboard producție România',
    'site prezentare Next.js',
    'software custom firme',
    'digitalizare producție',
    'site web profesional rapid',
    'Croit',
  ],
  openGraph: {
    title: 'Croit — Digital pe măsura ta',
    description:
      'Aplicații interne pentru producție și distribuție. Site-uri de prezentare profesionale. Preț fix, termen fix.',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'Croit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Croit — Digital pe măsura ta',
    description: 'Preț fix, termen fix. Livrare în 3–10 săptămâni.',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Croit',
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
  url: 'https://croit.ro',
  email: 'contact@croit.ro',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased" style={{ background: '#191916', color: '#F2EDE4' }}>
        <LenisProvider>
          <CursorFollower />
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
