import React from 'react'
import styles from './Services.module.css'

function ServiceCard({ icon, title, desc }) {
  return (
    <div className={styles.card}>
      <img src={icon} alt={title} className={styles.icon} />

      <h3>{title}</h3>
      <p>{desc}</p>

      <button className={`${styles.custombtn} ${styles.btn1}`}>
        Know More
      </button>
    </div>
  )
}

export default ServiceCard