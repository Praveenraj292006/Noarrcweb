import React from 'react'
import styles from './Navbar.module.css'
import logo from '../assets/Noarrc-logo-Recovered.png'

/** Primary site navigation — sticky, glassmorphic bar with Bootstrap collapse. */
function Navbar() {
  const scrollTo = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  })
}
  return (
    <nav className={`navbar navbar-expand-lg  ${styles.navbarCustom}`}>
      <div className="container-fluid " >

        {/* ── Logo ─────────────────────────────── */}
        <a className="navbar-brand" href="#" onClick={() => scrollTo('home')}>
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
              <a className={styles.navLink} href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>Home</a>
            </li>
            <li className="nav-item">
              <a className={styles.navLink} href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about') }}>About</a>
            </li>
            <li className="nav-item">
              <a className={styles.navLink} href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>Services</a>
            </li>
            <li className="nav-item">
              <a className={styles.navLink} href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>Contact</a>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className={`d-flex flex-wrap gap-2 mt-lg-0 mt-2 ${styles.buttons}`}>
            <a href="https://wa.me/918952854565" target="_blank" rel="noreferrer" className={`btn ${styles.btnWhatsapp}`}>
              <i className="bi bi-whatsapp" /> WhatsApp
            </a>
            <a href="tel:+918952854565" className={`btn ${styles.btnCall}`}>
              <i className="bi bi-telephone" /> Call Us
            </a>
            <button className={`btn ${styles.btnBook}`} onClick={() => scrollTo('contact')}>
              Book Now
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar