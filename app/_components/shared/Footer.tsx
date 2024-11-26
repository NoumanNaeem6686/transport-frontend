import Link from 'next/link';
import React from 'react';

function Footer() {
    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 shadow-lg">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="sm:col-span-2">
                    <Link href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
                        <img src="/t.png" className="h-24 w-auto" alt="Company Logo" />
                    </Link>
                    <div className="lg:max-w-sm">
                        <p className="text-sm text-gray-800">
                            We specialize in providing top-notch services for cleaning, moving assistance, and transport. Whether you're looking to relocate, need extra help, or want your space cleaned to perfection, we are here to make it happen.
                        </p>
                        {/* <p className="mt-4 text-sm text-gray-800">
                            Our mission is to deliver seamless and stress-free solutions tailored to your needs. We take pride in our professionalism, reliability, and commitment to customer satisfaction.
                        </p> */}
                    </div>
                </div>

                <div className="space-y-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Phone:</p>
                        <a
                            href="tel:850-123-5021"
                            aria-label="Our phone"
                            title="Our phone"
                            className="transition-colors duration-300 text-[#4B4B4B] hover:text-gray-700"
                        >
                            850-123-5021
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Email:</p>
                        <a
                            href="mailto:info@movingandmore.com"
                            aria-label="Our email"
                            title="Our email"
                            className="transition-colors duration-300 text-[#4B4B4B] hover:text-gray-700"
                        >
                            info@movingandmore.com
                        </a>
                    </div>
                </div>

                <div>
                    <p className="text-base font-bold tracking-wide text-gray-900">Social</p>
                    <div className="flex items-center mt-1 space-x-3">
                        <Link href="/" className="text-gray-500 transition-colors duration-300 hover:text-[#4B4B4B]">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                            </svg>
                        </Link>
                        <Link href="/" className="text-gray-500 transition-colors duration-300 hover:text-[#4B4B4B]">
                            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                <circle cx={15} cy={15} r={4} />
                                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                            </svg>
                        </Link>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                        Follow us for updates and exclusive offers.
                    </p>
                </div>
            </div>

            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p className="text-sm text-gray-600">
                    © {new Date().getFullYear()} Moving and More. All rights reserved.
                </p>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <Link href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-[#4B4B4B]">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className="text-sm text-gray-600 transition-colors duration-300 hover:text-[#4B4B4B]">
                            Our Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/get-offer" className="text-sm text-gray-600 transition-colors duration-300 hover:text-[#4B4B4B]">
                            Get Offer
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
