/* eslint-disable @next/next/no-img-element */

import { useAuth } from "context/AuthContext";
import Router from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

import Button from "@/components/button";
import Layout from "@/components/layout/Layout";
import Map from "@/components/map";

const Details = ({ singleProduct }) => {
    const { t } = useTranslation("product");
    const { user } = useAuth();

    function popupImage(event) {
        document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src =
            event.target.getAttribute("src");
    }

    function popupWindow() {
        document.querySelector(".popup-window").style.display = "block";
    }
    function closePopupWindow() {
        document.querySelector(".popup-window").style.display = "none";
    }

    function showEmail() {
        document.getElementById("hidden_email").style.display = "none";
        document.getElementById("visible_email").style.display = "block";
    }

    function hideEmail() {
        document.getElementById("hidden_email").style.display = "block";
        document.getElementById("visible_email").style.display = "none";
    }

    function showOwner() {
        document.getElementById("user_info").style.display = "grid";
    }

    const unlist = async () => {
        const response = await fetch(
            `http://localhost:3001/products/${singleProduct.id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status: "Inactive" }),
            }
        );
        document.querySelector(".popup-window").style.display = "none";
        toast.success(t("removed-successfully"), {
            position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => {
            Router.push("/");
        }, 3000);
        return response.json();
    };

    return (
        <Layout>
            <div className='bg-clay p-10 '>
                <div className='grid md:gap-2 lg:grid-cols-2'>
                    {/* product photos & info */}
                    <div className='grid gap-3 xxs:mb-0 md:grid-flow-row lg:mb-0'>
                        {/* photos */}
                        <div className='grid items-center justify-center pb-2'>
                            {/* main photo */}
                            <img
                                src={singleProduct.coverImage}
                                alt={singleProduct.title}
                                className='zoom flashing max-h-[25rem] w-[32rem] rounded-xl object-cover shadow-xl hover:cursor-pointer'
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
                            <div className='popup h-full w-full'>
                                <img
                                    className='lg:max-h-[48rem]'
                                    src={singleProduct.coverImage}
                                    alt={singleProduct.title}
                                />
                            </div>
                        </div>
                        <div className='grid justify-evenly xxs:mx-0 xxs:scale-90 xxs:grid-flow-col xxs:gap-4 md:mx-[6rem] md:scale-100 lg:mx-0 xl:px-[4rem]'>
                            {/* the other photos */}
                            {singleProduct.otherImages?.map((image, index) => {
                                return (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={singleProduct.title}
                                        className='zoom flashing max-h-[7rem] w-[9rem] rounded-xl object-cover shadow-xl hover:cursor-pointer lg:h-[7rem]'
                                        onClick={popupImage}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    {/* Details */}
                    <div className='grid grid-flow-row xxs:scale-90 xxs:px-0 md:px-4 lg:scale-100 lg:px-10'>
                        <div>
                            {/* Headers */}
                            <div className='grid grid-cols-3 pb-6'>
                                <div className='col-span-2'>
                                    <h2 className='brush mb-6 w-fit animate-none text-left font-Poppins font-bold text-purple xxs:text-2xl sm:text-3xl md:text-4xl'>
                                        {singleProduct.title}
                                    </h2>
                                    <h2 className='text-darkPurple'>
                                        <b>{t("category")}:</b>{" "}
                                        {t(`${singleProduct.category}`)}
                                    </h2>
                                    <h2 className='text-darkPurple'>
                                        <b>{t("condition")}:</b>{" "}
                                        {t(`${singleProduct.condition}`)}
                                    </h2>
                                    <h2 className='pb-1 text-darkPurple'>
                                        <b>{t("listing-date")}:</b>{" "}
                                        {new Date(
                                            singleProduct.createdAt
                                        ).toLocaleDateString()}
                                    </h2>
                                </div>
                                <div className='grid h-fit rounded-full '>
                                    <h1 className='text-end font-Poppins font-bold text-orange xxs:text-2xl sm:text-3xl md:text-4xl'>
                                        {singleProduct.price} ₺
                                    </h1>
                                </div>
                            </div>
                            {/* Description */}
                            <div>
                                <div className='grid-row-2 grid content-start justify-start gap-3'>
                                    <div className='border-b-2 border-purple'>
                                        <h2 className='text-2xl text-darkPurple'>
                                            {t("description")}:
                                        </h2>
                                    </div>
                                    <div>
                                        <p className='pb-2 text-extraDarkPurple'>
                                            {singleProduct.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Contact owner */}
                            <div>
                                <h2
                                    onClick={() => {
                                        showOwner();
                                    }}
                                    className='m-auto mt-4 w-fit pt-1 font-bold text-extraDarkPurple underline hover:cursor-pointer'
                                >
                                    {t("contact-owner")}
                                </h2>
                            </div>
                            {/* User */}
                            <div
                                id='user_info'
                                style={{ display: "none" }}
                                className='popup grid grid-cols-3 items-center justify-center gap-4 overflow-hidden rounded-l-full bg-darkPurple xxs:scale-[80%] sm:scale-[70%]'
                            >
                                {/* User photo */}
                                <img
                                    src={
                                        singleProduct.seller.image
                                            ? singleProduct.seller.image
                                            : "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg"
                                    }
                                    alt='Cat user'
                                    className='h-full w-full border-r-4 border-white object-cover shadow-2xl'
                                />
                                {/* User info */}
                                <div className='col-span-2 grid overflow-x-auto p-4 text-xl text-white scrollbar-hide'>
                                    <h2 className='font-bold xxs:text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl'>
                                        {singleProduct.seller.displayName}
                                    </h2>
                                    <h2 className='xxs:text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl'>
                                        <span id='hidden_email'>
                                            ****@****.edu.tr{" "}
                                            <span
                                                className='hover:cursor-pointer hover:text-extraDarkPurple'
                                                onClick={() => {
                                                    showEmail();
                                                }}
                                            >
                                                ({t("show")})
                                            </span>
                                        </span>
                                        <span
                                            id='visible_email'
                                            style={{ display: "none" }}
                                        >
                                            {singleProduct.seller.email}{" "}
                                            <span
                                                className='hover:cursor-pointer hover:text-extraDarkPurple'
                                                onClick={() => {
                                                    hideEmail();
                                                }}
                                            >
                                                ({t("hide")})
                                            </span>
                                        </span>
                                    </h2>
                                    <h2 className='xxs:text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl'>
                                        {singleProduct.city}/Turkeky
                                    </h2>
                                </div>
                            </div>
                            {user.email === singleProduct.seller.email ? (
                                <div className='grid justify-center xxs:pt-4 lg:pt-2'>
                                    <Button
                                        buttonStyle='orangeSignUp'
                                        type='button'
                                        text={t("unlist")}
                                        handleClick={popupWindow}
                                    />
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
                <div className='grid justify-center'>
                    <div className='rounded-3xl xxs:scale-[80%] sm:scale-[90%] lg:scale-95 lg:py-14'>
                        <Map geo={singleProduct.geo} />
                    </div>
                </div>
            </div>
            {/* popup window */}
            <div className='popup-window'>
                <div className='popup fixed top-0 bottom-0 right-0 left-0 m-auto h-fit w-fit rounded-lg bg-clay px-6 py-4 xxs:scale-[60%] xs:scale-75 sm:scale-90 lg:scale-100'>
                    <div className='pb-4'>
                        <h2 className='text-center text-extraDarkPurple'>
                            {t("unlisting-confirm")}?
                        </h2>
                    </div>
                    <div className='grid grid-flow-col justify-center gap-5'>
                        <div>
                            <Button
                                buttonStyle='orangeSignUp'
                                type='button'
                                text={t("yes")}
                                handleClick={unlist}
                            />
                        </div>
                        <div>
                            <Button
                                buttonStyle='orangeSignUp'
                                type='button'
                                text={t("cancel")}
                                handleClick={closePopupWindow}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      .showLanguage {
        display: block;
        width: 100%;
        height: auto;

        }
        .hideLanguage {
            display: none;
        }
        .showUserMenu {
            display: block;
            width: 20vh;
            height: auto;
            text-align: start;
        }
        .hideUserMenu {
            display: none;
        }
      `}</style>
            <ToastContainer />
        </Layout>
    );
};
export const API_URL = "https://fakeapibecauseitbrokedown.herokuapp.com";
export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch(
        `${API_URL}/products/${id.substring(0, id.indexOf("-"))}`
    );
    const singleProduct = await res.json();
    const locale = context.locale;

    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "product",
                "header",
                "footer",
                "categories",
            ])),
            singleProduct,
        },
    };
}

export const getStaticPaths = async ({ locales }) => {
    const res = await fetch(API_URL + "/products");
    const productsData = await res.json();

    const paths = productsData.flatMap((product) => {
        return locales.map((locale) => {
            return {
                params: {
                    id:
                        product.id.toString() +
                        "-" +
                        product.title.toLowerCase().replace(/\s/g, "-"),
                },
                locale: locale,
            };
        });
    });

    return {
        paths,
        fallback: false,
    };
};

export default Details;
