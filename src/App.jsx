import { Canvas, useFrame } from '@react-three/fiber'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Code2,
  ExternalLink,
  Layers3,
  Mail,
  Play,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { useMemo, useRef } from 'react'
import './App.css'

const services = [
  { title: 'Cinematic Websites', text: 'Premium Webdesign, Storytelling, Motion und Launch-ready Umsetzung.' },
  { title: 'AI Systems', text: 'Automationen, Lead Funnels, KI-Workflows und smarte interne Systeme.' },
  { title: 'Digital Brands', text: 'Positionierung, Content-Struktur, Social Proof und Conversion Design.' },
]

const caseStudies = [
  { name: 'B2B Website Relaunch', metric: '+68%', label: 'mehr Anfragen', before: 'Veraltete Seite', after: 'Premium Funnel' },
  { name: 'Creator Brand System', metric: '3x', label: 'Content Output', before: 'Unklare Marke', after: 'Klares Studio System' },
  { name: 'Local Business Engine', metric: '14 Tage', label: 'bis Preview', before: 'Keine Website', after: 'SEO-ready Präsenz' },
]

const techStack = ['React', 'Vite', 'Three.js', 'Framer Motion', 'SEO', 'Hosting', 'Automation', 'Analytics']

const packages = [
  { name: 'Launch', price: 'ab 1.500 EUR', items: ['Onepage Website', 'Mobile Design', 'Basic SEO', 'Hosting Setup'] },
  { name: 'Studio', price: 'ab 3.500 EUR', items: ['Multi-Page Website', 'CMS Struktur', 'Motion Design', 'Lead Funnel'] },
  { name: 'AI Growth', price: 'Custom', items: ['AI Automationen', 'CRM Workflows', 'Content Engine', 'Performance Tracking'] },
]

function ParticleField() {
  const points = useRef()
  const particles = useMemo(() => {
    const count = 700
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14
    }
    return positions
  }, [])

  useFrame((_, delta) => {
    if (!points.current) return
    points.current.rotation.y += delta * 0.025
    points.current.rotation.x += delta * 0.01
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#65b8ff" size={0.018} sizeAttenuation transparent opacity={0.62} />
    </points>
  )
}

function AiMachine() {
  const group = useRef()
  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.18) * 0.35
    group.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.14) * 0.08
  })

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.35, 2]} />
        <meshStandardMaterial color="#07111f" wireframe emissive="#1185ff" emissiveIntensity={0.8} />
      </mesh>
      <mesh rotation={[0.6, 0.2, 0.3]}>
        <torusGeometry args={[1.9, 0.01, 12, 160]} />
        <meshBasicMaterial color="#56aaff" transparent opacity={0.74} />
      </mesh>
      <mesh rotation={[1.25, -0.35, 0.6]}>
        <torusGeometry args={[2.35, 0.01, 12, 160]} />
        <meshBasicMaterial color="#9bd4ff" transparent opacity={0.42} />
      </mesh>
      <mesh rotation={[0.35, 1.1, -0.25]}>
        <torusGeometry args={[2.75, 0.008, 12, 160]} />
        <meshBasicMaterial color="#1f7dff" transparent opacity={0.28} />
      </mesh>
    </group>
  )
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <color attach="background" args={['#02040a']} />
      <ambientLight intensity={0.55} />
      <pointLight position={[3, 2, 5]} intensity={20} color="#3ba4ff" />
      <ParticleField />
      <AiMachine />
    </Canvas>
  )
}

