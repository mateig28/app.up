'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Phone, Mail, Monitor, Package, Users, BarChart2 } from 'lucide-react'
import { Button } from '@/components/Button'
import { PainPoint } from '@/components/PainPoint'
import { PackageCard } from '@/components/PackageCard'
import { FAQItem } from '@/components/FAQItem'

/* ──────────────────────────────────────────────────────────
   DATA
─────────────────────────────────────────────────────────── */

const painPointsData = [
  {
    number: '01',
    title: 'Rapoartele vin luni dimineața, deciziile n-au putut aștepta',
    body: 'Directorul de producție primește situația din săptămâna trecută luni la 9. Problema era vineri la 3. Dacă ar fi știut atunci, se rezolva.',
  },
  {
    number: '02',
    title: 'Situația stocurilor — o întrebare fără răspuns în timp real',
    body: 'Managerul de logistică știe ce era în depozit ieri seara. Comenzile de azi nu sunt încă introduse. Numărul real există undeva, pe hârtie, la cineva.',
  },
  {
    number: '03',
    title: 'Date exacte, dar doar dacă le ceri tu, persoanei potrivite',
    body: 'Producția, stocurile și vânzările — fiecare în sistemul lui. Să le aduni ia 2 ore și un om dedicat care face asta în fiecare luni dimineață.',
  },
]

const packagesData = [
  {
    name: 'Small',
    duration: '3 săptămâni',
    description: 'Pentru un singur proces simplu care are nevoie de digitalizare.',
    examples: [
      'Pontaj digital per tură',
      'Formular de raport de producție',
      'Mini-dashboard cu 3–5 indicatori live',
    ],
    price: 'de la 3.000 €',
    steps: [
      { phase: 'Discovery', duration: '3 zile' },
      { phase: 'Build', duration: '2 săpt.' },
      { phase: 'Handover', duration: '2 zile' },
    ],
    featured: false,
    ctaHref: '#contact',
  },
  {
    name: 'Medium',
    duration: '6 săptămâni',
    description: 'Pentru un flux complet cross-departament.',
    examples: [
      'CRM intern pentru echipa de vânzări B2B',
      'Sistem de stocuri cu alertare automată',
      'Portal de comenzi de producție',
    ],
    price: 'de la 6.000 €',
    steps: [
      { phase: 'Discovery', duration: '1 săpt.' },
      { phase: 'Prototip', duration: '1 săpt.' },
      { phase: 'Build', duration: '3 săpt.' },
      { phase: 'Handover', duration: '1 săpt.' },
    ],
    featured: true,
    ctaHref: '#contact',
  },
  {
    name: 'Large',
    duration: '10 săptămâni',
    description: 'Pentru ecosisteme cu integrări multiple sau 3+ module.',
    examples: [
      'Platformă de producție cu module integrate',
      'ERP-light cu stocuri, vânzări și raportare',
      'Platformă de distribuție cu tracking live',
    ],
    price: 'de la 10.000 €',
    steps: [
      { phase: 'Discovery', duration: '2 săpt.' },
      { phase: 'Prototip', duration: '1 săpt.' },
      { phase: 'Build', duration: '6 săpt.' },
      { phase: 'Handover', duration: '1 săpt.' },
    ],
    featured: false,
    ctaHref: '#contact',
  },
]

const appTypesData = [
  {
    Icon: Monitor,
    title: 'Dashboard live pentru producție',
    body: 'Status pe ture, OEE, productivitate per mașină sau linie, pontaj digital. Datele intră de la operatori sau direct din utilaje — tu le vezi pe loc, fără să întrebi pe nimeni.',
  },
  {
    Icon: Package,
    title: 'Sistem de stocuri cross-depozit',
    body: 'Vizibilitate pe mai multe locații în același timp. Alerte automate la stoc minim, trasabilitate per lot, intrări și ieșiri validate. Managerul de logistică știe situația înainte să întrebe.',
  },
  {
    Icon: Users,
    title: 'CRM intern pentru vânzări B2B',
    body: 'Pipeline vizual, istoricul complet al clientului, target-uri pe agent și rapoarte de teren. Echipa introduce date pe mobil, directorul vede situația live pe desktop.',
  },
  {
    Icon: BarChart2,
    title: 'Raportare automată multi-departament',
    body: 'Date din SAP, Excel sau sisteme custom — agregate automat, raport săptămânal generat fără intervenție umană. Format consistent, disponibil în dashboard sau trimis pe email.',
  },
]

