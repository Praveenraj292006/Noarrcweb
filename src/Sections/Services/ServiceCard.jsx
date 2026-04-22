import React from 'react'
import styles from './Services.module.css'

function ServiceCard({ service, onClick }) {
  return (
    <div className={styles.card}>
      <img src={service.icon} alt={service.title} className={styles.icon} />

      <h3>{service.title}</h3>
      <p>{service.desc}</p>

      <button
        onClick={() => onClick(service)} // 🔥 PASS FULL OBJECT
        className={`${styles.custombtn} ${styles.btn1}`}
      >
        Know More
      </button>
    </div>
  )
}

export default ServiceCard