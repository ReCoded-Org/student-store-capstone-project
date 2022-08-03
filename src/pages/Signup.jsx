import React from "react";
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";

import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout/Layout";
export default function Signup() {
    return (
        <Layout>
            <div className='-5 flex h-screen  justify-center bg-iceblue md:flex-row'>
                <div className=' signup-imgs h-5/6 w-3/6 '></div>

                <div className='inputs  container  w-3/6 items-center'>
                    <div className='container m-auto flex w-5/6 flex-col items-center'>
                        <h1>Sign Up</h1>
                        <form
                            action='submit'
                            className='container m-auto flex w-5/6 flex-col items-center'
                        >
                            <Input placeholder='Name' type='text' />
                            <Input placeholder='Surname' type='text' />
                            <Input placeholder='e-mail address' type='email' />
                            <Input placeholder='School name' type='text' />
                            <Input placeholder='Password' type='Password' />
                            <Input
                                placeholder='re-enter Password'
                                type='Password'
                            />

                            <Button
                                buttonStyle='purpleSignUp'
                                type='submit'
                                text='Sign-up'
                            />
                        </form>
                        <div className='flex items-center'>
                            <span className='line'></span>
                            <div>or</div>
                            <span className='line'></span>
                        </div>

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
                            <button className=' m-1 flex justify-around rounded-3xl border border-cyan bg-transparent p-1 text-cyan'>
                                <BsTwitter
                                    size={22}
                                    style={{ padding: "1px" }}
                                    color='cyan'
                                />
                                <p className='mx-2 text-sm md:mx-3'>Twitter</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
