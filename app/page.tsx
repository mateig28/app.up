'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Phone,
  Mail,
  Monitor,
  Package,
  Users,
  BarChart2,
  Zap,
  Globe,
  Lock,
} from 'lucide-react'
import { Button } from '@/components/Button'
import { TabSwitcher } from '@/components/TabSwitcher'
import { BrowserMockup } from '@/components/BrowserMockup'
import { HeroAnimation } from '@/components/HeroAnimation'
import { PackageCard, type PackageCardProps } from '@/components/PackageCard'
import { FAQItem } from '@/components/FAQItem'
import { TestimonialCard } from '@/components/TestimonialCard'
import { PainPoint } from '@/components/PainPoint'
import { GrowthArrow } from '@/components/GrowthArrow'
import { SectionDivider } from '@/components/SectionDivider'
import { StickyScrollSection, type ScrollStep } from '@/components/StickyScrollSection'
import { AppsMockupScroll } from '@/components/AppsMockupScroll'
import { SitesMockupScroll } from '@/components/SitesMockupScroll'

/* ── COLOR CONSTANTS ─────────────────────────────────────── */
const C = {
  dark:    '#08090A',
  darkAlt: '#0D1117',
  blue0:   '#0F2444',
  blue1:   '#0A1628',
  emerald0:'#052E16',
  emerald1:'#022C1A',
}

/* ── TYPES ───────────────────────────────────────────────── */
type TabId = 'apps' | 'sites'

/* ── DATA ────────────────────────────────────────────────── */
const TABS = [
  { id: 'apps',  label: 'Aplicații interne' },
  { id: 'sites', label: 'Site-uri web' },
]

