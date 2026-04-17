import React, { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import { gsap } from 'gsap'

import doctor from '../assets/doc-png.png'
import img1 from '../assets/placeholder_4.jpg'
import img2 from '../assets/placeholder_2.jpg'

function Hero() {

  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline()

      // TITLE
      tl.from(`.${styles.titleMain}`, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })

      .from(`.${styles.titleSub}`, {
        y: 30,
        opacity: 0,
        duration: 0.8
      }, "-=0.6")

      // DESCRIPTION
      .from(`.${styles.description}`, {
        y: 30,
        opacity: 0,
        duration: 0.8
      }, "-=0.5")

      // BUTTON
      .from(`.${styles.ctaBtn}`, {
        y: 20,
        opacity: 0,
        duration: 0.6
      }, "-=0.4")

      // DOCTOR IMAGE (main visual)
      .from(`.${styles.centerImage}`, {
        y: 80,
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")

      // SIDE CARDS (stagger)
      .from(`.${styles.imageCard}`, {
        x: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.8")

      // FLOATING EFFECT (subtle)
      gsap.to(`.${styles.imageCard}`, {
        y: "-=10",
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.2,
          from: "random"
        }
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className={styles.hero} ref={heroRef}>

      {/* Background overlay */}
      <div className={styles.background} />

      {/* ── Text Content ──────────────────────── */}
      <div className={`container ${styles.topText}`}>
        <div className={styles.titleGroup}>
          <h1 className={styles.titleMain}>NOARRC</h1>
          <h3 className={styles.titleSub}>GUEST PHYSIO</h3>
        </div>

        <div className={styles.description}>
          <p>
            We provide advanced Robotic in house rehabilitation for Neuro,Ortho and Cardiac 
            patients and also we provide very good treatment for musculo skeletal disorders
          </p>
          <button className={styles.ctaBtn}>
            Book Appointment
            <i className={`bi bi-arrow-right-circle-fill ${styles.iconArrow}`} />
          </button>
        </div>
      </div>

      {/* ── Side Image Cards ──────────────────── */}
      <div className={styles.cardContainer}>
        <div className={`${styles.imageCard} ${styles.cardLeft}`}>
          <img src={img1} alt="Clinic facility" />
        </div>
        <div className={`${styles.imageCard} ${styles.cardRight}`}>
          <img src={img2} alt="Rehabilitation session" />
        </div>
      </div>

      {/* ── Center Doctor Image ───────────────── */}
      <div className={styles.centerImage}>
        <img src={doctor} alt="Doctor" />
      </div>

      {/* ── Bottom Strip ──────────────────────── */}
      <div className={styles.bottomStrip} />

    </section>
  )
}

export default Hero