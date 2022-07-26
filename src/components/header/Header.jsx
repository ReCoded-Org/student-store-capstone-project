import Image from "next/image";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdShoppingCart } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

import logo from "../../../public/images/logo.png";

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    return (
        <>
            <nav className='mb-2 flex max-w-[1440px] flex-row  p-2 shadow-sm'>
                <div className='flex flex-grow items-center justify-around px-4 md:flex md:flex-row md:items-center md:justify-between lg:flex lg:flex-row lg:items-center lg:justify-between'>
                    <div className='flex w-full flex-row items-center justify-between  md:w-auto md:justify-start lg:w-auto lg:justify-start'>
                        <div className='mx-2 py-1'>
                            <Image
                                src={logo}
                                alt='logo'
                                height={60}
                                width={150}
                            />
                        </div>
                        <div className='hidden w-full flex-grow px-8 md:inline-block md:w-auto lg:flex lg:w-auto lg:items-center lg:px-3'>
                            <div className='text-md text-darkpurple md:flex lg:flex-grow'>
                                <a
                                    href='#'
                                    className='mr-2 block rounded-[20px] px-4 py-2 hover:bg-purple hover:text-white md:inline-block lg:mt-0 lg:inline-block'
                                >
                                    About Us
                                </a>
                                <a
                                    href='#'
                                    className=' mr-2 block rounded-[20px] px-4 py-2 hover:bg-purple hover:text-white lg:mt-0 lg:inline-block'
                                >
                                    Our Team
                                </a>
                            </div>
                        </div>

                        <section className='flex md:hidden lg:hidden'>
                            <div
                                className='HAMBURGER space-y-2'
                                onClick={() => setIsNavOpen((prev) => !prev)}
                            >
                                <span className='block h-0.5 w-8 animate-pulse bg-pumpkin'></span>
                                <span className='block h-0.5 w-8 animate-pulse bg-pumpkin'></span>
                                <span className='block h-0.5 w-8 animate-pulse bg-pumpkin '></span>
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
                                <ul className='MENU-OPEN mt-10 flex min-h-[250px] flex-col items-center justify-between'>
                                    <li className='flex flex-row items-center justify-start'>
                                        <a href='#'>EN &nbsp;&nbsp;</a> |
                                        <a href='#'>&nbsp;&nbsp; TR</a>
                                    </li>

                                    <li className='my-8 border-b border-pumpkin'>
                                        <a href='#'>About Us</a>
                                    </li>
                                    <li className='my-8 border-b border-pumpkin'>
                                        <a href='#'>Our Team</a>
                                    </li>
                                    <li className='my-8 border-b border-pumpkin'>
                                        <a href='#'>Sign Up</a>
                                    </li>
                                    <li className='my-8 border-b border-pumpkin'>
                                        <a href='#'>Sell Items</a>
                                    </li>
                                    <li className='my-8 border-b border-pumpkin'>
                                        <a href='#'>Cart</a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>

                    <div className='flex flex-row  items-center justify-between md:justify-start lg:justify-start'>
                        <div className=' mx-2 hidden flex-row text-gray-600 lg:flex lg:flex-row '>
                            <input
                                className='h-10 w-96 rounded-[20px] border-2 border-gray-300 bg-white pl-2 pr-8  text-sm focus:outline-none'
                                type='search'
                                name='search'
                                placeholder='Search'
                            />
                            <button type='submit'>
                                <BiSearchAlt className='-m-7 h-10 w-10 pt-4 pr-5' />
                            </button>
                        </div>
                        <div className=' hidden lg:flex lg:flex-row '>
                            <div className='relative inline-block text-left'>
                                <div>
                                    <button
                                        type='button'
                                        className='inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-pumpkin hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'
                                        id='menu-button'
                                        aria-expanded='true'
                                        aria-haspopup='true'
                                        onClick={() =>
                                            setIsLanguageOpen((prev) => !prev)
                                        }
                                    >
                                        <TbWorld size={24} />
                                        <svg
                                            className='-mr-1 ml-2 h-5 w-5'
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
                                    focus:outline-none' absolute right-0 mt-2 flex w-16 rounded-md  
                                                                       bg-white
                                                                           shadow-md ring-1
                                                                           ring-black ring-opacity-5
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
                                        <a
                                            href='#'
                                            className='block px-4 py-2 text-sm text-gray-700'
                                            role='menuitem'
                                            tabIndex='-1'
                                            id='menu-item-0'
                                        >
                                            English
                                        </a>
                                        <a
                                            href='#'
                                            className='block px-4 py-2 text-sm text-gray-700'
                                            role='menuitem'
                                            tabIndex='-1'
                                            id='menu-item-1'
                                        >
                                            Turkish
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='hidden md:flex md:items-center lg:flex lg:items-center'>
                            <a
                                href='#'
                                className='text-md mx-3 block rounded-[20px]  bg-darkpurple px-4 py-2 text-white hover:bg-purple '
                            >
                                Sign Up
                            </a>
                            <a
                                href='#'
                                className=' text-md mr-2 block rounded-[20px] bg-darkpurple px-4  py-2 text-white hover:bg-purple'
                            >
                                Sell Items
                            </a>
                            <a href='#' className='m-2 pt-2'>
                                <MdShoppingCart size={28} color='#FF8A57' />
                            </a>
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
