"use client"

import * as React from 'react';

const checklistItems = [
    "A decade of expertise in moving and transport services.",
    "Trusted by over 100k satisfied customers worldwide.",
    "Operating in 20+ locations to serve you better."
];

export const AboutSection: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center gap-10  px-20 py-5 max-md:px-5">
            <div className="flex flex-col justify-center self-stretch py-16 ">
                <img src="/about.png" alt="" />
            </div>
            <div className="flex flex-col justify-between items-center self-stretchmy-auto ">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col justify-between w-full">

                        <div className="flex flex-col w-full font-bold uppercase max-md:max-w-full">
                            <div data-aos="fade-right" className="flex flex-wrap gap-6 items-center w-full text-2xl leading-none text-sky-800 tracking-[5.52px] max-md:max-w-full">
                                <div
                                    className="h-[2px] rounded-md my-auto bg-sky-800 w-[115px]"
                                />
                                <div className="self-stretch my-auto">about us</div>
                            </div>
                            <div data-aos="fade-down" className="mt-4 text-4xl leading-10 text-gray-900 max-md:max-w-full">
                                Delivering <span className="text-sky-800">Seamless Moving</span> Experiences
                            </div>
                        </div>
                        <div className="flex flex-col justify-between mt-7 w-full min-h-[272px] max-md:max-w-full">
                            <div className="text-base leading-7 text-zinc-800 max-md:max-w-full">
                                We believe in simplifying lives by providing reliable and
                                efficient moving and transport solutions. Our mission is to make
                                every move stress-free, ensuring that our customers feel
                                supported and confident every step of the way. We are passionate
                                about offering top-notch services that cater to a variety of
                                needs.
                            </div>
                            <div className="flex flex-col pt-4 pb-6 mt-3 w-full max-md:max-w-full">
                                {checklistItems.map((item, index) => (
                                    <div key={index} className="mt-3 first:mt-0">
                                        <div className="flex flex-wrap gap-3 items-center w-full max-md:max-w-full">
                                            <div className="self-stretch my-auto text-xl leading-snug text-cyan-700 whitespace-nowrap">
                                                ✔
                                            </div>
                                            <div className="self-stretch my-auto text-base text-gray-700 min-w-[240px]">
                                                {item}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button
                        className="gap-2.5 self-stretch px-9 py-3.5 mt-5 w-48 max-w-full text-base font-medium text-center text-white uppercase bg-sky-800 rounded min-h-[46px] max-md:px-5"
                        type="button"
                    >
                        Get Offer
                    </button>
                </div>
            </div>
        </div>
    );
};