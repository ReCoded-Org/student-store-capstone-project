import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function Footer() {
    return (
        <div className='items-center justify-center bg-black'>
            <div className='m-auto flex max-w-screen-2xl flex-wrap justify-around gap-5 pt-14 pb-14 text-white'>
                <div className='logo mb-5 flex w-96 flex-col	text-2xl'>
                    <div className=' mb-3 ml-5 flex flex-row items-center'>
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
                    <div className='mt-3 mr-10 flex flex-row items-center justify-around'>
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

                <div className='ml-20 mb-5 flex w-96 flex-col'>
                    <Link href='/'>
                        <a className='mb-8 text-xl font-bold'>About Us</a>
                    </Link>
                    <Link href='/'>
                        <a className='mb-8 text-xl font-bold'>Get Help</a>
                    </Link>
                    <p className='text-xl font-bold	'>Contact Us:</p>
                    <p className='text-lg	'>Phone: 000 111 22 33</p>
                    <p className='text-lg	'>e-mail: contact@studentstore.com</p>
                    <p className='text-lg	'>
                        Adress: X Street, Number 1, Türkiye
                    </p>
                </div>
                <div className='ml-20 mb-5 flex w-96 flex-col'>
                    <Link href='/'>
                        <a className='mb-8 text-xl font-bold '>Shop Now !</a>
                    </Link>
                    <Link href='/'>
                        <a className='mb-8 text-xl font-bold '>
                            Register For Free
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='mb-8 text-xl font-bold '>
                            Delivery Fee and Policies
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='mb-8 text-xl font-bold '>
                            Track Your Order
                        </a>
                    </Link>
                </div>
                <div className='mb-5 mr-5 flex flex-row flex-wrap items-center gap-3'>
                    <Link href='/'>
                        <a>
                            <Image
                                src='/images/getit1.png'
                                alt='GooglePlay'
                                width='185px'
                                height='55px'
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
                            ></Image>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
