/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Layout from "@/components/layout/Layout";

function ListingsPage() {
    return (
        <Layout>
            <div className='flex h-[550px] w-full justify-between bg-gradient-to-r from-darkpurple to-purple p-10 align-middle'>
                <div className='m-auto flex-col sm:w-full lg:w-[40%]'>
                    <h1 className='m-auto text-4xl font-bold text-cyanaqua xs:text-center sm:text-center md:text-left lg:text-left'>
                        <span className='font-Popppins'>Our</span>{" "}
                        <span> Mission</span>
                    </h1>
                    <p className=' mission mt-4 text-sm leading-8 text-white xxs:text-center xs:text-center  sm:text-center md:text-left lg:text-left'>
                        Student Store is a website that brings together students
                        from all around Turkey and helps them easily buy and
                        sell things locally. The aim of the website is to make
                        second-handing easy and fun for students and help them
                        access their needs easily.
                    </p>
                </div>
                <div className='self-top m-0 h-[600px] -translate-y-20 justify-center overflow-hidden p-0 xxs:hidden xs:hidden sm:hidden md:flex lg:flex'>
                    <img
                        className='h-full'
                        alt='mockup iphone'
                        src='https://s3.amazonaws.com/www-inside-design/uploads/2018/08/iphoneX_hero_floating_devices.png'
                    ></img>
                </div>
            </div>
            <div className='flex h-auto w-full flex-col justify-start border-b-2 border-purple bg-gradient-to-b from-[#585785] to-black p-10 align-middle'>
                <h2 className='m-auto mb-5 text-center font-Poppins text-4xl font-semibold text-cyanaqua'>
                    Our Team
                </h2>
                {/* Salah's Card */}
                <div className='m-auto mb-10 flex w-[200px] flex-col bg-[#585785] p-6 text-center align-middle'>
                    <img
                        className='h-full w-full rounded-full border-4 border-cyanaqua'
                        src='https://avatars.githubusercontent.com/u/4890766?v=4'
                        alt='Salah avatar'
                    ></img>
                    <h3 className='mt-1 text-lg font-semibold text-cyanaqua'>
                        Salah Al-Dhaferi
                    </h3>
                    <h4 className='text-[12px] text-iceblue'>Lead Engineer</h4>
                    <div className='mt-3 mb-0 flex flex-row justify-evenly'>
                        <Link href='https://github.com/tech-chieftain'>
                            <FaGithub
                                className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin'
                                size={30}
                            />
                        </Link>
                        <Link href='https://www.linkedin.com/in/salah-aldhaferi/?originalSubdomain=ye'>
                            <FaLinkedin
                                className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin'
                                size={30}
                            />
                        </Link>
                    </div>
                </div>
                <div className='flex w-full flex-wrap justify-around gap-10 align-top'>
                    {/* Nouh's Card */}
                    <div className='flex w-[200px] flex-col bg-[#585785] p-6 text-center align-middle'>
                        <img
                            className='h-full w-full rounded-full border-4 border-cyanaqua'
                            src='https://media-exp1.licdn.com/dms/image/C5603AQG7dsmBEvTG4w/profile-displayphoto-shrink_800_800/0/1581879286166?e=1665619200&v=beta&t=F69BFpyAuCMweyDVeZZfPByME_lJ6jlKoUDOf9eW_Zo'
                            alt='Nouh avatar'
                        ></img>
                        <h3 className='mt-1 text-lg font-semibold text-cyanaqua'>
                            Nouh Rastanawi
                        </h3>
                        <h4 className='text-[12px] text-iceblue'>
                            Jr. Frontend Engineer
                        </h4>
                        <div className='mt-3 mb-0 flex flex-row justify-evenly'>
                            <Link href='https://github.com/NouhRastanawi'>
                                <FaGithub
                                    className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin'
                                    size={30}
                                />
                            </Link>
                            <Link href='https://www.linkedin.com/in/nouh-rastanawi-b8584b182/'>
                                <FaLinkedin
                                    className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin'
                                    size={30}
                                />
                            </Link>
                        </div>
                    </div>
                    {/* Gizem's Card */}
                    <div className='flex w-[200px] flex-col bg-[#585785] p-6 text-center align-middle'>
                        <img
                            className='h-full w-full rounded-full border-4 border-cyanaqua'
                            src='https://media-exp1.licdn.com/dms/image/C5603AQEW2FlGcGHerA/profile-displayphoto-shrink_800_800/0/1637622044999?e=1665619200&v=beta&t=A0UInMMejCSIiPiHFJXIUBPDfDOzOaaBEqMX9ej1NUQ'
                            alt='Gizem avatar'
                        ></img>
                        <h3 className='mt-1 text-lg font-semibold text-cyanaqua'>
                            Gizem Haspolat
                        </h3>
                        <h4 className='text-[12px] text-iceblue'>
                            Jr. Frontend Engineer
                        </h4>
                        <div className='mt-3 mb-0 flex flex-row justify-evenly'>
                            <Link href='https://github.com/gizemhaspolat'>
                                <FaGithub
                                    className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin'
                                    size={30}
                                />
                            </Link>
                            <Link href='https://www.linkedin.com/in/gizemhaspolat/'>
                                <FaLinkedin
                                    className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin'
                                    size={30}
                                />
                            </Link>
                        </div>
                    </div>
                    {/* Selin's Card */}
                    <div className='flex w-[200px] flex-col bg-[#585785] p-6 text-center align-middle'>
                        <img
                            className='h-full w-full rounded-full border-4 border-cyanaqua'
                            src='https://avatars.githubusercontent.com/u/100427748?v=4'
                            alt='Selin avatar'
                        ></img>
                        <h3 className='mt-1 text-lg font-semibold text-cyanaqua'>
                            Selin Su Varol
                        </h3>
                        <h4 className='text-[12px] text-iceblue'>
                            Jr. Frontend Engineer
                        </h4>
                        <div className='mt-3 mb-0 flex flex-row justify-evenly'>
                            <Link href='https://github.com/selinsuvarol'>
                                <FaGithub
                                    className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin'
                                    size={30}
                                />
                            </Link>
                            <Link href='https://www.linkedin.com/in/selin-su-varol-664936a3/'>
                                <FaLinkedin
                                    className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin'
                                    size={30}
                                />
                            </Link>
                        </div>
                    </div>
                    {/* Beyza's Card */}
                    <div className='flex w-[200px] flex-col bg-[#585785] p-6 text-center align-middle'>
                        <img
                            className='h-full w-full rounded-full border-4 border-cyanaqua'
                            src='https://media-exp1.licdn.com/dms/image/C5603AQEHRu0d7HQf2g/profile-displayphoto-shrink_800_800/0/1655375124272?e=1665619200&v=beta&t=i8orfruyIDSMmZGe9XXPZWVKpjYDK9r7Mjh-PU3oIjs'
                            alt='Beyza avatar'
                        ></img>
                        <h3 className='mt-1 text-lg font-semibold text-cyanaqua'>
                            Beyza Bostanci
                        </h3>
                        <h4 className='text-[12px] text-iceblue'>
                            Jr. Frontend Engineer
                        </h4>
                        <div className='mt-3 mb-0 flex flex-row justify-evenly'>
                            <Link href='https://github.com/beyzabostanci'>
                                <FaGithub
                                    className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin'
                                    size={30}
                                />
                            </Link>
                            <Link href='https://www.linkedin.com/in/beyzabostanci/'>
                                <FaLinkedin
                                    className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin'
                                    size={30}
                                />
                            </Link>
                        </div>
                    </div>
                    {/* Hadri's Card */}
                    <div className='flex w-[200px] flex-col bg-[#585785] p-6 text-center align-middle'>
                        <img
                            className='h-full w-full rounded-full border-4 border-cyanaqua'
                            src='https://avatars.githubusercontent.com/u/68324184?v=4'
                            alt='Hadri avatar'
                        ></img>
                        <h3 className='mt-1 text-lg font-semibold text-cyanaqua'>
                            Mohamed Hadri
                        </h3>
                        <h4 className='text-[12px] text-iceblue'>
                            Jr. Frontend Engineer
                        </h4>
                        <div className='mt-3 mb-0 flex flex-row justify-evenly'>
                            <Link href='https://github.com/mohamedhadri'>
                                <FaGithub
                                    className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin'
                                    size={30}
                                />
                            </Link>
                            <Link href='https://www.linkedin.com/in/mohamed-hadri-1999sy/'>
                                <FaLinkedin
                                    className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin'
                                    size={30}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ListingsPage;
