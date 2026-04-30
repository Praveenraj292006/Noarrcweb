import React, { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import { gsap } from 'gsap'

import doctor from '../../assets/doc-png.png'
import img1 from '../../assets/placeholder_4.jpg'
import img2 from '../../assets/placeholder_2.jpg'

const STATS = [
  { num: '5K+', label: 'Patients Recovered' },
  { num: '98%', label: 'Recovery Rate' },
  { num: '12+', label: 'Robotic Modalities' },
]

const TRUST = ['5000+ Patients', 'Robotic Precision', 'Expert Therapists']

function Hero() {
  const heroRef = useRef(null)
  const particlesRef = useRef(null)

  /* ── Scroll helper ── */
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  /* ── Particles ── */
  useEffect(() => {
    const container = particlesRef.current
    if (!container) return
    for (let i = 0; i < 16; i++) {
      const p = document.createElement('div')
      p.className = styles.particle
      const size = Math.random() * 10 + 4
      p.style.cssText = `
        width:${size}px;height:${size}px;
        left:${Math.random() * 100}%;
        animation-duration:${Math.random() * 12 + 8}s;
        animation-delay:${Math.random() * 8}s;
      `
      container.appendChild(p)
    }
    return () => { container.innerHTML = '' }
  }, [])

  /* ── GSAP entrance timeline ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(`.${styles.badge}`, { y: 20, opacity: 0, duration: 0.7 })
        .from(`.${styles.tag}`,   { y: 16, opacity: 0, duration: 0.6 }, '-=0.4')
        .from(`.${styles.titleMain}`, { y: 40, opacity: 0, duration: 0.9 }, '-=0.4')
        .from(`.${styles.titleSub}`,  { y: 24, opacity: 0, duration: 0.7 }, '-=0.5')
        .from(`.${styles.divider}`,   { scaleX: 0, opacity: 0, duration: 0.6, transformOrigin: 'left' }, '-=0.4')
        .from(`.${styles.desc}`,      { y: 20, opacity: 0, duration: 0.7 }, '-=0.3')
        .from(`.${styles.ctaRow}`,    { y: 16, opacity: 0, duration: 0.6 }, '-=0.4')
        .from(`.${styles.trustStrip}`,{ y: 12, opacity: 0, duration: 0.6 }, '-=0.4')
        .from(`.${styles.doctorWrap}`,{ scale: 0.92, opacity: 0, duration: 1 }, '-=0.9')
        .from(`.${styles.statCard}`,  { y: 24, opacity: 0, stagger: 0.15, duration: 0.7 }, '-=0.8')
        .from(`.${styles.infoStrip}`, { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  /* ── Stat-card 3D tilt ── */
  const handleTilt = (e) => {
    const card = e.currentTarget
    const { left, top, width, height } = card.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5
    card.style.transform = `perspective(500px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) translateY(-6px)`
  }
  const resetTilt = (e) => { e.currentTarget.style.transform = '' }

  return (
    <section className={styles.hero} ref={heroRef} id="home">

      {/* ── Particles ── */}
      <div ref={particlesRef} className={styles.particles} aria-hidden="true" />

      {/* ── Decorative blobs ── */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      {/* ── Ticker ── */}
      *

      {/* ── Hero body grid ── */}
      <div className={styles.heroBody}>

        {/* LEFT */}
        <div className={styles.heroLeft}>

          <p className={styles.tag}>Redefine Life</p>

          <h1 className={styles.titleMain}>NOARRC</h1>
          <h2 className={styles.titleSub}>Neuro · Ortho · Robotic Rehab</h2>

          <div className={styles.divider} />

          <p className={styles.desc}>
            Advanced robotic rehabilitation for{' '}
            <strong>Neuro, Ortho, and Cardiac</strong> care.
            Precision therapy. Faster recovery. Long-term mobility — crafted around you.
          </p>

          <div className={styles.ctaRow}>
            <button
              className={styles.btnPrimary}
              onClick={() => scrollTo('contact')}
            >
              <span>Know more</span>
              <span className={styles.btnArrow}>→</span>
            </button>

          </div>

          <div className={styles.trustStrip}>
            {TRUST.map((t) => (
              <div key={t} className={styles.trustItem}>
                <span className={styles.trustCheck}>
                  <svg viewBox="0 0 10 10" fill="none" width="10" height="10">
                    <path d="M1.5 5L4 7.5L8.5 2.5" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.heroRight}>

          {/* Radar rings */}
          <div className={styles.radarWrap} aria-hidden="true">
            <svg viewBox="0 0 420 420" fill="none" className={styles.radarSvg}>
              <circle cx="210" cy="210" r="200" stroke="rgba(11,37,69,0.06)" strokeWidth="1" />
              <circle cx="210" cy="210" r="160" stroke="rgba(11,37,69,0.06)" strokeWidth="1" />
              <circle cx="210" cy="210" r="110" stroke="rgba(14,165,233,0.1)" strokeWidth="1.5" />
              <line x1="10" y1="210" x2="410" y2="210" stroke="rgba(14,165,233,0.12)" strokeWidth="1" strokeDasharray="4 6">
                <animateTransform attributeName="transform" type="rotate" from="0 210 210" to="360 210 210" dur="10s" repeatCount="indefinite" />
              </line>
              <circle cx="210" cy="10" r="5" fill="rgba(14,165,233,0.5)">
                <animateTransform attributeName="transform" type="rotate" from="0 210 210" to="360 210 210" dur="10s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          {/* Doctor image */}
          <div className={styles.doctorWrap}>
            <img src={doctor} alt="Physiotherapist" className={styles.doctorImg} />
          </div>

          {/* Floating stat cards */}
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`${styles.statCard} ${styles[`statCard${i + 1}`]}`}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
            >
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}

          {/* Side image cards */}
          <div className={styles.box}></div>
          <div className={styles.circle}></div>
        </div>
      </div>

      {/* ── Wave → info strip ── */}
      <svg className={styles.wave} viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,25 1440,20 L1440,40 L0,40 Z" fill="#0B2545" />
      </svg>

      <div className={styles.infoStrip}>

  {[
    {
      icon: "bi bi-telephone-fill",
      label: "Call Us",
      detail: "+91 98765 43210",
      action: "tel:+919876543210"
    },
    {
      icon: "bi bi-envelope-fill",
      label: "Email Us",
      detail: "noarrcphysion@gmail.com",
      action: "mailto:noarrcphysion@gmail.com"
    },
    {
      icon: "bi bi-geo-alt-fill",
      label: "Visit Us",
      detail: "Kilpauk, Chennai",
      action: "https://maps.google.com"
    }
  ].map((item, index) => (
    
    <a
      key={index}
      href={item.action}
      target="_blank"
      rel="noreferrer"
      className={styles.infoItem}
    >
      <i className={`${item.icon} ${styles.icon}`} />

      <div className={styles.text}>
        <span className={styles.label}>{item.label}</span>
        <span className={styles.detail}>{item.detail}</span>
      </div>
    </a>

  ))}

</div>

    </section>
  )
}

export default Hero