"use client";

import Booking from '@/app/_components/bookingForm';
import React, { useEffect, useState } from 'react';

function Page({ params }: any) {
    console.log("🚀 ~ params:", params);
    const { slug } = params;
    const [image, setImage] = useState("");

    useEffect(() => {
        const getImage = () => {
            if (slug === "transport") {
                return "/get-car.jpg";
            } else if (slug === "cleaning") {
                return "/cleaning.jpg";
            } else {
                return "/helper.jpg";
            }
        };

        setImage(getImage());
    }, [slug]);

    return (
        <div className='flex flex-col lg:flex-row bg-slate-50 w-full px-8 gap-8 my-20'>
            {image && (
                <img
                    src={image}
                    alt={`${slug} service`}
                    className='w-6/12 h-[400px] rounded-3xl hidden lg:flex sticky top-32'
                />
            )}
            <Booking slug={slug} />
        </div>
    );
}

export default Page;
