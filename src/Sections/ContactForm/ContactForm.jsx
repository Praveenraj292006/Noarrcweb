import React, { useRef } from 'react'
import styles from './ContactForm.module.css'
import emailjs from '@emailjs/browser'
import formImg from '../../assets/placeholder_3.jpg'

function ContactForm() {

  const formRef = useRef()

const handleSubmit = async (e) => {
  e.preventDefault()

  const form = formRef.current

  const formData = new FormData(form)

  const name = formData.get("name")
  const phone = formData.get("phone")
  const email = formData.get("email")
  const service = formData.get("service")
  const message = formData.get("message")

  try {
    // =========================
    // EMAIL TO ORGANIZATION
    // =========================
    await emailjs.sendForm(
      'service_wl3n7r9',
      'template_669e2wv',
      form,
      'WqtGATQJNSC28jQt5'
    )

    // =========================
    // CONFIRMATION EMAIL TO USER
    // =========================
    if (email) {
      await emailjs.sendForm(
        'service_wl3n7r9',
        'template_cp1cgx4',
        form,
        'WqtGATQJNSC28jQt5'
      )
    }

    // =========================
    // WHATSAPP MESSAGE
    // =========================

    const whatsappMessage = `
New Enquiry - NOARRC

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Service: ${service}

Message:
${message || "No additional message"}
    `.trim()

    // Opens WhatsApp for the organization
    window.open(
      `https://wa.me/917200080275?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      '_blank'
    )

    alert(
      "Thank you! Your enquiry has been received. Our team will contact you shortly."
    )

    form.reset()

  } catch (error) {

    console.error("Form submission failed:", error)

    alert(
      "Something went wrong while submitting your enquiry. Please try again."
    )
  }
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