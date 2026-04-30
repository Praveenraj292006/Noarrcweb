import React, { useEffect, useRef } from 'react'
import styles from './About.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import img       from '../../assets/noarc-real-img.jpg'
import therapy   from '../../assets/placeholder_3.jpg'
import illustration from '../../assets/physio-illu.png'
import divimg from '../../assets/placeholder_6.png'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { num: '5K+',  label: 'Patients Treated' },
  { num: '98%',  label: 'Recovery Rate'    },
  { num: '12+',  label: 'Modalities'       },
]

function About() {
  const sectionRef = useRef(null)

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Left collage */
      gsap.from(`.${styles.collagePrimary}`, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
        x: -60, opacity: 0, duration: 1, ease: 'power3.out',
      })
      gsap.from(`.${styles.collageSecondary}`, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        x: -40, y: 30, opacity: 0, duration: 0.9, delay: 0.15, ease: 'power3.out',
      })
      gsap.from(`.${styles.collageIllustration}`, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 73%' },
        scale: 0.85, opacity: 0, duration: 0.8, delay: 0.25, ease: 'back.out(1.4)',
      })
      gsap.from(`.${styles.yearBadge}`, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
        scale: 0, opacity: 0, duration: 0.7, delay: 0.4, ease: 'back.out(2)',
      })
      /* Right text */
      gsap.from(`.${styles.eyebrow}`, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 76%' },
        y: 18, opacity: 0, duration: 0.6, delay: 0.1, ease: 'power3.out',
      })
      gsap.from(`.${styles.heading}`, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 74%' },
        y: 30, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power3.out',
      })
      gsap.from(`.${styles.divider}`, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
        scaleX: 0, opacity: 0, duration: 0.6, delay: 0.35, ease: 'power3.out', transformOrigin: 'left',
      })
      gsap.from(`.${styles.body} p`, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        y: 20, opacity: 0, stagger: 0.12, duration: 0.7, delay: 0.4, ease: 'power3.out',
      })
      gsap.from(`.${styles.statItem}`, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 68%' },
        y: 20, opacity: 0, stagger: 0.1, duration: 0.6, delay: 0.5, ease: 'power3.out',
      })
      gsap.from(`.${styles.ctaRow}`, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 66%' },
        y: 16, opacity: 0, duration: 0.6, delay: 0.65, ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className={styles.about} ref={sectionRef} id="about">

      {/* ── Decorative bg blobs ── */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className={styles.inner}>

        {/* ══ LEFT — Image collage ══ */}
        <div className={styles.collageWrap}>

          {/* Primary image — large */}
          <div className={styles.collagePrimary}>
            <img src={img} alt="NOARRC Clinic" />
          </div>

          {/* Secondary image — overlaps bottom-right */}
          <div className={styles.collageSecondary}>
            <img src={therapy} alt="Therapy session" />
          </div>

          {/* Illustration — overlaps top-right */}
          <div className={styles.collageIllustration}>
            <img src={illustration} alt="Physiotherapy illustration" />
          </div>

          {/* Est. badge */}
          

          {/* Decorative ring */}
        

        </div>

        {/* ══ RIGHT — Text content ══ */}
        <div className={styles.content}>

          

          <h2 className={styles.heading}>
            Redefining Recovery<br />
            <em>One Patient at a Time</em>
          </h2>

          <div className={styles.divider} />

          <div className={styles.body}>
            <p>
              At <strong>NOARRC</strong> — Neuro and Ortho Advanced Robotic Rehabilitation Centre —
              we are committed to delivering evidence-based treatment focused on long-term
              recovery and true functional independence.
            </p>
            <p>
              Our experienced physiotherapists specialise in neurological disorders, orthopedic
              injuries, and cardiac rehabilitation — using the most advanced robotic modalities
              available, shaped around each patient's unique journey.
            </p>
            <p>
              We believe recovery is not just about healing the body. It is about restoring
              confidence, reclaiming mobility, and returning you to the life you deserve.
            </p>
          </div>

          {/* Mini stats row */}
          <div className={styles.statsRow}>
            {stats.map((s) => (
              <div className={styles.statItem} key={s.label}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={styles.ctaRow}>
            <button
              className={styles.btnPrimary}
              onClick={() => scrollTo('contact')}
            >
              <span>Book Appointment</span>
              <span className={styles.btnArrow}>→</span>
            </button>
            <button
              className={styles.btnSecondary}
              onClick={() => scrollTo('services')}
            >
              Our Services
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About