import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './ServicePage.module.css'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import { servicesDetails } from '../../data/servicesDetails'
import { useAppointment } from '../../Context/AppointmentContext.jsx'
import ContactData from '../../data/Contactdata.js'

// Icons for conditions
import aiIcon from '../../assets/ai.png'
import medicalIcon from '../../assets/medical.png'
import roboticIcon from '../../assets/artificial-intelligence.png'
import painIcon from '../../assets/pain.png'
import sportsIcon from '../../assets/soccer-player.png'
import laserIcon from '../../assets/laser.png'
import manIcon from '../../assets/man.png'
import meditationIcon from '../../assets/meditation.png'
import boneIcon from '../../assets/hand-bone.png'
import neuroIcon from '../../assets/neuro.png'

const getConditionIcon = (condition) => {
  const text = condition.toLowerCase();
  if (text.includes('sport') || text.includes('athlet') || text.includes('tennis') || text.includes('runner') || text.includes('acl')) return sportsIcon;
  if (text.includes('pain') || text.includes('strain') || text.includes('sprain') || text.includes('sciatica') || text.includes('injur')) return painIcon;
  if (text.includes('neuro') || text.includes('stroke') || text.includes('brain') || text.includes('parkinson') || text.includes('cerebral') || text.includes('autism')) return neuroIcon;
  if (text.includes('ortho') || text.includes('fracture') || text.includes('joint') || text.includes('arthritis') || text.includes('bone') || text.includes('surgery') || text.includes('replacement')) return boneIcon;
  if (text.includes('women') || text.includes('pregnan') || text.includes('postpartum') || text.includes('pelvic') || text.includes('diastasis') || text.includes('core')) return meditationIcon;
  if (text.includes('child') || text.includes('pediatric') || text.includes('development') || text.includes('delay')) return manIcon;
  if (text.includes('laser')) return laserIcon;
  if (text.includes('robot') || text.includes('tech')) return roboticIcon;
  if (text.includes('balance') || text.includes('coordination') || text.includes('walking') || text.includes('postur')) return aiIcon;
  
  return medicalIcon; // generic fallback
}

function ServicePage() {

  const { slug } = useParams()
   const { setOpen } = useAppointment();

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
      <Navbar></Navbar>

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

          <button className={styles.heroBtn}  onClick={()=>setOpen(true)}>
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
            <img src={service.image} alt={service.title} loading="lazy" />
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

        <div className={styles.pillGrid}>

          {service.conditions.slice(0, 5).map((item, index) => (
            <div className={styles.infoCard} key={index}>

              <div className={styles.cardIcon}>
                <img src={getConditionIcon(item)} alt={item} className={styles.pillImage} loading="lazy" />
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

            <button className={styles.primaryBtn}  onClick={()=>setOpen(true)}>
              Book Appointment
            </button>

            <a
              href={`https://wa.me/${ContactData.whatsapp}`}
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