import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HowItWorks from './_components/HowItWorks'

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

      <HowItWorks />
    </>
  )
}

export default page