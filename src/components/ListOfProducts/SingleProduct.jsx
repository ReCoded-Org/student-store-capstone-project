/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useTranslation } from "next-i18next";
import React from "react";

export default function SingleProduct({ product }) {
    const { t } = useTranslation("categories");
    return (
        <Link href={`products/${product.id}`}>
            <div
                className='w-full transform font-Poppins shadow-xl transition duration-500 xxs:my-[-2rem] xxs:scale-75 xxs:hover:scale-[80%]
                            sm:my-2 sm:w-2/4 sm:scale-90 sm:hover:scale-100 md:w-5/12 md:scale-95 lg:mx-3 lg:w-1/4 xl:w-1/5'
            >
                <div className='mb-1 overflow-hidden rounded-lg bg-white'>
                    <img
                        src={product.coverImage}
                        alt='image'
                        className='h-64 w-full cursor-pointer'
                    />
                    <div className='px-4 py-6 text-center'>
                        <div className='flex justify-between '>
                            <div className=' text-body-color mb-2 text-lg leading-relaxed'>
                                {product.title}
                            </div>
                            <span className='custom-bold text-xl'>
                                ₺{product.price}
                            </span>
                        </div>

                        <div className='flex items-baseline justify-between'>
                            <span
                                className='inline-block rounded-full bg-teal-200 px-2 text-xs 
                                           font-semibold uppercase tracking-wide text-teal-800'
                            >
                                {t(`${product.category}`)}
                            </span>

                            <span className='text-xs'>
                                {product.location}/Turkey
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
