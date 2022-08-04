/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Order({ order }) {
    return (
        <>
            <div
                className='align-center orderCard relative mx-auto w-[300px] 
                cursor-pointer flex-col justify-center overflow-hidden rounded-lg bg-white
                pb-2 font-Poppins shadow-xl transition duration-500 hover:scale-105 hover:shadow-hadrisblue'
            >
                <div
                    className='absolute m-auto hidden h-full w-full bg-white p-6 text-center'
                    id='orderOverview'
                >
                    <h3 className='m-2 rounded-xl bg-hadrisblue text-lg font-semibold text-cyanaqua'>
                        Order Details
                    </h3>
                    <h3 className='text-md m-2 mt-4 rounded-xl bg-cyanaqua text-hadrisblue'>
                        Item Description
                    </h3>
                    <p className='text-md m-2 inline-block text-hadrisblue'>
                        {order.description}
                    </p>
                    <h3 className='text-md m-2 rounded-xl bg-cyanaqua text-hadrisblue'>
                        Delivery Address
                    </h3>
                    <p className='text-md m-2 inline-block text-hadrisblue'>
                        {order.deliveryAddress}
                    </p>
                </div>
                <div className='w-full overflow-hidden'>
                    <img src={order.img} alt='image' className='object-fit' />
                </div>
                <div className='mt-4 flex justify-between px-3'>
                    <div className=' text-body-color text-md mb-2 leading-relaxed'>
                        {order.title}
                    </div>
                    <span className='custom-bold text-lg'>₺{order.price}</span>
                </div>
                <hr></hr>
                <div className='align-center mb-2 flex justify-between px-3'>
                    <h3>Order Date:</h3>
                    <span className='custom-bold text-md text-center'>
                        {order.orderDate}
                    </span>
                </div>
                <div className='mb-2 flex  justify-center p-2'>
                    <span className=' rounded-full bg-teal-200 px-3 text-sm font-semibold uppercase tracking-wide text-teal-800'>
                        {order.category}
                    </span>
                </div>
            </div>
        </>
    );
}
