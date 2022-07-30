/* eslint-disable @next/next/no-img-element */

import React from "react";

import Layout from "@/components/layout/Layout";
import Map from "@/components/map";

const Details = () => {
    function popupImage(event) {
        document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src =
            event.target.getAttribute("src");
    }

    return (
        <Layout>
            <div className='bg-clay p-10'>
                <div className='grid md:gap-2 lg:grid-cols-2'>
                    {/* product photos & info */}
                    <div className='grid gap-3 xxs:mb-0 md:grid-flow-row lg:mb-0'>
                        {/* photos */}
                        <div className='grid items-center justify-center'>
                            {/* main photo */}
                            <img
                                src='https://images.eq3.com/image-service/084d1830-05e2-4319-98d8-88d1e3091fe1/green-velvet-sofa-with-marble-coffee-table_COMPRESSED.png'
                                alt='Sofa'
                                className='zoom flashing w-[32rem] rounded-xl shadow-xl hover:cursor-pointer'
                                onClick={popupImage}
                            />
                        </div>
                        {/* popup image */}
                        <div className='popup-image'>
                            <span
                                onClick={() => {
                                    document.querySelector(
                                        ".popup-image"
                                    ).style.display = "none";
                                }}
                            >
                                &times;
                            </span>
                            <img
                                src='https://images.eq3.com/image-service/084d1830-05e2-4319-98d8-88d1e3091fe1/green-velvet-sofa-with-marble-coffee-table_COMPRESSED.png'
                                alt='Sofa'
                            />
                        </div>
                        <div className='grid justify-center xxs:mx-0 xxs:scale-90 xxs:grid-cols-3 xxs:gap-4 md:mx-[6rem] md:scale-100 md:grid-cols-3 lg:mx-0 xl:px-[4rem]'>
                            {/* the 3 photos */}
                            <div className='grid justify-center'>
                                <img
                                    src='https://images.eq3.com/image-service/084d1830-05e2-4319-98d8-88d1e3091fe1/green-velvet-sofa-with-marble-coffee-table_COMPRESSED.png'
                                    alt='Sofa'
                                    className='zoom flashing w-[9rem] rounded-xl shadow-xl hover:cursor-pointer'
                                    onClick={popupImage}
                                />
                            </div>
                            <div className='grid justify-center'>
                                <img
                                    src='https://images.eq3.com/image-service/084d1830-05e2-4319-98d8-88d1e3091fe1/green-velvet-sofa-with-marble-coffee-table_COMPRESSED.png'
                                    alt='Sofa'
                                    className='zoom flashing w-[9rem] rounded-xl shadow-xl hover:cursor-pointer'
                                    onClick={popupImage}
                                />
                            </div>
                            <div className='grid justify-center'>
                                <img
                                    src='https://images.eq3.com/image-service/084d1830-05e2-4319-98d8-88d1e3091fe1/green-velvet-sofa-with-marble-coffee-table_COMPRESSED.png'
                                    alt='Sofa'
                                    className='zoom flashing w-[9rem] rounded-xl shadow-xl hover:cursor-pointer'
                                    onClick={popupImage}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Details */}
                    <div className='grid grid-flow-row xxs:scale-90 xxs:px-0 md:px-4 lg:scale-100 lg:px-10'>
                        <div>
                            {/* Headers */}
                            <div className='grid grid-cols-3 pb-6'>
                                <div className='col-span-2'>
                                    <h1 className='brush w-fit font-bold text-purple xxs:text-2xl sm:text-3xl'>
                                        Two Seat Sofa
                                    </h1>
                                    <h2 className='text-darkPurple'>
                                        <b>Category:</b> Furniture
                                    </h2>
                                    <h2 className='pb-2 text-darkPurple'>
                                        <b>Condition:</b> Used
                                    </h2>
                                </div>
                                <div className='grid h-fit rounded-full '>
                                    <h1 className='text-end font-bold text-orange xxs:text-2xl sm:text-3xl'>
                                        $2793
                                    </h1>
                                </div>
                            </div>
                            {/* Description */}
                            <div>
                                <div className='grid-row-2 grid content-start justify-start gap-3'>
                                    <div className='border-b-2 border-purple'>
                                        <h2 className='text-2xl text-darkPurple'>
                                            Details:
                                        </h2>
                                    </div>
                                    <div>
                                        <p className='pb-2 text-extraDarkPurple'>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Porro,
                                            quo, atque eligendi et illum id, non
                                            maiores perspiciatis expedita
                                            quaerat assumenda iure cupiditate
                                            architecto modi numquam doloremque
                                            repellendus exercitationem
                                            distinctio. Lorem: 5 letters, ipsum:
                                            5 letters. doloremque repellendus
                                            exercitationem distinctio. Lorem: 5
                                            letters, ipsum: 5 letters.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* User */}
                            <div className='grid grid-cols-3 items-center justify-center gap-4 overflow-hidden rounded-l-full bg-darkPurple xxs:scale-[80%] sm:scale-[70%]'>
                                {/* User photo */}
                                <img
                                    src='https://149366112.v2.pressablecdn.com/wp-content/uploads/2014/07/m1lead.jpg'
                                    alt='Cat user'
                                    className='h-full w-full border-r-4 border-white object-cover shadow-2xl'
                                />
                                {/* User info */}
                                <div className='col-span-2 grid overflow-x-auto p-4 text-xl text-white scrollbar-hide'>
                                    <h2 className='font-bold xxs:text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl'>
                                        Mr. nice cat
                                    </h2>
                                    <h2 className='xxs:text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl'>
                                        mrNiceCat@fake.com
                                    </h2>
                                    <h2 className='xxs:text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl'>
                                        Istanbul/Turkeky
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:visibl grid justify-center xxs:invisible'>
                    <div className='rounded-3xl xxs:invisible xxs:scale-[80%] sm:visible sm:scale-[90%] lg:scale-95 lg:p-14'>
                        <Map />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Details;
