/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import * as React from "react";

import Layout from "@/components/layout/Layout";

export default function NotFoundPage() {
    return (
        <Layout>
            <main className='m-0 flex h-[600px] w-full flex-row overflow-clip bg-iceblue p-0 align-middle'>
                <div className='flex flex-col justify-center align-middle text-darkpurple xs:w-full sm:w-full md:w-full lg:w-[70%]'>
                    <div className='xxs:text-center xs:text-center sm:text-center md:text-center lg:ml-10 lg:text-left'>
                        <h2 className=' m-2  text-4xl font-bold text-darkpurple'>
                            oops
                        </h2>
                        <h2 className='m-2  font-Poppins text-8xl font-bold text-orange'>
                            404
                        </h2>
                        <p className='m-2 font-Poppins text-4xl font-bold'>
                            this is embarassing but...
                        </p>
                        <p className='m-2 font-Poppins text-2xl font-bold'>
                            we couldn&apos;t find the page you&apos;re looking
                            for
                        </p>
                        <Link href='/'>
                            <button className='m-2 mt-4 rounded-xl bg-purple py-2 px-4 text-lg font-bold text-white hover:bg-pumpkin'>
                                go to the homepage
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='overflow-hidden xxs:hidden xs:hidden sm:hidden md:hidden lg:flex '>
                    <img
                        className='object-cover'
                        src='https://68.media.tumblr.com/a366e8e94b3f3839134b7b22a403abe4/tumblr_oqts02PFVa1wn1p99o2_1280.gif'
                        alt='404'
                    />
                </div>
            </main>
        </Layout>
    );
}
