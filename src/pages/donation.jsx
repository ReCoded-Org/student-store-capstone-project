import Image from "next/image";
//import Link from "next/link";
import * as React from "react";

import Layout from "@/components/layout/Layout";

export default function Donation() {
    return (
        <Layout>
            <div className='grid-flow-col-1 grid items-center justify-around bg-iceblue font-Poppins'>
                <div className='p-10'>
                    <Image
                        src='/images/donation.png'
                        alt='donation image'
                        width='1024px'
                        height='512px'
                        className='rounded-lg'
                    ></Image>
                </div>
                <div className='htext donationbrush text-center font-bold text-purple xxs:text-xl xs:text-3xl sm:text-4xl'>
                    <h2>Make a Difference by Donating!</h2>
                </div>
                <div className='flex items-center justify-around xxs:scale-90 xxs:flex-col xxs:gap-4 xxs:p-0 sm:scale-100 sm:p-10 lg:flex-row lg:gap-12'>
                    <div className=' donationCard donationCardPhone mt-8 flex h-64 w-72 flex-col justify-center rounded-lg bg-white text-darkpurple shadow-lg '>
                        <div className='flex flex-col items-center p-10 '>
                            <span className='text-xl font-semibold'>Help</span>
                            <div className='flex items-center'>
                                <span className='text-3xl'>$</span>
                                <span className='mt-3 text-6xl font-bold'>
                                    10
                                </span>
                            </div>
                        </div>
                        <div className='justfy-center flex px-10 pb-10'>
                            <button className='flex h-12 w-full items-center justify-center rounded-lg bg-pumpkin px-6 text-sm font-semibold uppercase text-white'>
                                Donate now !
                            </button>
                        </div>
                    </div>
                    <div className='  donationCard donationCardPhone mt-8 flex h-72 w-72 flex-col justify-center rounded-lg bg-white text-darkpurple shadow-lg '>
                        <div className='flex flex-col items-center p-10 '>
                            <span className='text-xl font-semibold'>
                                Some Help
                            </span>
                            <div className='flex items-center'>
                                <span className='text-3xl'>$</span>
                                <span className='mt-3 text-6xl font-bold'>
                                    25
                                </span>
                            </div>
                        </div>
                        <div className='justfy-center flex px-10 pb-10'>
                            <button className='flex h-12 w-full items-center justify-center rounded-lg bg-pumpkin px-6 text-sm font-semibold uppercase text-white'>
                                Donate now !
                            </button>
                        </div>
                    </div>
                    <div className='  donationCard  donationCardPhone mt-8 flex h-80 w-72 flex-col justify-center rounded-lg bg-white text-darkpurple shadow-lg '>
                        <div className='flex flex-col items-center p-10 '>
                            <span className='text-xl font-semibold'>
                                BIG HELP
                            </span>
                            <div className='flex items-center'>
                                <span className='text-3xl'>$</span>
                                <span className='mt-3 text-6xl font-bold'>
                                    50
                                </span>
                            </div>
                        </div>
                        <div className='justfy-center flex px-10 pb-10'>
                            <button className='flex h-12 w-full items-center justify-center rounded-lg bg-pumpkin px-6 text-sm font-semibold uppercase text-white'>
                                Donate now !
                            </button>
                        </div>
                    </div>
                </div>
                <div className='mb-28 flex max-w-4xl flex-col items-center justify-self-center text-center xxs:gap-0 sm:gap-4'>
                    <div className='donationbrush brushphone htext h-12 w-72 font-bold text-purple xxs:text-xl xs:text-3xl sm:text-4xl'>
                        <h2>Why Donate?</h2>
                    </div>
                    <p className='ptexttab p-3 text-2xl leading-loose text-darkpurple'>
                        Life is busy, and it can sometimes be easy to forget to
                        show your gratitude for all that you’ve been given.
                        Students have low budgets and they’re in need of
                        financial support. When you are ready to give and are
                        researching groups of people to support, this can remind
                        us of all that we have, and the act of donating to
                        charity is a way to express our feelings gratitude.
                        Inspire others to give by posting your kind action on
                        social media to inspire others to give generously.
                    </p>
                </div>
            </div>
        </Layout>
    );
}
