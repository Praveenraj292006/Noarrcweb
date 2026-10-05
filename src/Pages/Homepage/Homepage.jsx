import React, { lazy, Suspense } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Sections/hero/Hero";
import FloatingBar from "../../Components/FloatingBar/FloatinBar";
import RecoveryTimeline from "../../Components/ServiceDetail/RecoveryPath/RecoveryTimeline";

// Lazy loaded sections
const About = lazy(() => import("../../Sections/About/About"));
const Services = lazy(() => import("../../Sections/Services/Services"));
const Testimonials = lazy(() => import("../../Components/Testimonials/Testimonials"));
const ContactForm = lazy(() => import("../../Sections/ContactForm/ContactForm"));
const Location = lazy(() => import("../../Sections/Location/Location"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));


const recoveryJourney = [
  {
    stage: "Assessment & Goal Setting",
    description:
      "Comprehensive evaluation and personalized treatment plan.",
    icon: "🎯",
  },
  {
    stage: "Early Rehabilitation",
    description:
      "Pain management, mobility training, and prevention of complications.",
    icon: "🌱",
  },
  {
    stage: "Functional Recovery",
    description:
      "Strength, balance, coordination, gait, and daily living activities.",
    icon: "🚶",
  },
  {
    stage: "Advanced Rehabilitation",
    description:
      "Robotic therapy, task-specific training, endurance, and independence.",
    icon: "💪",
  },
  {
    stage: "Return to Life",
    description:
      "Home exercise program, community reintegration, and long-term wellness.",
    icon: "🏡",
  },
]

function SectionLoader() {
  return (
    <div className="flex h-32 items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-teal-500 border-t-transparent" />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />

      <FloatingBar />

      <section id="home">
        <Hero />
      </section>

      <Suspense fallback={<SectionLoader />}>
        <section id="about">
          <About />
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <section id="services">
          <Services />
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <section id="reviews">
          <Testimonials />
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <section id="recoveryPath">
          <RecoveryTimeline recoveryJourney={recoveryJourney} />
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <section id="contact">
          <ContactForm />
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <section id="Location">
          <Location />
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default HomePage;