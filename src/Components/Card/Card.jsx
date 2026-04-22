import React, { useEffect, useRef } from 'react'
import styles from './Card.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Card() {

  const cardRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // MAIN CARD ENTRY
      gsap.from(`.${styles.contactcard}`, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      })

      // INDIVIDUAL ITEMS (STAGGER)
      gsap.from(`.${styles.phone}, .${styles.Whatsapp}, .${styles.email}`, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 75%",
        }
      })

      // ICON POP EFFECT
      gsap.from(`.${styles.icon}`, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 70%",
        }
      })

    }, cardRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={cardRef} className='d-flex justify-content-center position-relative'>

      <div className={styles.contactcard}>

        <div className={styles.phone}>
          <i className={`${styles.icon} bi bi-telephone`}></i>
          <div className={styles.text}>
            <h3>Call Us</h3>
            <p>8952854565</p>
          </div>
        </div>

        <div className={styles.Whatsapp}>
          <i className={`${styles.icon} bi bi-whatsapp`}></i>
          <div className={styles.text}>
            <h3>Whatsapp</h3>
            <p>8952854565</p>
          </div>
        </div>

        <div className={styles.email}>
          <i className={`${styles.icon} bi bi-envelope-paper`}></i>
          <div className={styles.text}>
            <h3>E-Mail</h3>
            <p>noarrcphysion@gmail.com</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Card