const faqData = [
  {
    question: 'Cât costă un proiect?',
    answer:
      'Nu dăm prețuri ferme înainte de discovery — complexitatea variază prea mult. Ceea ce garantăm: după o săptămână de discovery (plătită și creditată integral în proiect dacă continuăm), primești un scope complet și un preț fix. Fără ajustări pe parcurs.',
  },
  {
    question: 'Cât durează livrarea?',
    answer:
      '3 săptămâni pentru pachetul Small, 6 pentru Medium, 10 pentru Large. Termenul se stabilește la semnarea contractului și nu se modifică fără acordul tău explicit. Dacă estimăm că ne ia mai mult, îți spunem înainte să semnăm.',
  },
  {
    question: 'Ce se întâmplă după livrare?',
    answer:
      'Includem 3 luni de suport post-launch: bugfix-uri, ajustări minore și o sesiune de training cu echipa care folosește aplicația. Dacă vrei funcționalități noi ulterior, lucrăm pe bază de retainer sau proiect nou separat.',
  },
  {
    question: 'Al cui e codul?',
    answer:
      'Al tău, 100%, din prima zi. Codul stă în repository-ul tău, documentat. Fără lock-in față de noi. Dacă mâine decizi să lucrezi cu altcineva sau să angajezi un developer intern, ai tot ce îți trebuie.',
  },
  {
    question: 'Cum lucrați cu ERP-ul nostru existent?',
    answer:
      'Nu înlocuim ERP-ul — îl completăm. Construim integrări via API sau import/export de date acolo unde ERP-ul nu acoperă. Dacă ERP-ul nu are API (se întâmplă), lucrăm cu exporturile lui de date sau cu accesul direct la baza de date.',
  },
  {
    question: 'De ce să vă aleg pe voi?',
    answer:
      'Scope fix, preț fix, termen fix — trei lucruri pe care puțini le garantează. Discovery-ul structurat și plătit ne forțează pe amândoi să clarificăm ce se construiește înainte să înceapă munca. Codul rămâne al tău. Dacă la livrare ceva lipsește față de specificație, îl adăugăm fără cost suplimentar.',
  },
]

/* ──────────────────────────────────────────────────────────
   SHARED COMPONENTS
─────────────────────────────────────────────────────────── */

function AppLogo({
  dark = true,
  size = 'sm',
}: {
  dark?: boolean
  size?: 'sm' | 'lg'
}) {
  const mutedFill = dark ? '#3F3F46' : '#D4D4D8'
  const textColor = dark ? '#F4F4F5' : '#18181B'
  const svgSize = size === 'lg' ? 32 : 22
  const sqSize = size === 'lg' ? 13.5 : 9.5
  const sqGap = size === 'lg' ? 18 : 12.5
  const textClass = size === 'lg' ? 'text-[22px]' : 'text-[15px]'
  const dotClass =
    size === 'lg'
      ? 'inline-block w-[7px] h-[7px] bg-brand align-middle mx-[3px] translate-y-[-3px]'
      : 'inline-block w-[5px] h-[5px] bg-brand align-middle mx-[2px] translate-y-[-2px]'
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="app.up">
      <svg
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        fill="none"
        aria-hidden="true"
      >
        <rect x="0"     y="0"     width={sqSize} height={sqSize} rx="1.5" fill="#1D4ED8" />
        <rect x={sqGap} y="0"     width={sqSize} height={sqSize} rx="1.5" fill={mutedFill} />
        <rect x="0"     y={sqGap} width={sqSize} height={sqSize} rx="1.5" fill={mutedFill} />
        <rect x={sqGap} y={sqGap} width={sqSize} height={sqSize} rx="1.5" fill={mutedFill} />
      </svg>
      <span
        className={`${textClass} font-semibold tracking-tight leading-none select-none`}
        style={{ color: textColor }}
      >
        app
        <span className={dotClass} aria-hidden="true" />
        up
      </span>
    </span>
  )
}

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function DashboardVisual() {
  return (
    <svg
      viewBox="0 0 440 320"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      className="w-full max-w-[520px] mx-auto lg:mx-0"
    >
      {/* Frame */}
      <rect width="440" height="320" rx="8" fill="#18181B" stroke="#3F3F46" strokeWidth="1" />
      {/* Chrome bar */}
      <rect width="440" height="36" rx="8" fill="#27272A" />
      <rect y="28" width="440" height="8" fill="#27272A" />
      <circle cx="18" cy="18" r="4.5" fill="#52525B" />
      <circle cx="32" cy="18" r="4.5" fill="#52525B" />
      <circle cx="46" cy="18" r="4.5" fill="#52525B" />
      {/* URL bar */}
      <rect x="68" y="12" width="188" height="12" rx="6" fill="#3F3F46" />
      {/* LIVE indicator */}
      <circle cx="392" cy="18" r="4" fill="#22C55E" className="svg-pulse-anim" />
      <text x="400" y="22" fontSize="8" fill="#22C55E" fontFamily="monospace" fontWeight="600">LIVE</text>
      {/* KPI 1 */}
      <rect x="12" y="48" width="130" height="64" rx="4" fill="#27272A" stroke="#3F3F46" strokeWidth="1" />
      <rect x="22" y="57" width="52" height="6" rx="2" fill="#52525B" />
      <rect x="22" y="69" width="72" height="14" rx="2" fill="#E4E4E7" />
      <rect x="22" y="90" width="36" height="8" rx="2" fill="#1D4ED8" />
      {/* KPI 2 */}
      <rect x="154" y="48" width="130" height="64" rx="4" fill="#27272A" stroke="#3F3F46" strokeWidth="1" />
      <rect x="164" y="57" width="64" height="6" rx="2" fill="#52525B" />
      <rect x="164" y="69" width="56" height="14" rx="2" fill="#E4E4E7" />
      <rect x="164" y="90" width="44" height="8" rx="2" fill="#22C55E" fillOpacity="0.7" />
      {/* KPI 3 */}
      <rect x="296" y="48" width="132" height="64" rx="4" fill="#27272A" stroke="#3F3F46" strokeWidth="1" />
      <rect x="306" y="57" width="48" height="6" rx="2" fill="#52525B" />
      <rect x="306" y="69" width="80" height="14" rx="2" fill="#E4E4E7" />
      <rect x="306" y="90" width="32" height="8" rx="2" fill="#EAB308" fillOpacity="0.7" />
      {/* Chart area */}
      <rect x="12" y="124" width="276" height="124" rx="4" fill="#27272A" stroke="#3F3F46" strokeWidth="1" />
      {/* Grid lines */}
      <line x1="22" y1="153" x2="278" y2="153" stroke="#3F3F46" strokeWidth="0.5" />
      <line x1="22" y1="173" x2="278" y2="173" stroke="#3F3F46" strokeWidth="0.5" />
      <line x1="22" y1="193" x2="278" y2="193" stroke="#3F3F46" strokeWidth="0.5" />
      <line x1="22" y1="213" x2="278" y2="213" stroke="#3F3F46" strokeWidth="0.5" />
      <rect x="22" y="150" width="16" height="4" rx="1" fill="#3F3F46" />
      <rect x="22" y="170" width="16" height="4" rx="1" fill="#3F3F46" />
      <rect x="22" y="190" width="16" height="4" rx="1" fill="#3F3F46" />
      {/* Area fill */}
      <path
        d="M 48,232 L 82,216 L 116,209 L 150,196 L 184,187 L 218,172 L 252,158 L 270,148 L 270,238 L 48,238 Z"
        fill="#1D4ED8"
        fillOpacity="0.07"
      />
      {/* Animated chart line */}
      <path
        d="M 48,232 L 82,216 L 116,209 L 150,196 L 184,187 L 218,172 L 252,158 L 270,148"
        fill="none"
        stroke="#1D4ED8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="500"
        strokeDashoffset="500"
        className="svg-line-anim"
      />
      <circle cx="270" cy="148" r="3.5" fill="#1D4ED8" />
      {/* X-axis labels */}
      <rect x="44" y="244" width="18" height="4" rx="1" fill="#3F3F46" />
      <rect x="110" y="244" width="18" height="4" rx="1" fill="#3F3F46" />
      <rect x="176" y="244" width="18" height="4" rx="1" fill="#3F3F46" />
      <rect x="242" y="244" width="18" height="4" rx="1" fill="#3F3F46" />
      {/* Right status panel */}
      <rect x="300" y="124" width="128" height="124" rx="4" fill="#27272A" stroke="#3F3F46" strokeWidth="1" />
      <rect x="310" y="133" width="60" height="6" rx="2" fill="#52525B" />
      <line x1="300" y1="148" x2="428" y2="148" stroke="#3F3F46" strokeWidth="0.5" />
      <circle cx="316" cy="161" r="3.5" fill="#22C55E" />
      <rect x="325" y="156" width="72" height="6" rx="2" fill="#71717A" />
      <rect x="325" y="165" width="48" height="4" rx="1" fill="#3F3F46" />
      <circle cx="316" cy="185" r="3.5" fill="#22C55E" />
      <rect x="325" y="180" width="64" height="6" rx="2" fill="#71717A" />
      <rect x="325" y="189" width="56" height="4" rx="1" fill="#3F3F46" />
      <circle cx="316" cy="209" r="3.5" fill="#EAB308" />
      <rect x="325" y="204" width="80" height="6" rx="2" fill="#71717A" />
      <rect x="325" y="213" width="40" height="4" rx="1" fill="#3F3F46" />
      <circle cx="316" cy="233" r="3.5" fill="#22C55E" />
      <rect x="325" y="228" width="68" height="6" rx="2" fill="#71717A" />
      <rect x="325" y="237" width="52" height="4" rx="1" fill="#3F3F46" />
      {/* Bottom bar */}
      <rect x="12" y="260" width="416" height="48" rx="4" fill="#27272A" stroke="#3F3F46" strokeWidth="1" />
      <rect x="22" y="271" width="60" height="5" rx="2" fill="#52525B" />
      <rect x="22" y="280" width="48" height="8" rx="2" fill="#1D4ED8" fillOpacity="0.7" />
      <rect x="112" y="271" width="60" height="5" rx="2" fill="#52525B" />
      <rect x="112" y="280" width="56" height="8" rx="2" fill="#E4E4E7" />
      <rect x="212" y="271" width="60" height="5" rx="2" fill="#52525B" />
      <rect x="212" y="280" width="40" height="8" rx="2" fill="#22C55E" fillOpacity="0.8" />
      <rect x="314" y="271" width="60" height="5" rx="2" fill="#52525B" />
      <rect x="314" y="280" width="64" height="8" rx="2" fill="#E4E4E7" />
    </svg>
  )
}

/* ──────────────────────────────────────────────────────────
   NAV
─────────────────────────────────────────────────────────── */

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-200 ${
        scrolled ? 'bg-zinc-950/90 border-b border-zinc-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" aria-label="app.up — pagina principală">
          <AppLogo dark />
        </a>
        <nav aria-label="Navigare principală">
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            {[
              { href: '#pachete', label: 'Pachete' },
              { href: '#ce-construim', label: 'Ce construim' },
              { href: '#faq', label: 'FAQ' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <li key={link.href} className="hidden md:block">
                <a
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors px-3 py-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="ml-2">
              <a
                href="https://wa.me/40700000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactează-ne pe WhatsApp"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white text-sm font-medium px-3.5 py-2 rounded-md transition-colors min-h-[36px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

/* ──────────────────────────────────────────────────────────
   HERO
─────────────────────────────────────────────────────────── */

function HeroSection() {
  const shouldReduce = useReducedMotion() ?? false

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduce ? 0 : 0.13 } },
  }
  const item = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
    },
  }

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-zinc-950 pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 bg-grid-dark bg-grid-sm opacity-40 pointer-events-none"
        aria-hidden="true"
      />
      {/* Blue radial highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(29,78,216,0.09) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={item}
              className="font-mono text-xs tracking-widest uppercase text-zinc-500 mb-6"
            >
              Pentru producție și distribuție
            </motion.p>
            <motion.h1
              id="hero-heading"
              variants={item}
              className="text-[1.85rem] sm:text-4xl lg:text-[2.5rem] font-semibold tracking-tight leading-[1.13] text-zinc-50 mb-6"
            >
              Directorii de producție
              <br />
              decidă pe date live,
              <br />
              nu pe rapoarte de vineri.
            </motion.h1>
            <motion.p
              variants={item}
              className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-10 max-w-[440px]"
            >
              Construim dashboarduri și sisteme interne pentru firme din
              producție și distribuție. Livrare în 3–10 săptămâni, preț
              stabilit înainte să scriem o linie de cod.
            </motion.p>
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="https://wa.me/40700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-brand hover:bg-brand-hover text-white text-sm font-medium px-5 py-3 rounded-md transition-colors min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <WhatsAppIcon />
                Vorbește cu noi pe WhatsApp
              </a>
              <Button variant="outline" href="#pachete">
                Vezi pachetele
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Dashboard visual */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: shouldReduce ? 0 : 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <DashboardVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────────────────
   PROBLEMA
─────────────────────────────────────────────────────────── */

function ProblemaSection() {
  return (
    <section
      id="problema"
      aria-labelledby="problema-heading"
      className="bg-zinc-900 py-20 sm:py-28 border-t border-zinc-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest uppercase text-zinc-500 mb-5">
          Problema
        </p>
        <h2
          id="problema-heading"
          className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-50 max-w-xl mb-4"
        >
          Firmele din producție și distribuție au date.
          <br />
          Problema e că le primesc prea târziu.
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-lg mb-14">
          Nu e o problemă de volum. E o problemă de când ajung.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {painPointsData.map((p) => (
            <PainPoint key={p.number} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────────────────
   PACHETE
─────────────────────────────────────────────────────────── */

function PacheteSection() {
  return (
    <section
      id="pachete"
      aria-labelledby="pachete-heading"
      className="bg-zinc-50 py-20 sm:py-28 border-t border-zinc-200"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest uppercase text-zinc-600 mb-5">
          Pachete și proces
        </p>
        <h2
          id="pachete-heading"
          className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 max-w-2xl mb-4"
        >
          Scope fix, preț fix, termen fix.
          <br />
          Stabilite după o săptămână de discovery.
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base max-w-lg mb-14">
          Nu scriem o linie de cod înainte să știm exact ce construim.
          Discovery-ul e plătit și creditat integral în proiect dacă continuăm.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {packagesData.map((pkg) => (
            <PackageCard key={pkg.name} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────────────────
   CE CONSTRUIM
─────────────────────────────────────────────────────────── */

function CeConstruimSection() {
  return (
    <section
      id="ce-construim"
      aria-labelledby="ce-construim-heading"
      className="bg-zinc-900 py-20 sm:py-28 border-t border-zinc-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest uppercase text-zinc-500 mb-5">
          Ce construim
        </p>
        <h2
          id="ce-construim-heading"
          className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-50 max-w-xl mb-4"
        >
          Aplicații pentru procesele care consumă
          <br className="hidden sm:block" />
          cel mai mult timp în producție și distribuție.
        </h2>
        <p className="text-zinc-500 text-sm sm:text-base max-w-lg mb-14">
          Nu generice. Construite pe specificațiile tale, cu logica procesului tău.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {appTypesData.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors duration-200"
            >
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-zinc-800 border border-zinc-700 mb-4">
                <Icon className="w-4 h-4 text-zinc-300" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-zinc-100 mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────────────────
   FAQ
─────────────────────────────────────────────────────────── */

function FAQSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-white py-20 sm:py-28 border-t border-zinc-200"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest uppercase text-zinc-600 mb-5">
          Întrebări frecvente
        </p>
        <h2
          id="faq-heading"
          className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 max-w-xl mb-14"
        >
          Ce întreabă antreprenorii înainte să înceapă o colaborare.
        </h2>
        <div className="max-w-2xl">
          {faqData.map((item) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────────────────
   ABOUT
─────────────────────────────────────────────────────────── */

function AboutSection() {
  return (
    <section
      id="echipa"
      aria-labelledby="about-heading"
      className="bg-zinc-50 py-20 sm:py-28 border-t border-zinc-200"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest uppercase text-zinc-600 mb-5">
          Echipa
        </p>
        <h2
          id="about-heading"
          className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 mb-8"
        >
          Tehnici, nu consultanți.
        </h2>
        <p className="text-zinc-700 text-sm sm:text-base leading-[1.75] max-w-2xl">
          Suntem o echipă mică — 3 oameni cu experiență în software pentru
          producție și logistică. Am lucrat anterior cu sisteme de management
          al producției, ERP-uri și platforme de distribuție înainte să
          construim app.up. Nu vindem produse generice adaptate forțat.
          Fiecare proiect începe cu o săptămână de discovery în care mapăm
          procesele reale, nu cele din organigramă. Scriem cod, nu slide-uri.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-lg">
          {[
            { stat: '6', label: 'Proiecte livrate' },
            { stat: '3–10', label: 'Săptămâni per proiect' },
            { stat: '100%', label: 'Ownership cod la client' },
          ].map(({ stat, label }) => (
            <div key={label} className="border-t-2 border-brand pt-4">
              <p className="font-mono text-2xl font-semibold text-zinc-900">
                {stat}
              </p>
              <p className="text-sm text-zinc-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────────────────
   CTA FINAL
─────────────────────────────────────────────────────────── */

function CTASection() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="bg-zinc-950 py-20 sm:py-28 border-t border-zinc-800"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          id="cta-heading"
          className="text-2xl sm:text-[2.25rem] font-semibold tracking-tight text-zinc-50 max-w-2xl mx-auto leading-tight mb-5"
        >
          Gata să vezi ce se întâmplă în firma ta, în timp real?
        </h2>
        <p className="text-zinc-300 text-sm sm:text-base max-w-md mx-auto mb-10 leading-relaxed">
          O discuție de 30 de minute e suficientă ca să înțelegem dacă putem
          ajuta și cum ar arăta un proiect cu tine.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/40700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-brand hover:bg-brand-hover text-white text-sm font-medium px-6 py-3 rounded-md transition-colors min-h-[44px] w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
          <Button variant="outline" href="tel:+40700000000" className="w-full sm:w-auto">
            <Phone className="w-4 h-4" aria-hidden="true" />
            +40 7XX XXX XXX
          </Button>
          <Button variant="outline" href="mailto:contact@app.up" className="w-full sm:w-auto">
            <Mail className="w-4 h-4" aria-hidden="true" />
            contact@app.up
          </Button>
        </div>
        <p className="mt-8 font-mono text-xs text-zinc-600">
          Răspundem în maxim 24 de ore în zilele lucrătoare.
        </p>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────────────────
   FOOTER
─────────────────────────────────────────────────────────── */

function FooterSection() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <AppLogo dark />
          <p className="font-mono text-xs text-zinc-600 mt-2">
            Aplicații interne custom pentru firme românești
          </p>
        </div>
        <p className="font-mono text-xs text-zinc-700">© 2025 app.up</p>
      </div>
    </footer>
  )
}

/* ──────────────────────────────────────────────────────────
   PAGE
─────────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <ProblemaSection />
        <PacheteSection />
        <CeConstruimSection />
        <FAQSection />
        <AboutSection />
        <CTASection />
      </main>
      <FooterSection />
    </>
  )
}
