"use client"


import { Facebook, Mail, MenuIcon, Phone, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { DrawerContent, HeaderDrawer } from '../Dialog';
import { usePathname } from 'next/navigation';
export const NavigationBar: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false)
    const currentPath = usePathname()
    console.log("🚀 ~ currentPath:", currentPath)
    return (
        <div className="flex flex-col w-full max-md:max-w-full absolute top-0 z-30">
            <section className=" z-50 bg-sky-800 text-white ">
                <div className="container mx-auto px-4 py-2 flex justify-between items-center flex-wrap" data-aos="fade-down">
                    <div className="flex sm:space-x-6">
                        <a href="tel:123456789" className="hidden md:flex items-center space-x-2">
                            <Phone size={16} />
                            <span> (737) 8888888</span>
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

            <div className="flex overflow-hidden gap-10 justify-between lg:justify-center items-center px-12 lg:rounded-br-full py-2 max-w-full text-lg bg-white rounded-none min-h-[80px] shadow-[0px_0px_5px_rgba(0,0,0,0.2)] text-neutral-800 w-full lg:w-[1238px] max-md:px-5">
                <div className="flex flex-wrap gap-10 items-center self-stretch my-auto lg:min-w-[240px] lg:w-[1082px]">
                    <Link href={"/"}>
                        <img
                            loading="lazy"
                            src="/logo.png"
                            alt="Company Logo"
                            data-aos="fade-right"
                            className="object-contain shrink-0 self-stretch my-auto aspect-[1.88] w-[120px]"
                        />
                    </Link>
                    <div
                        data-aos="fade-left"
                        className="hidden lg:flex flex-wrap gap-8 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">

                        <Link href={'/'} className={`${currentPath == "/" ? "text-sky-800 font-bold" : "text-black"} hover:scale-x-110 hover:rotate-6 duration-250 transition-all`}>
                            Hem
                        </Link>
                        <Link href={'/about-us'} className={`${currentPath == "/about-us" ? "text-sky-800 font-bold" : "text-black"} hover:scale-x-110 hover:rotate-6 duration-250 transition-all`}>
                            Om oss
                        </Link>
                        <Link href={'/partner'} className={`${currentPath == "/partner" ? "text-sky-800 font-bold" : "text-black"} hover:scale-x-110 hover:rotate-6 duration-250 transition-all`}>
                            Bli partner
                        </Link>
                        {/* <Link href={'/services'} className={`${true ? "text-black" : "text-white"} hover:scale-x-110 hover:rotate-6 duration-250 transition-all`}>
                            Our Services
                        </Link> */}
                        <Link href={'/work'} className={`${currentPath == "/work" ? "text-sky-800 font-bold" : "text-black"} hover:scale-x-110 hover:rotate-6 duration-250 transition-all`}>
                            Arbeta med oss
                        </Link>
                    </div>
                </div>
                <div className='hidden lg:flex items-center  gap-x-2'>

                    <Link href={"/get-offer"}>
                        <div
                            className={`${false ? "border border-[#1CAC78] bg-[#1CAC78] text-white hover:rotate-6 " : "bg-sky-800 border border-sky-800 text-white hover:rotate-6 "} py-2 px-3  sm:px-5 min-w-[150px] rounded-full cursor-pointer flex items-center justify-center text-sm sm:text-base  transition-all`}
                        >
                            Få erbjudande
                        </div>
                    </Link>
                    <Link href={"/book-now"}>
                        <div
                            className={`${true ? "border border-[#1CAC78] bg-[#1CAC78] text-white hover:rotate-6 " : "bg-sky-800 border border-sky-800 text-white hover:rotate-6  "}py-2 px-3  sm:px-5 min-w-[120px] rounded-full cursor-pointer flex items-center justify-center text-sm sm:text-base transition-all`}
                        >
                            Boka nu
                        </div>
                    </Link>
                </div>
                <div className='flex lg:hidden'>
                    <HeaderDrawer
                        open={sidebarOpen}
                        setOpen={setSidebarOpen}

                        drawerBtn={() => {
                            return <button><MenuIcon /></button>
                        }}>
                        <DrawerContent>
                            <figure className=' w-[300px] h-full  flex flex-col bg-white'>
                                <div className='p-5 flex-grow  h-full w-full flex flex-col justify-between pb-4'>
                                    <div className='flex-grow  w-full flex flex-col mt-3'>

                                        <Link href="/" data-aos="fade-right">
                                            <img src="/t.png" className="h-24 w-auto " />
                                        </Link>
                                        <div className='flex flex-col items-start gap-6 mr-3 mt-5'>
                                            <Link href={'/'} className={`${true ? "text-black" : "text-white"} hover:scale-x-110 hover:rotate-6 duration-250 transition-all`}>
                                                Hem
                                            </Link>
                                            <Link href={'/about-us'} className={`${true ? "text-black" : "text-white"} hover:scale-x-110 hover:rotate-6 duration-250 transition-all`}>
                                                Om oss
                                            </Link>
                                            <Link href={'/partner'} className={`${true ? "text-black" : "text-white"} hover:scale-x-110 hover:rotate-6 duration-250 transition-all`}>
                                                Bli partner
                                            </Link>
                                            {/* <Link href={'/services'} className={`${true ? "text-black" : "text-white"} hover:scale-x-110 hover:rotate-6 duration-250 transition-all`}>
                                                Our Services
                                            </Link> */}
                                            <Link href={'/work'} className={`${true ? "text-black" : "text-white"} hover:scale-x-110 hover:rotate-6 duration-250 transition-all`}>
                                                Arbeta med oss

                                            </Link>
                                        </div>
                                    </div>
                                    <div className='flex items-center flex-col pb-4  gap-3 w-full '>

                                        <Link href={"/get-offer"} className='w-full'>
                                            <div
                                                className={`${false ? "border border-[#1CAC78] bg-[#1CAC78] text-white hover:rotate-6 " : "bg-sky-800 border border-sky-800 text-white hover:rotate-6 "}py-2 px-3  sm:px-5 min-w-[120px] rounded-full cursor-pointer flex items-center justify-center text-sm sm:text-base  transition-all`}


                                            >
                                                Få erbjudande
                                            </div>
                                        </Link>
                                        <Link href={"/book-now"} className='w-full'>
                                            <div
                                                className={`${true ? "border border-[#1CAC78] bg-[#1CAC78] text-white hover:rotate-6 " : "bg-sky-800 border border-sky-800 text-white hover:rotate-6  "}py-2 px-3  sm:px-5 min-w-[120px] rounded-full cursor-pointer flex items-center justify-center text-sm sm:text-base transition-all`}

                                            >
                                                Boka nu
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                            </figure>
                        </DrawerContent>
                    </HeaderDrawer>

                </div>
            </div>
        </div>
    )
};