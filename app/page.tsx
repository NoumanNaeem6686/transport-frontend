import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HowItWorks from './_components/HowItWorks'
import LocationArea from './_components/LocationArea'
import AboutUs from './_components/AboutUs'
import Reviews from './_components/Reviews'
import FAQ from './_components/FAQ'
import ScrollBaseAnimation from './_components/text-marquee'
import ServicesSlider from './_components/ServicesSlider'
import { TransportPage } from './_components/Home/Hero'

function page() {
  return (
    <>
      {/* <div className="w-full text-white pt-14 lg:pb-0 flex flex-col lg:min-h-[100vh] h-full justify-between relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={"/home-open-boxes.jpeg"}
            layout="fill"
            objectFit="cover"
            alt="Moving Boxes"
            className="opacity-60"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-70 z-10"></div>
        <div className="mx-auto max-w-3xl pt-36 sm:py-22 lg:py-24 z-20">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-300 ring-1 ring-gray-200 hover:ring-gray-500">
              Simplifying moving, cleaning, and transport services.{' '}
              <Link href="/services" className="font-semibold text-gray-100">
                <span aria-hidden="true" className="absolute inset-0" />
                Explore Services <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h1 className=" text-4xl font-bold  text-gray-200 sm:text-5xl md:text-6xl" data-aos="fade-up">
              Moving Doesn’t Have to Be Hard
            </h1>
            <p className="mt-8 text-pretty text-lg text-gray-400 sm:text-xl/8">
              Whether you're relocating, need professional cleaning, or reliable transport solutions, we provide tailored
              services to meet your needs. Experience seamless and efficient assistance at every step.
            </p>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <div className="overflow-hidden  bg-slate-100 rounded-2xl hover:bg-slate-200 duration-500 transition-all">

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-gray-800">Get Offer</h2>
                    <svg className="h-6 w-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3l2.09 6.26L21 9.27l-4.91 4.02L17.18 21 12 17.27 6.82 21l1.09-7.71L3 9.27l6.91-1.01L12 3z" />
                    </svg>
                  </div>
                  <p className="mt-2 text-gray-600">Receive a personalized quote for your specific needs.</p>
                  <Link href="/get-offer">
                    <button className="mt-4 w-full bg-gray-800 text-white py-2 px-4 rounded-full flex items-center justify-center">

                      Request Quote
                      <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden  bg-slate-100 rounded-2xl hover:bg-slate-200 duration-500 transition-all">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-gray-800">Book Now</h2>
                    <svg className="h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3M3 10h18M5 20h14a2 2 0 002-2V10H3v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="mt-2 text-gray-600">Schedule your service at a time that suits you best.</p>
                  <Link href="/book-now">

                    <button className="mt-4 w-full bg-gray-800 text-white py-2 px-4 rounded-full flex items-center justify-center">
                      Schedule Service
                      <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div >
      </div> */}
      <TransportPage />

      <ServicesSlider />
      <AboutUs />
      <HowItWorks />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-slate-100 rounded-3xl p-8 text-center sm:p-16 md:px-24 md:py-20 lg:px-28">
          <div className="max-w-3xl mx-auto">
            <h2 data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" className="font-display text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
              Reliable Moving and Transport Solutions
            </h2>
            <p className="max-w-lg text-base text-slate-700 mx-auto mt-4 sm:text-lg">
              Whether you’re moving, shipping, or need professional helpers, we provide seamless services
              to make your relocation stress-free and efficient.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row sm:items-center sm:gap-5">
            <Link className="inline-flex items-center justify-center bg-white text-lg font-semibold text-gray-700 shadow-sm transition-all duration-150 rounded-xl px-8 py-4 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              href="/get-offer">Get a Free Quote</Link>
            <Link className="inline-flex items-center justify-center bg-gray-700 text-lg font-semibold text-white shadow-sm ring-1 ring-inset ring-white transition-all duration-150 rounded-xl px-8 py-4 hover:bg-gray-800"
              href="/services">Our Services</Link>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-white mt-8">
            <li className="inline-flex items-center gap-2 text-black">
              <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-black" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
                <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
              </svg>Professional and reliable helpers
            </li>
            <li className="inline-flex items-center gap-2 text-black">
              <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-black" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
                <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
              </svg>Safe and reliable vehicles for every move
            </li>
            <li className="inline-flex items-center gap-2 text-black">
              <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-black" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
                <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
              </svg>Flexible scheduling to suit your needs
            </li>
            <li className="inline-flex items-center gap-2 text-black">
              <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-black" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
                <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
              </svg>Affordable pricing with no hidden fees
            </li>
            <li className="inline-flex items-center gap-2 text-black">
              <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-black" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
                <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
              </svg>Dedicated support for a smooth experience
            </li>
          </ul>
        </div>
      </div>

      <Reviews />
      <LocationArea />
      <FAQ />

    </>
  )
}

export default page