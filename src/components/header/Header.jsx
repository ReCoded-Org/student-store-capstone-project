import Image from "next/image";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdShoppingCart } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

import logo from "../../../public/images/logo.png";

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <>
            <nav className='mb-2 flex max-w-[1440px] flex-row  p-2'>
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
                                <ul className='MENU-OPEN flex min-h-[250px] flex-col items-center justify-between'>
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
                            <button type='submit' className=' flex'>
                                <TbWorld size={26} color='#32314D' />
                                <RiArrowDropDownLine
                                    size={26}
                                    color='#32314D'
                                />
                            </button>
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
      }`}</style>
            </nav>
        </>
    );
}

export default Header;
