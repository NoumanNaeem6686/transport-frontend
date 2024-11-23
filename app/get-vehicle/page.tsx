import React from 'react'

function page() {
    return (
        <main className="flex flex-col  text-center text-white ">
            <div className="relative font-bold text-5xl md:text-7xl z-10 flex-col flex items-center justify-center w-full min-h-[400px] max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full">
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
                    Get Vehicle
                </h1>
            </div>
            {/* <div className="-mt-20  rounded-2xl md:-mt-20 mx-auto my-4 mb-20  z-[100] w-full items-center flex justify-center" data-aos="fade-up">
                <GetOffer />
            </div> */}
        </main>
    )
}

export default page