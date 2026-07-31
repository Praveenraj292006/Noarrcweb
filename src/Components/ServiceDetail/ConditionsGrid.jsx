// ConditionsGrid.jsx — Responsive card grid of conditions treated
import React from 'react'
import styles from '../../Pages/ServicePage/ServicePage.module.css'



 

function ConditionsGrid({ conditions }) {
  return (
    <section className={styles.sectionAlt} aria-labelledby="conditions-heading">
      <div className={styles.sectionInner}>

        <div className={styles.headingCenter}>
          <span className={styles.sectionTag}>CONDITIONS WE TREAT</span>
          <h2 id="conditions-heading" className={styles.sectionHeading}>
            Focused Treatment for Complex Conditions
          </h2>
          <p className={styles.sectionSubheading}>
            Our specialist team is trained to treat a wide range of conditions across the full rehabilitation spectrum.
          </p>
        </div>

       <div className={styles.conditionsGrid}>
            {conditions.map((condition, index) => (
              <div className={styles.conditionCard} key={index}>
                <img
                  src={condition.image}
                  alt={condition.title}
                  className={styles.conditionImage}
                />

                <h3 className={styles.conditionTitle}>
                  {condition.title}
                </h3>
              </div>
            ))}
          </div>

      </div>
    </section>
  )
}

export default ConditionsGrid
