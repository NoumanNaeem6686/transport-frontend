import React from 'react'
import { TransportPage } from './_components/Home/Hero'
import { AboutSection } from './_components/Home/About'
import { ServicesSection } from './_components/Home/Services'
import ProcessSection from './_components/Home/Processing'
import { WhyUs } from './_components/Home/WhyUs'

function page() {
  return (
    <>
      <TransportPage />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WhyUs />
      {/* <ServicesSlider /> */}
      {/* <AboutUs /> */}
      {/* <HowItWorks /> */}

      {/* <Reviews />
      <LocationArea />
      <FAQ /> */}

    </>
  )
}

export default page