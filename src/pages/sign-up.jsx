import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import React from "react";
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

export default function Signup() {
    const { t } = useTranslation("sign");
    const [userSignUp, setUserSignUp] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
    });

    const handleChange = (e) => {
        setUserSignUp({
            ...userSignUp,
            [e.target.name]: e.target.value,
        });
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(
            "http://students-store.herokuapp.com/api/auth/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    firstName: userSignUp.firstName,
                    lastName: userSignUp.lastName,
                    email: userSignUp.email,
                    schoolName: userSignUp.schoolName,
                    password: userSignUp.password,
                }),
            }
        );
        const data = await response.json();
        // console.log(data);
    };
    return (
        <Layout>
            <div className='signup-container flex   justify-center  md:flex-row'>
                <div className=' signup-imgs my-5   w-3/6'></div>

                <div className='inputs  container  w-3/6 items-center'>
                    <div className='container m-auto flex w-5/6 flex-col items-center'>
                        <h1 className='my-2 py-6 font-Ubuntu text-4xl text-white md:my-3 md:text-5xl'>
                            {t("sign-up")}
                        </h1>

                        <form
                            onSubmit={handleSubmit}
                            action='submit'
                            className='container m-auto mb-6 flex w-5/6 flex-col items-center'
                        >
                            <Input
                                placeholder={t("name")}
                                type='text'
                                id='Name'
                                value={userSignUp.firstName}
                                onChange={handleChange}
                            />
                            <Input
                                placeholder={t("surname")}
                                type='text'
                                id='Surname'
                                value={userSignUp.lastName}
                                onChange={handleChange}
                            />
                            <Input
                                placeholder='e-mail'
                                type='email'
                                id='email'
                                value={userSignUp.email}
                                onChange={handleChange}
                            />
                            <Input
                                placeholder={t("university")}
                                type='text'
                                id='university'
                                value={userSignUp.schoolName}
                                onChange={handleChange}
                            />
                            <div className='relative h-auto w-full'>
                                <Input
                                    className='z-0'
                                    type={showPassword ? "text" : "password"}
                                    id='password'
                                    name='password'
                                    onChange={handleChange}
                                    placeholder={t("password")}
                                    value={userSignUp.password}
                                />
                                <div className='absolute top-6 right-4 '>
                                    <button
                                        type='button'
                                        className='color-pumpkin h-8'
                                        onClick={togglePassword}
                                    >
                                        {showPassword ? (
                                            <BsEyeSlash className='text-darkPurple' />
                                        ) : (
                                            <BsEye className='text-darkPurple' />
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div className='relative h-auto w-full'>
                                <Input
                                    className='z-0'
                                    type={showPassword ? "text" : "password"}
                                    id='password'
                                    name='password'
                                    onChange={handleChange}
                                    placeholder={t("password")}
                                    value={userSignUp.password}
                                />
                                <div className='absolute top-6 right-4 '>
                                    <button
                                        type='button'
                                        className='color-pumpkin h-8'
                                        onClick={togglePassword}
                                    >
                                        {showPassword ? (
                                            <BsEyeSlash className='text-darkPurple' />
                                        ) : (
                                            <BsEye className='text-darkPurple' />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <Button
                                buttonStyle='purpleSignUp'
                                type='submit'
                                text={t("sign-up")}
                            />
                        </form>
                        <div className='mb-2 flex items-center'>
                            <span className='line'></span>
                            <div>{t("or")}</div>
                            <span className='line'></span>
                        </div>
                        <div className='text-md m-1 text-iceblue'>
                            {t("Sign-up-with")}
                        </div>
                        <div className='m-1 mb-8 flex flex-row  '>
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
                            <button className=' m-1 flex justify-around rounded-3xl border border-cyanaqua bg-transparent p-1 text-cyanaqua '>
                                <BsTwitter
                                    size={22}
                                    style={{ padding: "1px" }}
                                    color='cyanaqua'
                                />
                                <p className='mx-2 text-sm md:mx-3'>Twitter</p>
                            </button>
                        </div>
                        <div className='mb-4 text-xl text-iceblue'>
                            {t("already-have-an-account")}?
                        </div>
                        <div className='mb-8'>
                            <Link href='/sign-in'>
                                <a>
                                    <Button
                                        buttonStyle='purpleSignUp'
                                        type='submit'
                                        text={t("sign-in")}
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
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
