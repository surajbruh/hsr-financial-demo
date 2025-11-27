import React from 'react'
import LandingSection from '../components/Landing/LandingSection'
import JurisdictionSection from '../components/Jurisdiction/JurisdictionSection'
import Testimonials from '../components/Testimonials/Testimonials'
import LandingGrid from '../components/LandingGrid/LandingGrid'
import StatsSection from '../components/StatsSection'
import ContactSection from '../components/Contact/ContactSection'

const LandingPage = () => {
  return (
    <main role="main">
      <LandingSection />
      <JurisdictionSection />
      <Testimonials />
      <LandingGrid />
      <StatsSection />

      <section aria-labelledby="contact-heading" className='py-[5vw]'>
        <h2 id="contact-heading" className="sr-only">Contact Our Team</h2>
        <ContactSection />
      </section>
    </main>


  )
}

export default LandingPage