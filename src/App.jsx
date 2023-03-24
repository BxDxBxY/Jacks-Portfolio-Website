import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from './components'
export default function App() {
  return (
    <BrowserRouter>
    <div className='bg-primary relative z-0'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
      <div className='z-0 relative'>
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>
  )
}
