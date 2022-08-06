import Image from "next/image";
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";

import Button from "@/components/button";
import Input from "@/components/layout/input";
import Layout from "@/components/layout/Layout";

import logoOutline from "/public/images/logoOutline.png";
import sunSkyLg from "/public/images/sunSkyLg.png";
import sunSkyOrg from "/public/images/sunSkyOrg.png";

export default function SignInPage() {
    return (
        <>
            <Layout>
                <div className='flex w-auto flex-col md:flex-row md:justify-between'>
                    <div
                        className='flex w-auto  flex-col items-center  bg-gradient-to-t from-[#afcbe3] to-white md:order-2  md:w-full lg:bg-gradient-to-r lg:from-[#b2cce4]
                 '
                    >
                        <p className='my-2 py-6 text-4xl text-pumpkin md:my-3 md:text-5xl '>
                            Sign-in
                        </p>

                        <div className=' flex w-11/12 max-w-sm flex-col items-center lg:max-w-md'>
                            <Input
                                id='email'
                                name='email'
                                placeholder='e-mail address'
                            />
                            <Input
                                id='password'
                                name='password'
                                placeholder='password'
                            />
                            <div className='my-4 flex w-full flex-row justify-between'>
                                <Button
                                    buttonStyle='orangeSignIn'
                                    text='sign-in'
                                    type='submit'
                                />
                                <Button
                                    buttonStyle='forgotPassword'
                                    text='forgot password?'
                                    type='submit'
                                />
                            </div>
                            <div className='mb-2 flex flex-col items-center justify-center pt-4 md:flex md:flex-col'>
                                <fieldset className=' mb-4 w-96 border-t border-[#585785] lg:w-[448px]'>
                                    <legend className='text-md mx-auto px-4 text-[#585785]'>
                                        or
                                    </legend>
                                </fieldset>

                                <p className='text-md mx-4 mb-2 bg-transparent  text-darkPurple'>
                                    sign-in with:
                                </p>
                            </div>

                            <div className='m-1  mb-1 hidden  md:hidden md:flex-row lg:mb-12 lg:flex lg:flex-row '>
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
                                    Don&apos;t have an account?
                                </p>
                                <Button
                                    buttonStyle='orangeSignUp'
                                    text='sign up'
                                />
                            </div>
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
                            <Button
                                style={{
                                    backgroundColor: "transparent",
                                    textColor: "darkPurple",
                                }}
                                buttonStyle='orangeSignUp'
                                text='sign up'
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
