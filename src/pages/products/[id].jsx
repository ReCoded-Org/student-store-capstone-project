/* eslint-disable @next/next/no-img-element */

// import styles from "../../styles/headers.module.css";

const Details = () => {
    return (
        <div className='bg-clay p-10'>
            <div className='grid md:gap-2 lg:grid-cols-2'>
                {/* product photos & info */}
                <div className='grid gap-3 xs:mb-0 md:mb-[-18rem] md:grid-rows-2 lg:mb-0'>
                    {/* photos */}
                    <div className='grid items-center justify-center'>
                        {/* main photo */}
                        <img
                            src='https://images.eq3.com/image-service/084d1830-05e2-4319-98d8-88d1e3091fe1/green-velvet-sofa-with-marble-coffee-table_COMPRESSED.png'
                            alt='Sofa'
                            className='w-[32rem] rounded-xl'
                        />
                    </div>
                    <div className='grid justify-center xs:mx-0 xs:scale-90 xs:grid-cols-3 xs:gap-4 md:mx-[6rem] md:scale-100 md:grid-cols-3 lg:mx-0 xl:px-[4rem]'>
                        {/* the 3 photos */}
                        <div className='grid justify-center'>
                            <img
                                src='https://images.eq3.com/image-service/084d1830-05e2-4319-98d8-88d1e3091fe1/green-velvet-sofa-with-marble-coffee-table_COMPRESSED.png'
                                alt='Sofa'
                                className='w-[9rem] rounded-xl'
                            />
                        </div>
                        <div className='grid justify-center'>
                            <img
                                src='https://images.eq3.com/image-service/084d1830-05e2-4319-98d8-88d1e3091fe1/green-velvet-sofa-with-marble-coffee-table_COMPRESSED.png'
                                alt='Sofa'
                                className='w-[9rem] rounded-xl'
                            />
                        </div>
                        <div className='grid justify-center'>
                            <img
                                src='https://images.eq3.com/image-service/084d1830-05e2-4319-98d8-88d1e3091fe1/green-velvet-sofa-with-marble-coffee-table_COMPRESSED.png'
                                alt='Sofa'
                                className='w-[9rem] rounded-xl'
                            />
                        </div>
                    </div>
                </div>
                {/* Details */}
                <div className='grid grid-flow-row xs:scale-90 xs:px-0 md:px-4 lg:scale-100 lg:px-10'>
                    <div>
                        {/* Headers */}
                        <div className='grid grid-cols-3 pb-6'>
                            <div className='col-span-2'>
                                <h1 className='font-bold text-purple xs:text-2xl sm:text-3xl'>
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
                                <h1 className='text-end font-bold text-orange xs:text-2xl sm:text-3xl'>
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
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Porro, quo, atque
                                        eligendi et illum id, non maiores
                                        perspiciatis expedita quaerat assumenda
                                        iure cupiditate architecto modi numquam
                                        doloremque repellendus exercitationem
                                        distinctio. Lorem: 5 letters, ipsum: 5
                                        letters. doloremque repellendus
                                        exercitationem distinctio. Lorem: 5
                                        letters, ipsum: 5 letters.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* User */}
                        <div className='grid grid-cols-3 items-center justify-center gap-4 overflow-hidden rounded-l-full bg-darkPurple xs:scale-[80%] sm:scale-[70%]'>
                            {/* User photo */}
                            <img
                                src='https://149366112.v2.pressablecdn.com/wp-content/uploads/2014/07/m1lead.jpg'
                                alt='Cat user'
                                className='h-full w-full border-r-4 border-white object-cover shadow-2xl'
                            />
                            {/* User info */}
                            <div className='col-span-2 grid overflow-x-auto p-4 text-xl text-white scrollbar-hide'>
                                <h2 className='font-bold xs:text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl'>
                                    Mr. nice cat
                                </h2>
                                <h2 className='xs:text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl'>
                                    mrNiceCat@fake.com
                                </h2>
                                <h2 className='xs:text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl'>
                                    Istanbul/Turkeky
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid justify-center'>Google Map</div>
        </div>
    );
};

export default Details;
