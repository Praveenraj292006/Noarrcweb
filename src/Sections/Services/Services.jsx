import React, { useEffect, useRef } from 'react'
import styles from './Services.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import neuro    from '../../assets/ai.png'
import ortho    from '../../assets/medical.png'
import robotic  from '../../assets/artificial-intelligence.png'
import pain     from '../../assets/pain.png'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: neuro,
    num: '01',
    title: 'Neuro Rehabilitation',
    desc: 'Comprehensive recovery programs for stroke, spinal cord injuries, and complex neurological conditions — restoring function and independence.',
    tag: 'Neurology',
  },
  {
    icon: ortho,
    num: '02',
    title: 'Orthopedic Rehab',
    desc: 'Precision treatment for joint pain, ligament injuries, and post-surgical recovery — engineered for faster return to daily life.',
    tag: 'Orthopedics',
  },
  {
    icon: robotic,
    num: '03',
    title: 'Robotic Therapy',
    desc: 'State-of-the-art robot-assisted rehabilitation programs that augment human therapy for measurably better outcomes.',
    tag: 'Technology',
  },
  {
    icon: pain,
    num: '04',
    title: 'Pain Management',
    desc: 'Evidence-based, targeted interventions to relieve chronic and acute pain — without dependence on medication alone.',
    tag: 'Chronic Care',
  },
  {
    icon: neuro,
    num: '05',
    title: 'Sports Rehabilitation',
    desc: 'High-performance injury recovery and prevention training designed for athletes who demand peak physical condition.',
    tag: 'Sports',
  },
  {
    icon: ortho,
    num: '06',
    title: "Women's Health",
    desc: 'Specialised physiotherapy for pelvic floor health, prenatal discomfort, and postpartum recovery — with dignity and care.',
    tag: 'Wellness',
  },
]

function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.badge}`, {
        scrollTrigger: { trigger: `.${styles.header}`, start: 'top 82%' },
        y: 20, opacity: 0, duration: 0.7, ease: 'power3.out',
      })
      gsap.from(`.${styles.heading}`, {
        scrollTrigger: { trigger: `.${styles.header}`, start: 'top 80%' },
        y: 30, opacity: 0, duration: 0.8, delay: 0.1, ease: 'power3.out',
      })
      gsap.from(`.${styles.subText}`, {
        scrollTrigger: { trigger: `.${styles.header}`, start: 'top 78%' },
        y: 20, opacity: 0, duration: 0.7, delay: 0.2, ease: 'power3.out',
      })
      gsap.from(`.${styles.card}`, {
        scrollTrigger: { trigger: `.${styles.grid}`, start: 'top 80%' },
        y: 40, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
      })
      gsap.from(`.${styles.featuredCard}`, {
        scrollTrigger: { trigger: `.${styles.featuredCard}`, start: 'top 82%' },
        scale: 0.96, opacity: 0, duration: 0.8, ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const [featured, ...rest] = services

  return (
    <section className={styles.services} ref={sectionRef} id="services">

      

      {/* ── Decorative background shapes ── */}
      <div className={styles.bgShape1} aria-hidden="true" />
      <div className={styles.bgShape2} aria-hidden="true" />

      {/* ── Header ── */}
      <div className={styles.header}>
        <span className={styles.badge}>
          <span className={styles.badgeDot} />
          Our Services
        </span>
        <h2 className={styles.heading}>
          Specialised Care,<br />
          <em>Engineered for Recovery</em>
        </h2>
        <p className={styles.subText}>
          Advanced physiotherapy solutions — designed to restore movement,
          reduce pain, and return you to the life you deserve.
        </p>
      </div>

      {/* ── Layout ── */}
      <div className={styles.layout}>

        {/* Featured card — large, left */}
        <div className={styles.featuredCard}>
          <div className={styles.featuredInner}>
            <span className={styles.cardNum}>{featured.num}</span>
            <div className={styles.featuredTag}>{featured.tag}</div>
            <div className={styles.featuredIconBox}>
              <img src={featured.icon} alt={featured.title} />
            </div>
            <h3 className={styles.featuredTitle}>{featured.title}</h3>
            <p className={styles.featuredDesc}>{featured.desc}</p>
            <button className={styles.featuredCta}>
              <span>Learn More</span>
              <span className={styles.ctaArrow}>→</span>
            </button>
          </div>
          <div className={styles.featuredAccent} aria-hidden="true" />
        </div>

        {/* Grid — remaining 5 cards */}
        <div className={styles.grid}>
          {rest.map((item) => (
            <div className={styles.card} key={item.num}>
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>
                  <img src={item.icon} alt={item.title} />
                </div>
                <span className={styles.cardNum}>{item.num}</span>
              </div>
              <span className={styles.cardTag}>{item.tag}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <span className={styles.link}>
                Read More
                <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className={styles.cardLine} aria-hidden="true" />
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default Services