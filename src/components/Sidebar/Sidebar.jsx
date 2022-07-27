import Image from "next/image";
import React from "react";

import rifik from "../../../public/images/rifik.png";

function Sidebar() {

    return (
        <aside
            className='flex h-screen flex-col justify-start bg-white p-6 text-center align-middle shadow-lg
            xs:flex-row xs:h-[150px] xs:justify-between
            sm:w-full sm:flex-row sm:justify-center sm:gap-10 sm:h-[200px]
            sm:align-middle md:h-screen md:w-1/3 md:flex-col md:justify-start lg:w-1/5'
        >
            <div className='mb-5 flex w-[190px] self-center overflow-hidden rounded-full border-[5px] border-lightpurple bg-red-300 sm:w-[130px] xs:hidden sm:flex md:flex lg:flex'>
                <Image src={rifik} alt='rifik' layout='intrinsic' />
            </div>
            <div className='flex flex-col justify-evenly sm:mb-5 xs:mb-2 xs:text-left sm:text-center'>
                <p className='mt-2 text-xl font-semibold text-purple sm:mt-0 xs:text-sm'>
                    Rifik Haspolat
                </p>
                <p className='text-sm text-purple xs:text-sm'>
                    <span className='font-semibold'>E-mail:</span>{" "}
                    rifik@haspolat.com
                </p>
                <p className='text-sm text-purple'>
                    <span className='font-semibold'>Location:</span>
                    Istanbul/Turkey
                </p>
            </div>
            <hr className='m-10 sm:hidden xs:hidden'></hr>
            <div className='flex flex-col justify-center'>
                <div className='pb-9 sm:pb-4 xs:pb-2 activeLink' >
                    <a className='m-2 xs:text-sm sm:text-md md:text-xl lg:text-2xl font-bold text-purple hover:cursor-pointer'>
                        Edit Profile
                    </a>
                </div>
                <div className='pb-9 sm:pb-4 xs:pb-2'>
                    <a className='m-2 xs:text-sm sm:text-md md:text-xl lg:text-2xl font-bold text-purple hover:cursor-pointer'>
                        My Listings
                    </a>
                </div>
                <div className='pb-9 sm:pb-4 xs:pb-2'>
                    <a className='m-2 xs:text-sm sm:text-md md:text-xl lg:text-2xl font-bold text-purple hover:cursor-pointer'>
                        My Orders
                    </a>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
