import React from 'react'
import styles from './FloatingBar.module.css'
import Contactdata from '../../data/Contactdata.js'

function FloatingBar() {
  return (
    <div className={styles.floatingBar}>

      {/* CALL */}
      <a href={`tel:${Contactdata.phone}`} className={styles.item}>
        <i className="bi bi-telephone-fill"></i>
      </a>

      {/* WHATSAPP */}
      <a
        href={`https://wa.me/${Contactdata.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className={styles.item}
      >
        <i className="bi bi-whatsapp"></i>
      </a>

      {/* LOCATION */}
      <a
        href="https://maps.app.goo.gl/uFinwqksPjXUqWQ28"
        target="_blank"
        rel="noreferrer"
        className={styles.item}
      >
        <i className="bi bi-geo-alt-fill"></i>
      </a>

    </div>
  )
}

export default FloatingBar