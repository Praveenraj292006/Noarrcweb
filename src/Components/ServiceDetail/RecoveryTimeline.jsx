// RecoveryTimeline.jsx — Vertical timeline with alternating cards
import React from 'react'
import styles from '../../Pages/ServicePage/ServicePage.module.css'

function RecoveryTimeline({ recoveryJourney }) {
  if (!recoveryJourney || recoveryJourney.length === 0) return null

  return (
    <section className={styles.section} aria-labelledby="timeline-heading">
      <div className={styles.sectionInner}>

        <div className={styles.headingCenter}>
          <span className={styles.sectionTag}>RECOVERY JOURNEY</span>
          <h2 id="timeline-heading" className={styles.sectionHeading}>
            Your Path to Recovery
          </h2>
          <p className={styles.sectionSubheading}>
            A structured, progressive rehabilitation journey designed to restore your function safely and effectively.
          </p>
        </div>

        <div className={styles.timeline} role="list">
          {/* Central spine line */}
          <div className={styles.timelineSpine} aria-hidden="true" />

          {recoveryJourney.map((item, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={index}
                className={`${styles.timelineRow} ${isEven ? styles.timelineRowLeft : styles.timelineRowRight}`}
                role="listitem"
              >
                {/* Card */}
                <div className={styles.timelineCard}>
                  <div className={styles.timelineStageNum} aria-label={`Stage ${index + 1}`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className={styles.timelineEmoji} aria-hidden="true">{item.icon}</div>
                  <h3 className={styles.timelineStageTitle}>{item.stage}</h3>
                  <p className={styles.timelineDesc}>{item.description}</p>
                </div>

                {/* Centre node */}
                <div className={styles.timelineNodeWrap} aria-hidden="true">
                  <div className={styles.timelineNode} />
                </div>

                {/* Spacer on opposite side */}
                <div className={styles.timelineSpacer} aria-hidden="true" />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default RecoveryTimeline
