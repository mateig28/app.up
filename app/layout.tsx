import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

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
  title: 'app.up — Aplicații interne custom pentru producție și distribuție',
  description:
    'Construim dashboarduri live și sisteme interne pentru firme din producție și distribuție. Scope fix, preț fix, termen fix. Livrare în 3–10 săptămâni.',
  keywords: [
    'aplicații interne',
    'dashboard producție',
    'sistem stocuri',
    'CRM intern',
    'software custom România',
    'digitalizare producție',
  ],
  openGraph: {
    title: 'app.up — Aplicații interne custom pentru producție și distribuție',
    description:
      'Construim dashboarduri live și sisteme interne pentru firme din producție și distribuție. Scope fix, preț fix, termen fix. Livrare în 3–10 săptămâni.',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'app.up',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'app.up — Aplicații interne custom pentru producție și distribuție',
    description:
      'Construim dashboarduri live și sisteme interne pentru firme din producție și distribuție. Scope fix, preț fix, termen fix.',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'app.up',
  description:
    'Agenție de software care construiește aplicații interne custom pentru firme din producție și distribuție din România.',
  areaServed: {
    '@type': 'Country',
    name: 'Romania',
  },
  serviceType: [
    'Aplicații interne custom',
    'Dashboarduri live pentru producție',
    'Sisteme de stocuri',
    'CRM intern',
    'Raportare automată',
  ],
  url: 'https://app.up.ro',
  email: 'contact@app.up',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ro"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-zinc-950 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  )
}
