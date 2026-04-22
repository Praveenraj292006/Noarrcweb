import React, { useState } from 'react'
import styles from './Services.module.css'
import ServiceCard from './ServiceCard'
import ServiceModal from './ServiceModal'
import { servicesData } from '../../data/serviceData'
import midimg from '../../assets/noarrc-hosp.webp'

function Services() {

  const [selectedService, setSelectedService] = useState(null)

  const openModal = (service) => {
    if (!service) return
    setSelectedService(service)

    // ✅ correct way to debug state
    console.log("Opening:", service)
  }

  const closeModal = () => {
    setSelectedService(null)
  }

  return (
    <section className={styles.bg}>

      {/* HEADER */}
      <div className={styles.head}>
        <h1>Our Services</h1>
        <p>Personalized physiotherapy treatments for better recovery.</p>
      </div>

      {/* MAIN */}
      <div className={styles.Servicewrapper}>

        {/* LEFT */}
        <div className={styles.twocards}>
          {servicesData?.left?.map((item, index) => (
            <ServiceCard
              key={index}
              service={item}         // ✅ FIXED
              onClick={openModal}
            />
          ))}
        </div>

        {/* CENTER IMAGE */}
        <div className={styles.midimage}>
          <img src={midimg} alt="Clinic" className={styles.midimg} />
        </div>

        {/* RIGHT */}
        <div className={styles.twocards}>
          {servicesData?.right?.map((item, index) => (
            <ServiceCard
              key={index}
              service={item}         // ✅ FIXED (IMPORTANT)
              onClick={openModal}
            />
          ))}
        </div>

      </div>

      {/* MODAL */}
      <ServiceModal service={selectedService} onClose={closeModal} />

    </section>
  )
}

export default Services