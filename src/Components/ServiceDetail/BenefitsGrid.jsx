import React from "react";
import styles from "./Css/BenefitsGrid.module.css";

function BenefitsGrid({ benefits }) {
  if (!benefits || benefits.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="benefits-heading">
      <div className={styles.sectionInner}>

        <div className={styles.headingCenter}>
          <span className={styles.sectionTag}>BENEFITS</span>

          <h2 id="benefits-heading" className={styles.sectionHeading}>
            Why Patients Choose This Therapy
          </h2>

          <p className={styles.sectionSubheading}>
            Every treatment plan is designed to improve your health, mobility,
            and quality of life.
          </p>
        </div>

        <div className={styles.benefitsBentoGrid}>
          {benefits.map((benefit, index) => (
            <article
              key={index}
              className={`${styles.benefitBentoCard} ${
                index === 0 ? styles.benefitLarge : ""
              }`}
            >
              <img
                src={benefit.image}
                alt={benefit.title}
                className={styles.benefitImage}
                loading="lazy"
              />

              <div className={styles.benefitOverlay}>
                <span className={styles.benefitNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{benefit.title}</h3>

                {benefit.description && (
                  <p>{benefit.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BenefitsGrid;