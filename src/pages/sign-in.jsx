import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import {
    BsEye,
    BsEyeSlash,
    BsFacebook,
    BsGoogle,
    BsTwitter,
} from "react-icons/bs";

import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout/Layout";

import logoOutline from "/public/images/logoOutline.png";
import sunSkyLg from "/public/images/sunSkyLg.png";
import sunSkyOrg from "/public/images/sunSkyOrg.png";

export default function SignInPage() {
    const { t } = useTranslation("sign");

    const [userSignIn, setUserSignIn] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setUserSignIn({
            ...userSignIn,
            [e.target.name]: e.target.value,
        });
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const response = await fetch(
        //     "http://students-store.herokuapp.com/api/auth/signin",
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Access-Control-Allow-Origin": "*",
        //         },
        //         body: JSON.stringify({
        //             email: userSignIn.email,
        //             password: userSignIn.password,
        //         }),
        //     }
        // );
        //const data = await response.json();
    };

    return (
        <>
            <Layout>
                <div className='flex w-auto flex-col md:flex-row md:justify-between'>
                    <div
                        className='flex w-auto  flex-col items-center  bg-gradient-to-t from-[#afcbe3] to-white md:order-2  md:w-full lg:bg-gradient-to-r lg:from-[#b2cce4]
                 '
                    >
                        <p className='my-2 py-6 text-4xl text-pumpkin md:my-3 md:text-5xl '>
                            {t("sign-in")}
                        </p>

                        <div className=' flex w-11/12 max-w-sm flex-col items-center lg:max-w-md'>
                            <form method='post' onSubmit={handleSubmit}>
                                <Input
                                    id='email'
                                    name='email'
                                    onChange={handleChange}
                                    placeholder='e-mail'
                                    value={userSignIn.email}
                                />

                                <div className='relative h-auto'>
                                    <Input
                                        className='z-0'
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        id='password'
                                        name='password'
                                        onChange={handleChange}
                                        placeholder={t("password")}
                                        value={userSignIn.password}
                                    />
                                    <div className='absolute top-2.5 right-4 '>
                                        <button
                                            type='button'
                                            className='color-pumpkin h-8'
                                            onClick={togglePassword}
                                        >
                                            {showPassword ? (
                                                <BsEyeSlash className='text-pumpkin' />
                                            ) : (
                                                <BsEye className='text-pumpkin' />
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <div className='my-4 flex w-full flex-row justify-between'>
                                    <Button
                                        buttonStyle='orangeSignIn'
                                        text={t("sign-in")}
                                        type='submit'
                                    />
                                    <Button
                                        buttonStyle='forgotPassword'
                                        text={t("forgot-password") + "?"}
                                        type='submit'
                                    />
                                </div>
                                <div className='mb-2 flex flex-col items-center justify-center pt-4 md:flex md:flex-col'>
                                    <fieldset className=' mb-4 w-96 border-t border-[#585785] lg:w-[448px]'>
                                        <legend className='text-md mx-auto px-4 text-[#585785]'>
                                            {t("or")}
                                        </legend>
                                    </fieldset>

                                    <p className='text-md mx-4 mb-2 bg-transparent  text-darkPurple'>
                                        {t("sign-in-with")}
                                    </p>
                                </div>
                                <div className='m-1  mb-1 hidden  md:hidden  lg:mb-12 lg:flex lg:flex-row lg:justify-around'>
                                    <button className=' m-1 flex items-center rounded-3xl border border-[#F26F6F] p-1  text-[#F26F6F]'>
                                        <BsGoogle
                                            size={22}
                                            style={{ padding: "1px" }}
                                            color='#F26F6F'
                                        />
                                        <p className='mx-2 text-sm md:mx-3'>
                                            Google
                                        </p>
                                    </button>
                                    <button className='color-darkPurple m-1  flex items-center rounded-3xl border border-darkPurple p-1 text-darkPurple'>
                                        <BsFacebook
                                            size={22}
                                            style={{ padding: "1px" }}
                                            color='#585785'
                                        />
                                        <p className='mx-2 text-sm md:mx-3'>
                                            Facebook
                                        </p>
                                    </button>
                                    <button className=' m-1 flex justify-around rounded-3xl border border-[#1DA1F2] bg-transparent p-1 text-[#1DA1F2]'>
                                        <BsTwitter
                                            size={22}
                                            style={{ padding: "1px" }}
                                            color='#1DA1F2'
                                        />
                                        <p className='mx-2 text-sm md:mx-3'>
                                            Twitter
                                        </p>
                                    </button>
                                </div>
                                <div className='hidden items-center md:hidden lg:mb-8 lg:flex lg:flex-col'>
                                    <p className=' text-md mb-3  bg-transparent text-darkpurple'>
                                        {t("don't-have-an-account")}?
                                    </p>
                                    <Link href='/sign-up'>
                                        <a>
                                            <Button
                                                buttonStyle='orangeSignUp'
                                                text={t("sign-up")}
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='relative hidden  lg:order-1  lg:flex lg:w-full '>
                        <div className=''>
                            <Image
                                src={sunSkyLg}
                                alt='sunSkyLg'
                                layout='fill'
                            />
                        </div>
                        <div className='absolute ml-16 mt-20 p-2 '>
                            <Image
                                src={logoOutline}
                                alt='logoOutline'
                                layout='intrinsic'
                                height={450}
                                width={450}
                            />
                        </div>
                    </div>
                </div>
                <div className='relative w-full md:order-1 lg:hidden '>
                    <div className=' object-cover'>
                        <Image
                            src={sunSkyOrg}
                            alt='sunSky'
                            layout='responsive'
                        />
                    </div>
                    <div className='absolute top-1 left-auto flex w-full flex-col items-center justify-between bg-transparent lg:hidden'>
                        <div className='m-1 mb-16 flex flex-row  '>
                            <button className=' m-1 flex items-center rounded-3xl border border-[#F26F6F] p-1  text-[#F26F6F]'>
                                <BsGoogle
                                    size={22}
                                    style={{ padding: "1px" }}
                                    color='#F26F6F'
                                />
                                <p className='mx-2 text-sm md:mx-3'>Google</p>
                            </button>
                            <button className='color-darkPurple m-1  flex items-center rounded-3xl border border-darkPurple p-1 text-darkPurple'>
                                <BsFacebook
                                    size={22}
                                    style={{ padding: "1px" }}
                                    color='#585785'
                                />
                                <p className='mx-2 text-sm md:mx-3'>Facebook</p>
                            </button>
                            <button className=' m-1 flex justify-around rounded-3xl border border-[#1DA1F2] bg-transparent p-1 text-[#1DA1F2]'>
                                <BsTwitter
                                    size={22}
                                    style={{ padding: "1px" }}
                                    color='#1DA1F2'
                                />
                                <p className='mx-2 text-sm md:mx-3'>Twitter</p>
                            </button>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className=' text-md mb-4 bg-transparent text-darkpurple'>
                                Don&apos;t have an account?
                            </p>
                            <Link href='/sign-up'>
                                <a>
                                    <Button
                                        style={{
                                            backgroundColor: "transparent",
                                            textColor: "darkPurple",
                                        }}
                                        buttonStyle='orangeSignUp'
                                        text={t("sign-up")}
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "header",
                "footer",
                "sign",
            ])),
            // Will be passed to the page component as props
        },
    };
}
