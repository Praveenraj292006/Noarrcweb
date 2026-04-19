import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './hero/Hero'
import Card from './Card/Card'
import About from './About/About'
import Services from './Services/Services'
import Testimonials from './Testimonials/Testimonials'
import ContactForm from './ContactForm/ContactForm'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <About />
      <Services/>
      <Testimonials/>
      <ContactForm/>
    </>
  )
}

export default App
