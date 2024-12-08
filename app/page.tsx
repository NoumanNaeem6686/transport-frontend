import React from 'react'
import { TransportPage } from './_components/Home/Hero'
import { AboutSection } from './_components/Home/About'
import { ServicesSection } from './_components/Home/Services'

function page() {
  return (
    <>
      <TransportPage />
      <AboutSection />
      <ServicesSection />
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