"use client";

import Link from "next/link";
import React, { useState } from "react";

const ProcessSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const processSteps = [
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f193d1fa3cc89549cabb143f00f5456f87fc3950fef87c6c951b0cb64d5a27c0?placeholderIfAbsent=true&apiKey=bc24cc4b887842b2a1fd79f5d8491e57",
            title: "Request an offer",
            description:
                "Start by filling out our 'Get Offer' form. Share about your moving or transport needs in detail. This helps us understand your specific requirements, whether you’re relocating a small apartment, a full household, or just transporting a few items. Provide information about the size of your move, the distance involved, and any special considerations like fragile or valuable items. Our team will review your request and tailor a solution to meet your needs. This step is crucial as it helps us provide an accurate estimate and ensure we allocate the right resources for your move. Once you submit the form, our representatives will get back to you promptly with a personalized quote. This ensures that you can make an informed decision with all the necessary details at your fingertips.",
            showSeeMore: true,
            hasUnderline: false,
        },
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/340a9a024335037fc62adf6b6a8fad4c8f73bd723c5d3c0cc12ba3e14ea435a4?placeholderIfAbsent=true&apiKey=bc24cc4b887842b2a1fd79f5d8491e57",
            title: "Select Your Services",
            description:
                "Once you receive a quote, choose the services you need from our flexible options. Whether it’s just a transport vehicle, a team of professional helpers, or a complete moving package, we’ve got you covered. You can customize the services to suit your budget and requirements. Need packing assistance? No problem. Require special handling for fragile items? We’ve got it covered. Select the combination of services that works best for you. This step is designed to give you maximum control and ensure that every aspect of your move is handled to your satisfaction. Our goal is to make your move as seamless and stress-free as possible, offering transparency and flexibility at every stage.",
            showSeeMore: true,
            hasUnderline: false,
        },
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/691c0a665159a603448b6c4ce0bc93c95bdc9ec7ab63f8ea9d0644e9ac7b5053?placeholderIfAbsent=true&apiKey=bc24cc4b887842b2a1fd79f5d8491e57",
            title: "Schedule your move",
            description:
                "Pick a convenient date and time for your move, and our team will ensure timely arrival. Scheduling is a critical part of the moving process. Whether you prefer to move on a weekday or during the weekend, we work around your schedule to accommodate your needs. Let us know the time frame that suits you best, and we’ll handle the rest. Our team is punctual and reliable, ensuring that everything runs smoothly on the day of your move. By planning ahead, you can avoid last-minute surprises and ensure that all logistics are taken care of. This step also allows us to assign the right team and resources to make your move as efficient and hassle-free as possible.",
            showSeeMore: true,
            hasUnderline: false,
        },
        {
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8b5c6547528212f2e6651bd0dc1fe6db557ef11d2c5965a485947124d12429d2?placeholderIfAbsent=true&apiKey=bc24cc4b887842b2a1fd79f5d8491e57",
            title: "Sit Back and Relax",
            description:
                "After finalizing your booking, all that’s left for you to do is sit back and relax. Our professional team takes care of everything from packing and loading to transporting and unloading. You can have peace of mind knowing that your belongings are in safe hands. Our experienced movers handle your items with the utmost care, ensuring they arrive at their destination in perfect condition. Focus on settling into your new space while we handle the heavy lifting. With our team by your side, moving becomes a hassle-free experience. Whether it’s a local move or a long-distance relocation, we make sure the process is smooth, efficient, and stress-free. Your satisfaction is our top priority.",
            showSeeMore: true,
            hasUnderline: false,
        },
    ];

    return (
        <div className="flex flex-col px-20 max-md:px-5 mt-20">
            <div className="flex flex-wrap gap-10 items-end w-full leading-none uppercase max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                    <div className="flex flex-wrap gap-6 items-center w-full text-2xl font-bold text-emerald-500 tracking-[5.52px] max-md:max-w-full">
                        <div className="shrink-0 self-stretch my-auto h-0.5 border-2 border-emerald-500 border-solid w-[86px]" />
                        <div className="self-stretch my-auto">Our Process</div>
                    </div>
                    <div className="mt-4 text-4xl font-semibold text-black max-md:max-w-full">
                        <span className="font-bold leading-10 text-neutral-800">What Our </span>
                        <span className="font-bold leading-10 text-sky-800">Process</span>
                    </div>
                </div>
                <div className="flex shrink-0 h-[49px] w-[206px]" />
            </div>
            <div className="px-px mt-16  max-md:mt-10">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
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
                            <Link href="/get-offer">
                                <button className="gap-2.5 hover:scale-105 duration-300 self-end px-9 py-3.5 mt-6 w-48 max-w-full text-base font-medium text-center text-white uppercase bg-sky-800 rounded min-h-[46px] max-md:px-5">
                                    Get Offer
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex relative flex-col text-zinc-800 max-md:mt-10 max-md:max-w-full">
                            <div className="flex z-0 flex-col w-full max-w-[638px] max-md:max-w-full">
                                {processSteps.map((step, index) => (
                                    <div
                                        key={index}
                                        className={`cursor-pointer ${index > 0 ? "mt-3" : ""} ${activeIndex === index ? "border-emerald-500 border-2 rounded-xl p-1" : ""
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
    const containerClasses = `flex items-center gap-3 items-start w-full hover:scale-[1.02] duration-300
        }`;

    return (
        <div className={containerClasses}>
            <img
                loading="lazy"
                src={image}
                alt={title}
                className="object-contain rounded-md aspect-[1.62] min-w-[240px] h-full w-[212px]"
            />
            <div className="flex flex-col grow shrink min-w-[240px] w-[281px]">
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
