import React from 'react'
import { TransportPage } from './_components/Home/Hero'
import { AboutSection } from './_components/Home/About'
import { ServicesSection } from './_components/Home/Services'
import ProcessSection from './_components/Home/Processing'
import { WhyUs } from './_components/Home/WhyUs'
import Reviews from './_components/Reviews'
import { FAQTWO } from './_components/Home/FAQ'
import ScrollBaseAnimation from './_components/text-marquee'

function page() {
  const cities = 'Paris | London | Berlin | Madrid | Rome | Amsterdam | Vienna | Prague | Budapest';

  return (
    <div className=''>
      <TransportPage />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WhyUs />
      <Reviews />
      <FAQTWO />
      {/* <ServicesSlider /> */}
      {/* <AboutUs /> */}
      {/*
       <HowItWorks /> */}
      {/*

      <LocationArea />
      <FAQ /> */}

    </div>
  )
}

export default page