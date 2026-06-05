import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  ChevronLeft,
  ChevronRight,
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
  ['Luis Floria', 'Personal Brand', '/media/previews/luis-floria.jpg', 'https://luis-floria-hustler-portfolio.vercel.app/'],
  ['Eventmanufaktur Esch', 'Premium Events', '/media/previews/eventmanufaktur.jpg', 'https://www.eventmanufaktur-esch.de/'],
  ['Hüpfi', 'Eventmanufaktur', '/media/previews/huepfi.jpg', 'https://www.xn--hpfi-0ra.de/'],
  ['Swyone', 'Studio System', '/media/previews/swyone.jpg', 'https://swyone.com/'],
  ['Fuel Radar', 'SaaS Dashboard', '/media/previews/fuel-radar.jpg', 'https://www.fuel-radar.online/'],
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
  ['01', 'Strategie', 'Wir klären Angebot, Zielgruppe und warum Kunden sofort vertrauen sollen.', 'Positionierung'],
  ['02', 'Konzept', 'Wir bauen Hero, Services, Cases und Kontaktwege als sauberen Verkaufsfluss.', 'Struktur'],
  ['03', 'Preview', 'Du siehst früh eine hochwertige Version und gibst Feedback direkt am echten Look.', '14 Tage'],
  ['04', 'Launch', 'Wir veröffentlichen mit Hosting, Pflege und SEO-Basis in einem stabilen System.', 'Live System'],
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

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const palette = ['#4f7fff', '#6ea8fe', '#3a7bd5', '#80d0ff']
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 }
    let width = 0
    let height = 0
    let dpr = 1
    let frame = 0
    let particles = []

    const createParticles = () => {
      const count = window.innerWidth <= 768 ? 3000 : 10500
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        bx: Math.random() * width,
        by: Math.random() * height,
        vx: 0,
        vy: 0,
        phase: Math.random() * Math.PI * 2,
        speed: 0.35 + Math.random() * 0.75,
        size: 0.55 + Math.random() * 1.35,
        color: palette[Math.floor(Math.random() * palette.length)],
      }))
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      createParticles()
    }

    const onMouseMove = (event) => {
      mouse.tx = event.clientX
      mouse.ty = event.clientY
    }

    const onMouseLeave = () => {
      mouse.tx = -9999
      mouse.ty = -9999
    }

    const draw = (time) => {
      frame = requestAnimationFrame(draw)
      mouse.x += (mouse.tx - mouse.x) * 0.04
      mouse.y += (mouse.ty - mouse.y) * 0.04
      context.clearRect(0, 0, width, height)
      context.fillStyle = '#0a0d1a'
      context.fillRect(0, 0, width, height)
      context.globalCompositeOperation = 'lighter'

      particles.forEach((particle, index) => {
        const waveX = Math.sin(time * 0.00022 * particle.speed + particle.phase + particle.by * 0.006) * 18
        const waveY = Math.cos(time * 0.00018 * particle.speed + particle.phase + particle.bx * 0.004) * 14
        const targetX = particle.bx + waveX
        const targetY = particle.by + waveY
        const dx = particle.x - mouse.x
        const dy = particle.y - mouse.y
        const distance = Math.hypot(dx, dy)

        if (distance < 80) {
          const force = (1 - distance / 80) * 0.3
          particle.vx += (dx / Math.max(distance, 1)) * force * 18
          particle.vy += (dy / Math.max(distance, 1)) * force * 18
        }

        particle.vx += (targetX - particle.x) * 0.012
        particle.vy += (targetY - particle.y) * 0.012
        particle.vx *= 0.88
        particle.vy *= 0.88
        particle.x += particle.vx
        particle.y += particle.vy

        context.beginPath()
        context.fillStyle = particle.color
        context.globalAlpha = 0.22 + Math.sin(time * 0.001 + index) * 0.08
        context.shadowColor = particle.color
        context.shadowBlur = 9
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fill()
      })

      context.shadowBlur = 0
      context.lineWidth = 0.45
      for (let i = 0; i < particles.length; i += 18) {
        const a = particles[i]
        for (let j = i + 18; j < Math.min(i + 220, particles.length); j += 36) {
          const b = particles[j]
          const distance = Math.hypot(a.x - b.x, a.y - b.y)
          if (distance < 54) {
            context.globalAlpha = (1 - distance / 54) * 0.14
            context.strokeStyle = '#80d0ff'
            context.beginPath()
            context.moveTo(a.x, a.y)
            context.lineTo(b.x, b.y)
            context.stroke()
          }
        }
      }

      context.globalAlpha = 1
      context.globalCompositeOperation = 'source-over'
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
    frame = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return <canvas id="particleCanvas" ref={canvasRef} aria-hidden="true" />
}

