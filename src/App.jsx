import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Sections/hero/Hero'
import Card from './Components/Card/Card'
import About from './Sections/About/About'
import Services from './Sections/Services/Services'
import Testimonials from './Components/Testimonials/Testimonials'
import ContactForm from './Sections/ContactForm/ContactForm'
import Location from './Sections/Location/Location'
import Footer from './Components/Footer/Footer'
import FloatingBar from './Components/FloatingBar/FloatinBar'

function App() {
  return (
    <>
    <Navbar />
    <FloatingBar />
    <section id="home"><Hero /></section>
   
    
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
