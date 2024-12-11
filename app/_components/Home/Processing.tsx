"use client";

import Link from "next/link";
import React, { useState } from "react";

const ProcessSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const processSteps = [
        {
            image: "/process_1.png",
            title: "Request an offer",
            description:
                "Fill out our 'Få erbjudande' form to share your moving or transport needs. Provide details about the size of your move, distance, and any special considerations. Our team will review your request and provide a tailored quote promptly. This ensures accurate estimates and proper resource allocation for a smooth process.",
            showSeeMore: true,
            hasUnderline: false,
        },
        {
            image: "/process_2.png",
            title: "Select Your Services",
            description:
                "After receiving a quote, choose the services you need from our flexible options. Whether it's just transport, helpers, or a full package, customize to fit your budget. From packing to special handling for fragile items, we provide transparency and flexibility for a seamless experience.",
            showSeeMore: true,
            hasUnderline: false,
        },
        {
            image: "/process_3.png",
            title: "Schedule your move",
            description:
                "Pick a convenient date and time, and we’ll ensure timely arrival. Let us know your preferred schedule, and our reliable team will handle the logistics. Planning ahead avoids surprises, ensuring your move is efficient and hassle-free.",
            showSeeMore: true,
            hasUnderline: false,
        },
        {
            image: "/process_4.png",
            title: "Sit Back and Relax",
            description:
                "Once booked, relax as our professional team handles packing, loading, transport, and unloading. Your belongings are in safe hands. Focus on settling in while we ensure a smooth and stress-free moving experience.",
            showSeeMore: true,
            hasUnderline: false,
        },
    ];

    return (
        <div className="flex flex-col  xl:px-20 px-5 mt-20">
            <div className="flex flex-wrap gap-10 items-end w-full leading-none uppercase max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                    <div data-aos="fade-right" className="flex flex-wrap gap-6 items-center w-full text-xl sm:text-2xl font-bold text-emerald-500 tracking-[5.52px] max-md:max-w-full">
                        <div className="shrink-0 self-stretch my-auto h-0.5 border-2 border-emerald-500 border-solid w-[50px] sm:w-[86px]" />
                        <div className="self-stretch my-auto">Vår process</div>
                    </div>
                    <div data-aos="fade-up-right" className="mt-4 text-3xl sm:text-4xl font-semibold text-black w-full">
                        <span className="font-bold leading-10 text-neutral-800">"Vår  </span>
                        <span className="font-bold leading-10 text-sky-800">process</span>
                    </div>
                </div>
                <div className="flex sm:flex shrink-0 h-[49px] w-[206px]" />
            </div>
            <div className="px-px sm:mt-16 ">
                <div className="flex gap-5 flex-col-reverse lg:flex-row w-full items-center justify-center">
                    <div className="flex flex-col lg:w-6/12 max-md:ml-0 w-full">
                        <div className="flex flex-col w-full  max-md:max-w-full">
                            <div className="flex flex-col w-full  rounded-md max-md:max-w-full">
                                <img
                                    loading="lazy"
                                    src={processSteps[activeIndex].image}
                                    alt={processSteps[activeIndex].title}
                                    className="h-[300px] w-full rounded-xl aspect-[1.24] max-md:max-w-full"
                                />
                            </div>
                            <div className="flex flex-col mt-5 w-full max-md:max-w-full">
                                <div className="text-2xl lg:text-4xl font-bold leading-normal text-neutral-800 max-md:max-w-full">
                                    {processSteps[activeIndex].title}
                                </div>
                                <div className="mt-4 text-base text-justify text-zinc-800 max-md:max-w-full">
                                    {processSteps[activeIndex].description}
                                </div>
                            </div>
<<<<<<< HEAD
                            <Link href="book-now">
                                <button className="gap-2.5 self-stretch hover:scale-105 transition-all duration-250 mt-10 px-9 py-3.5 my-auto sm:w-48 text-white rounded border border-[#1CAC78] bg-[#1CAC78] border-solid min-h-[46px] max-md:px-5">
                                    Book Now
=======
                            <Link href="/get-offer">
                                <button className="gap-2.5 hover:scale-105 duration-300 self-end px-9 py-3.5 mt-6 w-48 max-w-full text-base font-medium text-center text-white uppercase bg-sky-800 rounded min-h-[46px] max-md:px-5">
                                    Få erbjudande
>>>>>>> 2318c83 (translation)
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 lg:w-6/12 max-md:ml-0 w-full">
                        <div className="flex relative flex-col text-zinc-800 max-md:mt-10 max-md:max-w-full">
                            <div className="flex z-0 flex-col w-full lg:max-w-[638px] max-w-full">
                                {processSteps.map((step, index) => (
                                    <div
                                        key={index}
                                        className={`cursor-pointer ${index > 0 ? "mt-3" : ""} ${activeIndex === index ? "border-emerald-500 border rounded-xl p-1" : ""
                                            }`}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        <ProcessCard
                                            {...step}
                                            showSeeMore={activeIndex !== index}
                                            hasUnderline={activeIndex === index}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProcessCard: React.FC<any> = ({
    image,
    title,
    description,
    showSeeMore,
}) => {
    const containerClasses = `flex flex-col sm:flex-row items-center gap-3 items-start w-full 
    ${showSeeMore && "hover:scale-[1.01] duration-300"}
        }`;

    return (
        <div className={containerClasses}>
            <img
                loading="lazy"
                src={image}
                alt={title}
                className="object-contain rounded-md aspect-[1.62] min-w-[240px] h-full w-full sm:w-[212px]"
            />
            <div className="flex flex-col grow  min-w-[240px] w-full sm:w-[281px]">
                <div className="text-xl font-bold">{title}</div>
                <div className="mt-1 text-justify">{description.slice(0, 90)}...</div>
                {showSeeMore && (
                    <div className="mt-2 text-base leading-loose text-right text-emerald-500">
                        <span className="font-bold text-emerald-500">See More</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProcessSection;
