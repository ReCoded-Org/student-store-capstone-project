import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import * as React from "react";

export default function Footer() {
    const { t } = useTranslation("footer");

    return (
        <div className='items-center justify-center bg-darkpurple pb-4 font-Poppins'>
            <div className='m-auto flex max-w-screen-2xl flex-row  flex-wrap justify-around gap-5 pt-8 text-white'>
                {/* Logo & socials */}
                <div className='logo logosizingphone logosizingtab mt-[-2rem] flex w-96 flex-col justify-center text-2xl xxs:pt-6 sm:pt-0'>
                    {/* Logo */}
                    <div className='ml-0 flex scale-75 flex-row items-center justify-center'>
                        <Link href='/'>
                            <a>
                                <Image
                                    src='/images/loggo.png'
                                    alt='Logo'
                                    width='130px'
                                    height='130px'
                                    className='hover:cursor-pointer'
                                ></Image>
                            </a>
                        </Link>
                        <Link href='/'>
                            <a>
                                <Image
                                    src='/images/LogoType.png'
                                    alt='StudentStore'
                                    width='160px'
                                    height='80px'
                                    className='hover:cursor-pointer'
                                ></Image>
                            </a>
                        </Link>
                    </div>
                    {/* Socials */}
                    <div className='mt-2 flex scale-[60%] flex-row items-center justify-around'>
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
                <div className='flex w-96 flex-col gap-2 pb-6 xxs:text-center lg:text-left'>
                    <Link href='/sign-up'>
                        <a className='text-sm font-bold '>
                            {t("register-for-free")}
                        </a>
                    </Link>
                    <Link href='/about-us'>
                        <a className='mb-4 text-sm font-bold'>
                            {t("about-us")}
                        </a>
                    </Link>
                    <p className='text-sm font-bold	'>{t("contact-us")}:</p>
                    <p className='text-xs	'>{t("phone")}: 000 111 22 33</p>
                    <p className='text-xs'>e-mail: contact@studentstore.com</p>
                    <p className='text-xs'>
                        {t("address")}: X Street, Number 1, Türkiye
                    </p>
                </div>
            </div>
        </div>
    );
}
