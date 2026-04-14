import React from 'react'
import styles from './Navbar.module.css'
import logo from '../assets/Noarrc-logo-Recovered.png'

/** Primary site navigation — sticky, glassmorphic bar with Bootstrap collapse. */
function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${styles.navbarCustom}`}>
      <div className="container-fluid">

        {/* ── Logo ─────────────────────────────── */}
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Noarrc Logo" className={styles.logo} />
        </a>

        {/* ── Mobile Toggle ────────────────────── */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* ── Collapsible Area ─────────────────── */}
        <div className="collapse navbar-collapse" id="navbarNav">

          {/* Navigation Links */}
          <ul className="navbar-nav mx-auto gap-lg-3 text-center">
            <li className="nav-item">
              <a className={styles.navLink} href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className={styles.navLink} href="#">About</a>
            </li>
            <li className="nav-item">
              <a className={styles.navLink} href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className={styles.navLink} href="#">Contact</a>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className={`d-flex flex-wrap gap-2 mt-lg-0 mt-2 ${styles.buttons}`}>
            <button className={`btn ${styles.btnWhatsapp}`}>
              <i className="bi bi-whatsapp" /> WhatsApp
            </button>
            <button className={`btn ${styles.btnCall}`}>
              <i className="bi bi-telephone" /> Call Us
            </button>
            <button className={`btn ${styles.btnBook}`}>
              Book Now
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar