import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HowItWorks from './_components/HowItWorks'
import LocationArea from './_components/LocationArea'
import AboutUs from './_components/AboutUs'
import Reviews from './_components/Reviews'

function page() {
  return (
    <>
      <div className="w-full text-white pt-14 lg:pb-0 flex flex-col lg:min-h-[100vh] h-[100vh] justify-between relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={"/home-open-boxes.jpeg"}
            layout="fill"
            objectFit="cover"
            alt="boxes"
            className="opacity-60"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-60 z-10"></div>

        <div className="relative z-20 flex sm:flex-row flex-col w-full h-full justify-between">
          <div className="sm:w-7/12 w-full lg:pl-24 sm:pl-10 pl-6 pt-16  sm:px-0 px-6">
            <h1 data-aos="fade-right" className="2xl:text-[120px] font-bold lg:text-7xl md:text-6xl text-5xl sm:pr-10 pr-0 leading-tight tracking-tight drop-shadow-lg">
              Transport Made Easy
            </h1>
            <p className='text-lg mt-3' data-aos="fade-down">
              Vehicles and Helpers for Every Move
            </p>
            <h2 className="md:text-lg text-sm opacity-90 md:pt-4 pt-2 pb-8 tracking-wide">
              Whether you're moving, shipping, or need extra hands, we’ve got you covered moving shouldn&apos;t be complicated… <br />
              <span className="italic">We&apos;re proof it isn&apos;t.</span>
            </h2>
            <div className="w-fit">
              <Link href={"/get-offer"}>
                <div
                  className={`bg-white text-black hover:bg-black hover:text-white py-2 px-3  sm:px-5 min-w-[150px] rounded-full cursor-pointer flex items-center justify-center text-sm sm:text-base hover:border-black transition-colors`}
                >
                  Book Now
                </div>
              </Link>
            </div>
          </div>
        </div>


      </div>
      <LocationArea />
      <AboutUs />
      <HowItWorks />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-slate-100 rounded-3xl p-8 text-center sm:p-16 md:px-24 md:py-20 lg:px-28">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
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
              href="/get-vehicle">Get Vehicle</Link>
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

    </>
  )
}

export default page