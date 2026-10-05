import React from 'react'
import styles from './RecoveryTimeline.module.css'

function RecoveryTimeline({ recoveryJourney }) {
  if (!recoveryJourney || recoveryJourney.length === 0) return null

  return (
    <section
      className={styles.recovery}
      aria-labelledby="recovery-heading"
    >

      {/* Background decoration */}
      <div
        className={styles.bgShape1}
        aria-hidden="true"
      />

      <div
        className={styles.bgShape2}
        aria-hidden="true"
      />

      {/* HEADER */}
      <div className={styles.header}>

        <span className={styles.badge}>
          <span className={styles.badgeDot} />
          Recovery Journey
        </span>

        <h2
          id="recovery-heading"
          className={styles.heading}
        >
          Your Path to <em>Recovery</em>
        </h2>

        <p className={styles.subText}>
          A structured, progressive rehabilitation journey designed
          to restore movement, confidence, and independence.
        </p>

      </div>


      {/* CARDS */}
      <div
        className={styles.timeline}
        role="list"
      >

        {recoveryJourney.map((item, index) => (

          <article
            key={index}
            className={styles.timelineCard}
            role="listitem"
          >

            {/* Background number */}
            <span
              className={styles.timelineStageNum}
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, '0')}
            </span>


            {/* Icon + Stage */}
            <div className={styles.timelineTop}>

              <div
                className={styles.timelineIcon}
                aria-hidden="true"
              >
                {item.icon}
              </div>

              <span className={styles.timelineStage}>
                Stage {String(index + 1).padStart(2, '0')}
              </span>

            </div>


            {/* Accent */}
            <div className={styles.timelineAccent} />


            {/* Content */}
            <h3 className={styles.timelineStageTitle}>
              {item.stage}
            </h3>

            <p className={styles.timelineDesc}>
              {item.description}
            </p>


            {/* Bottom */}
            <div className={styles.timelineBottom}>
              <span>
                Recovery milestone
              </span>

            </div>

          </article>

        ))}

      </div>

    </section>
  )
}

export default RecoveryTimeline