import React, { useRef } from 'react'
import styles from './ContactForm.module.css'
import emailjs from '@emailjs/browser'
import formImg from '../../assets/placeholder_3.jpg'

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
   const message = `Hello ${name}, thank you for contacting NOARRC. We have received your enquiry regarding ${service}. Our team will review your request and get in touch with you shortly.`

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      '_blank'
    )

    alert("Thank you! Your enquiry has been received. Our team will contact you shortly.")

    form.reset()
  }

  return (
    <section className={styles.section}>

      <div className={styles.form}>

        {/* LEFT SIDE */}
        <form ref={formRef} onSubmit={handleSubmit} className={styles.inputarea}>

          <h2>Have a Question? Get in Touch</h2>
          <p>
            Fill out the enquiry form below and our team will get back to you shortly to
            discuss your requirements and answer your questions.
          </p>
          <div className={styles.row}>
            <input name="name" type="text" placeholder="Full Name" required />
            <input name="phone" type="tel" placeholder="Phone Number" required />
          </div>

          <div className={styles.row}>
            <input name="email" type="email" placeholder="Email Address" />
           <select name="service" required>
              <option value="">Select a Service</option>
              <option>Neurological Rehabilitation</option>
              <option>Orthopedic Rehabilitation</option>
              <option>Women's Health Physiotherapy</option>
              <option>Inpatient Rehabilitation</option>
              <option>Robotic Physiotherapy</option>
              <option>Sports & Fitness Therapy</option>
              <option>Pediatric Rehabilitation</option>
              <option>Pain Management</option>
              <option>Home Care Physiotherapy</option>
            </select>
          </div>

         

          <textarea
            name="message"
            placeholder="Describe your condition (optional)"
          />

          <button type="submit" className={styles.btn}>
            Send Enquiry
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