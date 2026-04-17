import React, { useEffect, useRef } from 'react'
import styles from './Services.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import neuro from '../assets/ai.png'
import ortho from '../assets/medical.png'
import robotic from '../assets/artificial-intelligence.png'
import pain from '../assets/pain.png'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: neuro,
    title: "Neuro Rehabilitation",
    desc: "Recovery support for stroke, spinal cord injuries, and neurological conditions."
  },
  {
    icon: ortho,
    title: "Orthopedic Rehab",
    desc: "Treat injuries, fractures, and joint issues with targeted therapy."
  },
  {
    icon: robotic,
    title: "Robotic Therapy",
    desc: "Advanced technology-driven rehabilitation for faster recovery."
  },
  {
    icon: pain,
    title: "Pain Management",
    desc: "Relieve chronic pain with personalized physiotherapy techniques."
  }
]

function Services() {

  const sectionRef = useRef(null)

  useEffect(() => {
  const ctx = gsap.context(() => {

    // FORCE VISIBILITY FIRST (IMPORTANT)
    gsap.set(`.${styles.card}`, { opacity: 1 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
        markers: false // turn true for debugging
      }
    })

    // HEADER
    tl.from(`.${styles.header}`, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })

    // CARDS
    .from(`.${styles.card}`, {
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.4")

  }, sectionRef)

  return () => ctx.revert()
}, [])

  return (
    <section className={styles.services} ref={sectionRef}>

      <div className={styles.header}>
        <h2>Our Services</h2>
        <p>
          We provide specialized physiotherapy treatments designed to restore movement,
          reduce pain, and improve quality of life.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <img src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <button>View All Services</button>
      </div>

    </section>
  )
}

export default Services