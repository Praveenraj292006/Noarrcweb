import React from 'react'
import styles from './Services.module.css'
import ServiceCard from './ServiceCard'

import painicon from '../assets/pain.png'
import neuroicon from '../assets/ai.png'
import ortho from '../assets/medical.png'
import robot from '../assets/artificial-intelligence.png'
import midimg from '../assets/noarrc-hosp.webp'

/* 🔥 Editable data */
const servicesData = {
  left: [
    {
      icon: neuroicon,
      title: "Neuro Rehabilitation",
      desc: "Recovery support for stroke and neurological disorders."
    },
    {
      icon: ortho,
      title: "Orthopedic Rehab",
      desc: "Treatment for joints, muscles, and injury recovery."
    }
  ],
  right: [
    {
      icon: robot,
      title: "Robotic Therapy",
      desc: "Technology-assisted rehab for faster improvement."
    },
    {
      icon: painicon,
      title: "Pain Management",
      desc: "Relief from chronic pain and mobility issues."
    }
  ]
}

function Services() {
  return (
    <section className={styles.bg}>

      {/* HEADER */}
      <div className={styles.head}>
        <h1>Our Services</h1>
        <p>
          Personalized physiotherapy treatments to restore movement,
          reduce pain, and improve quality of life.
        </p>
      </div>

      {/* MAIN WRAPPER */}
      <div className={styles.Servicewrapper}>

        {/* LEFT CARDS */}
        <div className={styles.twocards}>
          {servicesData.left.map((item, index) => (
            <ServiceCard key={index} {...item} />
          ))}
        </div>

        {/* CENTER IMAGE */}
        <div className={styles.midimage}>
          <img src={midimg} alt="Clinic" className={styles.midimg} />
        </div>

        {/* RIGHT CARDS */}
        <div className={styles.twocards}>
          {servicesData.right.map((item, index) => (
            <ServiceCard key={index} {...item} />
          ))}
        </div>

      </div>

    </section>
  )
}

export default Services