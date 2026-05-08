import React, { useEffect, useRef } from 'react'
import styles from './Services.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate } from 'react-router-dom'

import neuro from '../../assets/ai.png'
import ortho from '../../assets/medical.png'
import robotic from '../../assets/artificial-intelligence.png'
import pain from '../../assets/pain.png'
import sports from '../../assets/soccer-player.png'
import laser from '../../assets/laser.png'
import speech from '../../assets/man.png'
import Women from '../../assets/meditation.png'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    slug: 'neuro-rehabilitation',
    icon: neuro,
    num: '01',
    title: 'Advanced Neuro Rehabilitation',
    desc: 'Comprehensive recovery programs for neurological conditions.',
    tag: 'Neurology',
  },

  {
    slug: 'laser-therapy',
    icon: laser,
    num: '02',
    title: 'Advanced Laser Therapy',
    desc: 'Precision laser therapy for neck and back pain.',
    tag: 'Pain Therapy',
  },

  {
    slug: 'orthopedic-rehabilitation',
    icon: ortho,
    num: '03',
    title: 'Orthopedic Rehabilitation',
    desc: 'Focused recovery programs for orthopedic injuries.',
    tag: 'Orthopedics',
  },

  {
    slug: 'inpatient-rehabilitation',
    icon: pain,
    num: '04',
    title: 'Inpatient Rehabilitation',
    desc: 'Structured inpatient care for intensive recovery.',
    tag: 'Rehabilitation',
  },

  {
    slug: 'sports-therapy',
    icon: sports,
    num: '05',
    title: 'Sports & Fitness Therapy',
    desc: 'Recovery and prevention programs for athletes.',
    tag: 'Sports Medicine',
  },

  {
    slug: 'womens-health',
    icon: Women,
    num: '06',
    title: "Women's Health",
    desc: 'Specialised physiotherapy care for women.',
    tag: 'Women’s Health',
  },

  {
    slug: 'robotic-physiotherapy',
    icon: robotic,
    num: '07',
    title: 'Robotic Physiotherapy',
    desc: 'Technology-assisted rehabilitation programs.',
    tag: 'Robotic Rehab',
  },

  {
    slug: 'speech-therapy',
    icon: speech,
    num: '08',
    title: 'Speech Therapy',
    desc: 'Support for speech and communication disorders.',
    tag: 'Speech Therapy',
  },
]

function Services() {

  const sectionRef = useRef(null)
  const navigate = useNavigate()

  const featured = services[0]
  const rest = services.slice(1)

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(`.${styles.heading}`, {
        scrollTrigger: {
          trigger: `.${styles.header}`,
          start: 'top 80%'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from(`.${styles.subText}`, {
        scrollTrigger: {
          trigger: `.${styles.header}`,
          start: 'top 78%'
        },
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.1,
        ease: 'power3.out',
      })

      gsap.from(`.${styles.card}`, {
        scrollTrigger: {
          trigger: `.${styles.grid}`,
          start: 'top 82%'
        },
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power3.out',
      })

      gsap.from(`.${styles.featuredCard}`, {
        scrollTrigger: {
          trigger: `.${styles.featuredCard}`,
          start: 'top 82%'
        },
        scale: 0.96,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

    }, sectionRef)

    return () => ctx.revert()

  }, [])

  return (
    <section
      className={styles.services}
      ref={sectionRef}
      id="services"
    >

      {/* BACKGROUND SHAPES */}
      <div className={styles.bgShape1} />
      <div className={styles.bgShape2} />

      {/* HEADER */}
      <div className={styles.header}>

        <h2 className={styles.heading}>
          Specialised Care,<br />
          <em>Engineered for Recovery</em>
        </h2>

        <p className={styles.subText}>
          Advanced physiotherapy solutions designed to restore movement,
          reduce pain, and improve quality of life.
        </p>

      </div>

      {/* LAYOUT */}
      <div className={styles.layout}>

        {/* FEATURED */}
        <div
          className={styles.featuredCard}
          onClick={() =>
            navigate(`/services/${featured.slug}`)
          }
        >

          <div className={styles.featuredInner}>

            <span className={styles.cardNum}>
              {featured.num}
            </span>

            <div className={styles.featuredTag}>
              {featured.tag}
            </div>

            <div className={styles.featuredIconBox}>
              <img
                src={featured.icon}
                alt={featured.title}
              />
            </div>

            <h3 className={styles.featuredTitle}>
              {featured.title}
            </h3>

            <p className={styles.featuredDesc}>
              {featured.desc}
            </p>

            <button className={styles.featuredCta}>
              Learn More →
            </button>

          </div>

          <div className={styles.featuredAccent} />

        </div>

        {/* GRID */}
        <div className={styles.grid}>

          {rest.map((item) => (

            <div
              className={styles.card}
              key={item.num}
              onClick={() =>
                navigate(`/services/${item.slug}`)
              }
            >

              <div className={styles.cardTop}>

                <div className={styles.iconBox}>
                  <img src={item.icon} alt={item.title} />
                </div>

                <span className={styles.cardNum}>
                  {item.num}
                </span>

              </div>

              <span className={styles.cardTag}>
                {item.tag}
              </span>

              <h3 className={styles.cardTitle}>
                {item.title}
              </h3>

              <p className={styles.cardDesc}>
                {item.desc}
              </p>

              <span className={styles.link}>
                Read More →
              </span>

              <div className={styles.cardLine} />

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Services