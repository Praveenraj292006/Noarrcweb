import React from 'react'
import styles from './Services.module.css'

function ServiceModal({ service, onClose }) {

     const scrollTo = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  })}

  if (!service) return null

  return (
    <div className={styles.modalOverlay} onClick={onClose}>

      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE */}
        <span className={styles.closeIcon} onClick={onClose}>×</span>

        {/* IMAGE */}
        <img
          src={service.image}
          alt={service.title}
          className={styles.modalImage}
        />

        {/* TITLE */}
        <h2>{service.title}</h2>

        {/* DESCRIPTION */}
        <p className={styles.modalDesc}>
          {service.full}
        </p>

        {/* PROCEDURE */}
        <div className={styles.section}>
          <h3>Procedure</h3>
          <ul>
            {service.procedure?.map((step, i) => (
              <li key={i}>• {step}</li>
            ))}
          </ul>
        </div>

        {/* BENEFITS */}
        <div className={styles.section}>
          <h3>Benefits</h3>
          <ul>
            {service.benefits?.map((point, i) => (
              <li key={i}>✔ {point}</li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <button className={styles.bookBtn}  onClick={() => scrollTo('contact')} >
          Enquire Now
        </button>

      </div>

    </div>
  )
}

export default ServiceModal