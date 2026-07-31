// FAQ.jsx — Accessible accordion — only one item open at a time
import React, { useState } from 'react'
import styles from '../../Pages/ServicePage/ServicePage.module.css'

function FAQ({ faq }) {
  const [openIndex, setOpenIndex] = useState(null)

  if (!faq || faq.length === 0) return null

  const toggle = (index) => {
    setOpenIndex(prev => prev === index ? null : index)
  }

  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <div className={styles.sectionInner}>

        <div className={styles.headingCenter}>
          <span className={styles.sectionTag}>FAQ</span>
          <h2 id="faq-heading" className={styles.sectionHeading}>
            Frequently Asked Questions
          </h2>
          <p className={styles.sectionSubheading}>
            Everything you need to know before starting your rehabilitation journey.
          </p>
        </div>

        <div className={styles.faqWrapper} role="list">
          {faq.map((item, index) => {
            const isOpen = openIndex === index
            const answerId = `faq-answer-${index}`
            const btnId    = `faq-btn-${index}`

            return (
              <div
                key={index}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                role="listitem"
              >
                <button
                  id={btnId}
                  className={styles.faqQuestion}
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className={styles.faqQuestionText}>{item.question}</span>
                  <span className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ''}`} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ''}`}
                >
                  <p className={styles.faqAnswerText}>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ
