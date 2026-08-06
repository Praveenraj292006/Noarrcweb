// ServiceCTA.jsx — Full-width call-to-action section
import React from 'react'
import styles from '../../Pages/ServicePage/ServicePage.module.css'
import { useAppointment } from '../../Context/AppointmentContext.jsx'
import ContactData from '../../data/Contactdata.js'

function ServiceCTA({ title }) {
  const { setOpen } = useAppointment()

  return (
    <section className={styles.ctaSection} aria-labelledby="cta-heading">
      <div className={styles.ctaCard}>

        {/* Decorative blobs */}
        <div className={styles.ctaBlob1} aria-hidden="true" />
        <div className={styles.ctaBlob2} aria-hidden="true" />

        <div className={styles.ctaInner}>
          <span className={styles.sectionTagLight}>START YOUR RECOVERY</span>

          <h2 id="cta-heading" className={styles.ctaHeading}>
            Expert Rehabilitation Designed Around You
          </h2>

          <p className={styles.ctaBody}>
            Our specialists are ready to guide you through a personalised recovery journey
            with advanced physiotherapy and compassionate care — every step of the way.
          </p>

          <div className={styles.ctaButtons}>
            <button
              className={styles.ctaPrimaryBtn}
              onClick={() => setOpen(true)}
              aria-label={`Book appointment for ${title}`}
            >
              Request a Call Back
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>

            <a
              href={`https://wa.me/${ContactData.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className={styles.ctaSecondaryBtn}
              aria-label="Contact us on WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.374 0 0 5.373 0 12c0 2.117.549 4.099 1.507 5.819L.057 23.879a.75.75 0 00.919.921l6.184-1.474A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.897 0-3.7-.516-5.254-1.417l-.376-.222-3.908.932.963-3.83-.247-.392A9.716 9.716 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ServiceCTA
