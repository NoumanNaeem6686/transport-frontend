import Link from 'next/link'
import React from 'react'

function AboutUs() {
    return (
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-12 gap-6 lg:gap-16 my-9 mt-20'>
            <div className="mx-auto text-center md:text-left">
                <span className="text-gray-500 text-base font-normal">
                    A little about us
                </span>
                <h2
                    data-aos="fade-right"
                    className="text-4xl font-bold text-gray-900 mt-2">
                    Delivering Seamless Moving Experiences
                </h2>
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
                <Link href="/get-offer">
                    <button className="mt-8 px-6 py-2 hover:rotate-6 bg-black text-white  rounded-2xl shadow-md  transition">
                        Get Offer
                    </button>
                </Link>
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