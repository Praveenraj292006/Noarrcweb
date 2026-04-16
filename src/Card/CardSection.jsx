import React, { useEffect, useRef } from 'react'
import styles from './Card.module.css'
import Card from './Card'

import iconBrain from '../assets/neuro.png'
import iconOrtho from '../assets/hand-bone.png'
import iconRobo from '../assets/robotic.png'

import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Card data ─────────────────────────────────────────── */

const CARD_DATA = [
  {
    icon: iconBrain,
    title: 'Neuro Rehab',
    description: 'Restore movement after neurological conditions.',
    buttonText: 'Learn More',
  },
  {
    icon: iconOrtho,
    title: 'Ortho Rehab',
    description: 'Recover strength after injuries and surgeries.',
    buttonText: 'Learn More',
  },
  {
    icon: iconRobo,
    title: 'Robotic Therapy',
    description: 'Advanced AI-assisted rehabilitation.',
    buttonText: 'Learn More',
  },
]

/** Animated services card grid with GSAP scroll-triggered entrance. */
function CardSection() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className={styles.cardContainer} ref={sectionRef}>
      {CARD_DATA.map((card, index) => (
        <div
          key={card.title}
          ref={(el) => { cardsRef.current[index] = el }}
        >
          <Card
            icon={card.icon}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
          />
        </div>
      ))}
    </div>
  )
}

export default CardSection