"use client"


import React, { useEffect } from "react";
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
const HowItWorks = () => {
    useEffect(() => {
        Swiper.use([Pagination, Autoplay]);
        const swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 32,
            loop: true,
            centeredSlides: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        });

        return () => swiper.destroy();
    }, []);
    const howItWorks = [
        {
            "stepNumber": "1st Step",
            "title": "Request a Offer",
            "description": "Start by filling out our 'Get Offer' form with your details. Share information about your moving or transport needs, such as the type of items, pickup location, and destination. This helps us tailor a solution that best fits your requirements. Our team will review your details and get back to you promptly with the best options."
        },
        {
            "stepNumber": "2nd Step",
            "title": "Select Your Services",
            "description": "Once you receive a quote, choose the services you need. Whether it's just a transport vehicle, a team of professional helpers, or a complete moving package, we provide flexible options to suit your budget and preferences. You can customize your services to match your specific requirements."
        },
        {
            "stepNumber": "3rd Step",
            "title": "Schedule Your Move",
            "description": "Pick a convenient date and time for your move. Our team ensures timely arrivals and works around your schedule to make the process smooth and hassle-free. We prioritize punctuality to keep your move stress-free and efficient."
        },
        {
            "stepNumber": "4th Step",
            "title": "Sit Back and Relax",
            "description": "With everything planned and scheduled, you can rest easy. Our expert team will handle all the heavy lifting, ensuring your belongings are transported safely and efficiently to their destination. Enjoy a seamless experience with our professional support at every step."
        }
    ];


    return (
        <section className=" relative">
            <div className="w-full max-w-7xl px-4 lg:p-5 mx-auto">
                <div className="w-full flex-col justify-start items-center lg:gap-12 gap-8 inline-flex">
                    <div className="w-full flex-col justify-start items-center gap-3 flex my-4 mb-10">
                        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
                            Our Process
                        </h1>
                        <h2 className="w-full text-center text-primaryColor text-xl font-manrope leading-normal">
                            Easy, Fast, and Reliable
                        </h2>
                    </div>
                    <div className="w-full justify-start lg:items-end items-center lg:gap-16 gap-8 flex lg:flex-row flex-col">
                        <img
                            className="h-80 rounded-xl w-auto"
                            src="/get-car.jpg"
                            alt="How It Works image"
                        />
                        <div className="swiper mySwiper flex flex-col lg:gap-32 gap-10 w-full">
                            <div className="swiper-wrapper mb-16">
                                {
                                    howItWorks.map((item: any, index: number) => (


                                        <div className="swiper-slide" key={index}>
                                            <div className="w-full flex-col justify-center items-start flex">
                                                <span className="w-full text-[#48575F] text-base font-medium leading-relaxed lg:text-start text-center">
                                                    {item.stepNumber}
                                                </span>
                                                <div className="w-full flex-col justify-center lg:items-start items-center gap-1.5 flex">
                                                    <h4 className="text-gray-900 text-xl md:text-2xl xl:text-4xl font-bold leading-8 lg:text-start text-center mb-6">
                                                        {item.title}
                                                    </h4>
                                                    <p className="lg:max-w-3xl w-full text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }

                            </div>
                            <div className="swiper-pagination lg:justify-start justify-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
