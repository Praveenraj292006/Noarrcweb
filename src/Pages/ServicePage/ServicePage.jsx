// ─────────────────────────────────────────────────────────────
//  NOARRC · ServicePage.jsx  —  Thin shell / page orchestrator
//  All content comes from servicesDetails.js
//  All sections are independent, reusable components
// ─────────────────────────────────────────────────────────────
import React from 'react'
import { useParams } from 'react-router-dom'

import Navbar    from '../../Components/Navbar/Navbar.jsx'
import styles    from './ServicePage.module.css'

import { servicesDetails } from '../../data/servicesDetails'

// ── Section Components ─────────────────────────────────────
import ServiceHero       from '../../Components/ServiceDetail/ServiceHero.jsx'
import Overview          from '../../Components/ServiceDetail/Overview.jsx'
import ConditionsGrid    from '../../Components/ServiceDetail/ConditionsGrid.jsx'
import RecoveryTimeline  from '../../Components/ServiceDetail/RecoveryTimeline.jsx'
import TreatmentProcess  from '../../Components/ServiceDetail/TreatmentProcess.jsx'
import BenefitsGrid      from '../../Components/ServiceDetail/BenefitsGrid.jsx'
import TechnologyGrid    from '../../Components/ServiceDetail/TechnologyGrid.jsx'
import FAQ               from '../../Components/ServiceDetail/FAQ.jsx'
import ServiceCTA        from '../../Components/ServiceDetail/ServiceCTA.jsx'

// ─────────────────────────────────────────────────────────────
function ServicePage() {
  const { slug } = useParams()

  const service = servicesDetails.find(item => item.slug === slug)

  /* 404 fallback */
  if (!service) {
    return (
      <div className={styles.notFound}>
        <h1>Service Not Found</h1>
      </div>
    )
  }

  return (
    <div className={styles.page}>

      {/* ── Navigation ─────────────────────────────── */}
      <Navbar />

      {/* ── 1. Hero ────────────────────────────────── */}
      <ServiceHero
        title={service.title}
        tagline={service.tagline}
        image={service.image}
      />

      {/* ── 2. Overview ────────────────────────────── */}
      <Overview
        title={service.title}
        overview={service.overview}
        image={service.image}
      />

      {/* ── 3. Conditions We Treat ─────────────────── */}
      <ConditionsGrid
        conditions={service.conditions}
      />

      {/* ── 4. Recovery Journey (Timeline) ─────────── */}
      <RecoveryTimeline
        recoveryJourney={service.recoveryJourney}
      />

      {/* ── 5. Treatment Process ───────────────────── */}
      <TreatmentProcess
        treatmentProcess={service.treatmentProcess}
      />

      {/* ── 6. Benefits ────────────────────────────── */}
      <BenefitsGrid
        benefits={service.benefits}
      />

      {/* ── 7. Technologies ────────────────────────── */}
      <TechnologyGrid
        technologies={service.technologies}
      />

      {/* ── 8. FAQ ─────────────────────────────────── */}
      <FAQ
        faq={service.faq}
      />

      {/* ── 9. CTA ─────────────────────────────────── */}
      <ServiceCTA
        title={service.title}
      />

    </div>
  )
}

export default ServicePage