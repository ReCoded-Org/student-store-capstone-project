/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";
import React from "react";

export default function Listing({ listing }) {
    const { t } = useTranslation("profile");
    return (
        <>
            <div
                className='align-center listingCard relative mx-auto w-[300px] 
            cursor-pointer flex-col justify-center overflow-hidden rounded-lg bg-white
            pb-2 font-Poppins shadow-xl transition duration-500 hover:scale-105 hover:shadow-hadrisblue'
            >
                <div
                    className='absolute hidden h-full w-full bg-white p-6 text-center'
                    id='listingOverview'
                >
                    <h3 className='m-2 rounded-xl bg-hadrisblue text-lg font-semibold text-cyanaqua'>
                        {t("listing-details")}
                    </h3>
                    <h3 className='text-md m-2 mt-6 rounded-xl bg-cyanaqua text-hadrisblue'>
                        {t("condition")}
                    </h3>
                    <p className='text-md m-2 inline-block text-hadrisblue'>
                        {listing.condition}
                    </p>
                    <h3 className='text-md m-2 rounded-xl bg-cyanaqua text-hadrisblue'>
                        {t("listing-description")}
                    </h3>
                    <p className='text-md m-2 inline-block text-hadrisblue'>
                        {listing.description}
                    </p>
                </div>
                <div className='w-full overflow-hidden'>
                    <img src={listing.img} alt='image' className='object-fit' />
                </div>
                <div className='mt-4 flex justify-between px-3'>
                    <div className=' text-body-color text-md mb-2 leading-relaxed'>
                        {listing.title}
                    </div>
                    <p className='custom-bold text-lg'>₺{listing.price}</p>
                </div>
                <hr></hr>
                <div className='align-center mb-2 flex justify-between px-3'>
                    <h3>{t("listing-date")}:</h3>
                    <p className='custom-bold text-md text-center'>
                        {listing.listingDate}
                    </p>
                </div>
                <div className='mb-2 flex  justify-center p-2'>
                    <p className=' rounded-full bg-teal-200 px-3 text-sm font-semibold uppercase tracking-wide text-teal-800'>
                        {listing.category}
                    </p>
                </div>
            </div>
        </>
    );
}
