import React from 'react'
import LandingSection from './LandingSection'
import JurisdictionSection from './Jurisdiction/JurisdictionSection'
import Testimonials from './Testimonials/Testimonials'
import LandingGrid from './LandingGrid/LandingGrid'
import StatsSection from '../StatsSection'
import ContactSection from '../Contact/ContactSection'

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