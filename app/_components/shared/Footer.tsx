import { Facebook, Mail, Phone, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Footer() {
    return (
        <div className="pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-4 lg:grid-cols-6 md:px-24 lg:px-8 px-4  ">
                <div className="sm:col-span-2">
                    <Link href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
                        <img src="/t.png" className="h-24 w-auto" alt="Company Logo" />
                    </Link>
                    <div className="lg:max-w-sm">
                        <p className="text-sm text-gray-800">
                            We specialize in providing top-notch services for cleaning, moving assistance, and transport. Whether you're looking to relocate, need extra help, or want your space cleaned to perfection, we are here to make it happen.
                        </p>
                        <div className="flex items-center my-2 space-x-3">
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
                        <p className=" text-sm text-gray-500">
                            Follow us for updates and exclusive offers.
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-base font-bold tracking-wide text-gray-900">Pages</p>
                    <div
                        className=" flex flex-col mt-5 gap-3">

                        <Link href={'/'} className={`${true ? "text-black" : "text-white"} hover:scale-x-110 hover:rotate-6 duration-250 transition-all`}>
                            Home
                        </Link>
                        <Link href={'/about-us'} className={`${true ? "text-black" : "text-white"} hover:scale-x-110 hover:rotate-6 duration-250 transition-all`}>
                            About Us
                        </Link>
                        <Link href={'/partner'} className={`${true ? "text-black" : "text-white"} hover:scale-x-110 hover:rotate-6 duration-250 transition-all`}>
                            Be Partner
                        </Link>

                        <Link href={'/work'} className={`${true ? "text-black" : "text-white"} hover:scale-x-110 hover:rotate-6 duration-250 transition-all`}>
                            Work With Us
                        </Link>
                    </div>

                </div>
                <div className="space-y-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
                    <div className="flex mt-5">
                        <p className="mr-1 text-gray-800"><Phone className='h-5 w-5 mr-1' /></p>
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
                        <p className="mr-1 text-gray-800"><Mail className='h-5 w-5 mr-1' /></p>

                        <a
                            href="mailto:info@movingandmore.com"
                            aria-label="Our email"
                            title="Our email"
                            className="transition-colors duration-300 text-[#4B4B4B] hover:text-gray-700"
                        >
                            info@moving.com
                        </a>
                    </div>
                </div>

                <div className="sm:col-span-2">

                    <p className="text-base font-bold tracking-wide text-gray-900">Maps Location</p>
                    <div className="h-60 mt-5 rounded-xl overflow-hidden">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d25678.628924030276!2d23.302563130098882!3d42.69970448884887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sSofia%2C%20Bulgaria!3m2!1d42.6977082!2d23.3218675!5e0!3m2!1sen!2s!4v1733226455494!5m2!1sen!2s" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                </div>
            </div>

            <div className="flex flex-col-reverse bg-black justify-between py-5 md:px-24 lg:px-8 px-4 border-t lg:flex-row">
                <p className="text-sm text-white">
                    © {new Date().getFullYear()} Moving and More. All rights reserved.
                </p>
                <div className="flex space-x-4 md:space-x-6 text-white">
                    <a href="#" className="hover:text-gray-400"><Facebook size={16} /></a>
                    <a href="#" className="hover:text-gray-400"><Twitter size={16} /></a>
                    <a href="#" className="hover:text-gray-400"><Youtube size={16} /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
