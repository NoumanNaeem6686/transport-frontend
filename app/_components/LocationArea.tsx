import Link from 'next/link'
import React from 'react'

function LocationArea() {
    return (
        <section className="flex flex-col  items-center justify-center py-16 px-4 ">
            <div className=" w-full lg:w-6/12 xl:w-1/2 flex flex-col items-start justify-center ">
                <h2 data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" className="text-4xl lg:text-6xl text-center font-bold text-gray-800">Need Our Service in Your Area?</h2>
                <p className="text-lg text-gray-600 leading-relaxed my-4 mb-10 text-center">
                    We provide reliable moving and transport solutions across a wide range
                    of regions. Not sure if we cover your area?                     send us your details to find out how we can help.
                </p>

            </div>

            <div className="flex gap-3 items-center self-start mt-8 mx-auto text-base font-medium text-center">
                <Link href="get-offer">
                    <button className="gap-2.5 hover:scale-105 transition-all duration-250 self-stretch px-9 py-3.5 my-auto sm:w-48 text-white bg-sky-800 rounded min-h-[46px] max-md:px-5">
                        Get Offer
                    </button>
                </Link>
                <Link href="book-now">
                    <button className="gap-2.5 self-stretch hover:scale-105 transition-all duration-250 px-9 py-3.5 my-auto sm:w-48 text-white rounded border border-[#1CAC78] bg-[#1CAC78] border-solid min-h-[46px] max-md:px-5">
                        Book Now
                    </button>
                </Link>
            </div>

            {/* <div className=" w-full flex justify-center">
                <img
                    src="/map.svg"
                    alt="Service Map"
                    className="max-w-full h-auto"
                />
            </div> */}
        </section>

    )
}

export default LocationArea