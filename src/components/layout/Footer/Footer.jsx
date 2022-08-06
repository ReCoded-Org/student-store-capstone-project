import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function Footer() {
    return (
        <div className='items-center justify-center bg-darkpurple font-Poppins'>
            <div className='m-auto flex max-w-screen-2xl flex-wrap justify-around gap-5 pt-8 text-white'>
                <div className='logo logosizingphone logosizingtab flex w-96 flex-col text-2xl'>
                    <div className='ml-0 flex scale-75 flex-row items-center'>
                        <Image
                            src='/images/loggo.png'
                            alt='Logo'
                            width='130px'
                            height='130px'
                        ></Image>
                        <Image
                            src='/images/LogoType.png'
                            alt='StudentStore'
                            width='160px'
                            height='80px'
                        ></Image>
                    </div>
                    <div className='mt-2 mr-10 flex scale-[60%] flex-row items-center justify-around'>
                        <Link href='/'>
                            <a>
                                <Image
                                    src='/images/tw.png'
                                    alt='Twitter'
                                    width='53px'
                                    height='45px'
                                ></Image>
                            </a>
                        </Link>
                        <Link href='/'>
                            <a>
                                <Image
                                    src='/images/insta.png'
                                    alt='Instagram'
                                    width='50px'
                                    height='55px'
                                ></Image>
                            </a>
                        </Link>
                        <Link href='/'>
                            <a>
                                <Image
                                    src='/images/fc.png'
                                    alt='FaceBook'
                                    width='25px'
                                    height='45px'
                                ></Image>
                            </a>
                        </Link>
                    </div>
                </div>

                <div className='ml-20 flex w-96 flex-col'>
                    <Link href='/'>
                        <a className='mb-4 text-sm font-bold'>About Us</a>
                    </Link>
                    <Link href='/'>
                        <a className='mb-4 text-sm font-bold'>Get Help</a>
                    </Link>
                    <p className='text-sm font-bold	'>Contact Us:</p>
                    <p className='text-xs	'>Phone: 000 111 22 33</p>
                    <p className='text-xs'>e-mail: contact@studentstore.com</p>
                    <p className='text-xs'>
                        Adress: X Street, Number 1, Türkiye
                    </p>
                </div>
                <div className='ml-20 mb-5 flex w-96 flex-col gap-y-4'>
                    <Link href='/'>
                        <a className='text-sm font-bold '>Shop Now !</a>
                    </Link>
                    <Link href='/'>
                        <a className='text-sm font-bold '>Register For Free</a>
                    </Link>
                    <Link href='/'>
                        <a className='text-sm font-bold '>
                            Delivery Fee and Policies
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='text-sm font-bold'>Track Your Order</a>
                    </Link>
                </div>
                <div className='mb-5 mr-5 flex flex-row flex-wrap items-center justify-center gap-3'>
                    <Link href='/'>
                        <a>
                            <Image
                                src='/images/getit1.png'
                                alt='GooglePlay'
                                width='185px'
                                height='55px'
                                className='scale-75'
                            ></Image>
                        </a>
                    </Link>
                    <Link href='/'>
                        <a>
                            <Image
                                src='/images/getit2.png'
                                alt='AppStore'
                                width='185px'
                                height='45px'
                                className='scale-75'
                            ></Image>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
