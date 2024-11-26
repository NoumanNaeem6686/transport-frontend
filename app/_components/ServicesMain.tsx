"use client"

import React from "react";
import { useRouter } from "next/navigation";

function ServicesMain() {
    const router = useRouter();

    const handleBooking = (service: string) => {
        router.push(`/services/${service}`);
    };

    return (
        <div className="relative overflow-hidden bg-white pb-32 space-y-14">
            <div className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none  lg:px-0">

                        <h2 className="text-3xl text-start lg:text-4xl font-bold tracking-tight text-black">
                            Professional Cleaning Services
                        </h2>
                        <p className="mt-4 text-lg text-gray-700 text-start">
                            Our cleaning services provide a spotless environment for your home or office. We focus on every detail, ensuring even hard-to-reach areas are clean. Using eco-friendly and safe products, we promote a healthier living and working space. Whether you need one-time deep cleaning or a recurring service, we are flexible to match your schedule.


                        </p>
                        <ul className="mt-4 space-y-2 flex flex-col">
                            <li className="inline-flex items-center gap-2 text-black">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 shrink-0 text-[#4B4B4B]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z"></path>
                                </svg>
                                Deep cleaning for homes and offices
                            </li>
                            <li className="inline-flex items-center gap-2 text-black">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 shrink-0 text-[#4B4B4B]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z"></path>
                                </svg>
                                Eco-friendly and safe products
                            </li>
                            <li className="inline-flex items-center gap-2 text-black">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 shrink-0 text-[#4B4B4B]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z"></path>
                                </svg>
                                Flexible scheduling options
                            </li>
                        </ul>
                        <div className="mt-6 flex items-center justify-start">
                            <button
                                onClick={() => handleBooking("cleaning")}
                                className="inline-flex rounded-full bg-[#4B4B4B] px-6 py-1.5 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-gray-700"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0">
                        <img
                            loading="lazy"
                            width={647}
                            height={486}
                            className="w-full rounded-xl shadow-2xl"
                            src="/cleaning.jpg"
                            alt="Cleaning Service"
                        />
                    </div>
                </div>
            </div>


            <div className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div className="mt-12 sm:mt-16 lg:mt-0">
                        <img
                            loading="lazy"
                            width={647}
                            height={486}
                            className="w-full rounded-xl shadow-2xl"
                            src="/get-car.jpg"
                            alt="Transport Service"
                        />
                    </div>
                    <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none  lg:px-0">

                        <h2 className="text-3xl text-start lg:text-4xl font-bold tracking-tight text-black">
                            Safe and Efficient Transport Services
                        </h2>
                        <p className="mt-4 text-lg text-gray-700 text-start">
                            Our transport services ensure your belongings are moved safely and efficiently. With a fleet of reliable vehicles and skilled drivers, we make sure your items reach their destination on time. Whether you need a small van for light items or a larger vehicle for heavy furniture, we have the right option for you. Our services are designed to cater to both personal and commercial moving needs. Experience smooth, hassle-free transport with us.

                        </p>
                        <ul className="mt-4 space-y-2 flex flex-col">
                            <li className="inline-flex items-center gap-2 text-black">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 shrink-0 text-[#4B4B4B]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z"></path>
                                </svg>
                                Multiple vehicle options to match your moving needs.
                            </li>
                            <li className="inline-flex items-center gap-2 text-black">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 shrink-0 text-[#4B4B4B]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z"></path>
                                </svg>
                                Professional drivers ensuring safe and timely delivery.
                            </li>
                            <li className="inline-flex items-center gap-2 text-black">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 shrink-0 text-[#4B4B4B]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z"></path>
                                </svg>
                                GPS tracking available for real-time location updates.
                            </li>
                        </ul>
                        <div className="mt-6 flex items-center justify-start">
                            <button
                                onClick={() => handleBooking("transport")}
                                className="inline-flex rounded-full bg-[#4B4B4B] px-6 py-1.5 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-gray-700"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">

                    <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none  lg:px-0">

                        <h2 className="text-3xl text-start lg:text-4xl font-bold tracking-tight text-black">
                            Reliable Moving Helper Services
                        </h2>
                        <p className="mt-4 text-lg text-gray-700 text-start">
                            Our helper services are designed to take the stress out of moving. From packing your belongings to heavy lifting, we ensure everything is handled with care. Our trained helpers are efficient, reliable, and equipped with the skills to tackle any moving challenge. Whether you’re moving within the city or to a new location, our team provides unmatched support.
                        </p>
                        <ul className="mt-4 space-y-2 flex flex-col">
                            <li className="inline-flex items-center gap-2 text-black">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 shrink-0 text-[#4B4B4B]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z"></path>
                                </svg>
                                Professional and experienced moving helpers.
                            </li>
                            <li className="inline-flex items-center gap-2 text-black">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 shrink-0 text-[#4B4B4B]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z"></path>
                                </svg>
                                Assistance with packing, unpacking, and organizing.
                            </li>
                            <li className="inline-flex items-center gap-2 text-black">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 shrink-0 text-[#4B4B4B]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z"></path>
                                </svg>
                                Safe handling of fragile and valuable items.
                            </li>
                        </ul>
                        <div className="mt-6 flex items-center justify-start">
                            <button
                                onClick={() => handleBooking("helper")}
                                className="inline-flex rounded-full bg-[#4B4B4B] px-6 py-1.5 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-gray-700"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0">
                        <img
                            loading="lazy"
                            width={647}
                            height={486}
                            className="w-full rounded-xl shadow-2xl"
                            src="/helper.jpg"
                            alt="Helper Service"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ServicesMain;
