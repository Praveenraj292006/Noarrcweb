import React, { useEffect, useRef } from 'react'
import styles from './About.module.css'
import img from '../../assets/noarc-real-img.jpg'
import illustration from '../../assets/physio-illu.png'
import logo from '../../assets/Noarrc-logo.png'
import therapy from '../../assets/placeholder_3.jpg'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function About() {

  const aboutRef = useRef(null)

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = () => {
    const el = document.getElementById('services')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        }
      })

      // LEFT IMAGE
      tl.from(`.${styles.left}`, {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })

      // RIGHT TEXT
      .from(`.${styles.right}`, {
        x: 80,
        opacity: 0,
        duration: 1
      }, "-=0.7")

      // BUTTON
      .from(`.${styles.btn}`, {
        y: 20,
        opacity: 0,
        duration: 0.6
      }, "-=0.5")

      // BOTTOM CARDS STAGGER
      .from(`.${styles.cardSmall}, .${styles.cardHighlight}`, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.4")

    }, aboutRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className={styles.about} ref={aboutRef}>
      <div className={styles.topsect}>

      {/* LEFT IMAGE */}
      <div className={styles.left}>
        <img src={img} alt="NOARRC Clinic" />
      </div>

      {/* RIGHT CONTENT */}
      <div className={styles.right}>
        <h2>NOARRC Guest Physio</h2>

        <p>
          At NOARRC Physiotherapy & Rehabilitation Centre, we are committed to
          delivering evidence-based treatment focused on long-term recovery and
          functional independence.
        </p>

        <p>
          Our team of experienced physiotherapists specializes in treating a
          wide range of conditions—from neurological disorders to orthopedic
          injuries—using modern techniques and patient-centered care.
        </p>

        <p>
          We believe recovery is not just about healing the body, but restoring
          confidence, mobility, and quality of life.
        </p>

        <button className={styles.btn} onClick={scrollToContact}>
          Book Appointment
        </button>
      </div>
      </div>
      <div className={styles.abtbottom}>

      {/* LEFT SMALL IMAGE */}
      <div className={`${styles.cardSmall}`}>
        <img src={illustration} alt="therapy" className={styles.illustration} />
      </div>

      {/* CENTER INFO CARD */}
      <div className={styles.cardHighlight}>
        <p>
          We help patients recover faster with advanced physiotherapy techniques
          and personalized care plans.
        </p>
        <button onClick={scrollToServices}>Know More →</button>
      </div>

      {/* RIGHT SMALL IMAGE */}
      <div className={`${styles.cardSmall} `}>
        <img src={therapy} alt="clinic"  className={styles.therapy}/>
      </div>

</div>

    </section>
  )
}

export default About