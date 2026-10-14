
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Doctors.module.css'
import doctors from '../../data/doctorsData'

gsap.registerPlugin(ScrollTrigger)

function Doctors() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.from(
        [`.${styles.eyebrow}`, `.${styles.heading}`, `.${styles.description}`],
        {
          y: 28,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.${styles.header}`,
            start: 'top 85%',
            once: true,
          },
        }
      )

      gsap.from(`.${styles.card}`, {
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.16,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: trackRef.current,
          start: 'top 85%',
          once: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  const scrollCards = (direction) => {
    const track = trackRef.current
    if (!track) return

    const card = track.querySelector(`.${styles.card}`)
    if (!card) return

    const gap = parseFloat(getComputedStyle(track).columnGap) || 24
    const distance = card.getBoundingClientRect().width + gap

    track.scrollBy({
      left: direction * distance,
      behavior: 'smooth',
    })
  }

  return (
    <section
      ref={sectionRef}
      className={styles.doctors}
      id="doctors"
      aria-labelledby="doctors-heading"
    >
      <div className={styles.glowOne} aria-hidden="true" />
      <div className={styles.glowTwo} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            MEET OUR EXPERTS
          </span>

          <h2
            id="doctors-heading"
            className={styles.heading}
          >
            Expertise that inspires,
            <br />
            <em>care that restores.</em>
          </h2>

          <p className={styles.description}>
            Meet the experienced professionals dedicated to
            helping you move better, recover stronger, and
            live with confidence.
          </p>
        </header>

        <div className={styles.carouselHeader}>
          <p className={styles.carouselLabel}>
            OUR CONSULTANTS
          </p>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => scrollCards(-1)}
              aria-label="Previous doctors"
            >
              &#8592;
            </button>

            <button
              type="button"
              className={styles.arrow}
              onClick={() => scrollCards(1)}
              aria-label="Next doctors"
            >
              &#8594;
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className={styles.track}
          role="list"
          aria-label="Our doctors"
        >
          {doctors.map((doctor, index) => (
            <article
              key={doctor.id}
              className={styles.card}
              role="listitem"
            >
              <div className={styles.imageWrap}>
                <img
                  className={styles.doctorImage}
                  src={doctor.image}
                  alt={doctor.imageAlt}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  onError={(event) => {
                    event.currentTarget.style.visibility = 'hidden'
                  }}
                />

                <span className={styles.experience}>
                  {doctor.experience}
                  <small> EXPERIENCE</small>
                </span>
              </div>

              <div className={styles.cardBody}>
                <span className={styles.role}>
                  {doctor.role}
                </span>

                <h3 className={styles.doctorName}>
                  {doctor.name}
                </h3>

                <p className={styles.specialty}>
                  {doctor.specialty}
                </p>

                <div className={styles.divider} />

                <p className={styles.qualificationLabel}>
                  QUALIFICATIONS
                </p>

                <ul className={styles.qualifications}>
                  {doctor.qualifications.map((qualification) => (
                    <li key={qualification}>
                      {qualification}
                    </li>
                  ))}
                </ul>

                {doctor.memberships.length > 0 && (
                  <div className={styles.memberships}>
                    {doctor.memberships.map((membership) => (
                      <span key={membership}>
                        {membership}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.cardAccent} />
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <span>
            {String(doctors.length).padStart(2, '0')} CONSULTANTS
          </span>
          <span className={styles.scrollHint}>
            SCROLL TO EXPLORE <span>→</span>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Doctors
