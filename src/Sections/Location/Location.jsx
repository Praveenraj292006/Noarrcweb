import React, { useEffect, useRef } from 'react'
import styles from './Location.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Location() {

  const locations = [
  {
    name: "NOARRC – Guest Physiotherapy",
    city: "Chennai",
    address: "373, Poonamallee High Rd, Kilpauk, Chennai, Tamil Nadu",
    phone: "+91 99403 32902",
    rating: "4.8 / 5",
    mapLink: "https://maps.app.goo.gl/uFinwqksPjXUqWQ28",
    embed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3886.347165066023!2d80.2361402!3d13.0771706!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670c7a656881%3A0xc1c3bb4a260edfe3!2sNOARRC%20-%20Guest%20Physiotherapy!5e0!3m2!1sen!2sin!4v1776753871638!5m2!1sen!2sin"
  },

  {
    name: "NOARRC Physiotherapy Centre",
    city: "Coimbatore",
    address:
      "Police Station, 577, Trichy Rd, near B-5, Agraharam, Singanallur, Coimbatore, Tamil Nadu 641005",
    phone: "0422 259 5963",
    rating: "4.8 / 5",
    mapLink: "https://maps.app.goo.gl/wU12YfiYj1EvpXXC7",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5086242707293!2d77.02441938492309!3d11.00041362709464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8576c74e8408f%3A0x19bc2f89d5bb2136!2sNG%20Hospital%20%26%20Research%20Centre%20%7C%20Best%20multispeciality%20hospital%20in%20Singanallur!5e0!3m2!1sen!2sin!4v1786099516096!5m2!1sen!2sin"
  }
];

 

  return (
  <section className={styles.section}>

  <div className={styles.locationsGrid}>

    {locations.map((location) => (

      <div className={styles.locationCard} key={location.city}>

        <div className={styles.details}>

          <span className={styles.cityBadge}>
            {location.city}
          </span>

          <h2>
            <i className="bi bi-hospital-fill"></i>
            {location.name}
          </h2>

          <p>
            <i className="bi bi-geo-alt-fill"></i>
            {location.address}
          </p>

          <p>
            <i className="bi bi-telephone-fill"></i>
            {location.phone}
          </p>

          <p>
            <i className="bi bi-star-fill"></i>
            {location.rating}
          </p>

          <a
            href={location.mapLink}
            target="_blank"
            rel="noreferrer"
            className={styles.mapBtn}
          >
            <i className="bi bi-map-fill"></i>
            Open in Google Maps
          </a>

        </div>

        <div className={styles.mapsection}>

          <iframe
            src={location.embed}
            loading="lazy"
            className={styles.map}
            title={location.city}
          />

        </div>

      </div>

    ))}

  </div>

</section>
  )
}

export default Location