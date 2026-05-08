import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './ServicePage.module.css'
import { servicesDetails } from '../../data/servicesDetails'

function ServicePage() {

  const { slug } = useParams()

  const service = servicesDetails.find(
    (item) => item.slug === slug
  )

  if (!service) {
    return (
      <div className={styles.notFound}>
        <h1>Service Not Found</h1>
      </div>
    )
  }

  return (
    <section className={styles.page}>

      {/* HERO */}
      <div
        className={styles.hero}
        style={{
          backgroundImage:
            `linear-gradient(rgba(11,37,69,0.75), rgba(11,37,69,0.7)), url(${service.image})`
        }}
      >

        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>

          <span className={styles.tag}>
            Specialized Rehabilitation
          </span>

          <h1>{service.title}</h1>

          <p>{service.tagline}</p>

          <button className={styles.heroBtn}>
            Book Appointment
          </button>

        </div>

      </div>

      {/* INTRO */}
      <section className={styles.section}>
        <div className={styles.introGrid}>

          <div className={styles.introText}>
            <span className={styles.sectionTag}>
              ABOUT THE TREATMENT
            </span>

            <h2>
              Personalized Recovery Through Advanced Care
            </h2>

            <p>{service.intro}</p>
          </div>

          <div className={styles.introImage}>
            <img src={service.image} alt={service.title} />
          </div>

        </div>
      </section>

      {/* CONDITIONS */}
      <section className={styles.section}>

        <div className={styles.headingCenter}>
          <span className={styles.sectionTag}>
            CONDITIONS WE TREAT
          </span>

          <h2>Focused Treatment for Complex Conditions</h2>
        </div>

        <div className={styles.cardGrid}>

          {service.conditions.map((item, index) => (
            <div className={styles.infoCard} key={index}>

              <div className={styles.cardIcon}>
                ✓
              </div>

              <p>{item}</p>

            </div>
          ))}

        </div>

      </section>

      {/* BENEFITS */}
      <section className={styles.sectionAlt}>

        <div className={styles.headingCenter}>
          <span className={styles.sectionTag}>
            BENEFITS
          </span>

          <h2>Why Patients Choose This Therapy</h2>
        </div>

        <div className={styles.cardGrid}>

          {service.benefits.map((item, index) => (
            <div className={styles.benefitCard} key={index}>

              <span>0{index + 1}</span>

              <p>{item}</p>

            </div>
          ))}

        </div>

      </section>

      {/* PROCEDURE */}
      <section className={styles.section}>

        <div className={styles.headingCenter}>
          <span className={styles.sectionTag}>
            PROCEDURE
          </span>

          <h2>Our Step-by-Step Rehabilitation Process</h2>
        </div>

        <div className={styles.timeline}>

          {service.procedure.map((item, index) => (

            <div className={styles.timelineItem} key={index}>

              <div className={styles.timelineNumber}>
                {index + 1}
              </div>

              <div className={styles.timelineContent}>
                <h3>{item.step}</h3>
                <p>{item.desc}</p>
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* TECHNOLOGIES */}
      <section className={styles.sectionAlt}>

        <div className={styles.headingCenter}>
          <span className={styles.sectionTag}>
            ADVANCED TECHNOLOGY
          </span>

          <h2>Modern Rehabilitation Techniques</h2>
        </div>

        <div className={styles.techGrid}>

          {service.technologies.map((item, index) => (

            <div className={styles.techCard} key={index}>
              {item}
            </div>

          ))}

        </div>

      </section>

      {/* FAQ */}
      <section className={styles.section}>

        <div className={styles.headingCenter}>
          <span className={styles.sectionTag}>
            FAQ
          </span>

          <h2>Frequently Asked Questions</h2>
        </div>

        <div className={styles.faqWrapper}>

          {service.faq.map((item, index) => (

            <div className={styles.faqCard} key={index}>

              <h3>{item.question}</h3>

              <p>{item.answer}</p>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>

        <div className={styles.ctaCard}>

          <span className={styles.sectionTag}>
            START YOUR RECOVERY
          </span>

          <h2>
            Expert Rehabilitation Designed Around You
          </h2>

          <p>
            Our specialists are ready to guide you through a
            personalised recovery journey with advanced physiotherapy care.
          </p>

          <div className={styles.ctaButtons}>

            <button className={styles.primaryBtn}>
              Book Appointment
            </button>

            <a
              href="https://wa.me/918952854565"
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryBtn}
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </section>

    </section>
  )
}

export default ServicePage