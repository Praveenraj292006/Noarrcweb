import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer>

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
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#services">Services</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>


        {/* WORKING TIME */}
        <div className={styles.col}>
          <h3>Working Time</h3>

          <div className={styles.workingTime}>

            <div>
              <strong>Inpatient Care</strong>
              <p>Available 24/7</p>
            </div>

            <div>
              <strong>Outpatient Care</strong>
              <p>Monday – Saturday</p>
              <p>10:00 AM – 9:00 PM</p>
            </div>

          </div>
        </div>


        {/* CONTACT */}
        <div className={styles.col}>
          <h3>Contact</h3>

          <p>
            📍 Chennai, Tamil Nadu
          </p>

          <p>
            📞 +91 6381047727
          </p>

          <p>
            📞 +91 7200080275
          </p>

          <p>
            ✉️ noarrcphysion@gmail.com
          </p>

          

        </div>

      </div>


      {/* BOTTOM BAR */}
      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} NOARRC Physio. All rights reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer