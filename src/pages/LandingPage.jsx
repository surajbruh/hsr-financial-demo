import React from 'react'
import LandingSection from '../components/Landing/LandingSection'
import JurisdictionSection from '../components/Jurisdiction/JurisdictionSection'
import Testimonials from '../components/Testimonials/Testimonials'
import LandingGrid from '../components/LandingGrid/LandingGrid'
import StatsSection from '../components/StatsSection'
import ContactSection from '../components/Contact/ContactSection'

const LandingPage = () => {
  return (
    <main>
      <LandingSection />
      <JurisdictionSection />
      <Testimonials />
      <LandingGrid />
      <StatsSection />
      <div className='py-[5vw]'>
        <ContactSection />
      </div>
    </main>
  )
}

export default LandingPage
