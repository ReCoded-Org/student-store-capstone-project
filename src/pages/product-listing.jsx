/* eslint-disable @next/next/no-img-element */

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout/Layout";

const ProductListing = () => {
    const { t } = useTranslation("product-listing");
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
                        {t("list-an-Item/Service")}
                    </h1>
                </div>
                <div className='grid pt-8 md:gap-2 lg:grid-cols-2'>
                    {/* product photos & info */}
                    <div className='grid gap-3 xxs:mb-0 md:grid-flow-row lg:mb-0'>
                        {/* photos */}
                        <div className='grid items-center justify-center'>
                            {/* main photo */}
                            <img
                                src='https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc='
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
                                src='https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc='
                                alt='Sofa'
                            />
                        </div>
                        <div className='grid justify-center xxs:mx-0 xxs:scale-90 xxs:grid-cols-3 xxs:gap-4 md:mx-[6rem] md:scale-100 md:grid-cols-3 lg:mx-0 xl:px-[4rem]'>
                            {/* the 3 photos */}
                            <div className='grid justify-center'>
                                <img
                                    src='https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc='
                                    alt='Sofa'
                                    className='zoom flashing w-[9rem] rounded-xl shadow-xl hover:cursor-pointer'
                                    onClick={popupImage}
                                />
                            </div>
                            <div className='grid justify-center'>
                                <img
                                    src='https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc='
                                    alt='Sofa'
                                    className='zoom flashing w-[9rem] rounded-xl shadow-xl hover:cursor-pointer'
                                    onClick={popupImage}
                                />
                            </div>
                            <div className='grid justify-center'>
                                <img
                                    src='https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc='
                                    alt='Sofa'
                                    className='zoom flashing w-[9rem] rounded-xl shadow-xl hover:cursor-pointer'
                                    onClick={popupImage}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Inputs */}
                    <div className='grid grid-flow-row xxs:scale-90 xxs:px-0 md:px-4 lg:scale-95 lg:px-10'>
                        <div className='grid h-fit grid-flow-row'>
                            {/* Type, Category */}
                            <div className='grid w-full text-hadrisblue xxs:grid-flow-row sm:grid-cols-2 sm:gap-4'>
                                <div>
                                    <h2 className='text-lg'>{t("type")}</h2>
                                    <select
                                        className='my-3.5 block w-full rounded-lg border
                                                 border-gray-300 bg-gray-50 p-2.5 text-center text-xl
                                                 text-hadrisblue placeholder-hadrisblue focus:border-blue-500
                                                 focus:ring-purple'
                                        aria-label='Default select example'
                                    >
                                        <option
                                            value='DEFAULT'
                                            className='xxs:text-sm lg:text-lg'
                                        >
                                            {t("product")}
                                        </option>
                                        <option
                                            value='1'
                                            className='xxs:text-sm lg:text-lg'
                                        >
                                            {t("service")}
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <h2 className='text-lg'>{t("category")}</h2>
                                    <select
                                        className='my-3.5 block w-full rounded-lg border
                                                 border-gray-300 bg-gray-50 p-2.5 text-center text-xl
                                                 text-hadrisblue placeholder-hadrisblue focus:border-blue-500
                                                 focus:ring-purple'
                                        aria-label='Category'
                                    >
                                        <option
                                            value='DEFAULT'
                                            className='xxs:text-sm lg:text-lg'
                                        >
                                            {t("Books")}
                                        </option>
                                        <option
                                            value='1'
                                            className='xxs:text-sm lg:text-lg'
                                        >
                                            {t("Furniture")}
                                        </option>
                                        <option
                                            value='2'
                                            className='xxs:text-sm lg:text-lg'
                                        >
                                            {t("Electronics")}
                                        </option>
                                        <option
                                            value='3'
                                            className='xxs:text-sm lg:text-lg'
                                        >
                                            {t("Two-wheeler")}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            {/* Product name */}
                            <div>
                                <Input placeholder={t("name")} type='text' />
                            </div>
                            {/* Description */}
                            <div>
                                <h2 className='text-lg text-hadrisblue'>
                                    {t("description")}
                                </h2>
                                <div className='grid items-stretch'>
                                    <textarea
                                        id='description'
                                        name='description'
                                        rows='5'
                                        cols='33'
                                        defaultValue='...'
                                        className='my-3.5 block min-h-[8rem] w-full
                                                   rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-start text-xl
                                                 text-hadrisblue placeholder-hadrisblue focus:border-blue-500 focus:ring-purple'
                                    ></textarea>
                                </div>
                            </div>
                            {/* Location, Price */}
                            <div className='grid w-full xxs:grid-flow-row sm:grid-cols-2 sm:gap-4'>
                                <div>
                                    <Input
                                        placeholder={t("location")}
                                        type='text'
                                    />
                                </div>
                                <div>
                                    <input
                                        className='my-3.5 block w-full rounded-lg border
                                                 border-gray-300 bg-gray-50 p-2.5 text-center text-xl
                                                 text-hadrisblue placeholder-hadrisblue focus:border-blue-500
                                                focus:ring-purple'
                                        id='price'
                                        type='number'
                                        placeholder={t("price")}
                                        min={0}
                                        required
                                    />
                                </div>
                            </div>
                            {/* List button */}
                            <div className='grid justify-center pt-4'>
                                <Button
                                    buttonStyle='listItem'
                                    type='button'
                                    text={t("list")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "header",
                "footer",
                "product-listing",
            ])),
            // Will be passed to the page component as props
        },
    };
}

export default ProductListing;
