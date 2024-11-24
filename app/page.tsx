import Image from 'next/image'
import React from 'react'

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

        <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-50 z-10"></div>

        <div className="relative z-20 flex sm:flex-row flex-col w-full h-full justify-between">
          <div className="sm:w-1/2 w-full lg:pl-24 sm:pl-10 pl-6 lg:pt-48 pt-36 sm:px-0 px-6">
            <h1 className="2xl:text-[120px] font-bold lg:text-7xl md:text-6xl text-5xl sm:pr-10 pr-0 leading-tight tracking-tight drop-shadow-lg">
              Shipping Made Easy
            </h1>
            <h2 className="md:text-lg text-sm opacity-90 md:pt-4 pt-2 pb-8 tracking-wide">
              Shipping shouldn&apos;t be complicated… <br />
              <span className="italic">We&apos;re proof it isn&apos;t.</span>
            </h2>
            <div className="w-fit">

            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default page