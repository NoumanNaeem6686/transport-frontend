import Link from 'next/link';
import * as React from 'react';
import ScrollBaseAnimation from '../text-marquee';
import Image from 'next/image';

const statistics = [
    { title: 'Relocation', value: '20', suffix: '+' },
    { title: 'clients', value: '100', suffix: 'K' },
    { title: 'experience', value: '150', suffix: 'Y' }
];

const cities = '  | Paris | London | Berlin | Madrid | Rome | Amsterdam | Vienna | Prague | Budapest  ';

export const TransportPage: React.FC = () => {
    return (
        <div className="flex flex-col w-full relative">
            <Image layout='fill' src="/Frame 427319221.png" alt="" className=' object-cover ' />
            {/* <img src="/hero_mobile.jpg" alt="" className='absolute flex md:hidden w-full min-h-full' /> */}
            <div
                className="flex relative flex-col justify-center items-start px-20 py-36 mt-0 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
                <div className="flex z-0 flex-col justify-between max-w-full min-h-[348px] lg:w-[559px]">
                    <h1 className="text-6xl font-bold text-sky-800 leading-[73px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
                        <span className="text-zinc-800">Moving</span> Doesn't{' '}
                        <span className='text-[#1CAC78]'>
                            Have to{' '}
                        </span>
                        <span className="text-zinc-800">Be Hard</span>
                    </h1>
                    <p className="mt-8 text-lg leading-7 text-zinc-800 max-md:max-w-full">
                        Whether you're relocating, need professional cleaning, or reliable
                        transport solutions, we provide tailored services to meet your
                        needs. Experience seamless and efficient assistance at every step.
                    </p>
                    <div className="flex gap-3 items-center self-start mt-8 text-base font-medium text-center">
                        <Link href="get-offer">
                            <button className="gap-2.5 hover:scale-105 transition-all duration-250 self-stretch px-9 py-3.5 my-auto sm:w-48 text-white bg-sky-800 rounded min-h-[46px] max-md:px-5">
                                Get Offer
                            </button>
                        </Link>
                        <Link href="book-now">
                            <button className="gap-2.5 self-stretch hover:scale-105 transition-all duration-250 px-9 py-3.5 my-auto sm:w-48 text-white rounded border border-[#1CAC78] bg-[#1CAC78] border-solid min-h-[46px] max-md:px-5">
                                Book Now
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="hidden lg:flex absolute z-0 flex-col max-w-full font-semibold text-white right-[77px] top-[140px] w-[187px]">
                    {statistics.map((stat, index) => (
                        <div key={index} className={index > 0 ? 'mt-10' : ''}>
                            <div className="flex flex-col pl-9 w-full whitespace-nowrap max-w-[187px] max-md:pl-5">
                                <div className="self-start text-2xl leading-none text-right uppercase">
                                    {stat.title}
                                </div>
                                <div className="flex gap-2.5 self-end mt-2 max-md:mr-0.5">
                                    <div className="text-7xl leading-none text-right uppercase max-md:text-4xl">
                                        {stat.value}
                                    </div>
                                    <div className="self-start text-4xl text-center">{stat.suffix}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="overflow-hidden z-10 gap-2.5 self-center px-2.5 py-12 mb-10 w-full text-2xl font-medium leading-loose text-white rounded-xl bg-sky-800 max-w-[1061px] max-md:max-w-full">

                <ScrollBaseAnimation
                    scrollDependent={true}
                // className="font-bold tracking-[-0.07em] leading-[90%] pb-2"
                >

                    {cities}
                </ScrollBaseAnimation>
            </div>
        </div>
    );
}