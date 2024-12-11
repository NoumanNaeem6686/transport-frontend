"use client"

import * as React from "react";
import { ServiceCard } from "./ServicesCard";

const servicesData: any = [
    {
        title: "Professional cleaning service",
        description: "Our cleaning services provide a spotless environment for your home and office. We promote a healthier living and working space. Whether you need one time deep cleaning or a recurring service, we are flexible to match your schedule.",
        isHighlighted: false,
        image: "/service_1.png"
    },
    {
        title: "Safe and Efficient transport",
        description: "Our transport ensures your belonging are moved safely. With a fleet of reliable vehicles and skilled drivers. We make sure your items reach destination on time. Whether you need a small van for light items or a larger vehicle for heavy furniture, we have the right option for you.",
        isHighlighted: true,
        image: "/service_2.png"

    },
    {
        title: "Reliable moving help center",
        description: "Our helper services are designed to take the stress out of moving. From packing your belongings to heavy lifting we ensure that everything is handled with care. Whether you are moving within the city or to a new location our team provides unmatched support.",
        isHighlighted: false,
        image: "/service_3.png"
    }
];

export const ServicesSection: React.FC = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center mt-10 sm:mt-0  ">
            <div className="flex flex-col w-11/12  ">
                <div className="flex flex-col w-full uppercase max-md:max-w-full">
                    <div data-aos="fade-right" className="flex flex-wrap gap-6 items-center w-full text-2xl font-bold leading-none text-[#1CAC78] tracking-[5.52px] max-md:max-w-full">
                        <div className="shrink-0 self-stretch my-auto rounded-md h-0.5 border-2 border-[#1CAC78]  border-solid w-[86px]" />
                        <div className="self-stretch my-auto">Våra tjänster</div>
                    </div>
                    <div data-aos="fade-up-right" className="mt-4 text-4xl font-semibold leading-tight text-sky-800 max-md:max-w-full">
                        <span className="font-bold">Vad  </span>
                        <span className="font-bold text-sky-800">vi gör</span>
                    </div>
                </div>
                <div className="gap-10 -start mt-20 place-content-center place-items-center gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {servicesData.map((service: any, index: number) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            image={service.image}
                            description={service.description}
                            isHighlighted={service.isHighlighted}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};