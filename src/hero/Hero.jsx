import React from 'react'
import styles from './Hero.module.css'

import doctor from '../assets/doc-png.png'
import img1 from '../assets/placeholder_4.jpg'
import img2 from '../assets/placeholder_2.jpg'

/** Full-viewport hero section with doctor image, side cards, and CTA. */
function Hero() {
  return (
    <section className={styles.hero}>

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
            Experience cutting-edge rehabilitation designed to restore movement,
            strength, and independence.
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