const painPoints = [
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

const APPS_STEPS: ScrollStep[] = [
  {
    label: 'Situația actuală',
    title: 'Date care ajung după ce decizia n-a mai putut aștepta',
    description:
      'Producție, stocuri și vânzări — fiecare în fișierul lui. Raportul vine luni. Problema era vineri la 3.',
    mockupState: 'before',
  },
  {
    label: 'Discovery — săptămâna 1',
    title: 'O săptămână ca să mapăm tot ce se întâmplă de fapt',
    description:
      'Nu pornim de la presupuneri. Analizăm cum circulă datele, unde se blochează, ce e introdus manual și ce poate fi automatizat. La final primești scope complet și preț fix.',
    mockupState: 'discovery',
  },
  {
    label: 'Aplicația livrată',
    title: 'Dashboard în timp real. Date exacte, fără să întrebi pe nimeni.',
    description:
      'Producție, stocuri și vânzări vizibile dintr-un singur loc. Actualizat automat, accesat de pe orice dispozitiv, fără să mai suni pe nimeni.',
    mockupState: 'after',
  },
]

const SITES_STEPS: ScrollStep[] = [
  {
    label: 'Situația actuală',
    title: 'Un site care există, dar nu lucrează pentru tine',
    description:
      'Pagini statice, copy generic, nicio direcție clară pentru vizitator. Timp mediu pe site: 18 secunde. Bounce rate: 91%. Telefonul nu sună mai des după ce ai pus site-ul.',
    mockupState: 'before',
  },
  {
    label: 'Design & construcție',
    title: 'Structurăm mesajul. Construim vizualul. Scriem copy care convinge.',
    description:
      'Nu un template aplicat în grabă. Fiecare secțiune e gândită pentru publicul tău — ce caută, ce obiectează, de ce ar suna. Design modern, animații, mobil-first.',
    mockupState: 'wireframe',
  },
  {
    label: 'Site-ul livrat',
    title: 'Prezență online care transformă vizitatorii în clienți',
    description:
      'Timp mediu pe site: 3 minute 24 de secunde. Bounce rate sub 22%. Un site care răspunde la întrebările clientului înainte ca el să le pună — și îl face să sune.',
    mockupState: 'after',
  },
]

const appTypes = [
  {
    Icon: Monitor,
    title: 'Dashboard live pentru producție',
    body: 'Status pe ture, productivitate per linie, pontaj digital. Datele intră de la operatori — tu le vezi pe loc, fără să întrebi pe nimeni.',
    color: '#3B82F6',
  },
  {
    Icon: Package,
    title: 'Evidența stocurilor pe mai multe depozite',
    body: 'Un singur loc unde vezi tot — nu mai suni la Cluj ca să afli ce ai în magazie. Alerte automate la stoc minim, intrări și ieșiri validate.',
    color: '#10B981',
  },
  {
    Icon: Users,
    title: 'CRM intern pentru agenții de vânzări',
    body: 'Toți agenții tăi, toate ofertele și clienții, într-un singur loc — nu în telefoanele fiecăruia. Agentul introduce date pe mobil, directorul vede live pe desktop.',
    color: '#06B6D4',
  },
  {
    Icon: BarChart2,
    title: 'Rapoarte săptămânale automate',
    body: 'Luni dimineața ai raportul gata — nu mai aștepți până miercuri să strângi datele. Format consistent, trimis automat pe email.',
    color: '#3B82F6',
  },
]

const appsPackages: PackageCardProps[] = [
  {
    name: 'Small',
    tagline: 'Pentru un singur proces',
    duration: '3 săptămâni',
    price: 'de la 3.000 €',
    description: 'Un proces digitalizat, un instrument care funcționează din prima zi.',
    examples: [
      'Pontaj digital per tură',
      'Raport de producție zilnic automat',
      'Mini-dashboard cu 3–5 indicatori live',
    ],
    steps: [
      { label: 'Discovery', duration: '3 zile' },
      { label: 'Construcție', duration: '2 săpt.' },
      { label: 'Predare & training', duration: '2 zile' },
    ],
    featured: false,
    accentGradient: 'blue',
    ctaHref: '#contact',
    onColoredSection: true,
  },
  {
    name: 'Medium',
    tagline: 'Pentru un departament',
    duration: '6 săptămâni',
    price: 'de la 6.000 €',
    description: 'Un departament întreg digitalizat — producție, logistică sau vânzări.',
    examples: [
      'CRM intern pentru echipa de vânzări',
      'Sistem de stocuri pe mai multe depozite',
      'Portal de comenzi pentru clienți recurenți',
    ],
    steps: [
      { label: 'Discovery', duration: '1 săpt.' },
      { label: 'Prototip', duration: '1 săpt.' },
      { label: 'Construcție', duration: '3 săpt.' },
      { label: 'Predare & training', duration: '1 săpt.' },
    ],
    featured: true,
    accentGradient: 'blue',
    ctaHref: '#contact',
    onColoredSection: true,
  },
  {
    name: 'Large',
    tagline: 'Pentru toată firma',
    duration: '10 săptămâni',
    price: 'de la 10.000 €',
    description: 'Producție, stocuri și vânzări conectate — vizibilitate completă din același loc.',
    examples: [
      'Platformă cu producție, stocuri și vânzări integrate',
      'Sistem simplu de raportare automată',
      'Urmărire distribuție în timp real',
    ],
    steps: [
      { label: 'Discovery', duration: '2 săpt.' },
      { label: 'Prototip', duration: '1 săpt.' },
      { label: 'Construcție', duration: '6 săpt.' },
      { label: 'Predare & training', duration: '1 săpt.' },
    ],
    featured: false,
    accentGradient: 'blue',
    ctaHref: '#contact',
    onColoredSection: true,
  },
]

const sitesPackages: PackageCardProps[] = [
  {
    name: 'Starter',
    tagline: '1–3 pagini',
    duration: '5 zile lucrătoare',
    price: '500 € – 1.000 €',
    description: 'Prezență online clară și rapidă, gata să fie văzută de clienți noi.',
    examples: [
      '1–3 pagini optimizate pentru mobil',
      'Design personalizat',
      'Animații moderne',
      'Formular de contact',
    ],
    steps: [
      { label: 'Brief & design', duration: '2 zile' },
      { label: 'Construcție', duration: '2 zile' },
      { label: 'Predare', duration: '1 zi' },
    ],
    featured: false,
    accentGradient: 'emerald',
    maintenance: 'de la 49 €/lună',
    ctaHref: '#contact',
    onColoredSection: true,
  },
  {
    name: 'Business',
    tagline: 'Site complet',
    duration: '10 zile lucrătoare',
    price: '1.000 € – 2.000 €',
    description: 'Site profesional cu toate secțiunile de care ai nevoie ca să câștigi credibilitate.',
    examples: [
      'Oricâte secțiuni ai nevoie',
      'Animații avansate',
      'Formular de contact integrat',
      'SEO de bază configurat',
    ],
    steps: [
      { label: 'Brief & design', duration: '3 zile' },
      { label: 'Construcție', duration: '5 zile' },
      { label: 'Revizii & predare', duration: '2 zile' },
    ],
    featured: true,
    accentGradient: 'emerald',
    maintenance: 'de la 79 €/lună',
    ctaHref: '#contact',
    onColoredSection: true,
  },
  {
    name: 'Premium',
    tagline: 'Site complex',
    duration: '15 zile lucrătoare',
    price: '2.000 € – 3.000 €',
    description: 'Animații avansate, integrări, SEO complet — pentru cine vrea să iasă în față.',
    examples: [
      'Animații avansate personalizate',
      'Integrare newsletter sau CRM',
      'SEO tehnic complet',
      'Blog sau pagini multiple',
    ],
    steps: [
      { label: 'Brief & design', duration: '4 zile' },
      { label: 'Construcție', duration: '8 zile' },
      { label: 'Revizii & predare', duration: '3 zile' },
    ],
    featured: false,
    accentGradient: 'emerald',
    maintenance: 'de la 129 €/lună',
    ctaHref: '#contact',
    onColoredSection: true,
  },
]

const faqData = [
  {
    question: 'Cât costă un proiect de aplicație internă?',
    answer:
      'Nu dăm prețuri ferme înainte de discovery — complexitatea variază prea mult. Ceea ce garantăm: după o săptămână de discovery (plătită și creditată integral dacă continuăm), primești un scope complet și un preț fix. Fără ajustări pe parcurs.',
  },
  {
    question: 'Cât durează livrarea unei aplicații interne?',
    answer:
      '3 săptămâni pentru pachetul Small, 6 pentru Medium, 10 pentru Large. Termenul se stabilește la semnarea contractului și nu se modifică fără acordul tău explicit.',
  },
  {
    question: 'Al cui e codul aplicației?',
    answer:
      'Al tău, 100%, din prima zi. Codul stă pe serverele tale sau pe un hosting la alegerea ta, documentat. Nu ești legat de noi. Dacă mâine decizi să lucrezi cu altcineva sau să angajezi un programator în firmă, ai tot ce îți trebuie.',
  },
  {
    question: 'Funcționează cu ce avem deja în firmă?',
    answer:
      'Nu înlocuim ce aveți deja — completăm ce lipsește. Ne conectăm la ERP-ul vostru, la fișierele Excel sau la orice alt program care poate exporta date.',
  },
  {
    question: 'Cât durează un site de prezentare?',
    answer:
      '5 zile lucrătoare pentru pachetul Starter, 10 pentru Business, 15 pentru Premium. Termenul e fix de la prima discuție — nu "undeva în jurul a două săptămâni".',
  },
  {
    question: 'Ce include mentenanța lunară pentru site?',
    answer:
      'Hosting, actualizări de securitate și modificări minore — oricând ai nevoie. Dacă vrei secțiuni noi sau redesign, discutăm un proiect separat.',
  },
  {
    question: 'Pot modifica eu site-ul după ce îl primesc?',
    answer:
      'Da. Codul e al tău, documentat. Dacă vrei să faci modificări singur sau cu ajutorul altcuiva, ai tot accesul necesar. Putem și noi, dacă preferi să nu te ocupi.',
  },
  {
    question: 'De ce să vă aleg pe voi?',
    answer:
      'Preț fix, termen fix, fără surprize. Discovery-ul structurat ne forțează pe amândoi să clarificăm exact ce se construiește înainte să înceapă munca. Codul rămâne al tău. Dacă la livrare ceva lipsește față de ce s-a agreat, îl adăugăm fără cost suplimentar.',
  },
]

/* ── ANIMATION HELPERS ───────────────────────────────────── */

const EASE = [0.16, 1, 0.3, 1] as const

function makeVariants(shouldReduce: boolean) {
  const y = shouldReduce ? 0 : 24
  return {
    container: {
      hidden: {},
      visible: { transition: { staggerChildren: shouldReduce ? 0 : 0.08 } },
    },
    item: {
      hidden: { opacity: 0, y },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
    },
    section: {
      hidden: { opacity: 0, y },
      visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
    },
  }
}

function makeTabVariants(shouldReduce: boolean) {
  return {
    enter: (dir: number) => ({ x: shouldReduce ? 0 : dir * 60, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.35, ease: EASE } },
    exit: (dir: number) => ({
      x: shouldReduce ? 0 : dir * -60,
      opacity: 0,
      transition: { duration: 0.2, ease: 'easeIn' as const },
    }),
  }
}

const VP = { once: true, margin: '-80px' } as const

/* ── SHARED COMPONENTS ───────────────────────────────────── */

function StatsRow({ stats, accentColor }: {
  stats: { value: string; label: string }[]
  accentColor: string
}) {
  return (
    <div
      className="max-w-6xl mx-auto px-6 py-10"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="flex flex-wrap gap-8 sm:gap-14">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p
              className="text-2xl sm:text-3xl font-bold tracking-tight mb-1"
              style={{ color: accentColor }}
            >
              {value}
            </p>
            <p className="font-mono text-[9px] tracking-widest uppercase" style={{ color: '#8B97A860' }}>
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function AppLogo({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
  const dim = size === 'lg' ? 24 : 17
  const textSize = size === 'lg' ? 'text-[20px]' : 'text-[14px]'
  return (
    <span className="inline-flex items-center gap-2" aria-label="app.up">
      <svg width={dim} height={dim} viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        <line x1="3" y1="17" x2="15" y2="5" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="7" y1="5" x2="15" y2="5" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="15" y1="5" x2="15" y2="13" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span className={`${textSize} font-semibold tracking-tight leading-none select-none`} style={{ color: '#F0F6FF' }}>
        app.<span className="font-mono font-bold gradient-text-blue">up</span>
      </span>
    </span>
  )
}

/* ── NAV ─────────────────────────────────────────────────── */

function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div>
          <a href="/" aria-label="app.up — pagina principală">
            <AppLogo />
          </a>
          <p
            className="font-mono text-[9px] tracking-widest uppercase ml-0.5 mt-0.5 hidden sm:block"
            style={{ color: 'rgba(139,151,168,0.45)' }}
          >
            Construim digital. Livrăm la timp.
          </p>
        </div>

        <nav aria-label="Navigare principală">
          <ul className="hidden md:flex items-center gap-0.5 list-none m-0 p-0">
            {[
              { href: '#servicii', label: 'Servicii' },
              { href: '#pachete', label: 'Pachete' },
              { href: '#faq', label: 'FAQ' },
              { href: '#contact', label: 'Contact' },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm px-3 py-2 rounded-lg transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
                  style={{ color: '#8B97A8' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#F0F6FF')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#8B97A8')}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <motion.a
          href="https://wa.me/40700000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium rounded-lg px-4 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 min-h-[36px]"
          style={{ background: '#3B82F6', color: '#fff' }}
          aria-label="Contactează-ne pe WhatsApp"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#2563EB' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#3B82F6' }}
        >
          <WhatsAppIcon />
          <span className="hidden sm:inline">Vorbește cu noi</span>
        </motion.a>
      </div>
    </header>
  )
}

/* ── HERO ────────────────────────────────────────────────── */

function HeroSection({
  activeTab,
  onTabChange,
}: {
  activeTab: TabId
  onTabChange: (t: string) => void
}) {
  const shouldReduce = useReducedMotion() ?? false
  const { container, item } = makeVariants(shouldReduce)

  return (
    <section
      id="servicii"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-0"
      style={{ background: C.dark }}
    >
      {/* Radial gradient hints */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 15% 50%, rgba(59,130,246,0.06) 0%, transparent 70%), radial-gradient(ellipse 60% 60% at 85% 50%, rgba(16,185,129,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.p
              variants={item}
              className="font-mono text-[10px] tracking-[0.2em] uppercase mb-8"
              style={{ color: '#3B82F6' }}
            >
              Agenție digitală · România
            </motion.p>

            <motion.h1
              id="hero-heading"
              variants={item}
              className="text-[2.6rem] sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.08] mb-8"
              style={{ color: '#F0F6FF' }}
            >
              Software care{' '}
              <span className="gradient-text-blue">clarifică.</span>
              <br />
              Design care{' '}
              <span className="gradient-text-emerald">convinge.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base sm:text-lg leading-[1.75] mb-8 max-w-md"
              style={{ color: '#8B97A8' }}
            >
              Aplicații interne pentru firme din producție și distribuție.
              Site-uri de prezentare care atrag clienți noi. Preț fix, termen
              fix — de la primul apel.
            </motion.p>

            <motion.div variants={item} className="mb-8">
              <TabSwitcher
                tabs={TABS}
                activeTab={activeTab}
                onTabChange={onTabChange}
                variant="blue"
              />
            </motion.div>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="https://wa.me/40700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 text-sm font-medium rounded-lg px-5 py-3 min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                style={{ background: '#3B82F6', color: '#fff' }}
                whileHover={{ scale: 1.02, background: '#2563EB' } as Parameters<typeof motion.a>[0]['whileHover']}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <WhatsAppIcon />
                Vorbește cu noi pe WhatsApp
              </motion.a>
              <Button variant="ghost" href="#pachete">
                Vezi pachetele
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <div className="grid grid-rows-[auto_auto] gap-6">
            <motion.div
              initial={{ opacity: 0, y: shouldReduce ? 0 : 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: shouldReduce ? 0 : 0.4, ease: EASE }}
            >
              <BrowserMockup activeTab={activeTab} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: shouldReduce ? 0 : 0.6, ease: EASE }}
              className="hidden lg:block"
            >
              <HeroAnimation activeTab={activeTab} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── PROBLEMA (Apps) ─────────────────────────────────────── */

function ProblemaSection() {
  const shouldReduce = useReducedMotion() ?? false
  const { container, item, section } = makeVariants(shouldReduce)

  return (
    <section
      aria-labelledby="problema-heading"
      style={{ background: `linear-gradient(160deg, ${C.blue0}, ${C.blue1})` }}
      className="py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={section} initial="hidden" whileInView="visible" viewport={VP} className="mb-14">
          <p className="font-mono text-[10px] tracking-widest uppercase mb-5" style={{ color: '#60A5FA' }}>
            Problema
          </p>
          <h2
            id="problema-heading"
            className="text-2xl sm:text-[2rem] font-bold tracking-tight max-w-xl mb-4 leading-tight"
            style={{ color: '#E8F4FF' }}
          >
            Firmele din producție și distribuție au date.
            <br />
            Problema e că le primesc{' '}
            <span className="gradient-text-blue">prea târziu.</span>
          </h2>
          <p className="text-sm sm:text-base max-w-lg" style={{ color: 'rgba(232,244,255,0.65)' }}>
            Nu e o problemă de volum. E o problemă de când ajung.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {painPoints.map((p) => (
            <motion.div key={p.number} variants={item} className="h-full">
              <PainPoint {...p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ── CE CONSTRUIM (Apps) ─────────────────────────────────── */

function CeConstruimSection() {
  const shouldReduce = useReducedMotion() ?? false
  const { container, item, section } = makeVariants(shouldReduce)

  return (
    <section
      aria-labelledby="ce-construim-heading"
      style={{ background: C.darkAlt }}
      className="py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={section} initial="hidden" whileInView="visible" viewport={VP} className="mb-14">
          <p className="font-mono text-[10px] tracking-widest uppercase mb-5" style={{ color: '#3B82F6' }}>
            Ce construim
          </p>
          <h2
            id="ce-construim-heading"
            className="text-2xl sm:text-[2rem] font-bold tracking-tight max-w-xl mb-4 leading-tight"
            style={{ color: '#F0F6FF' }}
          >
            Aplicații pentru procesele care consumă{' '}
            <br className="hidden sm:block" />
            cel mai mult timp.
          </h2>
          <p className="text-sm sm:text-base max-w-lg" style={{ color: '#8B97A8' }}>
            Nu generice. Construite pe specificațiile tale, cu logica procesului tău.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="grid sm:grid-cols-2 gap-4"
        >
          {appTypes.map(({ Icon, title, body, color }) => (
            <motion.div key={title} variants={item} className="card-dark rounded-2xl p-6">
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4"
                style={{ background: `${color}14`, border: `1px solid ${color}30` }}
              >
                <Icon className="w-5 h-5" style={{ color }} aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold mb-2 leading-snug" style={{ color: '#F0F6FF' }}>
                {title}
              </h3>
              <p className="text-sm leading-[1.75]" style={{ color: '#8B97A8' }}>
                {body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ── PACHETE APPS ────────────────────────────────────────── */

function PacheteAppsSection() {
  const shouldReduce = useReducedMotion() ?? false
  const { container, item, section } = makeVariants(shouldReduce)

  return (
    <section
      id="pachete"
      aria-labelledby="pachete-apps-heading"
      style={{ background: `linear-gradient(160deg, ${C.emerald0}, ${C.emerald1})` }}
      className="py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={section} initial="hidden" whileInView="visible" viewport={VP} className="mb-14">
          <p className="font-mono text-[10px] tracking-widest uppercase mb-5" style={{ color: '#34D399' }}>
            Pachete aplicații
          </p>
          <h2
            id="pachete-apps-heading"
            className="text-2xl sm:text-[2rem] font-bold tracking-tight max-w-2xl mb-4 leading-tight"
            style={{ color: '#ECFDF5' }}
          >
            Scope fix, preț fix, termen fix.
            <br />
            Stabilite după o săptămână de discovery.
          </h2>
          <p className="text-sm sm:text-base max-w-lg" style={{ color: 'rgba(236,253,245,0.6)' }}>
            Nu scriem o linie de cod înainte să știm exact ce construim.
            Discovery-ul e plătit și creditat integral în proiect dacă continuăm.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start"
        >
          {appsPackages.map((pkg) => (
            <motion.div key={pkg.name} variants={item} className="h-full">
              <PackageCard {...pkg} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ── PROPUNERE SITES ─────────────────────────────────────── */

function SitesPropunereSection() {
  const shouldReduce = useReducedMotion() ?? false
  const { container, item, section } = makeVariants(shouldReduce)

  const diferentiatori = [
    {
      Icon: Zap,
      title: 'Livrare în 5, 10 sau 15 zile',
      body: 'Termen fix din prima discuție. Nu "undeva în jurul a două luni" — dată clară în contract, respectată.',
      color: '#3B82F6',
    },
    {
      Icon: Globe,
      title: 'Design care iese în față',
      body: 'Animații moderne, vizual personalizat, cod curat. Site-ul tău e cel mai bun portofoliu al nostru.',
      color: '#10B981',
    },
    {
      Icon: Lock,
      title: 'Preț fix, fără surprize',
      body: 'Știi prețul exact înainte să înceapă munca. Fără ore suplimentare neagreate, fără factură surpriză.',
      color: '#06B6D4',
    },
  ]

  return (
    <section
      aria-labelledby="sites-propunere-heading"
      style={{ background: C.dark }}
      className="py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={section} initial="hidden" whileInView="visible" viewport={VP} className="mb-14">
          <p className="font-mono text-[10px] tracking-widest uppercase mb-5" style={{ color: '#10B981' }}>
            De ce app.up
          </p>
          <h2
            id="sites-propunere-heading"
            className="text-2xl sm:text-[2rem] font-bold tracking-tight max-w-xl mb-4 leading-tight"
            style={{ color: '#F0F6FF' }}
          >
            Un site bun nu durează luni de zile
            <br className="hidden sm:block" /> și nu costă o avere.
          </h2>
          <p className="text-sm sm:text-base max-w-lg" style={{ color: '#8B97A8' }}>
            Construim site-uri profesionale cu animații moderne.
            Livrăm mai repede decât oricine — fără să sacrificăm calitatea.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="grid sm:grid-cols-3 gap-4"
        >
          {diferentiatori.map(({ Icon, title, body, color }) => (
            <motion.div key={title} variants={item} className="card-dark rounded-2xl p-6">
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4"
                style={{ background: `${color}14`, border: `1px solid ${color}30` }}
              >
                <Icon className="w-5 h-5" style={{ color }} aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold mb-2 leading-snug" style={{ color: '#F0F6FF' }}>
                {title}
              </h3>
              <p className="text-sm leading-[1.75]" style={{ color: '#8B97A8' }}>
                {body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ── PACHETE SITES ───────────────────────────────────────── */

function PacheteSitesSection() {
  const shouldReduce = useReducedMotion() ?? false
  const { container, item, section } = makeVariants(shouldReduce)

  return (
    <section
      aria-labelledby="pachete-sites-heading"
      style={{ background: `linear-gradient(160deg, ${C.blue0}, ${C.blue1})` }}
      className="py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={section} initial="hidden" whileInView="visible" viewport={VP} className="mb-14">
          <p className="font-mono text-[10px] tracking-widest uppercase mb-5" style={{ color: '#60A5FA' }}>
            Pachete site-uri
          </p>
          <h2
            id="pachete-sites-heading"
            className="text-2xl sm:text-[2rem] font-bold tracking-tight max-w-xl mb-4 leading-tight"
            style={{ color: '#E8F4FF' }}
          >
            Alegi pachetul, știi data livrării.
            <br />
            Fără calcule de ore și estimări vagi.
          </h2>
          <p className="text-sm sm:text-base max-w-lg" style={{ color: 'rgba(232,244,255,0.6)' }}>
            Fiecare pachet include opțional mentenanță lunară — hosting, actualizări
            de securitate și modificări minore oricând ai nevoie.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start"
        >
          {sitesPackages.map((pkg) => (
            <motion.div key={pkg.name} variants={item} className="h-full">
              <PackageCard {...pkg} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ── FAQ ─────────────────────────────────────────────────── */

function FAQSection() {
  const shouldReduce = useReducedMotion() ?? false
  const { section } = makeVariants(shouldReduce)

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      style={{ background: C.darkAlt }}
      className="py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={section} initial="hidden" whileInView="visible" viewport={VP} className="mb-14">
          <p className="font-mono text-[10px] tracking-widest uppercase mb-5" style={{ color: '#8B97A8' }}>
            Întrebări frecvente
          </p>
          <h2
            id="faq-heading"
            className="text-2xl sm:text-[2rem] font-bold tracking-tight max-w-xl leading-tight"
            style={{ color: '#F0F6FF' }}
          >
            Ce întreabă antreprenorii înainte să înceapă o colaborare.
          </h2>
        </motion.div>

        <motion.div variants={section} initial="hidden" whileInView="visible" viewport={VP} className="max-w-2xl">
          {faqData.map((f) => (
            <FAQItem key={f.question} question={f.question} answer={f.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ── TESTIMONIALE ────────────────────────────────────────── */

function TestimonialeSection() {
  const shouldReduce = useReducedMotion() ?? false
  const { container, item, section } = makeVariants(shouldReduce)

  return (
    <section
      aria-labelledby="testimoniale-heading"
      style={{ background: `linear-gradient(160deg, ${C.emerald0}, ${C.emerald1})` }}
      className="py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={section} initial="hidden" whileInView="visible" viewport={VP} className="mb-14">
          <p className="font-mono text-[10px] tracking-widest uppercase mb-5" style={{ color: '#34D399' }}>
            Clienți
          </p>
          <h2
            id="testimoniale-heading"
            className="text-2xl sm:text-[2rem] font-bold tracking-tight max-w-xl mb-3 leading-tight"
            style={{ color: '#ECFDF5' }}
          >
            Ce spun cei cu care am lucrat.
          </h2>
          <p className="text-sm" style={{ color: 'rgba(236,253,245,0.45)' }}>
            Testimonialele clienților noștri vor apărea aici în curând.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="grid sm:grid-cols-3 gap-4"
        >
          {[0, 1, 2].map((i) => (
            <motion.div key={i} variants={item}>
              <TestimonialCard index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ── ECHIPA ──────────────────────────────────────────────── */

function EchipaSection() {
  const shouldReduce = useReducedMotion() ?? false
  const { section } = makeVariants(shouldReduce)

  return (
    <section
      id="echipa"
      aria-labelledby="echipa-heading"
      style={{ background: C.dark }}
      className="py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={section} initial="hidden" whileInView="visible" viewport={VP} className="max-w-2xl">
          <p className="font-mono text-[10px] tracking-widest uppercase mb-5" style={{ color: '#8B97A8' }}>
            Echipa
          </p>
          <h2
            id="echipa-heading"
            className="text-2xl sm:text-[2rem] font-bold tracking-tight mb-8 leading-tight"
            style={{ color: '#F0F6FF' }}
          >
            Tehnici, nu consultanți.
          </h2>
          <p className="text-sm sm:text-base leading-[1.8]" style={{ color: '#8B97A8' }}>
            Suntem o echipă mică cu experiență în software pentru producție,
            logistică și prezentare online. Am construit aplicații interne
            înainte de a construi site-uri — știm cum gândesc atât directorii
            de fabrică, cât și antreprenorii care vor să fie găsiți online. Nu
            vindem produse generice adaptate forțat. Fiecare proiect începe cu
            o săptămână de discovery în care mapăm procesele reale, nu cele din
            organigramă. Scriem cod, nu slide-uri.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ── CTA FINAL ───────────────────────────────────────────── */

function CTASection() {
  const shouldReduce = useReducedMotion() ?? false
  const { section } = makeVariants(shouldReduce)

  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${C.blue0} 0%, ${C.dark} 50%, ${C.emerald0} 100%)`,
      }}
    >
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.div variants={section} initial="hidden" whileInView="visible" viewport={VP}>
          <h2
            id="cta-heading"
            className="text-2xl sm:text-4xl font-bold tracking-tight max-w-2xl mx-auto leading-tight mb-5"
            style={{ color: '#F0F6FF' }}
          >
            Gata să construim ceva{' '}
            <span className="gradient-text">împreună?</span>
          </h2>
          <p
            className="text-sm sm:text-base max-w-md mx-auto mb-10 leading-[1.75]"
            style={{ color: '#8B97A8' }}
          >
            O discuție de 30 de minute e suficientă ca să înțelegem ce ai
            nevoie și dacă putem livra.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <motion.a
              href="https://wa.me/40700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 text-sm font-medium rounded-lg px-6 py-3 min-h-[44px] w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              style={{ background: '#3B82F6', color: '#fff' }}
              whileHover={{ scale: 1.02, background: '#2563EB' } as Parameters<typeof motion.a>[0]['whileHover']}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              <WhatsAppIcon />
              WhatsApp
            </motion.a>
            <Button variant="ghost" href="tel:+40700000000" className="w-full sm:w-auto">
              <Phone className="w-4 h-4" aria-hidden="true" />
              +40 7XX XXX XXX
            </Button>
            <Button variant="ghost" href="mailto:contact@app.up" className="w-full sm:w-auto">
              <Mail className="w-4 h-4" aria-hidden="true" />
              contact@app.up
            </Button>
          </div>

          <p
            className="font-mono text-[10px] tracking-widest uppercase"
            style={{ color: 'rgba(139,151,168,0.35)' }}
          >
            Răspundem în maxim 24 de ore în zilele lucrătoare.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ── FOOTER ──────────────────────────────────────────────── */

function FooterSection() {
  return (
    <footer className="border-t py-10" style={{ borderColor: '#1E2530', background: C.dark }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <AppLogo />
          <p
            className="font-mono text-[9px] tracking-widest uppercase mt-2"
            style={{ color: 'rgba(139,151,168,0.35)' }}
          >
            Construim digital. Livrăm la timp.
          </p>
        </div>
        <p className="font-mono text-[10px]" style={{ color: 'rgba(139,151,168,0.3)' }}>
          © 2026 app.up
        </p>
      </div>
    </footer>
  )
}

/* ── PAGE ────────────────────────────────────────────────── */

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabId>('apps')
  const [direction, setDirection] = useState(0)
  const shouldReduce = useReducedMotion() ?? false
  const tabVariants = makeTabVariants(shouldReduce)

  const handleTabChange = (tab: string) => {
    const tabs: TabId[] = ['apps', 'sites']
    const currIdx = tabs.indexOf(activeTab)
    const nextIdx = tabs.indexOf(tab as TabId)
    setDirection(nextIdx > currIdx ? 1 : -1)
    setActiveTab(tab as TabId)
  }

  return (
    <>
      <Nav />
      <main>
        <HeroSection activeTab={activeTab} onTabChange={handleTabChange} />

        <AnimatePresence mode="wait" initial={false} custom={direction}>
          {activeTab === 'apps' ? (
            <motion.div
              key="apps-content"
              custom={direction}
              variants={tabVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <StickyScrollSection
                id="apps-story"
                eyebrow="Cum funcționează"
                heading="De la Excel la vizibilitate în timp real"
                steps={APPS_STEPS}
                accent="blue"
                renderMockup={(state) => <AppsMockupScroll state={state} />}
                bg={C.dark}
              />
              <div style={{ background: C.dark }}>
                <StatsRow
                  stats={[
                    { value: '6–10 săpt.', label: 'Termen livrare' },
                    { value: '< 10.000 €', label: 'Investiție' },
                    { value: '3 luni', label: 'Primii clienți economisiți' },
                  ]}
                  accentColor="#3B82F6"
                />
              </div>
              {/* dark → dark (slight separator) */}
              <SectionDivider from={C.dark} to={C.darkAlt} />
              <CeConstruimSection />
              {/* dark → emerald */}
              <SectionDivider from={C.darkAlt} to={C.emerald0} />
              <div style={{ background: `linear-gradient(160deg, ${C.emerald0}, ${C.emerald1})` }}>
                <GrowthArrow />
              </div>
              <PacheteAppsSection />
              {/* emerald → dark */}
              <SectionDivider from={C.emerald0} to={C.darkAlt} flip />
            </motion.div>
          ) : (
            <motion.div
              key="sites-content"
              custom={direction}
              variants={tabVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <StickyScrollSection
                id="sites-story"
                eyebrow="Cum funcționează"
                heading="Un site care lucrează pentru tine, nu doar există"
                steps={SITES_STEPS}
                accent="emerald"
                renderMockup={(state) => <SitesMockupScroll state={state} />}
                bg={C.dark}
              />
              <div style={{ background: C.dark }}>
                <StatsRow
                  stats={[
                    { value: '5–15 zile', label: 'Termen livrare' },
                    { value: '500–3.000 €', label: 'Investiție' },
                    { value: '+340%', label: 'Timp mediu pe site' },
                  ]}
                  accentColor="#10B981"
                />
              </div>
              {/* dark → blue */}
              <SectionDivider from={C.dark} to={C.blue0} />
              <PacheteSitesSection />
              {/* blue → dark */}
              <SectionDivider from={C.blue0} to={C.darkAlt} flip />
            </motion.div>
          )}
        </AnimatePresence>

        <FAQSection />
        {/* dark → emerald */}
        <SectionDivider from={C.darkAlt} to={C.emerald0} />
        <TestimonialeSection />
        {/* emerald → dark */}
        <SectionDivider from={C.emerald0} to={C.dark} flip />
        <EchipaSection />
        <CTASection />
      </main>
      <FooterSection />
    </>
  )
}
