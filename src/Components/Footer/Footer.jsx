import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        {/* BRAND */}
        <div className={styles.col}>
          <h2>NOARRC Physio</h2>
          <p>
            Providing advanced physiotherapy and rehabilitation services
            focused on recovery, mobility, and long-term wellness.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className={styles.col}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className={styles.col}>
          <h3>Services</h3>
          <ul>
            <li>Neuro Rehabilitation</li>
            <li>Orthopedic Rehab</li>
            <li>Robotic Therapy</li>
            <li>Pain Management</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className={styles.col}>
          <h3>Contact</h3>
          <p>📍 Chennai, Tamil Nadu</p>
          <p>📞 +91 66780342</p>
          <p>✉️ noarrcphysion@gmail.com</p>

          <div className={styles.socials}>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-whatsapp"></i></a>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} NOARRC Physio. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer