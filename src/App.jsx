import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  ExternalLink,
  Globe2,
  Mail,
  MapPinned,
  Phone,
  Sparkles,
  UserRound,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import './App.css'

const links = {
  phone: '+491234567890',
  mail: 'hello@nextera.studio',
}

const stats = [
  ['14 Tage', 'bis erste starke Preview'],
  ['100%', 'responsive Umsetzung'],
  ['1 System', 'Website, Hosting, Pflege'],
]

const services = [
  ['Website Design', 'Premium Look, klare Texte und sofort Vertrauen.'],
  ['Website Umsetzung', 'Saubere Seiten für Handy, Tablet und Desktop.'],
  ['Hosting & Pflege', 'Veröffentlichung, Technik und langfristige Betreuung.'],
  ['SEO & Anfragen', 'Struktur und Kontaktwege, damit Besucher Kunden werden.'],
]

const portfolio = [
  [
    'Handwerker Website',
    'Mehr lokale Anfragen',
    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80',
  ],
  [
    'Restaurant Auftritt',
    'Bessere mobile Ansicht',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80',
  ],
  [
    'Berater Portfolio',
    'Premium Personal Brand',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80',
  ],
]

const clients = [
  ['Eventmanufaktur Esch', 'Premium Events', 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80', 'https://www.eventmanufaktur-esch.de/'],
  ['Höpfi', 'Eventmanufaktur', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80', 'https://www.xn--hpfi-0ra.de/'],
  ['Swyone', 'Studio System', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80', 'https://swyone.com/'],
  ['Fuel Radar', 'SaaS Dashboard', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80', 'https://www.fuel-radar.online/'],
]

const accounts = [
  ['Instagram', Camera, 'Portfolio, Content und Vertrauen.'],
  ['Google Business', MapPinned, 'Lokale Sichtbarkeit und direkte Anfragen.'],
  ['LinkedIn', BriefcaseBusiness, 'Seriöser B2B-Auftritt.'],
  ['Website Portfolio', Globe2, 'Cases, Services und Kontakt.'],
]

const team = [
  ['Luis Florian', 'Developer & CTO', 'Website-Aufbau, Designsysteme und Umsetzung.'],
  ['Mario Augusto', 'Sales & Operations', 'Kundengewinnung, Beratung und Projektablauf.'],
]

const steps = [
  ['01', 'Analyse', 'Wir prüfen Website, Angebot und Zielgruppe.'],
  ['02', 'Preview', 'Du bekommst eine moderne Vorschau.'],
  ['03', 'Feinschliff', 'Wir verbessern Design, Texte und Kontaktwege.'],
  ['04', 'Launch', 'Wir veröffentlichen sauber mit Hosting und SEO-Basis.'],
]

function LoadingScreen() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let frame
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / 1500, 1)
      setCount(Math.round(progress * 100))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <motion.div className="loader" exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
      <span>NextEra Studio</span>
      <strong>{String(count).padStart(3, '0')}</strong>
      <i style={{ transform: `scaleX(${count / 100})` }} />
    </motion.div>
  )
}

function PixelField() {
  return <div className="pixel-field" />
}

function RealLaptop() {
  return (
    <div className="real-laptop">
      <div className="real-lid">
        <video autoPlay muted loop playsInline poster="/media/laptop-glow.png">
          <source src="/media/laptop-glow.mp4" type="video/mp4" />
        </video>
        <span>Next Era</span>
      </div>
      <div className="real-keyboard" />
      <div className="real-base" />
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)
  const introRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: introRef, offset: ['start start', 'end end'] })

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1750)
    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = (event) => {
    document.documentElement.style.setProperty('--mx', `${event.clientX}px`)
    document.documentElement.style.setProperty('--my', `${event.clientY}px`)
  }

  const introOpacity = useTransform(scrollYProgress, [0, 0.1, 0.16], [1, 1, 0])
  const headlineOpacity = useTransform(scrollYProgress, [0.2, 0.32, 0.53, 0.62], [0, 1, 1, 0])
  const bottomOpacity = useTransform(scrollYProgress, [0.64, 0.76, 1], [0, 1, 1])
  const laptopX = useTransform(scrollYProgress, [0, 0.2, 0.42, 0.66, 1], ['0vw', '0vw', '31vw', '0vw', '0vw'])
  const laptopY = useTransform(scrollYProgress, [0, 0.2, 0.42, 0.66, 1], ['7vh', '0vh', '1vh', '1vh', '-10vh'])
  const laptopScale = useTransform(scrollYProgress, [0, 0.2, 0.42, 0.66, 1], [0.42, 1.12, 0.76, 1.02, 0.78])
  const laptopRotate = useTransform(scrollYProgress, [0, 0.42, 0.66, 1], [0, -10, 0, 0])

  return (
    <main onMouseMove={handleMouseMove}>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      <nav className="nav-pill">
        <a className="nav-logo" href="#top">NE</a>
        <a href="#work">Arbeit</a>
        <a href="#clients">Kunden</a>
        <a href="#team">Team</a>
        <a className="nav-cta" href="#contact">Anfrage</a>
      </nav>

      <section id="top" className="intro" ref={introRef}>
        <div className="hero-stage">
          <PixelField />
          <motion.div className="intro-label" style={{ opacity: introOpacity }}>
            Webagentur für moderne Unternehmen
          </motion.div>
          <motion.div className="laptop-wrap" style={{ x: laptopX, y: laptopY, scale: laptopScale, rotateY: laptopRotate }}>
            <RealLaptop />
          </motion.div>
          <motion.div className="headline-panel" style={{ opacity: headlineOpacity }}>
            <span>Was wir bauen</span>
            <h1>Websites, die sofort Vertrauen aufbauen.</h1>
          </motion.div>
          <motion.div className="hero-bottom" style={{ opacity: bottomOpacity }}>
            <p>Wir erstellen Premium-Websites für Unternehmen, Selbstständige und Creator. Klarer Look, gute Struktur, einfache Kontaktwege.</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Kostenlose Anfrage <ArrowRight size={17} /></a>
              <a className="button ghost" href={`tel:${links.phone}`}><Phone size={17} /> Anrufen</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="proof">
        {stats.map(([number, label], index) => (
          <motion.article key={number} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
            <strong>{number}</strong>
            <span>{label}</span>
          </motion.article>
        ))}
      </section>

      <section id="services" className="section services">
        <SectionHead eyebrow="Services" title="Alles, was eine starke Website braucht." />
        <div className="service-list">
          {services.map(([title, text], index) => (
            <motion.article key={title} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="work" className="section work">
        <SectionHead eyebrow="Portfolio" title="Unsere Arbeit zeigt echte Veränderung." />
        <div className="portfolio-grid">
          {portfolio.map(([title, tag, image], index) => (
            <motion.article key={title} className="image-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <img src={image} alt="" />
              <div><span>{tag}</span><h3>{title}</h3></div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="clients" className="section clients">
        <SectionHead eyebrow="Unsere Kunden" title="Live-Projekte direkt verlinkt." />
        <div className="client-grid">
          {clients.map(([name, tag, image, url], index) => (
            <motion.a href={url} target="_blank" rel="noreferrer" key={name} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
              <img src={image} alt="" />
              <div>
                <span>{tag}</span>
                <strong>{name}</strong>
                <small>Projekt öffnen <ExternalLink size={14} /></small>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="section accounts">
        <SectionHead eyebrow="Konten" title="Website, Socials und Anfragewege verbunden." />
        <div className="account-list">
          {accounts.map(([name, Icon, text], index) => (
            <motion.article key={name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
              <Icon size={24} />
              <div><strong>{name}</strong><p>{text}</p></div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="team" className="section team">
        <SectionHead eyebrow="Team" title="Kleines Team. Klare Rollen. Erweiterbar." />
        <div className="team-row">
          {team.map(([name, role, text]) => (
            <motion.article key={name} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="avatar"><UserRound size={42} /></div>
              <span>{role}</span>
              <h3>{name}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section process">
        <SectionHead eyebrow="Ablauf" title="Einfach aufgebaut. Schnell verstanden." />
        <div className="steps">
          {steps.map(([number, title, text]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <PixelField />
        <div className="marquee"><span>BUILT FOR TOMORROW - BUILT FOR TOMORROW - BUILT FOR TOMORROW - </span></div>
        <div className="contact-copy">
          <span>Kontakt</span>
          <h2>Schick uns dein Projekt.</h2>
          <p>Wir melden uns mit einer klaren Einschätzung und einem nächsten Schritt.</p>
          <a className="phone-link" href={`tel:${links.phone}`}><Phone size={18} /> Direkt anrufen</a>
          <a className="phone-link" href={`mailto:${links.mail}`}><Mail size={18} /> E-Mail senden</a>
        </div>
        <form>
          <label>Name<input name="name" placeholder="Max Mustermann" /></label>
          <label>Firma<input name="company" placeholder="Dein Unternehmen" /></label>
          <label>Telefon oder E-Mail<input name="contact" placeholder="+49 ... oder mail@..." /></label>
          <label>Was brauchst du?<textarea name="message" placeholder="Neue Website, Relaunch, Hosting, SEO ..." /></label>
          <button type="button">Anfrage senden <ArrowRight size={17} /></button>
        </form>
      </section>
    </main>
  )
}

function SectionHead({ eyebrow, title }) {
  return (
    <motion.div className="section-head" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </motion.div>
  )
}

export default App
