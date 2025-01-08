import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

import { ReactLenis, useLenis } from 'lenis/react'
import Learn from "./components/Learn"
import FAQs from "./components/FAQs"
import Footer from "./components/Footer"
import Card from "./components/Card"
import Testimonials from "./components/Testimonials"

function App() {

  const lenis = useLenis(({ scroll }) => {
  })

  return (
    <ReactLenis root>
      <Navbar/>
      <Hero/>
      <Learn/>
      <Card/>
      <FAQs/>
      <Testimonials/>
      <Footer/>
    </ReactLenis>
  )
}

export default App;
