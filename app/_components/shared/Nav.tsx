'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram, Linkedin, Menu, X } from 'lucide-react';

function Navbar() {



    return (
        <div>
            <section className="sticky top-0 z-50 bg-[#4B4B4B] text-white ">
                <div className="container mx-auto px-4 py-2 flex justify-between items-center flex-wrap" data-aos="fade-down">
                    <div className="flex sm:space-x-6">
                        <a href="tel:123456789" className="hidden md:flex items-center space-x-2">
                            <Phone size={16} />
                            <span>+1 (737) 211-1792</span>
                        </a>
                        <a href="mailto:example@gmail.com" className="flex items-center space-x-2 text-xs md:text-base">
                            <Mail size={16} />
                            <span>Support@transport.com</span>
                        </a>

                    </div>
                    <div className="flex space-x-4 md:space-x-6">
                        <a href="#" className="hover:text-gray-400"><Facebook size={16} /></a>
                        <a href="#" className="hover:text-gray-400"><Twitter size={16} /></a>
                        <a href="#" className="hover:text-gray-400"><Youtube size={16} /></a>
                    </div>
                </div>
            </section>
            <nav
                className={`w-full overflow-x-hidden  bg-transparent overflow-hidden h-20 flex flex-row items-center justify-between px-2 sm:px-6 md:px-12 lg:px-10 top-10 z-50
                    absolute
                       text-black
                         transform transition-transform duration-300`}
            >
                <Link href="/" data-aos="fade-right">
                    <img src="/t.png" className="h-24 w-auto " />
                    {/* <h1
                        className={` text-white text-3xl font-semibold cursor-pointer`}
                    >
                        Transport
                    </h1> */}
                </Link>

                <div className="flex flex-row gap-x-6 " data-aos="fade-left">
                    <div className=' items-center gap-x-8 mr-3 hidden sm:flex'>
                        <Link href={'/'} className='text-white hover:scale-x-110 hover:rotate-6 duration-250 transition-all'>
                            Home
                        </Link>
                        <Link href={'/get-vehicle'} className='text-white hover:scale-x-110 hover:rotate-6 duration-250 transition-all'>
                            Get vehicle
                        </Link>
                    </div>
                    <Link href={"/get-offer"}>
                        <div
                            className={`bg-white hover:bg-black hover:text-white py-2 px-3  sm:px-5 min-w-[120px] rounded-full cursor-pointer flex items-center justify-center text-sm sm:text-base hover:border-black transition-colors`}
                        >
                            Get Offer
                        </div>
                    </Link>

                </div>

            </nav>
        </div>
    );
}

export default Navbar;
