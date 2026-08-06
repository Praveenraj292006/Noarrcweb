import React, { useEffect, useRef } from 'react'
import styles from './About.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


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
     
      
      /* Right text */
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

     

        {/* ══ LEFT — Image collage ══ */}
        

        {/* ══ RIGHT — Text content ══ */}
        <div className={styles.content}>

          

          <h2 className={styles.heading}>
            <em> Empowering Every Step Towards Recovery</em> <br />
            <p>Advanced Robotic Rehabilitation Compassionate Physiotherapy Lasting Results
            Empowering Every Step Towards Recovery</p>
          </h2>

          <div className={styles.body}>
              <p>
                <strong>NOARRC – Neuro and Ortho Advanced Robotic Rehabilitation Centre</strong>
                is dedicated to helping patients regain mobility, independence, and confidence
                through evidence-based physiotherapy and advanced rehabilitation technology.
              </p>

              <p>
                Our multidisciplinary team specializes in neurological, orthopedic, sports,
                pediatric, women's health, and inpatient rehabilitation. Every treatment plan
                is personalized to meet each patient's condition, lifestyle, and recovery goals.
              </p>

              <p>
                By combining experienced clinicians, robotic rehabilitation systems, and modern
                therapeutic techniques, we focus on reducing pain, restoring movement, and
                improving long-term quality of life in a supportive environment.
              </p>
            </div>

          {/* Mini stats row */}
          {/* <div className={styles.statsRow}>
            {stats.map((s) => (
              <div className={styles.statItem} key={s.label}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div> */}

          {/* CTA */}
          <div className={styles.ctaRow}>
            <button
              className={styles.btnPrimary}
              onClick={() => scrollTo('contact')}
            >
              <span>Request a Call Back</span>
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
      
    </section>
  )
}

export default About