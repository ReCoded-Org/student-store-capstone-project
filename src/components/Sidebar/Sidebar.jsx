import Image from "next/image";
import React from "react";

import rifik from "../../../public/images/rifik.png";

function Sidebar() {
    return (
        <aside
            className='flex h-screen flex-col justify-start bg-white p-6 text-center align-middle shadow-lg
            xs:h-[150px] xs:flex-row xs:justify-between
            sm:h-[200px] sm:w-full sm:flex-row sm:justify-center sm:gap-10
            sm:align-middle md:h-screen md:w-1/3 md:flex-col md:justify-start lg:w-1/5'
        >
            <div className='mb-5 flex w-[190px] self-center overflow-hidden rounded-full border-[5px] border-lightpurple bg-red-300 xs:hidden sm:flex sm:w-[130px] md:flex lg:flex'>
                <Image src={rifik} alt='rifik' layout='intrinsic' />
            </div>
            <div className='flex flex-col justify-evenly xs:mb-2 xs:text-left sm:mb-5 sm:text-center'>
                <p className='mt-2 text-xl font-semibold text-purple xs:text-sm sm:mt-0'>
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
            <hr className='m-10 xs:hidden sm:hidden'></hr>
            <div className='flex flex-col justify-center'>
                <div className='pb-9 xs:pb-2 sm:pb-4' id='editProfile'>
                    <a className='sm:text-md m-2 font-bold text-purple hover:cursor-pointer xs:text-sm md:text-xl lg:text-2xl'>
                        Edit Profile
                    </a>
                </div>
                <div className='pb-9 xs:pb-2 sm:pb-4' id='myListings'>
                    <a className='sm:text-md m-2 font-bold text-purple hover:cursor-pointer xs:text-sm md:text-xl lg:text-2xl'>
                        My Listings
                    </a>
                </div>
                <div className='pb-9 xs:pb-2 sm:pb-4' id='myOrders'>
                    <a className='sm:text-md m-2 font-bold text-purple hover:cursor-pointer xs:text-sm md:text-xl lg:text-2xl'>
                        My Orders
                    </a>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
