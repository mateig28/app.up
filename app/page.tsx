'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/* ── COLORS ──────────────────────────────────────────────── */
const dark    = '#191916'
const offWhite= '#FAF7F2'
const terra   = '#C14E30'
const terraLt = '#E8805E'
const cream   = '#F2EDE4'
const grey    = '#8C8882'
const greyLt  = '#E4E0D8'
const darkText= '#191916'

/* ── ANIMATION ───────────────────────────────────────────── */
const EASE = [0.16, 1, 0.3, 1] as const
const VP   = { once: true, margin: '-60px' } as const

function fadeUp(reduce: boolean) {
  return {
    hidden:  { opacity: 0, y: reduce ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  }
}

/* ── LOGO COMPONENTS ─────────────────────────────────────── */

function CRMark({ w, h }: { w: number; h: number }) {
  return (
    <svg width={w} height={h} viewBox="0 0 72 56" fill="none" aria-hidden="true">
      <path d="M 44,4 A 24,24 0 1 0 44,52 L 44,43 A 15,15 0 1 1 44,13 Z" fill={terra} />
      <path d="M 44,13 L 56,13 Q 70,13 70,25 Q 70,34 60,36 L 70,52 L 59,52 L 50,37 L 44,37 L 44,28 L 55,28 Q 60,28 60,25 Q 60,22 55,22 L 44,22 Z" fill={terra} />
    </svg>
  )
}

function NavLogo() {
  return (
    <span className="inline-flex items-center gap-3.5" aria-label="Croit">
      <CRMark w={32} h={25} />
      <span style={{ width: 1, height: 22, background: '#3A3A36', flexShrink: 0 }} />
      <span
        className="font-sans uppercase tracking-[0.38em] text-[13px] leading-none select-none"
        style={{ color: cream, fontWeight: 300, letterSpacing: '0.38em' }}
      >
        Croit
      </span>
    </span>
  )
}

function FooterLogo() {
  return (
    <div className="inline-flex flex-col items-center gap-3">
      <CRMark w={52} h={40} />
      <span style={{ width: 56, height: 0.5, background: '#333' }} />
      <span
        className="font-sans uppercase tracking-[0.45em] text-[12px] leading-none select-none"
        style={{ color: cream, fontWeight: 300 }}
      >
        Croit
      </span>
    </div>
  )
}

/* ── NAV ─────────────────────────────────────────────────── */

const NAV_LINKS = [
  { href: '#servicii',   label: 'Servicii' },
  { href: '#cum-lucram', label: 'Cum lucrăm' },
  { href: '#de-ce',      label: 'De ce Croit' },
  { href: '#contact',    label: 'Contact' },
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(25,25,22,0.95)' : 'transparent',
        borderBottom: scrolled ? `1px solid rgba(44,44,40,0.8)` : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" aria-label="Croit — pagina principală">
          <NavLogo />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Navigare principală" className="hidden md:block">
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm px-4 py-2 rounded transition-colors duration-150"
                  style={{ color: grey }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = cream)}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = grey)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center text-sm font-medium px-5 py-2.5 rounded transition-colors duration-150 min-h-[40px]"
          style={{ background: terra, color: cream, borderRadius: 5 }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#8F3520')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = terra)}
        >
          Solicită ofertă
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Deschide meniu"
        >
          <span style={{ width: 22, height: 1.5, background: cream, display: 'block', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translate(0,5px)' : 'none' }} />
          <span style={{ width: 22, height: 1.5, background: cream, display: 'block', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span style={{ width: 22, height: 1.5, background: cream, display: 'block', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(0,-5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(25,25,22,0.98)', borderTop: `1px solid ${greyLt}22` }} className="md:hidden px-6 pb-6 pt-3">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm border-b"
              style={{ color: grey, borderColor: '#2C2C2820' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center text-sm font-medium px-5 py-2.5 rounded w-full justify-center"
            style={{ background: terra, color: cream, borderRadius: 5 }}
          >
            Solicită ofertă
          </a>
        </div>
      )}
    </header>
  )
}

/* ── HERO ────────────────────────────────────────────────── */

function HeroSection() {
  const reduce = useReducedMotion() ?? false
  const v = fadeUp(reduce)

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ background: dark }}
    >
      {/* Subtle bg accent */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 55% 55% at 80% 50%, rgba(193,78,48,0.05) 0%, transparent 70%)` }}
      />

      {/* Abstract geometric hero visual */}
      <div aria-hidden="true" className="absolute right-0 top-0 bottom-0 pointer-events-none hidden lg:flex items-center" style={{ width: '45%' }}>
        <svg width="100%" height="100%" viewBox="0 0 480 600" fill="none" style={{ opacity: 0.06 }}>
          <circle cx="240" cy="300" r="200" stroke={terra} strokeWidth="1"/>
          <circle cx="240" cy="300" r="140" stroke={terra} strokeWidth="0.75"/>
          <circle cx="240" cy="300" r="80" stroke={terra} strokeWidth="0.5"/>
          <line x1="40" y1="300" x2="440" y2="300" stroke={terra} strokeWidth="0.5"/>
          <line x1="240" y1="100" x2="240" y2="500" stroke={terra} strokeWidth="0.5"/>
          <circle cx="240" cy="300" r="4" fill={terra} style={{ opacity: 0.4 }}/>
          <circle cx="380" cy="220" r="2.5" fill={terra} style={{ opacity: 0.3 }}/>
          <circle cx="130" cy="380" r="2" fill={terra} style={{ opacity: 0.25 }}/>
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full py-24">
        <div className="max-w-2xl">
          <motion.p
            variants={v} initial="hidden" animate="visible"
            className="font-sans uppercase text-[11px] tracking-[0.18em] mb-8"
            style={{ color: terra }}
          >
            Brașov, România — Agenție digitală
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={v} initial="hidden" animate="visible"
            transition={{ delay: 0.08 }}
            className="font-serif leading-[1.1] tracking-tight mb-8"
            style={{ color: cream, fontSize: 'clamp(2.6rem, 5vw, 4.2rem)', fontWeight: 300 }}
          >
            Site-uri și sisteme digitale{' '}
            <em style={{ color: terraLt, fontStyle: 'italic' }}>croite</em>{' '}
            pe afacerea ta.
          </motion.h1>

          <motion.p
            variants={v} initial="hidden" animate="visible"
            transition={{ delay: 0.16 }}
            className="font-sans text-[17px] leading-[1.75] mb-10 max-w-lg"
            style={{ color: grey, fontWeight: 300 }}
          >
            Construim aplicații interne pentru firme din producție și distribuție,
            și site-uri profesionale pentru oricine vrea prezență online serioasă.
            Fără promisiuni goale. Cu livrare garantată în 2–4 săptămâni.
          </motion.p>

          <motion.div
            variants={v} initial="hidden" animate="visible"
            transition={{ delay: 0.24 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 min-h-[46px] transition-colors duration-150"
              style={{ background: terra, color: cream, borderRadius: 5 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#8F3520')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = terra)}
            >
              Solicită o ofertă gratuită
            </a>
            <a
              href="#cum-lucram"
              className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 min-h-[46px] transition-colors duration-150"
              style={{ background: 'transparent', color: cream, border: `1px solid rgba(193,78,48,0.5)`, borderRadius: 5 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = terra; (e.currentTarget as HTMLElement).style.color = cream }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(193,78,48,0.5)' }}
            >
              Vezi cum lucrăm
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── PENTRU CINE ─────────────────────────────────────────── */

function PentruCineSection() {
  const reduce = useReducedMotion() ?? false
  const v = fadeUp(reduce)

  const cards = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <rect x="2" y="8" width="24" height="18" rx="1.5" stroke={terra} strokeWidth="1.5"/>
          <path d="M8 8V5a6 6 0 0 1 12 0v3" stroke={terra} strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="14" cy="17" r="2.5" stroke={terra} strokeWidth="1.2"/>
        </svg>
      ),
      title: 'Firme din producție și distribuție',
      text: 'Ai 10–70 de angajați și gestionezi încă stocurile pe hârtie sau în WhatsApp. Știi că pierzi bani, dar nu știi exact unde. Îți construim un sistem simplu care îți arată totul în timp real — fără training de săptămâni, fără surprize.',
      tag: 'Aplicații interne custom',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <rect x="2" y="5" width="24" height="18" rx="2" stroke={terra} strokeWidth="1.5"/>
          <path d="M2 10h24" stroke={terra} strokeWidth="1.2"/>
          <circle cx="6" cy="7.5" r="1" fill={terra}/>
          <circle cx="9.5" cy="7.5" r="1" fill={terra}/>
          <circle cx="13" cy="7.5" r="1" fill={terra}/>
        </svg>
      ),
      title: 'Firme mici, freelanceri și persoane publice',
      text: 'Vrei o prezență online profesională care să reprezinte ce faci cu adevărat. Nu un template generic. Un site gândit pentru tine, livrat în 2 săptămâni, la un preț corect.',
      tag: 'Site-uri de prezentare',
    },
  ]

  return (
    <section
      id="pentru-cine"
      aria-labelledby="pentru-cine-heading"
      className="py-24 sm:py-32"
      style={{ background: offWhite }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={v} initial="hidden" whileInView="visible" viewport={VP} className="mb-16">
          <p className="font-sans text-[11px] tracking-[0.14em] uppercase mb-5" style={{ color: terra }}>
            Pentru cine
          </p>
          <h2
            id="pentru-cine-heading"
            className="font-serif leading-tight tracking-tight mb-6"
            style={{ color: darkText, fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, maxWidth: '38rem' }}
          >
            Tehnologie care funcționează,
            pentru oameni care conduc afaceri reale.
          </h2>
          <p className="font-sans text-base leading-[1.75] max-w-xl" style={{ color: '#4A4744', fontWeight: 300 }}>
            Nu suntem o agenție care vinde tehnologie de dragul tehnologiei.
            Suntem oameni care înțeleg că un sistem bun nu se simte —
            se vede în timp salvat, erori evitate și bani recuperați.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={v} initial="hidden" whileInView="visible" viewport={VP}
              className="rounded-lg p-8"
              style={{ background: '#fff', border: `1px solid ${greyLt}` }}
            >
              <div className="mb-5">{c.icon}</div>
              <h3 className="font-serif text-xl mb-3 leading-snug" style={{ color: darkText, fontWeight: 300 }}>
                {c.title}
              </h3>
              <p className="font-sans text-sm leading-[1.8] mb-5" style={{ color: '#4A4744', fontWeight: 300 }}>
                {c.text}
              </p>
              <span
                className="inline-block font-sans text-[11px] tracking-[0.12em] uppercase px-3 py-1.5 rounded"
                style={{ background: `${terra}12`, color: terra, border: `1px solid ${terra}30` }}
              >
                {c.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── SERVICII ────────────────────────────────────────────── */

function ServiciiSection() {
  const reduce = useReducedMotion() ?? false
  const v = fadeUp(reduce)

  const appsItems = [
    { title: 'Tracker stocuri și pierderi', text: 'Angajații raportează de pe telefon. Tu vezi totul pe un dashboard în timp real.' },
    { title: 'Sistem de task-uri și sales', text: 'Urmărești lead-uri, task-uri și notițe de echipă într-un singur loc. Nimic nu se mai pierde.' },
    { title: 'Dashboard operațional', text: 'KPI-uri zilnice, rapoarte automate, alerte când ceva iese din parametri.' },
    { title: 'Aplicație custom', text: 'Ai o nevoie specifică? Scoping în 48h, ofertă clară, livrare în termen.' },
  ]

  const sitesItems = [
    { title: 'Site de prezentare', text: '5–10 pagini, design personalizat, SEO de bază, formular de contact. Gata în 10–14 zile.' },
    { title: 'Landing page', text: 'O pagină puternică pentru campanie, produs sau serviciu specific. Gata în 5–7 zile.' },
    { title: 'Site cu funcționalități', text: 'Booking, formulare avansate, blog, magazin mic. Scoping detaliat, ofertă fixă.' },
  ]

  return (
    <section
      id="servicii"
      aria-labelledby="servicii-heading"
      className="py-24 sm:py-32"
      style={{ background: dark }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={v} initial="hidden" whileInView="visible" viewport={VP} className="mb-16">
          <p className="font-sans text-[11px] tracking-[0.14em] uppercase mb-5" style={{ color: terra }}>
            Ce construim
          </p>
          <h2
            id="servicii-heading"
            className="font-serif leading-tight tracking-tight"
            style={{ color: cream, fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300 }}
          >
            Două servicii. Un singur standard.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-0 relative">
          {/* Separator */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2"
            style={{ width: 1, background: '#2C2C28' }}
          />

          {/* Apps */}
          <motion.div variants={v} initial="hidden" whileInView="visible" viewport={VP} className="lg:pr-16 pb-12 lg:pb-0">
            <h3 className="font-serif text-2xl mb-3 leading-snug" style={{ color: cream, fontWeight: 300, fontStyle: 'italic' }}>
              Sisteme interne<br />pentru producție și distribuție
            </h3>
            <p className="font-sans text-sm leading-[1.75] mb-8" style={{ color: grey, fontWeight: 300 }}>
              Aplicații simple, livrate în 3–4 săptămâni, care digitalizează procesele manuale din firma ta. Fără ERP complicat. Fără luni de implementare.
            </p>
            <ul className="space-y-5 mb-8">
              {appsItems.map((item) => (
                <li key={item.title} className="flex gap-3.5">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: terra }} />
                  <div>
                    <p className="font-sans text-sm font-medium mb-0.5" style={{ color: cream }}>{item.title}</p>
                    <p className="font-sans text-sm" style={{ color: grey, fontWeight: 300 }}>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ borderTop: `1px solid #2C2C28`, paddingTop: '1.5rem' }}>
              <p className="font-sans text-[13px]" style={{ color: grey }}>
                <span style={{ color: terraLt }}>Implementare:</span> 1.200 – 5.000 EUR
              </p>
              <p className="font-sans text-[13px] mt-1" style={{ color: grey }}>
                <span style={{ color: terraLt }}>Mentenanță opțională:</span> 150 – 400 EUR/lună
              </p>
            </div>
          </motion.div>

          {/* Sites */}
          <motion.div variants={v} initial="hidden" whileInView="visible" viewport={VP} className="lg:pl-16 pt-12 lg:pt-0" style={{ borderTop: `1px solid #2C2C28` }}>
            <div className="lg:border-t-0" style={{ borderTop: 'none' }}>
              <h3 className="font-serif text-2xl mb-3 leading-snug" style={{ color: cream, fontWeight: 300, fontStyle: 'italic' }}>
                Site-uri de prezentare<br />profesionale și rapide
              </h3>
              <p className="font-sans text-sm leading-[1.75] mb-8" style={{ color: grey, fontWeight: 300 }}>
                Site-uri livrate în 2 săptămâni. Mobile-first, optimizate pentru Google, cu CMS simplu pe care îl poți actualiza singur.
              </p>
              <ul className="space-y-5 mb-8">
                {sitesItems.map((item) => (
                  <li key={item.title} className="flex gap-3.5">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: terraLt }} />
                    <div>
                      <p className="font-sans text-sm font-medium mb-0.5" style={{ color: cream }}>{item.title}</p>
                      <p className="font-sans text-sm" style={{ color: grey, fontWeight: 300 }}>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div style={{ borderTop: `1px solid #2C2C28`, paddingTop: '1.5rem' }}>
                <p className="font-sans text-[13px]" style={{ color: grey }}>
                  <span style={{ color: terraLt }}>Site prezentare:</span> 600 – 1.800 EUR
                </p>
                <p className="font-sans text-[13px] mt-1" style={{ color: grey }}>
                  <span style={{ color: terraLt }}>Mentenanță opțională:</span> 80 – 150 EUR/lună
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── CUM LUCRĂM ──────────────────────────────────────────── */

function CumLucramSection() {
  const reduce = useReducedMotion() ?? false
  const v = fadeUp(reduce)

  const steps = [
    {
      num: '01',
      title: 'Înțelegem problema',
      text: 'Un apel de 30–60 minute în care ascultăm. Nu vindem nimic. Vrem să înțelegem business-ul tău înainte să propunem orice soluție.',
      label: 'Discovery',
    },
    {
      num: '02',
      title: 'Ofertă clară în scris',
      text: 'Scope fix, preț fix, termen fix. Fără costuri ascunse, fără "depinde". Dacă nu e potrivit pentru tine, îți spunem direct.',
      label: 'Propunere',
    },
    {
      num: '03',
      title: 'Construim și comunicăm',
      text: 'Sprint de 2–4 săptămâni cu update-uri regulate. Ești implicat cât vrei — mai mult sau mai puțin, tu decizi.',
      label: 'Build',
    },
    {
      num: '04',
      title: 'Livrăm și rămânem',
      text: 'Training, documentație, suport post-livrare. Nu dispărem după ce transferăm fișierele.',
      label: 'Livrare',
    },
  ]

  return (
    <section
      id="cum-lucram"
      aria-labelledby="cum-lucram-heading"
      className="py-24 sm:py-32"
      style={{ background: offWhite }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={v} initial="hidden" whileInView="visible" viewport={VP} className="mb-16">
          <p className="font-sans text-[11px] tracking-[0.14em] uppercase mb-5" style={{ color: terra }}>
            Procesul
          </p>
          <h2
            id="cum-lucram-heading"
            className="font-serif leading-tight tracking-tight mb-4"
            style={{ color: darkText, fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300 }}
          >
            Simplu, transparent,
            <br />fără surprize.
          </h2>
          <p className="font-sans text-base leading-[1.75] max-w-lg" style={{ color: '#4A4744', fontWeight: 300 }}>
            De la primul apel la livrare, știi exact ce urmează și când.
            Nu dispărem după contract.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <motion.div key={s.num} variants={v} initial="hidden" whileInView="visible" viewport={VP}>
              <div
                className="font-serif mb-4 leading-none"
                style={{ fontSize: '3.5rem', color: terra, fontWeight: 300, opacity: 0.3 }}
              >
                {s.num}
              </div>
              <p className="font-sans text-[11px] tracking-[0.12em] uppercase mb-2" style={{ color: terra }}>
                {s.label}
              </p>
              <h3 className="font-sans text-base font-medium mb-3 leading-snug" style={{ color: darkText }}>
                {s.title}
              </h3>
              <p className="font-sans text-sm leading-[1.75]" style={{ color: '#4A4744', fontWeight: 300 }}>
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── DE CE CROIT ─────────────────────────────────────────── */

function DeCeCroitSection() {
  const reduce = useReducedMotion() ?? false
  const v = fadeUp(reduce)

  const cards = [
    {
      title: 'Spunem adevărul',
      text: 'Dacă ceva nu se poate face în bugetul sau termenul tău, îți spunem imediat. Nu pierdem timp cu promisiuni pe care nu le putem ține.',
    },
    {
      title: 'De 3–5x mai rapid',
      text: 'Folosim instrumente AI de ultimă generație care ne permit să livrăm în săptămâni ceea ce altădată dura luni. Economiile se transferă parțial la tine.',
    },
    {
      title: 'Înțelegem industria ta',
      text: 'Am stat în fabrici și am văzut cum arată haosul operațional de zi cu zi. Nu vindem soluții generice — construim pe problema ta specifică.',
    },
    {
      title: 'Rămânem oameni',
      text: 'Ai un număr de telefon real. Primești răspuns în aceeași zi. Nu ești un ticket într-un sistem de suport.',
    },
  ]

  return (
    <section
      id="de-ce"
      aria-labelledby="de-ce-heading"
      className="py-24 sm:py-32"
      style={{ background: dark }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={v} initial="hidden" whileInView="visible" viewport={VP} className="mb-16">
          <p className="font-sans text-[11px] tracking-[0.14em] uppercase mb-5" style={{ color: terra }}>
            De ce noi
          </p>
          <h2
            id="de-ce-heading"
            className="font-serif leading-tight tracking-tight"
            style={{ color: cream, fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300 }}
          >
            Nu facem magie.
            <br />Facem cod bun, livrat la timp.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={v} initial="hidden" whileInView="visible" viewport={VP}
              className="p-8 rounded-lg"
              style={{ background: '#1F1F1B', border: `1px solid rgba(193,78,48,0.15)` }}
            >
              <h3 className="font-sans text-base font-medium mb-3" style={{ color: cream }}>{c.title}</h3>
              <p className="font-sans text-sm leading-[1.8]" style={{ color: grey, fontWeight: 300 }}>{c.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Pull quote */}
        <motion.blockquote
          variants={v} initial="hidden" whileInView="visible" viewport={VP}
          className="text-center max-w-2xl mx-auto"
          style={{ borderTop: `1px solid #2C2C28`, paddingTop: '3rem' }}
        >
          <p
            className="font-serif leading-snug tracking-tight"
            style={{ color: cream, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 300, fontStyle: 'italic' }}
          >
            „Un sistem bun nu se simte.
            <br />Se vede în timp salvat, erori evitate și bani recuperați."
          </p>
        </motion.blockquote>
      </div>
    </section>
  )
}

/* ── CONTACT ─────────────────────────────────────────────── */

function ContactSection() {
  const reduce = useReducedMotion() ?? false
  const v = fadeUp(reduce)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', type: '', message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#fff',
    border: `1px solid ${greyLt}`,
    borderRadius: 4,
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    color: darkText,
    outline: 'none',
    fontFamily: 'var(--font-jakarta)',
    fontWeight: 300,
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.75rem',
    fontWeight: 500,
    letterSpacing: '0.06em',
    marginBottom: '0.4rem',
    color: '#4A4744',
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 sm:py-32"
      style={{ background: offWhite }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div variants={v} initial="hidden" whileInView="visible" viewport={VP}>
            <p className="font-sans text-[11px] tracking-[0.14em] uppercase mb-5" style={{ color: terra }}>
              Hai să vorbim
            </p>
            <h2
              id="contact-heading"
              className="font-serif leading-tight tracking-tight mb-6"
              style={{ color: darkText, fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300 }}
            >
              Primul apel e gratuit
              <br />și fără angajament.
            </h2>
            <p className="font-sans text-base leading-[1.75] mb-10 max-w-sm" style={{ color: '#4A4744', fontWeight: 300 }}>
              Povestiți-ne despre afacerea ta și despre ce te doare cel mai tare.
              Noi îți spunem sincer dacă putem ajuta și cum.
              Nu vindem în primul apel — ascultăm.
            </p>

            <div className="space-y-4">
              {[
                { icon: '✉', label: 'contact@croit.ro', href: 'mailto:contact@croit.ro' },
                { icon: '☎', label: '+40 740 000 000', href: 'tel:+40740000000' },
                { icon: '◉', label: 'Brașov, România', href: undefined },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <span style={{ color: terra, fontSize: '1rem', width: 20, textAlign: 'center' }}>{c.icon}</span>
                  {c.href ? (
                    <a href={c.href} className="font-sans text-sm transition-colors duration-150" style={{ color: '#4A4744', fontWeight: 300 }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = terra)}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#4A4744')}
                    >{c.label}</a>
                  ) : (
                    <span className="font-sans text-sm" style={{ color: '#4A4744', fontWeight: 300 }}>{c.label}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div variants={v} initial="hidden" whileInView="visible" viewport={VP}>
            {sent ? (
              <div
                className="rounded-lg p-10 text-center"
                style={{ background: '#fff', border: `1px solid ${greyLt}` }}
              >
                <div className="mb-4 text-4xl" aria-hidden="true">✓</div>
                <h3 className="font-serif text-2xl mb-3" style={{ color: darkText, fontWeight: 300 }}>
                  Mesaj trimis!
                </h3>
                <p className="font-sans text-sm" style={{ color: '#4A4744', fontWeight: 300 }}>
                  Răspundem în maximum 24 de ore în zilele lucrătoare.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-lg p-8 space-y-5"
                style={{ background: '#fff', border: `1px solid ${greyLt}` }}
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Nume și prenume *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = terra)}
                      onBlur={(e) => (e.target.style.borderColor = greyLt)}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = terra)}
                      onBlur={(e) => (e.target.style.borderColor = greyLt)}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Telefon <span style={{ fontWeight: 300 }}>(opțional)</span></label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = terra)}
                    onBlur={(e) => (e.target.style.borderColor = greyLt)}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Tipul proiectului</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    style={{ ...inputStyle, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%238C8882' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', paddingRight: '2.5rem', cursor: 'pointer' }}
                    onFocus={(e) => (e.target.style.borderColor = terra)}
                    onBlur={(e) => (e.target.style.borderColor = greyLt)}
                  >
                    <option value="">— Selectează —</option>
                    <option value="app">Aplicație internă</option>
                    <option value="site">Site web</option>
                    <option value="other">Nu știu încă</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Descrie pe scurt ce ai nevoie</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                    onFocus={(e) => (e.target.style.borderColor = terra)}
                    onBlur={(e) => (e.target.style.borderColor = greyLt)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-sm font-medium transition-colors duration-150 rounded"
                  style={{ background: terra, color: cream, borderRadius: 5 }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#8F3520')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = terra)}
                >
                  Trimite mesajul
                </button>

                <p className="text-center font-sans text-[12px]" style={{ color: grey }}>
                  Răspundem în maximum 24 de ore în zilele lucrătoare.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── FOOTER ──────────────────────────────────────────────── */

function FooterSection() {
  const cols = [
    {
      title: 'Servicii',
      links: ['Aplicații interne', 'Site-uri de prezentare', 'Landing pages', 'Mentenanță și suport'],
    },
    {
      title: 'Companie',
      links: ['Despre noi', 'Cum lucrăm', 'De ce Croit', 'Contact'],
    },
    {
      title: 'Contact',
      links: ['contact@croit.ro', '+40 740 000 000', 'Brașov, România'],
    },
  ]

  return (
    <footer style={{ background: dark, borderTop: `1px solid #2C2C28` }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo col */}
          <div>
            <FooterLogo />
            <p
              className="font-sans text-[12px] mt-5"
              style={{ color: grey, fontWeight: 300 }}
            >
              Digital pe măsura ta.
            </p>
          </div>

          {/* Link cols */}
          {cols.map((col) => (
            <div key={col.title}>
              <p
                className="font-sans text-[11px] tracking-[0.14em] uppercase mb-4"
                style={{ color: terra }}
              >
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <span className="font-sans text-sm" style={{ color: grey, fontWeight: 300 }}>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: `1px solid #2C2C28`, paddingTop: '1.5rem' }}>
          <p className="font-sans text-[12px]" style={{ color: 'rgba(140,136,130,0.4)' }}>
            © 2025 Croit. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ── PAGE ────────────────────────────────────────────────── */

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <PentruCineSection />
        <ServiciiSection />
        <CumLucramSection />
        <DeCeCroitSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  )
}
