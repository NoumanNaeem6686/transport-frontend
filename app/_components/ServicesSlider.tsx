"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const ServicesSlider = () => {

    const services = [
        {
            name: "Cleaning",
            title: "Professional Cleaning Services",
            description:
                "Our cleaning services provide a spotless environment for your home or office. We promote a healthier living and working space. Whether you need one-time deep cleaning or a recurring service, we are flexible to match your schedule.",
            image: "/cleaning.jpg",
            link: "/book-now?service=cleaning",
        },
        {
            name: "Transport",
            title: "Safe and Efficient Transport Services",
            description:
                "Our transport ensures your belongings are moved safely. With a fleet of reliable vehicles and skilled drivers, we make sure your items reach their destination on time. Whether you need a small van for light items or a larger vehicle for heavy furniture, we have the right option for you.",
            image: "/get-car.jpg",
            link: "/book-now?service=transport",
        },
        {
            name: "Helper",
            title: "Reliable Moving Helper Services",
            description:
                "Our helper services are designed to take the stress out of moving. From packing your belongings to heavy lifting, we ensure everything is handled with care. Whether you’re moving within the city or to a new location, our team provides unmatched support.",
            image: "/helper.jpg",
            link: "/book-now?service=helper",
        },
    ];


    return (
        <section className="relative overflow-hidden bg-white pb-32 space-y-20">

            <h1 className="text-4xl md:text-6xl lg:text-7xl w-full text-center font-bold mb-20">Our Services</h1>

            <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={32}
                    loop={true}
                    pagination={{
                        el: ".swiper-pagination1",
                        clickable: true,
                        renderBullet: (index: any, className: any) => {
                            return `<span class="${className}">${services[index].name}</span>`;
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    {services.map((service: any, index: any) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                                <div className="w-full lg:w-1/2">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full rounded-xl shadow-2xl"
                                    />
                                </div>
                                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                    <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-black text-start">
                                        {service.title}
                                    </h2>
                                    <p className="mt-8 text-lg text-gray-700 text-start">
                                        {service.description}
                                    </p>
                                    <div className="mt-10 flex items-center justify-start">
                                        <Link href={service.link}>
                                            <button
                                                className="inline-flex rounded-full bg-[#4B4B4B] px-6 py-1.5 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-gray-700"
                                            >
                                                Book Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination1 mt-8 flex justify-center lg:justify-start"></div>
                </Swiper>
            </div>
        </section >
    );
};

export default ServicesSlider;
