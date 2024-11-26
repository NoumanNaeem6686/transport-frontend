import React from 'react'
import ServicesMain from '../_components/ServicesMain'

function page() {
    return (
        <main className="flex flex-col  text-center text-white ">
            <div className="relative font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl z-10 flex-col flex items-center justify-center w-full min-h-[400px] max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full">
                <img
                    src={"/get-car.jpg"}
                    alt="banner"
                    className="object-cover -z-10 absolute inset-0 size-full"
                />
                <div
                    className="object-cover z-10 absolute inset-0 size-full bg-[#0d0c0c3f]"
                >

                </div>
                <h1 className="z-10" data-aos="fade-down">
                    Our Services

                </h1>
            </div>
            <h1 className="z-10 font-bold text-3xl md:text-4xl lg:text-6xl mt-32 mb-10 text-black" data-aos="fade-down">
            </h1>

            <ServicesMain />
        </main>
    )
}

export default page