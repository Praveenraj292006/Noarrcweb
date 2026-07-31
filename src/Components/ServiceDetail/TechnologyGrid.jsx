import React from "react";
import styles from "../../Pages/ServicePage/ServicePage.module.css";

function TechnologyGrid({ technologies }) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <section className={styles.sectionAlt} aria-labelledby="tech-heading">
      <div className={styles.sectionInner}>

        <div className={styles.headingCenter}>
          <span className={styles.sectionTag}>ADVANCED TECHNOLOGY</span>

          <h2 id="tech-heading" className={styles.sectionHeading}>
            Modern Rehabilitation Technologies
          </h2>

          <p className={styles.sectionSubheading}>
            We combine evidence-based physiotherapy with advanced rehabilitation equipment for better outcomes.
          </p>
        </div>

        <div className={styles.bentoGrid}>
          {technologies.map((tech, index) => (
            <article
              key={index}
              className={`${styles.bentoCard} ${
                index === 0 ? styles.bentoLarge : ""
              }`}
            >
              <img
                src={tech.image}
                alt={tech.title}
                className={styles.bentoImage}
                loading="lazy"
              />

              <div className={styles.bentoOverlay}>
                <h3>{tech.title}</h3>

                {tech.description && (
                  <p>{tech.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechnologyGrid;