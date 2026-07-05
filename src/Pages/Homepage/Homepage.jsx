import React, { lazy, Suspense } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Sections/hero/Hero";
import FloatingBar from "../../Components/FloatingBar/FloatinBar";

// Lazy loaded sections
const About = lazy(() => import("../../Sections/About/About"));
const Services = lazy(() => import("../../Sections/Services/Services"));
const Testimonials = lazy(() => import("../../Components/Testimonials/Testimonials"));
const ContactForm = lazy(() => import("../../Sections/ContactForm/ContactForm"));
const Location = lazy(() => import("../../Sections/Location/Location"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));

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