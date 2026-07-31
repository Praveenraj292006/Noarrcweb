// ServiceHero.jsx — Full-width hero with parallax, breadcrumb, title, tagline, CTA
import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../Pages/ServicePage/ServicePage.module.css'
import { useAppointment } from '../../Context/AppointmentContext.jsx'

function ServiceHero({ intro,title, tagline, image }) {
  const { setOpen } = useAppointment()

  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(rgba(11,37,69,0.82), rgba(11,37,69,0.65)), url(${image})`,
      }}
      aria-label={`${title} hero banner`}
    >
      {/* Overlay gradient */}
      <div className={styles.heroOverlay} aria-hidden="true" />

      {/* Content */}
      <div className={styles.heroContent}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">›</span>
          <Link to="/#services" className={styles.breadcrumbLink}>Services</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">›</span>
          <span className={styles.breadcrumbCurrent}>{title}</span>
        </nav>

        {/* Tag */}
        <span className={styles.tag}>Specialized Rehabilitation</span>

        {/* Heading */}
        <h1 className={styles.heroTitle}>{title}</h1>

        {/* Tagline */}
        <p className={styles.heroTagline}>{tagline}</p>
        <p className={styles.herointro}>{intro}</p>

        {/* CTA */}
        <button
          className={styles.heroBtn}
          onClick={() => setOpen(true)}
          aria-label={`Book appointment for ${title}`}
        >
          Book Appointment
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ServiceHero
