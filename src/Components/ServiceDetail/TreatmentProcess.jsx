// TreatmentProcess.jsx — Numbered step cards for the treatment process
import React from 'react'
import styles from '../../Pages/ServicePage/ServicePage.module.css'

function TreatmentProcess({ treatmentProcess }) {
  if (!treatmentProcess || treatmentProcess.length === 0) return null

  return (
    <section className={styles.sectionAlt} aria-labelledby="process-heading">
      <div className={styles.sectionInner}>

        <div className={styles.headingCenter}>
          <span className={styles.sectionTag}>TREATMENT PROCESS</span>
          <h2 id="process-heading" className={styles.sectionHeading}>
            Our Step-by-Step Rehabilitation Process
          </h2>
          <p className={styles.sectionSubheading}>
            A transparent, structured approach — so you always know what to expect at every stage of your recovery.
          </p>
        </div>

        <div className={styles.processGrid}>
          {treatmentProcess.map((item, index) => (
            <div className={styles.processCard} key={index}>
              <div className={styles.processNumber} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className={styles.processConnector} aria-hidden="true" />
              <h3 className={styles.processTitle}>{item.step}</h3>
              <p className={styles.processDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TreatmentProcess
