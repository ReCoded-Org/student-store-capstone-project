/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Listing({ listing }) {
    return (
        <>
            <div className='w-[350px] cursor-pointer flex-col justify-center align-center 
            overflow-hidden rounded-lg bg-white transition duration-300 hover:scale-105
            font-Poppins shadow-xl pb-2'>
                <div className='w-full overflow-hidden'>
                    <img src={listing.img} alt='image' className='object-fit' />
                </div>
                <div className='flex justify-between px-3 mt-4'>
                    <div className=' text-body-color mb-2 text-md leading-relaxed'>
                        {listing.title}
                    </div>
                    <span className='custom-bold text-lg'>₺{listing.price}</span>
                </div>
                <hr></hr>
                <div className='flex justify-between align-center px-3 mb-2'>
                    <h3>Listing Date:</h3>
                    <span className='custom-bold text-md text-center'>{listing.listingDate}</span>
                </div>
                <div className='flex justify-center  p-2 mb-2'>
                    <span className=' rounded-full bg-teal-200 px-3 text-sm font-semibold uppercase tracking-wide text-teal-800'>{listing.category}</span>
                </div>
                </div>
                
        </>
    );
}
