import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Notfound.module.css'

function NotFound() {

  const navigate = useNavigate()

  return (

    <section className={styles.notFound}>

      {/* Background blobs */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      {/* Floating Grid */}
      <div className={styles.grid}></div>

      <div className={styles.content}>

        <span className={styles.tag}>
          ERROR 404
        </span>

        <h1>
          Page Not Found
        </h1>

        <p>
          The page you’re looking for may have been moved,
          deleted, or never existed.
        </p>

        {/* Action buttons */}
        <div className={styles.actions}>

          <button
            className={styles.primaryBtn}
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>

          <a
            href="https://wa.me/918952854565"
            target="_blank"
            rel="noreferrer"
            className={styles.secondaryBtn}
          >
            Contact Support
          </a>

        </div>

      </div>

      {/* Decorative 404 */}
      <div className={styles.numberWrap}>

        <span className={styles.num}>4</span>

        <div className={styles.zero}>
          <div className={styles.zeroInner}></div>
        </div>

        <span className={styles.num}>4</span>

      </div>

    </section>

  )
}

export default NotFound