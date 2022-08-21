/* eslint-disable unused-imports/no-unused-vars */
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import * as React from "react";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";

import userIcon from "../../../public/images/userIcon.png";

function Header({
    products,
    filteredProducts,
    setfilteredProducts,
    productName,
    setProductName,
    maxPrice,
    setMaxPrice,
    minPrice,
    setMinPrice,
    currentCategory,
    setCurrentCategory,
}) {
    const { t } = useTranslation("header");
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function searchByName() {
        setfilteredProducts(
            products.filter((product) =>
                product.title.toLowerCase().includes(productName.toLowerCase())
            )
        );
    }

    return (
        <>
            <nav className='flex flex-row p-2 shadow-sm '>
                <div className=' flex flex-grow items-center justify-between md:flex md:flex-row md:items-center md:justify-items-stretch'>
                    <div className='flex w-full flex-row items-center justify-between md:w-auto  md:justify-start'>
                        <div className='py-1 md:mx-1 lg:mx-2'>
                            <Link href='/'>
                                <a>
                                    <Image
                                        src='/images/logo.png'
                                        alt='logo'
                                        layout='fixed'
                                        height={60}
                                        width={150}
                                        className='hover:cursor-pointer'
                                        // onClick={() => {
                                        //     setfilteredProducts(products);
                                        //     setProductName("");
                                        //     setMaxPrice("");
                                        //     setMinPrice("");
                                        //     setCurrentCategory("");
                                        // }}
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className='text-md hidden w-full flex-grow md:flex md:w-auto  md:items-center '>
                            <Link href='/donation'>
                                <a className=' align-center  mr-2 rounded-[20px] p-2 px-3 text-darkPurple hover:bg-purple hover:text-white md:inline-block md:flex-grow lg:px-4'>
                                    {t("donate")}
                                </a>
                            </Link>
                            <Link href='/about-us'>
                                <a className=' text-md mr-2 rounded-[20px] p-2 px-3 text-darkPurple hover:bg-purple hover:text-white md:flex md:flex-grow lg:px-4'>
                                    {t("about-us")}
                                </a>
                            </Link>
                        </div>

                        <section className='flex md:hidden'>
                            <div
                                className='HAMBURGER space-y-2'
                                onClick={() => setIsNavOpen((prev) => !prev)}
                            >
                                <span className='block h-0.5 w-8 animate-pulse bg-pumpkin'></span>
                                <span className='block h-0.5 w-8 animate-pulse bg-pumpkin'></span>
                            </div>

                            <div
                                className={
                                    isNavOpen ? "showMenuNav" : "hideMenuNav"
                                }
                            >
                                <div
                                    className='CROSS-ICON absolute top-0 right-0 px-8 py-8'
                                    onClick={() => setIsNavOpen(false)}
                                >
                                    <svg
                                        className='h-8 w-8 text-pumpkin'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    >
                                        <line x1='18' y1='6' x2='6' y2='18' />
                                        <line x1='6' y1='6' x2='18' y2='18' />
                                    </svg>
                                </div>
                                <ul className='MENU-OPEN mt-10 flex min-h-[250px] flex-col items-center justify-between '>
                                    <li className='flex flex-row items-center justify-start'>
                                        <Link href='/' locale='en'>
                                            <a>EN&nbsp;&nbsp;</a>
                                        </Link>
                                        |
                                        <Link href='/' locale='tr'>
                                            <a>&nbsp;&nbsp;TR&nbsp;&nbsp;</a>
                                        </Link>
                                        |
                                        <Link href='/' locale='de'>
                                            <a>&nbsp;&nbsp;DE</a>
                                        </Link>
                                    </li>

                                    <li className='my-8 border-b border-pumpkin'>
                                        <Link href='/donation'>
                                            <a>{t("donate")}</a>
                                        </Link>
                                    </li>
                                    <li className='my-8 border-b border-pumpkin'>
                                        <Link href='/about-us'>
                                            <a>{t("about-us")}</a>
                                        </Link>
                                    </li>
                                    <li className='my-8 border-b border-pumpkin'>
                                        <Link href='sign-in'>
                                            <a>{t("sign-in")}</a>
                                        </Link>
                                    </li>
                                    <li className='my-8 border-b border-pumpkin'>
                                        <Link href='/product-listing'>
                                            <a>{t("sell-items")}</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className=' relative mx-2 hidden grow flex-row text-gray-600 lg:flex lg:flex-row'>
                        <input
                            className=' h-10 grow rounded-[20px] border-2 border-gray-300 bg-white pl-2 pr-8 text-sm focus:outline-none '
                            type='search'
                            name='search'
                            value={productName}
                            placeholder={t("search")}
                            onChange={(e) => {
                                setProductName(e.target.value);
                                searchByName();
                            }}
                        />
                        <button type='submit'>
                            <BiSearchAlt className='-m-7 h-10 w-10 pt-4 pr-5' />
                        </button>
                    </div>
                    <div className=' hidden w-auto items-center md:flex md:flex-row '>
                        <div className='relative inline-block text-left'>
                            <div className='mr-2'>
                                <button
                                    type='button'
                                    className='inline-flex w-full justify-center rounded-md bg-white p-1 text-sm font-medium text-pumpkin hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 md:mr-2'
                                    id='menu-button'
                                    aria-expanded='true'
                                    aria-haspopup='true'
                                    onClick={() =>
                                        setIsLanguageOpen((prev) => !prev)
                                    }
                                >
                                    <TbWorld size={24} />
                                    <svg
                                        className=' my-1 mt-1 h-4 w-4'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 20 20'
                                        fill='currentColor'
                                        aria-hidden='true'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div
                                className={`
                                    focus:outline-none' absolute right-0 z-10 mt-2 flex w-16  
                                                                       rounded-md
                                                                           bg-white shadow-md
                                                                           ring-1 ring-black ring-opacity-5
                                                                            ${
                                                                                isLanguageOpen
                                                                                    ? "showLanguage"
                                                                                    : "hideLanguage"
                                                                            }`}
                                role='menu'
                                aria-orientation='vertical'
                                aria-labelledby='menu-button'
                                tabIndex='-1'
                            >
                                <div
                                    className='flex flex-col items-center py-1'
                                    role='none'
                                >
                                    <Link href='/' locale='en'>
                                        <a
                                            href='#'
                                            className='flashing block px-4 py-2 text-sm text-gray-700'
                                            role='menuitem'
                                            tabIndex='-1'
                                            id='menu-item-0'
                                        >
                                            English
                                        </a>
                                    </Link>

                                    <Link href='/' locale='tr'>
                                        <a
                                            href='#'
                                            className='flashing block px-4 py-2 text-sm text-gray-700'
                                            role='menuitem'
                                            tabIndex='-1'
                                            id='menu-item-1'
                                        >
                                            Türkçe
                                        </a>
                                    </Link>

                                    <Link href='/' locale='de'>
                                        <a
                                            href='#'
                                            className='flashing block px-4 py-2 text-sm text-gray-700'
                                            role='menuitem'
                                            tabIndex='-1'
                                            id='menu-item-1'
                                        >
                                            Deutsch
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='text-md hidden md:flex md:w-auto md:items-center '>
                            {isLoggedIn ? (
                                <div className=' m-2 mr-2 flex w-[32px] self-center overflow-hidden rounded-full border-[3px] border-lightpurple  md:flex lg:flex'>
                                    <Image
                                        width={32}
                                        height={32}
                                        src={userIcon}
                                        alt='rifik'
                                        layout='intrinsic'
                                    />
                                </div>
                            ) : (
                                <Link href='/sign-in'>
                                    <a
                                        href='#'
                                        className='text-md mr-2 block rounded-[20px]  bg-darkPurple py-2 px-4 text-white hover:bg-purple'
                                    >
                                        {t("sign-in")}
                                    </a>
                                </Link>
                            )}

                            <Link href='/product-listing'>
                                <a className=' text-md mr-2 block rounded-[20px]  bg-darkPurple py-2 px-4 text-white hover:bg-purple'>
                                    {t("sell-items")}
                                </a>
                            </Link>
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
        }
        .hideLanguage {
            display: none;
        }
      `}</style>
            </nav>
        </>
    );
}

export default Header;
