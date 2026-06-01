import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Check, Mail, Phone, Star } from 'lucide-react'
import { useRef } from 'react'
import './App.css'

const links = {
  phone: '+491234567890',
  mail: 'hello@nextera.studio',
  instagram: 'https://instagram.com/nextera.studio',
}

const services = [
  {
    label: '01',
    title: 'Website Design',
    text: 'Wir bauen moderne Websites, die sofort hochwertig wirken und Vertrauen schaffen.',
  },
  {
    label: '02',
    title: 'Website Umsetzung',
    text: 'Schnelle, saubere und responsive Seiten für Handy, Tablet und Desktop.',
  },
  {
    label: '03',
    title: 'Hosting & Pflege',
    text: 'Wir kümmern uns um Veröffentlichung, Technik, Updates und langfristige Betreuung.',
  },
  {
    label: '04',
    title: 'SEO & Anfragen',
    text: 'Klare Struktur, gute Texte und Kontaktwege, damit Besucher zu Kunden werden.',
  },
]

const projects = [
  {
    title: 'Handwerker Website',
    tag: 'Mehr lokale Anfragen',
    before: 'Alte Website ohne Vertrauen',
    after: 'Klare Startseite mit Anfrageformular',
  },
  {
    title: 'Restaurant Auftritt',
    tag: 'Bessere mobile Ansicht',
    before: 'Speisekarte schwer lesbar',
    after: 'Mobile-first Website mit Google Maps',
  },
  {
    title: 'Berater Portfolio',
    tag: 'Premium Personal Brand',
    before: 'Kein klarer Eindruck',
    after: 'Starker Auftritt mit Cases',
  },
]

const stats = [
  ['14 Tage', 'bis erste starke Preview'],
  ['100%', 'responsive Umsetzung'],
  ['1 System', 'für Website, Hosting und Pflege'],
]

const steps = [
  'Wir schauen uns deine aktuelle Website an.',
  'Wir bauen eine moderne Vorschau.',
  'Du gibst Feedback und Wünsche.',
  'Wir veröffentlichen sauber und schnell.',
]

const accounts = ['Instagram', 'Google Business', 'LinkedIn', 'Website Portfolio']

function App() {
  const introRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: introRef, offset: ['start start', 'end end'] })
  const laptopX = useTransform(scrollYProgress, [0, 0.45, 1], ['2vw', '-7vw', '4vw'])
  const laptopY = useTransform(scrollYProgress, [0, 0.45, 1], ['8vh', '-4vh', '-16vh'])
  const laptopRotate = useTransform(scrollYProgress, [0, 0.45, 1], [-12, 9, -6])
  const laptopScale = useTransform(scrollYProgress, [0, 0.45, 1], [1.08, 0.92, 1.12])
  const copyOpacity = useTransform(scrollYProgress, [0, 0.28, 0.44], [1, 1, 0])
  const secondOpacity = useTransform(scrollYProgress, [0.5, 0.68, 1], [0, 1, 1])

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
          <motion.div
            className="laptop-scene"
            style={{ x: laptopX, y: laptopY, rotateY: laptopRotate, scale: laptopScale }}
          >
            <div className="laptop-screen">
              <video autoPlay muted loop playsInline poster="/media/laptop-glow.png">
                <source src="/media/laptop-glow.mp4" type="video/mp4" />
              </video>
              <div className="screen-fill" />
              <strong>Next Era</strong>
            </div>
            <div className="laptop-base" />
          </motion.div>

          <motion.div className="hero-copy" style={{ opacity: copyOpacity }}>
            <span>Webagentur für moderne Unternehmen</span>
            <h1>Websites, die sofort Vertrauen aufbauen.</h1>
            <p>
              Wir erstellen Premium-Websites für Unternehmen, Selbstständige und Creator.
              Klarer Look, gute Struktur, einfache Kontaktwege.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Kostenlose Anfrage <ArrowRight size={17} /></a>
              <a className="button ghost" href={`tel:${links.phone}`}><Phone size={17} /> Anrufen</a>
            </div>
          </motion.div>

          <motion.div className="hero-note" style={{ opacity: secondOpacity }}>
            <span>Was wir bauen</span>
            <h2>Deine Website soll nicht nur schön sein. Sie soll Kunden überzeugen.</h2>
            <p>Portfolio, Services, Kontaktformular, Socials und starke Projektbeispiele in einem sauberen System.</p>
          </motion.div>
        </div>
      </section>

      <section className="proof">
        {stats.map(([number, label]) => (
          <article key={number}>
            <strong>{number}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section id="services" className="section services">
        <div className="section-head">
          <span>Services</span>
          <h2>Alles, was eine starke Website braucht.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article key={service.title}>
              <span>{service.label}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section work">
        <div className="section-head">
          <span>Portfolio</span>
          <h2>So zeigen wir Kunden echte Veränderung.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title}>
              <div className="project-top">
                <span>{project.tag}</span>
                <Star size={18} />
              </div>
              <h3>{project.title}</h3>
              <div className="compare">
                <p><b>Vorher</b>{project.before}</p>
                <p><b>Nachher</b>{project.after}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process">
        <div className="section-head">
          <span>Ablauf</span>
          <h2>Einfach verständlich. Ohne Technikstress.</h2>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <article key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section accounts">
        <div>
          <span>Konten & Kanäle</span>
          <h2>Wir verbinden Website, Socials und Anfragewege.</h2>
        </div>
        <div className="account-list">
          {accounts.map((account) => (
            <p key={account}><Check size={18} /> {account}</p>
          ))}
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
