import React from 'react'
import styles from './Services.module.css'

import painicon from '../assets/pain.png'
import neuroicon from '../assets/ai.png'
import ortho from '../assets/medical.png'
import robot from '../assets/artificial-intelligence.png'
import midimg from '../assets/noarrc-hosp.webp'

function Services() {
  return (
    <section className={styles.bg}>

      {/* HEADER */}
      <div className={styles.head}>
        <h1>Our Services</h1>
        <p>
          We provide comprehensive physiotherapy solutions designed to restore movement,
          reduce pain, and enhance your overall quality of life through personalized and
          evidence-based care.
        </p>
      </div>

      {/* MAIN WRAPPER */}
      <div className={styles.Servicewrapper}>

        {/* LEFT CARDS */}
        <div className={styles.twocards}>
          <div className={styles.card}>
            <img src={neuroicon} alt="Neuro Rehab" className={styles.icon} />
            <h3>Neuro Rehabilitation</h3>
            <p>
              Specialized therapy programs focused on recovery from neurological conditions
              such as stroke, spinal cord injuries, and movement disorders, helping patients
              regain independence and function.
            </p>
           <button className={`${styles.custombtn} ${styles.btn1}`}>Read More</button>
          </div>

          <div className={styles.card}>
            <img src={ortho} alt="Ortho Rehab" className={styles.icon} />
            <h3>Orthopedic Rehabilitation</h3>
            <p>
              Targeted treatment for joint, muscle, and bone-related injuries including
              fractures, post-surgical recovery, and chronic orthopedic conditions.
            </p>
            <button className={`${styles.custombtn} ${styles.btn1}`}>Read More</button>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className={styles.midimage}>
          <img src={midimg} alt="Clinic" className={styles.midimg} />
        </div>

        {/* RIGHT CARDS */}
        <div className={styles.twocards}>
          <div className={styles.card}>
            <img src={robot} alt="Robotic Therapy" className={styles.icon} />
            <h3>Robotic Therapy</h3>
            <p>
              Advanced technology-driven rehabilitation that enhances precision,
              improves outcomes, and accelerates recovery through assisted movement training.
            </p>
           <button className={`${styles.custombtn} ${styles.btn1}`}>Read More</button>
          </div>

          <div className={styles.card}>
            <img src={painicon} alt="Pain Management" className={styles.icon} />
            <h3>Pain Management</h3>
            <p>
              Comprehensive pain relief programs addressing chronic pain conditions
              through manual therapy, exercise, and modern physiotherapy techniques.
            </p>
            <button className={`${styles.custombtn} ${styles.btn1}`}>Read More</button>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Services