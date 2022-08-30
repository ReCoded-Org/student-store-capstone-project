/* eslint-disable unused-imports/no-unused-vars */
import { useAuth } from "context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useTranslation } from "next-i18next";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { RiUser3Line } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { toast, ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
    injectStyle();
}

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
    const [userIconClicked, setUserIconClicked] = useState(false);
    const { user, logout } = useAuth();

    const languageRef = useRef(null);
    const userIconRef = useRef(null);

    const handleClickOutside = (e) => {
        if (languageRef.current && !languageRef.current.contains(e.target)) {
            setIsLanguageOpen(false);
        }
        if (userIconRef.current && !userIconRef.current.contains(e.target)) {
            setUserIconClicked(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
                                    <div className='pb-12'>
                                        <input
                                            className=' h-10 w-72  grow rounded-[20px] border-2 border-gray-300 bg-white pl-2 pr-8 text-sm focus:outline-none '
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
                                            <BiSearchAlt className='-m-7 h-10 w-10 pt-4 pb-2 pr-5' />
                                        </button>
                                    </div>
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
                            <div className='mr-2 rounded-[20px] border-[3px] border-white hover:border-pumpkin'>
                                <button
                                    type='button'
                                    className='flex w-full items-center justify-center  rounded-full bg-white p-1 text-sm font-medium text-pumpkin blur-none hover:border-pumpkin'
                                    id='menu-button'
                                    aria-expanded='true'
                                    aria-haspopup='true'
                                    onClick={() =>
                                        setIsLanguageOpen((prev) => !prev)
                                    }
                                >
                                    <TbWorld size={24} />
                                    <IoIosArrowDown size={18} className='m-1' />
                                </button>
                            </div>

                            <div
                                className={`
                                    absolute right-2 z-10 mt-2 flex rounded-md
                                                                       bg-white
                                                                           shadow-md ring-1
                                                                           ring-black ring-opacity-5 focus:outline-none
                                                                            ${
                                                                                isLanguageOpen
                                                                                    ? "showLanguage"
                                                                                    : "hideLanguage"
                                                                            }`}
                                ref={languageRef}
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
                                            className='flashing block px-4 py-2 text-sm text-pumpkin'
                                            role='menuitem'
                                            tabIndex='-1'
                                            id='menu-item-0'
                                        >
                                            English
                                        </a>
                                    </Link>

                                    <Link href='/' locale='tr'>
                                        <a
                                            className='flashing block px-4 py-2 text-sm text-pumpkin'
                                            role='menuitem'
                                            tabIndex='-1'
                                            id='menu-item-1'
                                        >
                                            Türkçe
                                        </a>
                                    </Link>

                                    <Link href='/' locale='de'>
                                        <a
                                            className='flashing block px-4 py-2 text-sm text-pumpkin'
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

                        <div className=' hidden w-auto items-center md:flex md:flex-row '>
                            {user ? (
                                <div className='relative inline-block text-left'>
                                    <div className='mr-2'>
                                        <button
                                            type='button'
                                            className='mr-2 flex w-auto items-center self-center overflow-hidden rounded-full border-[3px] border-white p-1 hover:border-purple  md:flex lg:flex'
                                            id='menu-button'
                                            aria-expanded='true'
                                            aria-haspopup='true'
                                            onClick={() =>
                                                setUserIconClicked(
                                                    (prev) => !prev
                                                )
                                            }
                                        >
                                            <RiUser3Line
                                                size={24}
                                                className='text-lightpurple'
                                            />

                                            {/* <Image
                                        width={32}
                                        height={32}
                                        // src={userIcon}
                                        src={rifik}
                                        alt='rifik'
                                        layout='intrinsic'
                                        className='rounded-full'
                                    /> */}
                                            <IoIosArrowDown
                                                size={18}
                                                className='m-1 text-lightpurple'
                                            />
                                        </button>
                                    </div>

                                    <div
                                        className={`
                                    absolute left-1 z-10 mt-2 flex rounded-md
                                                                       bg-white
                                                                           shadow-md ring-2
                                                                           ring-lightpurple ring-opacity-5
                                                                            ${
                                                                                userIconClicked
                                                                                    ? "showUserMenu"
                                                                                    : "hideUserMenu"
                                                                            }`}
                                        ref={userIconRef}
                                        role='menu'
                                        aria-orientation='vertical'
                                        aria-labelledby='menu-button'
                                        tabIndex='-1'
                                    >
                                        <div className='right-0 flex flex-col items-center py-1 '>
                                            <div className='w-full  px-1'>
                                                <p className='border-b-[1px] border-darkPurple text-center text-darkPurple'>
                                                    {user.displayName}
                                                </p>
                                            </div>

                                            <Link href='/listings'>
                                                <a
                                                    className='flashing block px-4 py-2 text-sm text-lightpurple'
                                                    role='menuitem'
                                                    tabIndex='-1'
                                                    id='menu-item-0'
                                                >
                                                    {t("my-listings")}
                                                </a>
                                            </Link>

                                            <Link href='/edit-profile'>
                                                <a
                                                    className='flashing block px-4 py-2 text-sm text-lightpurple'
                                                    role='menuitem'
                                                    tabIndex='-1'
                                                    id='menu-item-1'
                                                >
                                                    {t("edit-Profile")}
                                                </a>
                                            </Link>

                                            <Link href='/donation'>
                                                <a
                                                    className='flashing block px-4 py-2 text-sm text-lightpurple'
                                                    role='menuitem'
                                                    tabIndex='-1'
                                                    id='menu-item-1'
                                                >
                                                    {t("donate")}
                                                </a>
                                            </Link>
                                            <a
                                                className='flashing block px-4 py-2 text-sm text-lightpurple hover:cursor-pointer'
                                                role='menuitem'
                                                tabIndex='-1'
                                                id='menu-item-1'
                                                onClick={() => {
                                                    logout();
                                                    toast.success(
                                                        t("logout-success"),
                                                        {
                                                            position:
                                                                toast.POSITION
                                                                    .TOP_CENTER,
                                                        }
                                                    );
                                                    setTimeout(() => {
                                                        Router.push("/");
                                                    }, 2000);
                                                }}
                                            >
                                                {t("logout")}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link href='/sign-in'>
                                    <a className='text-md mr-2 block rounded-[20px]  bg-darkPurple py-2 px-4 text-white hover:bg-purple'>
                                        {t("sign-in")}
                                    </a>
                                </Link>
                            )}
                        </div>

                        <Link href='/product-listing'>
                            <a className=' text-md mr-2 block rounded-[20px]  bg-darkPurple py-2 px-4 text-white hover:bg-purple'>
                                {t("sell-items")}
                            </a>
                        </Link>
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
            </nav>
        </>
    );
}

export default Header;
