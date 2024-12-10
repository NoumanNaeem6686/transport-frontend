"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const staticReviews = [
    {
        name: "John Doe",
        comment: "The service was excellent! Everything went smoothly and hassle-free.",
        rating: 5,
    },
    {
        name: "Jane Smith",
        comment: "I loved the professionalism of the team. Highly recommend it!",
        rating: 4,
    },
    {
        name: "Emily Johnson",
        comment: "Great experience, and the helpers were very efficient.",
        rating: 5,
    },
    {
        name: "Chris Brown",
        comment: "The vehicle was clean and spacious. Excellent service!",
        rating: 4.5,
    },
    {
        name: "Sarah Wilson",
        comment: "Amazing support throughout the move. Thank you!",
        rating: 5,
    },
    {
        name: "Michael Scott",
        comment: "Quick and reliable, couldn’t have asked for better service.",
        rating: 4.8,
    },
    {
        name: "Pam Beesly",
        comment: "Everything was well-organized and on time.",
        rating: 5,
    },
];

const Reviews = () => {
    const renderStars = (rating: any) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        return (
            <div className="flex space-x-1">
                {[...Array(fullStars)].map((_, i) => (
                    <span key={`full-${i}`} className="text-yellow-500">★</span>
                ))}
                {halfStar === 1 && <span className="text-yellow-500">★</span>}
                {[...Array(emptyStars)].map((_, i) => (
                    <span key={`empty-${i}`} className="text-gray-300">★</span>
                ))}
            </div>
        );
    };

    return (
        <div className="flex items-center px-3 sm:px-7 max-w-[100vw]">
            <img src="/review.png" alt="" className="h-96 rounded-xl hidden lg:flex" />

            <div className="flex flex-col gap-y-8 flex-wrap max-w-sm sm:max-w-2xl mx-auto">

                <div className="flex items-center justify-start gap-1">
                    <div className="flex flex-col w-full font-bold uppercase max-md:max-w-full">
                        <div data-aos="fade-right" className="flex flex-wrap gap-6 items-center w-full text-xl sm:text-2xl leading-none text-sky-800 tracking-[5.52px] max-md:max-w-full">
                            <div
                                className="h-[2px] rounded-md my-auto bg-[#1CAC78] w-[80px] sm:w-[115px]"
                            />
                            <div className="self-stretch uppercase text-[#1CAC78] my-auto">testimonials</div>
                        </div>
                        <div data-aos="fade-down" className="mt-4 text-3xl sm:text-4xl leading-10 text-gray-900 max-md:max-w-full">
                            Our <span className="text-sky-800">Happy</span> customers
                        </div>
                    </div>
                    <button className="swiper-button-prev-custom group hidden sm:flex justify-center hover:bg-sky-900 items-center w-10 h-10 transition-all duration-500 rounded-lg bg-sky-800 text-white active:scale-95">
                        <ChevronLeft />
                    </button>
                    <button className="swiper-button-prev-custom group hidden sm:flex justify-center hover:bg-sky-900 items-center w-10 h-10 transition-all duration-500 rounded-lg bg-sky-800 text-white active:scale-95">

                        <ChevronRight />
                    </button>
                </div>

                <div className="w-full bg-gray-100 rounded-2xl">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={28}
                        navigation={{
                            nextEl: ".swiper-button-next-custom",
                            prevEl: ".swiper-button-prev-custom",
                        }}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        modules={[Navigation, Autoplay, Pagination]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 28,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 32,
                            },
                        }}
                    >
                        {staticReviews.map((review, index) => (

                            <SwiperSlide
                                key={index}
                                className="flex flex-col items-center justify-center max-w-screen-sm overflow-x-hidden sm:w-full h-full p-4 sm:p-8 rounded-xl lg:p-10 bg-gray-100"
                            >
                                <div className="flex flex-col gap-4">
                                    <svg className="h-6 w-6  text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                            fill="currentColor"></path>
                                    </svg>
                                    <p className="text-sm sm:text-base text-gray-900 text-center">
                                        {review.comment}
                                    </p>
                                    <div className="flex items-center justify-center text-xl">
                                        {renderStars(review.rating)}
                                    </div>
                                    <p className="text-sm font-medium capitalize text-gray-700 text-center">
                                        {review.name}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
