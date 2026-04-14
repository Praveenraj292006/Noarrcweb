import React, { useRef, useCallback } from 'react'
import styles from './Card.module.css'

/**
 * Service card with 3D tilt effect on hover.
 * @param {{ icon: string, title: string, description: string, buttonText: string }} props
 */
function Card({ icon, title, description, buttonText }) {
  const cardRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = -(y - centerY) / 10
    const rotateY = (x - centerX) / 10

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `
  }, [])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `
  }, [])

  return (
    <div
      ref={cardRef}
      className={styles.card}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={icon} alt={title} className={styles.iconImg} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className={styles.cardButton}>{buttonText}</button>
    </div>
  )
}

export default Card