import React from 'react'
import styles from './Location.module.css'

function Location() {

  const locations = [
    {
      name: "NOARRC – Physiotherapy (Guest hospital complex) ",
      city: "Chennai",
      address:
        "373, Poonamallee High Rd, Kilpauk, Chennai, Tamil Nadu",
      phone: "+91 6381047727 | +91 7200080275",
      rating: "4.8 / 5",
      mapLink:
        "https://maps.app.goo.gl/uFinwqksPjXUqWQ28",
      embed:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3886.347165066023!2d80.2361402!3d13.0771706!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670c7a656881%3A0xc1c3bb4a260edfe3!2sNOARRC%20-%20Guest%20Physiotherapy!5e0!3m2!1sen!2sin!4v1776753871638!5m2!1sen!2sin"
    },

    {
      name: "NG hospital & Research Centre ",
      city: "Coimbatore",
      address:
        "Police Station, 577, Trichy Rd, near B-5, Agraharam, Singanallur, Coimbatore, Tamil Nadu 641005",
      phone: "+91 6381047727 | +91 7200080275",
      rating: "4.6 / 5",
      mapLink:
        "https://maps.app.goo.gl/wU12YfiYj1EvpXXC7",
      embed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5086242707293!2d77.02441938492309!3d11.00041362709464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8576c74e8408f%3A0x19bc2f89d5bb2136!2sNG%20Hospital%20%26%20Research%20Centre%20%7C%20Best%20multispeciality%20hospital%20in%20Singanallur!5e0!3m2!1sen!2sin!4v1786099516096!5m2!1sen!2sin"
    },

    {
      name: "Dr Swathi Neuro And Spine Care Clinic",
      city: "Chitlapakkam",
      address:
        "29, Anna St, State Bank Of India Colony, Chitlapakkam, Tambaram, Tamil Nadu 600064",
      phone: "+91 6381047727 | +91 7200080275",
      mapLink:
        "https://share.google/PZ6NpzEAUF8y9O8wj",
      rating: "Specialist Centre",
      embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.545170798717!2d80.14057849999999!3d12.936928300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fdc1c67e155%3A0x61b4ad1552d8a645!2sDr%20Swathi%20Neuro%20and%20Spine%20Care!5e0!3m2!1sen!2sin!4v1791205963828!5m2!1sen!2sin"
    },

    {
      name: "Arvi Ortho & Child Care",
      city: "Porur",
      address:
        "Rasi Complex, Door No 116/1, Mount Poonamallee Road, Porur, Chennai - 600116",
      phone: "+91 6381047727 | +91 7200080275",
      mapLink:
        "https://share.google/MGCaKuotFfrkWG01W",
      rating: "Specialist Centre",
      embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0230547249835!2d80.15865769999999!3d13.034203800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261002a8c78f9%3A0x2d9beeb79d21826!2sARVI%20ORTHO%20AND%20CHILD%20CARE!5e0!3m2!1sen!2sin!4v1791205812385!5m2!1sen!2sin"

    }
  ]

  return (
    <section className={styles.section}>

      {/* Background decoration */}
      <div className={styles.bgShape1} />
      <div className={styles.bgShape2} />

      {/* Header */}
      <div className={styles.header}>

        <span className={styles.badge}>
          <span className={styles.badgeDot} />
          Our Locations
        </span>

        <h2 className={styles.heading}>
          Find Us <em>Near You</em>
        </h2>

        <p className={styles.subText}>
          Access quality physiotherapy and rehabilitation care
          across our partner centres and clinical locations.
        </p>

      </div>


      {/* Locations */}
      <div className={styles.locationsGrid}>

        {locations.map((location, index) => (

          <article
            className={styles.locationCard}
            key={`${location.city}-${index}`}
          >

            {/* Card Header */}
            <div className={styles.cardHeader}>

              <span className={styles.cityBadge}>
                {location.city}
              </span>

              <span className={styles.locationNumber}>
                {String(index + 1).padStart(2, '0')}
              </span>

            </div>


            {/* Location Name */}
            <h3 className={styles.locationName}>

              <span className={styles.titleIcon}>
                <i className="bi bi-hospital-fill" />
              </span>

              {location.name}

            </h3>


            {/* Details */}
            <div className={styles.locationDetails}>

              <div className={styles.detailItem}>

                <span className={styles.detailIcon}>
                  <i className="bi bi-geo-alt-fill" />
                </span>

                <span>
                  {location.address}
                </span>

              </div>


              <div className={styles.detailItem}>

                <span className={styles.detailIcon}>
                  <i className="bi bi-telephone-fill" />
                </span>

                <span>
                  {location.phone}
                </span>

              </div>


              <div className={styles.detailItem}>

                <span className={styles.detailIcon}>
                  <i className="bi bi-star-fill" />
                </span>

                <span>
                  {location.rating}
                </span>

              </div>

            </div>


            {/* Map */}
            {location.embed && (
              <div className={styles.mapWrapper}>

                <iframe
                  src={location.embed}
                  loading="lazy"
                  className={styles.map}
                  title={`${location.name} map`}
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className={styles.mapOverlay} />

              </div>
            )}


            {/* No embed fallback */}
            {!location.embed && (
              <div className={styles.mapPlaceholder}>

                <i className="bi bi-geo-alt-fill" />

                <span>
                  View this location on Google Maps
                </span>

              </div>
            )}


            {/* Button */}
            <a
              href={location.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapBtn}
            >

              <span>
                <i className="bi bi-map-fill" />
                Open in Google Maps
              </span>

              <i className="bi bi-arrow-up-right" />

            </a>

          </article>

        ))}

      </div>

    </section>
  )
}

export default Location