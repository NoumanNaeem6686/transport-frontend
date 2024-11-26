'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

function Navbar() {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(false);
    const [Top, setTop] = useState("top-9")
    const currentPath = usePathname()
    const isService = currentPath.startsWith("/services")
    // const isHomePage = currentPath == "/"


    useEffect(() => {
        let navbar = true;
        const handleScroll = () => {
            if (navbar) {
                const currentScrollPos = window.scrollY;
                if (currentScrollPos > 30) {
                    setVisible(true);
                    setTop("top-0");
                } else {
                    setVisible(false);
                    setTop("top-9");
                }
                setPrevScrollPos(currentScrollPos);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            navbar = false;
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
            {/* <nav
                className={`w-full overflow-x-hidden  bg-transparent overflow-hidden h-20 flex flex-row items-center justify-between px-2 sm:px-6 md:px-12 lg:px-10 top-10 z-50
                    absolute
                       text-black
                         transform transition-transform duration-300`}
            >
                <Link href="/" data-aos="fade-right">
                    <img src="/t.png" className="h-24 w-auto " />
                 
                </Link>

                <div className="flex flex-row gap-x-6 " data-aos="fade-left">
                    <div className=' items-center gap-x-8 mr-3 hidden sm:flex'>
                        <Link href={'/'} className='text-white hover:scale-x-110 hover:rotate-6 duration-250 transition-all'>
                            Home
                        </Link>
                        <Link href={'/services'} className='text-white hover:scale-x-110 hover:rotate-6 duration-250 transition-all'>
                            Our Services
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

            </nav > */
            }
            <nav
                className={`w-full fixed h-20 flex flex-row items-center justify-between px-6 md:px-12 lg:px-10 ${Top} z-50
                ${visible
                        ? "bg-[#949696]/85 backdrop:filter backdrop-blur-lg shadow-xl text-black z-40"
                        : !isService ? "bg-transparent text-black" : "bg-[#4B4B4B]/85 backdrop:filter backdrop-blur-lg shadow-xl text-black"
                    } transform transition-transform duration-300`}
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
                        <Link href={'/services'} className='text-white hover:scale-x-110 hover:rotate-6 duration-250 transition-all'>
                            Our Services
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