function App() {
  const introRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: introRef, offset: ['start start', 'end end'] })
  const laptopScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.78, 1.16, 0.86])
  const laptopY = useTransform(scrollYProgress, [0, 0.5, 1], ['18vh', '-2vh', '-20vh'])
  const laptopRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 8])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22, 0.44], [1, 1, 0])
  const specsOpacity = useTransform(scrollYProgress, [0.34, 0.55, 0.9], [0, 1, 1])

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">NextEra Studio</a>
        <div>
          <a href="#services">Services</a>
          <a href="#cases">Cases</a>
          <a href="#contact">Kontakt</a>
        </div>
      </nav>

      <section id="top" ref={introRef} className="intro">
        <div className="stage">
          <Scene />
          <motion.div className="hero-copy" style={{ opacity: heroOpacity }}>
            <span>Luxury AI Web Studio</span>
            <h1>Websites built like product launches.</h1>
            <p>We build cinematic websites, AI systems and digital brands for founders, creators and modern businesses.</p>
            <a className="primary" href="#contact"><Play size={16} /> Projekt starten</a>
          </motion.div>

          <motion.div
            className="laptop"
            style={{ scale: laptopScale, y: laptopY, rotateX: laptopRotate }}
          >
            <div className="laptop-screen">
              <iframe
                title="Unicorn Studio laptop glow"
                src="https://www.unicorn.studio/embed/P9u6a80vMi84XtpzHRld"
                loading="lazy"
                allow="fullscreen"
              />
              <video autoPlay muted loop playsInline poster="/media/laptop-glow.png">
                <source src="/media/laptop-glow.mp4" type="video/mp4" />
              </video>
              <div className="screen-glass" />
              <strong>NextEra</strong>
            </div>
            <div className="base-plate" />
          </motion.div>

          <motion.div className="spec-sheet" style={{ opacity: specsOpacity }}>
            <span>01 / Agency Intro</span>
            <h2>Cinematic first. Portfolio second.</h2>
            <p>Scroll reveals positioning, systems, proof and premium packages after curiosity has already been created.</p>
          </motion.div>
        </div>
      </section>

      <section className="positioning">
        <div className="eyebrow">Built for Tomorrow</div>
        <h2>Apple-grade clarity. Porsche-like drama. Agency execution.</h2>
        <p>
          NextEra Studio turns weak digital presence into sharp brand architecture, launch-quality websites and AI-supported sales systems.
        </p>
      </section>

      <section id="services" className="grid-section">
        <div className="section-head">
          <span>Services</span>
          <h2>Premium work. Real business output.</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <motion.article
              className="glass-card"
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.08 }}
            >
              {[<Layers3 />, <Bot />, <Sparkles />][index]}
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="cases" className="case-zone">
        <div className="section-head">
          <span>Case Studies</span>
          <h2>Before/after stories made visible.</h2>
        </div>
        <div className="case-grid">
          {caseStudies.map((item) => (
            <article className="case-card" key={item.name}>
              <div className="metric">{item.metric}</div>
              <p>{item.label}</p>
              <h3>{item.name}</h3>
              <div className="before-after">
                <div><span>Before</span>{item.before}</div>
                <div><span>After</span>{item.after}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process">
        <div className="section-head">
          <span>Process</span>
          <h2>Preview fast. Improve with feedback. Launch clean.</h2>
        </div>
        <div className="timeline">
          {['Audit', 'Preview', 'Feedback', 'Build', 'Launch', 'Portfolio'].map((step, index) => (
            <div className="step" key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="stack">
        <div className="stack-visual">
          <BrainCircuit />
          <Code2 />
          <Rocket />
          <Search />
          <ShieldCheck />
        </div>
        <div>
          <span>Tech Stack</span>
          <h2>React, motion, SEO and automation in one studio system.</h2>
          <div className="chips">
            {techStack.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="section-head">
          <span>Packages</span>
          <h2>Clear offers. Premium delivery.</h2>
        </div>
        <div className="package-grid">
          {packages.map((plan) => (
            <article className="package-card" key={plan.name}>
              <h3>{plan.name}</h3>
              <strong>{plan.price}</strong>
              {plan.items.map((item) => <p key={item}>{item}</p>)}
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <span>Contact Funnel</span>
        <h2>Bring a weak website. Leave with a launch asset.</h2>
        <p>Wir erstellen eine starke Preview, sammeln Feedback und bauen daraus eine Website, die Vertrauen verkauft.</p>
        <div className="cta-row">
          <a className="primary" href="mailto:hello@nextera.studio"><Mail size={16} /> Anfrage senden</a>
          <a className="secondary" href="https://www.unicorn.studio/embed/P9u6a80vMi84XtpzHRld" target="_blank"><ExternalLink size={16} /> 3D Scene</a>
        </div>
      </section>
    </main>
  )
}

export default App
