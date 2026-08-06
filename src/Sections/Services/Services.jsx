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
import child from '../../assets/playing.png'
import Women from '../../assets/meditation.png'

gsap.registerPlugin(ScrollTrigger)

const services = [

  {
    slug: 'neurological-rehabilitation',
    icon: neuro,
    num: '01',
    title: 'Neurological Rehabilitation',
    desc: 'Specialized rehabilitation for neurological conditions and recovery.',
    tag: 'Neuro Rehab',
  },

  {
    slug: 'pain-management',
    icon: laser,
    num: '02',
    title: 'Pain Management',
    desc: 'Evidence-based relief for acute and chronic pain.',
    tag: 'Pain Therapy',
  },

  {
    slug: 'womens-health',
    icon: Women,
    num: '03',
    title: "Women's Health",
    desc: 'Specialized physiotherapy for every stage of women’s health.',
    tag: "Women's Health",
  },

  {
    slug: 'orthopedic-rehabilitation',
    icon: ortho,
    num: '04',
    title: 'Orthopedic Rehabilitation',
    desc: 'Focused recovery programs for orthopedic injuries.',
    tag: 'Orthopedics',
  },

  {
    slug: 'robotic-physiotherapy',
    icon: robotic,
    num: '05',
    title: 'Robotic Physiotherapy',
    desc: 'Advanced robotic-assisted rehabilitation for faster recovery.',
    tag: 'Robotic Rehab',
  },

  {
    slug: 'inpatient-rehabilitation',
    icon: pain,
    num: '06',
    title: 'Inpatient Rehabilitation',
    desc: 'Structured inpatient care for intensive recovery.',
    tag: 'Rehabilitation',
  },

  {
    slug: 'sports-therapy',
    icon: sports,
    num: '07',
    title: 'Sports & Fitness Therapy',
    desc: 'Recovery and prevention programs for athletes.',
    tag: 'Sports Medicine',
  },

  {
    slug: 'home-care-physiotherapy',
    icon: Women,
    num: '08',
    title: 'Home Care Physiotherapy',
    desc: 'Expert rehabilitation at your doorstep.',
    tag: 'Home Care',
  },

  {
    slug: 'pediatric-rehabilitation',
    icon: child,
    num: '09',
    title: 'Pediatric Rehabilitation',
    desc: "Specialized therapy for children's development.",
    tag: 'Pediatric Rehab',
  },

]

function Services() {

  const sectionRef = useRef(null)
  const navigate = useNavigate()

  const allServices = services

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

       
        {/* GRID */}
        <div className={styles.grid}>
          {allServices.map((item) => (
            <div
              className={styles.card}
              key={item.num}
              onClick={() => navigate(`/services/${item.slug}`)}
            >
              <div className={styles.iconBox}>
                <img src={item.icon} alt={item.title} loading="lazy" />
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

              <button className={styles.cardButton}>
                Learn More
              </button>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default Services