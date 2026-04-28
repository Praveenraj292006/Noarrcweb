import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/Noarrc-logo-Recovered.png'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbarCustom} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container-fluid">

        {/* ── Logo ── */}
        <a className="navbar-brand" href="#" onClick={() => scrollTo('home')}>
          <img src={logo} alt="Noarrc Logo" className={styles.logo} />
        </a>

        {/* ── Mobile Toggle ── */}
        <button
          className={`navbar-toggler ${styles.toggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={styles.togglerBar} />
          <span className={styles.togglerBar} />
          <span className={styles.togglerBar} />
        </button>

        {/* ── Collapsible Area ── */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav mx-auto gap-lg-2 text-center">
            {['home', 'about', 'services', 'contact'].map((id) => (
              <li className="nav-item" key={id}>
                <a
                  className={styles.navLink}
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(id) }}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <div className={`d-flex flex-wrap gap-2 mt-lg-0 mt-3 ${styles.buttons}`}>
            <a
              href="https://wa.me/918952854565"
              target="_blank"
              rel="noreferrer"
              className={`btn ${styles.btnWhatsapp}`}
            >
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