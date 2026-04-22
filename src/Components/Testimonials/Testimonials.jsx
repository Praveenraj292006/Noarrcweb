import React, { useEffect, useRef, useState } from 'react'
import styles from './Testimonials.module.css'
import { gsap } from 'gsap'

const reviews = [
  {
    name: "Karthick Raman",
    text: "I had a thoroughly satisfying experience. My issues were properly addressed from the get go. The ultrasound, IFT and traction were all good. But what impressed me most was their focused rehab process. They try to understand your issues and give you the best possible treatment. For me, Shenega ma'am has been extremely helpful in patiently guiding me through every step. It's worth giving a shot.",
    rating: 5
  },
  {
    name: "Ramachandran ranganathan",
    text: "Good morning Madam. Myself and my wife come to guest hospital for physiotherapy treatment. Harini madam has given very good care on us and treatment given by her is very excellent. Iam very much thankful for this.",
    rating: 5
  },
  {
    name: "Kavitha Mohan",
    text: "I had went to guest hospital for neck pain. It was an nice experience. Their treatment approach was very good . The doctors were very kind too. Finally I get rid of my neck pain through their exercises . Within one week. I recommend everyone to visit the guest hospital.",
    rating: 4
  },
  {
    name: "Gokul Hema",
    text: "I have pain on shoulder for 1 week but it reduced within 2 days.well good treatment.The doctors were very kind too.Finally I get rid of my shoulder pain through their exercises.",
    rating: 4
  }
]

function Testimonials() {

  const sliderRef = useRef(null)
  const modalRef = useRef(null)

  const [selectedReview, setSelectedReview] = useState(null)

  useEffect(() => {
    const slider = sliderRef.current

    const animation = gsap.to(slider, {
      xPercent: -50,
      duration: 50,
      ease: "linear",
      repeat: -1
    })

    slider.parentElement.addEventListener("mouseenter", () => animation.pause())
    slider.parentElement.addEventListener("mouseleave", () => animation.play())

  }, [])

  // 🔥 MODAL ANIMATION
  useEffect(() => {
    if (selectedReview) {
      gsap.fromTo(
        modalRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" }
      )
    }
  }, [selectedReview])

  return (
    <section className={styles.section}>

      <h2>What Our Patients Say</h2>

      <div className={styles.sliderWrapper}>
        <div className={styles.slider} ref={sliderRef}>

          {[...reviews, ...reviews].map((review, index) => (
            <div className={styles.card} key={index}>

              <div className={styles.stars}>
                {"★".repeat(review.rating)}
              </div>

              {/* SHORT TEXT */}
              <p className={styles.text}>
                {review.text.substring(0, 100)}...
              </p>

              {/* READ MORE */}
              <span
                className={styles.readMore}
                onClick={() => setSelectedReview(review)}
              >
                Read More
              </span>

              <h4>{review.name}</h4>

            </div>
          ))}

        </div>
      </div>

      {/* ===== MODAL ===== */}
      {selectedReview && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedReview(null)}
        >
          <div
            className={styles.modal}
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >

            <div className={styles.stars}>
              {"★".repeat(selectedReview.rating)}
            </div>

            <p>{selectedReview.text}</p>

            <h4>- {selectedReview.name}</h4>

            <button onClick={() => setSelectedReview(null)}>
              Close
            </button>

          </div>
        </div>
      )}

    </section>
  )
}

export default Testimonials