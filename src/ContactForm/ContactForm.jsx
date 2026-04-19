import React, { useRef } from 'react'
import styles from './ContactForm.module.css'
import emailjs from '@emailjs/browser'
import formImg from '../assets/placeholder_3.jpg'

function ContactForm() {

  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = formRef.current

    const formData = new FormData(form)

    const name = formData.get("name")
    const phone = formData.get("phone")
    const service = formData.get("service")

    /* ===== EMAIL TO ADMIN ===== */
    emailjs.sendForm(
      'service_wl3n7r9',
      'template_669e2wv',
      form,
      'WqtGATQJNSC28jQt5'
    )

    /* ===== EMAIL TO USER ===== */
    emailjs.sendForm(
      'service_wl3n7r9',
      'template_cp1cgx4',
      form,
      'WqtGATQJNSC28jQt5'
    )

    /* ===== WHATSAPP AUTO MESSAGE ===== */
    const message = `Hello ${name}, your appointment request for ${service} has been received. We will contact you shortly.`

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      '_blank'
    )

    alert("Appointment request sent!")

    form.reset()
  }

  return (
    <section className={styles.section}>

      <div className={styles.form}>

        {/* LEFT SIDE */}
        <form ref={formRef} onSubmit={handleSubmit} className={styles.inputarea}>

          <h2>Book an Appointment</h2>
          <p>We will contact you shortly to confirm your booking.</p>

          <div className={styles.row}>
            <input name="name" type="text" placeholder="Full Name" required />
            <input name="phone" type="tel" placeholder="Phone Number" required />
          </div>

          <div className={styles.row}>
            <input name="email" type="email" placeholder="Email Address" />
            <select name="service">
              <option>Neuro Rehabilitation</option>
              <option>Orthopedic Rehab</option>
              <option>Robotic Therapy</option>
              <option>Pain Management</option>
            </select>
          </div>

          <div className={styles.row}>
            <input name="date" type="date" required />
            <input name="time" type="time" required />
          </div>

          <textarea
            name="message"
            placeholder="Describe your condition (optional)"
          />

          <button type="submit" className={styles.btn}>
            Book Appointment
          </button>

        </form>

        {/* RIGHT IMAGE */}
        <div className={styles.formimg}>
          <img src={formImg} alt="Physio" />
        </div>

      </div>

    </section>
  )
}

export default ContactForm