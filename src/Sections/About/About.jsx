import React, { useEffect, useRef } from 'react'
import styles from './About.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import img       from '../../assets/noarrc_abt_2.avif'
import therapy   from '../../assets/noaarc abt.avif'
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

      <div className={styles.inner}>

        {/* ══ LEFT — Image collage ══ */}
        <div className={styles.collageWrap}>

          {/* Primary image — large */}
          <div className={styles.collagePrimary}>
            <img src={img} loading="lazy" alt="NOARRC Clinic" />
          </div>

          {/* Secondary image — overlaps bottom-right */}
          <div className={styles.collageSecondary}>
            <img src={therapy} loading="lazy" alt="Therapy session" />
          </div>

          {/* Illustration — overlaps top-right */}
          <div className={styles.collageIllustration}>
            <img src={illustration} loading="lazy" alt="Physiotherapy illustration" />
          </div>

          {/* Est. badge */}
          

          {/* Decorative ring */}
        

        </div>

        {/* ══ RIGHT — Text content ══ */}
        <div className={styles.content}>

          

          <h2 className={styles.heading}>
            <em>Transforming Lives Through Advanced Neuro & Orthopaedic Rehabilitation</em>
          </h2>

          <div className={styles.divider} />

          <div className={styles.body}>
            <p>
              At <strong> NOARRC </strong> – Neuro and Ortho Advanced Robotic Rehabilitation Centre, 
              we combine advanced technology with expert physiotherapy to help patients 
              regain strength, mobility, and independence.
            </p>
            <p>
             Our multidisciplinary team specializes in neurological, orthopedic, sports injury, geriatric, and post-operative rehabilitation, delivering personalized treatment plans tailored to each patient’s goals.</p>
             <p>With state-of-the-art robotic rehabilitation, evidence-based therapy, and compassionate care, we focus not just 
              on recovery—but on restoring confidence, improving quality of life, and helping every patient return to the activities 
              they love. Orthopaedic rehabilitation at NOARRC – Neuro and Ortho Advanced Robotic Rehabilitation Centre is designed to
               help individuals recover from injuries, surgeries, joint disorders, and musculoskeletal conditions. 
               Our evidence-based rehabilitation programs focus on reducing pain,
               improving mobility, restoring strength, and enabling patients to return to their daily activities with confidence.</p>
            <p>
              Whether you are recovering from a fracture, ligament injury, joint replacement, 
              or chronic orthopedic condition, our experienced physiotherapists create personalized treatment 
              plans tailored to your specific goals and lifestyle. Inpatient Rehabilitation
            </p>
            <p>Our inpatient rehabilitation program offers intensive, multidisciplinary care 
              for patients recovering from neurological and orthopedic conditions. 
              We provide personalized treatment plans in a supportive 
              environment to promote faster recovery and improved functional outcomes. Robotic Physiotherapy</p>
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