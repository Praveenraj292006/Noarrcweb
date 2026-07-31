// Overview.jsx — Two-column overview: text left, image right
import React from 'react'
import styles from '../../Pages/ServicePage/ServicePage.module.css'

function Overview({ title, overview, image }) {
  return (
    <section className={styles.section} aria-labelledby="overview-heading">
      <div className={styles.overviewGrid}>

        {/* Left — Text */}
        <div className={styles.overviewText}>
          <span className={styles.sectionTag}>ABOUT THE TREATMENT</span>
          <h2 id="overview-heading" className={styles.sectionHeading}>
            Personalized Recovery Through Advanced Care
          </h2>
          <p className={styles.overviewBody}>{overview}</p>
        </div>

        {/* Right — Image */}
        <div className={styles.overviewImage}>
          <div className={styles.overviewImageFrame} aria-hidden="true" />
          <img
            src={image}
            alt={`NOARRC ${title} treatment session`}
            loading="lazy"
            className={styles.overviewImg}
          />
        </div>

      </div>
    </section>
  )
}

export default Overview
