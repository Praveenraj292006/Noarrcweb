import React, { useEffect, useRef } from 'react'
import styles from './About.module.css'
import illustration from '../assets/physio-illu.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import img1 from '../assets/noarrc-hosp.webp'
import img2 from '../assets/placeholder_2.jpg'
import img3 from '../assets/placeholder_4.jpg'
import img4 from '../assets/placeholder_5.jpeg'

const images = [img1, img2, img3, img4]

gsap.registerPlugin(ScrollTrigger)

function About() {

  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // SCROLL REVEAL
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })

      tl.from(`.${styles.slide}`, {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })

      .from(`.${styles.abtpara}`, {
        x: 80,
        opacity: 0,
        duration: 1
      }, "-=0.6")

      .from(`.${styles.illustration}`, {
        y: 60,
        opacity: 0,
        duration: 0.8
      }, "-=0.5")

      // FLOATING ILLUSTRATION
      gsap.to(`.${styles.illustration}`, {
        y: "-=10",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
  const slides = document.querySelectorAll(`.${styles.slide}`)

  gsap.set(slides, { opacity: 0 })
  gsap.set(slides[0], { opacity: 1 })

  let current = 0

  const interval = setInterval(() => {
    const next = (current + 1) % slides.length

    gsap.to(slides[current], {
      opacity: 0,
      duration: 1
    })

   gsap.to(slides[next], {
  opacity: 1,
  scale: 1.05,
  duration: 1
    })

    gsap.fromTo(slides[next],
      { scale: 1.1 },
      { scale: 1, duration: 3 }
    )

    current = next
  }, 3000)

  return () => clearInterval(interval)
}, [])

  // PARALLAX BLOBS
  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20

      gsap.to(`.${styles.blob1}`, {
        x,
        y,
        duration: 1
      })

      gsap.to(`.${styles.blob2}`, {
        x: -x,
        y: -y,
        duration: 1.2
      })
    }

    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <section className={styles.about} ref={sectionRef}>

      {/* BLOBS */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      {/* LEFT IMAGE */}
      <div className={styles.abtimg}>
      <div className={styles.square1}>
        
        <div className={styles.slider}>
          {images.map((img, index) => (
            <img key={index} src={img} className={styles.slide} />
          ))}
        </div>

      </div>
    </div>

      {/* RIGHT CONTENT */}
      <div className={styles.abtpara}>
        <h1>NOARRC GUEST PHYSIO</h1>

        <p>
          At NOARRC Physiotherapy & Rehabilitation Centre, we provide
          evidence-based treatments focused on long-term recovery and functional independence.
          <br /><br />
          Our expert team treats neurological and orthopedic conditions using
          modern techniques and personalized care.
          <br /><br />
          We believe recovery is not just healing the body — but restoring
          confidence, mobility, and quality of life.
        </p>
        <button className={styles.bookbtn}>Book Appoinment</button>

        <img src={illustration} alt="illustration" className={styles.illustration} />
      </div>

    </section>
  )
}

export default About