import React from "react";

export default function SingleProduct({ product }) {
    return (
        <>
            <div
                className='my-4 w-full transform font-Poppins shadow-xl  transition duration-500 hover:scale-105 
         sm:w-2/3 md:w-5/12 lg:mx-3 lg:w-1/4 xl:w-1/5 '
            >
                <div className='mb-1 overflow-hidden rounded-lg bg-white'>
                    <img
                        src={product.img}
                        alt='image'
                        className='h-72 w-full cursor-pointer'
                    />
                    <div className='p-8 text-center sm:p-9 md:p-7 xl:p-9'>
                        <h3></h3>
                        <div className='flex justify-between '>
                            <div className=' text-body-color mb-2 text-xl leading-relaxed'>
                                {product.title}
                            </div>
                            <span className='custom-bold text-2xl'>
                                ₺{product.price}
                            </span>
                        </div>

                        <div className='flex items-baseline justify-between'>
                            <span
                                className='inline-block rounded-full bg-teal-200 px-2 
                text-xs font-semibold 
                 uppercase tracking-wide text-teal-800'
                            >
                                {product.category}
                            </span>

                            <span className='text-xs'>
                                {product.location}/Turkey
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