function HeroDevice() {
  return (
    <div className="hero-device">
      <img src="/media/phone-nextera-cut.png" alt="" />
    </div>
  )
}

function ClientSlideshow() {
  const [active, setActive] = useState(0)
  const current = clients[active]

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((index) => (index + 1) % clients.length)
    }, 3800)
    return () => clearInterval(timer)
  }, [])

  const changeSlide = (direction) => {
    setActive((index) => (index + direction + clients.length) % clients.length)
  }

  return (
    <div className="client-slider">
      <AnimatePresence mode="wait">
        <motion.article
          className="client-feature"
          key={current[0]}
          initial={{ opacity: 0, x: 42, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -42, scale: 0.98 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <img src={current[2]} alt="" />
          <div>
            <span>{current[1]}</span>
            <strong>{current[0]}</strong>
            <a href={current[3]} target="_blank" rel="noreferrer">Projekt öffnen <ExternalLink size={14} /></a>
          </div>
        </motion.article>
      </AnimatePresence>

      <div className="slider-controls">
        <button type="button" onClick={() => changeSlide(-1)} aria-label="Vorheriges Projekt">
          <ChevronLeft size={22} />
        </button>
        <div className="slider-dots">
          {clients.map(([name], index) => (
            <button
              type="button"
              aria-label={name}
              className={index === active ? 'active' : ''}
              key={name}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
        <button type="button" onClick={() => changeSlide(1)} aria-label="Nächstes Projekt">
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)
  const [deviceMode, setDeviceMode] = useState('hero')
  const [entryStarted, setEntryStarted] = useState(false)
  const introRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: introRef, offset: ['start start', 'end end'] })

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1750)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (loading) return undefined
    const timer = setTimeout(() => setEntryStarted(true), 300)
    return () => clearTimeout(timer)
  }, [loading])

  useEffect(() => {
    const targets = [
      ['top', 'hero'],
      ['services', 'services'],
      ['clients', 'clients'],
      ['contact', 'cta'],
    ]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        const match = targets.find(([id]) => id === visible?.target.id)
        if (match) setDeviceMode(match[1])
      },
      { threshold: [0.35, 0.55], rootMargin: '-20% 0px -35% 0px' },
    )
    targets.forEach(([id]) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (event) => {
    document.documentElement.style.setProperty('--mx', `${event.clientX}px`)
    document.documentElement.style.setProperty('--my', `${event.clientY}px`)
  }

  const introOpacity = useTransform(scrollYProgress, [0, 0.1, 0.16], [1, 1, 0])
  const headlineOpacity = useTransform(scrollYProgress, [0.2, 0.32, 0.53, 0.62], [0, 1, 1, 0])
  const bottomOpacity = useTransform(scrollYProgress, [0.64, 0.76, 1], [0, 1, 1])
  const deviceX = useTransform(
    scrollYProgress,
    [0, 0.16, 0.34, 0.62, 0.8, 1],
    ['-50%', '-50%', '13vw', '13vw', '-50%', '-50%'],
  )
  return (
    <main onMouseMove={handleMouseMove}>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      <nav className="nav-pill">
        <a className="nav-logo" href="#top"><img src="/media/nextera-mark.svg" alt="NextEra Studio" /></a>
        <a href="#work">Arbeit</a>
        <a href="#clients">Kunden</a>
        <a href="#team">Team</a>
        <a className="nav-cta" href="#contact">Anfrage</a>
      </nav>

      <section id="top" className="intro" ref={introRef}>
        <div className="hero-stage">
          <ParticleCanvas />
          <motion.div className="intro-label" style={{ opacity: introOpacity }}>
            Webagentur für moderne Unternehmen
          </motion.div>
          {!loading && (
            <motion.div className="device-motion-frame" style={{ x: deviceX }}>
              <motion.div
                className={`laptop-wrap ${entryStarted ? `device-${deviceMode}` : 'device-entry'}`}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <HeroDevice />
              </motion.div>
            </motion.div>
          )}
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
        <ClientSlideshow />
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
          {steps.map(([number, title, text, tag], index) => (
            <motion.article key={number} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.09 }}>
              <span>{number}</span>
              <small>{tag}</small>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
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
