import React from 'react'
import PartnerForm from '../_components/partnersForm'
import WorkWithUs from '../_components/WorkWithUs'

function page() {
    return (
        <div className="">
            <div className="relative  font-bold text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl z-10 flex-col flex items-center justify-center w-full min-h-[300px] lg:min-h-[400px] max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full">
                <img
                    src={"/pexels-cottonbro-4569340.jpg"}
                    alt="banner"
                    className="object-cover -z-10 absolute inset-0 size-full"
                />
                <div
                    className="object-cover z-10 absolute inset-0 size-full bg-[#0d0c0c6d]"
                >

                </div>
                <div className='flex flex-col items-center justify-center z-30'>


                    <h1 data-aos="fade-down" className="text-4xl sm:text-5xl font-bold lg:text-6xl mb-6 text-white">
                        Work With Us
                    </h1>

                </div>
            </div>
            <div className="flex rounded-2xl relative  -mt-20 lg:-mt-20 mx-auto my-4 mb-20  z-20 w-full items-center justify-center" data-aos="fade-up">


                <WorkWithUs />

            </div>
        </div>
    )
}

export default page