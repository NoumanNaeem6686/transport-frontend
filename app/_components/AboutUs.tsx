import Link from 'next/link'
import React from 'react'

function AboutUs() {
    return (
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-12 gap-6 lg:gap-16 my-9   '>
            <div className="mx-auto text-center md:text-left">
                <div className="flex flex-col w-full font-bold uppercase max-md:max-w-full">
                    <div data-aos="fade-right" className="flex flex-wrap gap-6 items-center w-full text-xl sm:text-2xl leading-none text-sky-800 tracking-[5.52px] max-md:max-w-full">
                        <div
                            className="h-[2px] rounded-md my-auto bg-[#1CAC78] w-[50px]  sm:w-[100px]"

                        />
                        <div className="self-stretch text-[#1CAC78] my-auto">                    A little more about us
                        </div>
                    </div>
                    <div data-aos="fade-down" className="mt-4 text-3xl sm:text-4xl leading-10 text-sky-800 max-md:max-w-full">
                        Delivering Seamless Moving Experiences
                    </div>
                </div>

                <p className="text-gray-600 text-lg mt-4">
                    we believe in simplifying lives by providing reliable and efficient moving and transport solutions.
                    Our mission is to make every move stress-free, ensuring that our customers feel supported and confident every step of the way.
                    We are passionate about offering top-notch services that cater to a variety of needs.
                </p>
                <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-3">
                        <span className="text-blue-600 text-xl">✔</span>
                        <p className="text-gray-700">
                            A decade of expertise in moving and transport services.
                        </p>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-blue-600 text-xl">✔</span>
                        <p className="text-gray-700">
                            Trusted by over 100k satisfied customers worldwide.
                        </p>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-blue-600 text-xl">✔</span>
                        <p className="text-gray-700">
                            Operating in 20+ locations to serve you better.
                        </p>
                    </li>
                </ul>
                <div className="flex gap-3 items-center self-start mt-8 text-base font-medium text-center">
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
            </div>

            <div className=" w-full flex items-center justify-center  ">
                <div className="grid grid-cols-1  gap-4 h-full w-full place-content-center place-items-center">

                    <div className="col-span-2 sm:col-span-1 md:col-span-2  w-full mx-auto">
                        <a className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                            <img src="/test.jpg" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />

                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                        </a>
                        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                            <a className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                <img src="/happy family.jpg" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                            </a>
                            <a className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                <img src="/pack--box.jpg" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default AboutUs