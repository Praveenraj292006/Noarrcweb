import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './hero/Hero'
import Card from './Card/Card'
import About from './About/About'
import Services from './Services/Services'
import Testimonials from './Testimonials/Testimonials'
import ContactForm from './ContactForm/ContactForm'
import Location from './Location/Location'
import Footer from './Footer/Footer'
import FloatingBar from './FloatingBar/FloatinBar'

function App() {
  return (
    <>
    <Navbar />
    <FloatingBar />
    <section id="home"><Hero /></section>
    <section id="card"><Card /></section>
    <section id="about"> <About /></section>
    <section id="services"> <Services/></section>
    <section id="reviews"> <Testimonials/></section>
    <section id="contact">  <ContactForm/></section>
    <section id="Location"> <Location/></section>
    <section id="Footer"><Footer /></section>
    
      
      
      
     
     
      
     
      
    </>
  )
}

export default App
