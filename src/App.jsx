import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Building2,
  BriefcaseBusiness,
  Camera,
  Globe2,
  Mail,
  MapPinned,
  Phone,
} from 'lucide-react'
import { useRef } from 'react'
import './App.css'

const links = {
  phone: '+491234567890',
  mail: 'hello@nextera.studio',
  instagram: 'https://instagram.com/nextera.studio',
}

const stats = [
  ['14 Tage', 'bis erste starke Preview'],
  ['100%', 'responsive Umsetzung'],
  ['1 System', 'Website, Hosting und Pflege'],
]

const services = [
  ['Website Design', 'Premium Look, klare Texte und eine Startseite, die sofort Vertrauen schafft.'],
  ['Website Umsetzung', 'Schnelle, saubere Seiten für Handy, Tablet und Desktop.'],
  ['Hosting & Pflege', 'Veröffentlichung, Technik, Wartung und laufende Betreuung.'],
  ['SEO & Anfragen', 'Struktur, Kontaktwege und Inhalte, damit Besucher leichter Kunden werden.'],
]

const projects = [
  ['Handwerker Website', 'Mehr lokale Anfragen', 'Vorher: alte Website ohne Vertrauen', 'Nachher: klare Seite mit Anfrageformular'],
  ['Restaurant Auftritt', 'Bessere mobile Ansicht', 'Vorher: Speisekarte schwer lesbar', 'Nachher: mobile Seite mit Maps und Kontakt'],
  ['Berater Portfolio', 'Premium Personal Brand', 'Vorher: kein klares Angebot', 'Nachher: starker Auftritt mit Cases'],
]

const steps = [
  ['01', 'Check', 'Wir schauen uns Website, Angebot und Zielgruppe an.'],
  ['02', 'Preview', 'Du bekommst eine moderne Vorschau statt nur Theorie.'],
  ['03', 'Feedback', 'Wir verbessern Design, Texte und Kontaktwege.'],
  ['04', 'Launch', 'Wir veröffentlichen Website, Hosting und Grund-SEO.'],
]

const accounts = [
  ['Instagram', Camera, 'Content, Portfolio und Kundenvertrauen.'],
  ['Google Business', MapPinned, 'Lokale Sichtbarkeit und direkte Anfragen.'],
  ['LinkedIn', BriefcaseBusiness, 'Seriöser Auftritt für B2B-Kunden.'],
  ['Website Portfolio', Globe2, 'Cases, Services und Kontakt an einem Ort.'],
]

function Laptop() {
  return (
    <div className="laptop">
      <div className="laptop-lid">
        <div className="screen-inner">
          <div className="scanlines" />
          <div className="screen-mark">Next Era</div>
        </div>
      </div>
      <div className="laptop-hinge" />
      <div className="laptop-bottom" />
    </div>
  )
}

function App() {
  const introRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: introRef, offset: ['start start', 'end end'] })

  const introOpacity = useTransform(scrollYProgress, [0, 0.16, 0.24], [1, 1, 0])
  const headlineOpacity = useTransform(scrollYProgress, [0.2, 0.34, 0.58, 0.68], [0, 1, 1, 0])
  const subOpacity = useTransform(scrollYProgress, [0.62, 0.74, 1], [0, 1, 1])

  const laptopX = useTransform(scrollYProgress, [0, 0.2, 0.44, 0.7, 1], ['0vw', '0vw', '25vw', '25vw', '0vw'])
  const laptopY = useTransform(scrollYProgress, [0, 0.2, 0.44, 0.72, 1], ['6vh', '0vh', '2vh', '-22vh', '-30vh'])
  const laptopScale = useTransform(scrollYProgress, [0, 0.22, 0.46, 0.75, 1], [0.54, 1.04, 0.86, 0.78, 0.7])
  const laptopRotate = useTransform(scrollYProgress, [0, 0.42, 0.72, 1], [0, -11, 9, 0])

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">NextEra Studio</a>
        <div>
          <a href="#services">Services</a>
          <a href="#work">Cases</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="intro" ref={introRef}>
        <div className="hero-stage">
          <motion.div className="intro-label" style={{ opacity: introOpacity }}>
            Webagentur für moderne Unternehmen
          </motion.div>

          <motion.div
            className="laptop-wrap"
            style={{ x: laptopX, y: laptopY, scale: laptopScale, rotateY: laptopRotate }}
          >
            <Laptop />
          </motion.div>

          <motion.div className="headline-panel" style={{ opacity: headlineOpacity }}>
            <span>Was wir bauen</span>
            <h1>Websites, die sofort Vertrauen aufbauen.</h1>
          </motion.div>

          <motion.div className="hero-bottom" style={{ opacity: subOpacity }}>
            <p>
              Wir erstellen Premium-Websites für Unternehmen, Selbstständige und Creator.
              Klarer Look, gute Struktur, einfache Kontaktwege.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Kostenlose Anfrage <ArrowRight size={17} /></a>
              <a className="button ghost" href={`tel:${links.phone}`}><Phone size={17} /> Anrufen</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="proof">
        {stats.map(([number, label], index) => (
          <motion.article
            key={number}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ delay: index * 0.12, duration: 0.6 }}
          >
            <strong>{number}</strong>
            <span>{label}</span>
          </motion.article>
        ))}
      </section>

      <section id="services" className="section services">
        <div className="section-head">
          <span>Services</span>
          <h2>Alles, was eine starke Website braucht.</h2>
        </div>
        <div className="service-list">
          {services.map(([title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ delay: index * 0.08 }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="work" className="section work">
        <div className="section-head">
          <span>Portfolio</span>
          <h2>So zeigen wir Kunden echte Veränderung.</h2>
        </div>
        <div className="project-grid">
          {projects.map(([title, tag, before, after], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mockup">
                <div />
                <span>{tag}</span>
              </div>
              <h3>{title}</h3>
              <p>{before}</p>
              <p>{after}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section accounts">
        <div>
          <span>Konten & Kanäle</span>
          <h2>Website, Socials und Anfragewege sauber verbunden.</h2>
        </div>
        <div className="account-list">
          {accounts.map(([name, Icon, text], index) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08 }}
            >
              <Icon size={24} />
              <div>
                <strong>{name}</strong>
                <p>{text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section process">
        <div className="section-head">
          <span>Ablauf</span>
          <h2>Einfach aufgebaut. Schnell verstanden.</h2>
        </div>
        <div className="process-grid">
          <div className="process-visual">
            <Building2 size={34} />
            <strong>Von schwacher Website</strong>
            <span>zu klarem Online-Auftritt</span>
          </div>
          <div className="steps">
            {steps.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-copy">
          <span>Kontakt</span>
          <h2>Schick uns dein Projekt.</h2>
          <p>Wir melden uns mit einer klaren Einschätzung und einem nächsten Schritt.</p>
          <a className="phone-link" href={`tel:${links.phone}`}><Phone size={18} /> Direkt anrufen</a>
          <a className="phone-link" href={`mailto:${links.mail}`}><Mail size={18} /> E-Mail senden</a>
        </div>
        <form>
          <label>
            Name
            <input name="name" placeholder="Max Mustermann" />
          </label>
          <label>
            Firma
            <input name="company" placeholder="Dein Unternehmen" />
          </label>
          <label>
            Telefon oder E-Mail
            <input name="contact" placeholder="+49 ... oder mail@..." />
          </label>
          <label>
            Was brauchst du?
            <textarea name="message" placeholder="Neue Website, Relaunch, Hosting, SEO ..." />
          </label>
          <button type="button">Anfrage senden <ArrowRight size={17} /></button>
        </form>
      </section>
    </main>
  )
}

export default App
