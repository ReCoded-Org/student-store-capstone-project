/* eslint-disable @next/next/no-img-element */

import React from "react";

import Button from "@/components/button";
import Input from "@/components/layout/input";
import Layout from "@/components/layout/Layout";

const ProductListing = () => {
    function popupImage(event) {
        document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src =
            event.target.getAttribute("src");
    }
    return (
        <Layout>
            <div className='bg-clay p-10'>
                <div className='border-b-2 border-gray-300 p-2 pb-6'>
                    <h1 className='brush w-fit font-bold text-purple xxs:text-2xl sm:text-3xl'>
                        Lists an Item/Service
                    </h1>
                </div>
                <div className='grid pt-8 md:gap-2 lg:grid-cols-2'>
                    {/* product photos & info */}
                    <div className='grid gap-3 xxs:mb-0 md:grid-flow-row lg:mb-0'>
                        {/* photos */}
                        <div className='grid items-center justify-center'>
                            {/* main photo */}
                            <img
                                src='images/no-image.jpg'
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
                            <img src='images/no-image.jpg' alt='Sofa' />
                        </div>
                        <div className='grid justify-center xxs:mx-0 xxs:scale-90 xxs:grid-cols-3 xxs:gap-4 md:mx-[6rem] md:scale-100 md:grid-cols-3 lg:mx-0 xl:px-[4rem]'>
                            {/* the 3 photos */}
                            <div className='grid justify-center'>
                                <img
                                    src='images/no-image.jpg'
                                    alt='Sofa'
                                    className='zoom flashing w-[9rem] rounded-xl shadow-xl hover:cursor-pointer'
                                    onClick={popupImage}
                                />
                            </div>
                            <div className='grid justify-center'>
                                <img
                                    src='images/no-image.jpg'
                                    alt='Sofa'
                                    className='zoom flashing w-[9rem] rounded-xl shadow-xl hover:cursor-pointer'
                                    onClick={popupImage}
                                />
                            </div>
                            <div className='grid justify-center'>
                                <img
                                    src='images/no-image.jpg'
                                    alt='Sofa'
                                    className='zoom flashing w-[9rem] rounded-xl shadow-xl hover:cursor-pointer'
                                    onClick={popupImage}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Inputs */}
                    <div className='grid grid-flow-row text-sm xxs:scale-90 xxs:px-0 md:px-4 lg:scale-100 lg:px-10'>
                        <div className='grid h-fit grid-flow-row'>
                            {/* Type, Category */}
                            <div className='grid w-full xxs:grid-flow-row sm:grid-cols-2 sm:gap-4'>
                                <div>
                                    <Input
                                        placeholder='Type(Product/Service)'
                                        type='text'
                                    />
                                </div>
                                <div>
                                    <Input placeholder='Category' type='text' />
                                </div>
                            </div>
                            {/* Product name */}
                            <div>
                                <Input placeholder='Name' type='text' />
                            </div>
                            {/* Description */}
                            <div className='grid h-40 items-stretch'>
                                <Input placeholder='Description' type='text' />
                            </div>
                            {/* Location, Price */}
                            <div className='grid w-full xxs:grid-flow-row sm:grid-cols-2 sm:gap-4'>
                                <div>
                                    <Input placeholder='Location' type='text' />
                                </div>
                                <div>
                                    <Input placeholder='Price' type='text' />
                                </div>
                            </div>
                            {/* List button */}
                            <div className='grid justify-center pt-4'>
                                <Button
                                    buttonStyle='listItem'
                                    type='button'
                                    text='List'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductListing;
