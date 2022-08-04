/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Listing({ listing }) {
    return (
        <>
            <div
                className='align-center listingCard relative mx-auto w-[300px] 
            cursor-pointer flex-col justify-center overflow-hidden rounded-lg bg-white
            pb-2 font-Poppins shadow-xl transition duration-300 hover:scale-105 hover:shadow-hadrisblue'
            >
                <div
                    className='absolute hidden h-full w-full bg-white p-5'
                    id='listingOverview'
                >
                    <h3 className='rounded-xl bg-cyanaqua p-2 font-semibold text-hadrisblue'>
                        Listing Details
                    </h3>
                    <p className='inline-block p-2 text-sm text-hadrisblue'>
                        Item Condition:
                    </p>
                    <p>{listing.condition}</p>
                    <p>{listing.description}</p>
                </div>
                <div className='w-full overflow-hidden'>
                    <img src={listing.img} alt='image' className='object-fit' />
                </div>
                <div className='mt-4 flex justify-between px-3'>
                    <div className=' text-body-color text-md mb-2 leading-relaxed'>
                        {listing.title}
                    </div>
                    <span className='custom-bold text-lg'>
                        ₺{listing.price}
                    </span>
                </div>
                <hr></hr>
                <div className='align-center mb-2 flex justify-between px-3'>
                    <h3>Listing Date:</h3>
                    <span className='custom-bold text-md text-center'>
                        {listing.listingDate}
                    </span>
                </div>
                <div className='mb-2 flex  justify-center p-2'>
                    <span className=' rounded-full bg-teal-200 px-3 text-sm font-semibold uppercase tracking-wide text-teal-800'>
                        {listing.category}
                    </span>
                </div>
            </div>
        </>
    );
}
