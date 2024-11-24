"use client"

import React, { useState } from "react";

const FAQ = () => {
    const faqData = [
        {
            question: "How can I book a vehicle or helper?",
            answer:
                "To book a vehicle or helper, click on the 'Get Offer' or 'Book Now' button on our website. Fill out the form with your requirements, and we'll provide you with the best options to suit your needs.",
        },
        {
            question: "What services do you offer?",
            answer:
                "We offer a range of services, including vehicle rentals for moving or shipping, professional helpers for packing and loading, and full moving assistance to make your relocation stress-free.",
        },
        {
            question: "How does the booking process work?",
            answer:
                "It's simple! Choose the services you need, provide your details in the 'Get Offer' form, and select a suitable date and time. Our team will handle the rest to ensure a smooth experience.",
        },
        {
            question: "What makes your services unique?",
            answer:
                "We provide a fleet of reliable vehicles, trained and professional helpers, and affordable pricing with no hidden fees. Our flexible scheduling and commitment to customer satisfaction set us apart.",
        },
        {
            question: "Can I trust your team with my belongings?",
            answer:
                "Absolutely! Our helpers are trained and reliable professionals who handle your belongings with utmost care. We prioritize safety and efficiency in every move.",
        },
        {
            question: "Do you provide assistance for fragile items?",
            answer:
                "Yes, we offer specialized handling and transport for fragile items to ensure they reach their destination safely.",
        },
        {
            question: "Can I book a service without a helper or vehicle?",
            answer:
                "Yes, you can customize your booking to include only the services you need, whether it’s just a vehicle, helper, or both.",
        },
        {
            question: "How far in advance should I book a service?",
            answer:
                "We recommend booking your service at least a few days in advance to ensure availability, especially during peak times.",
        },
        {
            question: "What is your cancellation policy?",
            answer:
                "We offer a flexible cancellation policy. Please refer to our terms and conditions or contact our support team for details about cancellations and refunds.",
        },
        {
            question: "Do you offer services in my area?",
            answer:
                "We operate across a wide range of locations. Click on 'Get Offer' and enter your location details to check availability in your area.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
                    {/* FAQ Image */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src="/move-van.jpg"
                            alt="FAQ Section"
                            className="w-full rounded-xl object-cover"
                        />
                    </div>

                    {/* FAQ Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-xl">
                            <div className="mb-6 lg:mb-16">
                                <h6 className="text-lg text-center font-medium text-gray-600 mb-2 lg:text-left">
                                    FAQs
                                </h6>
                                <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left">
                                    Looking for answers?
                                </h2>
                            </div>
                            <div>
                                {faqData.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="accordion pb-8 border-b border-solid border-gray-200"
                                    >
                                        <button
                                            className="accordion-toggle group inline-flex items-center justify-between w-full text-xl font-normal leading-8 text-gray-600 transition duration-500 hover:text-gray-600"
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <h5>{faq.question}</h5>
                                            <svg
                                                className={`text-gray-900 transition duration-500 group-hover:text-gray-600 ${openIndex === index ? "rotate-180" : ""
                                                    }`}
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                                    stroke="currentColor"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                        </button>
                                        <div
                                            className={`accordion-content w-full px-0 overflow-hidden pr-4 transition-max-height duration-500 ${openIndex === index ? "max-h-screen" : "max-h-0"
                                                }`}
                                        >
                                            <p className="text-base font-normal text-gray-600 mt-4">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
