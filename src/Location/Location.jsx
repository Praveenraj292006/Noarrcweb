import React, { useEffect, useRef } from 'react'
import styles from './Location.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Location() {

 

  return (
    <section className={styles.section} >

      <div className={styles.container}>

        {/* LEFT → DETAILS */}
        <div className={styles.details} >

          <h2>
            <i className="bi bi-geo-alt-fill"></i> NOARRC - Guest Physiotherapy
          </h2>

          <p>
            <i className="bi bi-geo"></i>
            373, Poonamallee High Rd, Kilpauk, Chennai
          </p>

          <p>
            <i className="bi bi-telephone-fill"></i> +91 66780342
          </p>

          <p>
            <i className="bi bi-star-fill"></i> 4.8 / 5 Rating
          </p>

          <a
            href="https://www.google.com/maps/place/NOARRC+-+Guest+Physiotherapy"
            target="_blank"
            rel="noreferrer"
            className={styles.mapBtn}
          >
            <i className="bi bi-map"></i> Open in Google Maps
          </a>

        </div>

        {/* RIGHT → MAP */}
        <div className={styles.mapsection}>
            <iframe
            
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3886.347165066023!2d80.2361402!3d13.0771706!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670c7a656881%3A0xc1c3bb4a260edfe3!2sNOARRC%20-%20Guest%20Physiotherapy!5e0!3m2!1sen!2sin!4v1776753871638!5m2!1sen!2sin"
            className={styles.map}
            loading="lazy"
            title="Location"
            />
        </div>

      </div>

    </section>
  )
}

export default Location