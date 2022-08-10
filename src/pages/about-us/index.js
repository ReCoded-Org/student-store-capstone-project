/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import {FaGithub, FaLinkedin} from 'react-icons/fa';

import Layout from "@/components/layout/Layout";

function ListingsPage() {
    return (
        <Layout>
            <div
                className='flex h-[550px] w-full align-middle justify-between bg-gradient-to-r from-darkpurple to-purple p-10 lg:pr-0'
            >
                <div className='lg:w-[40%] sm:w-full m-auto flex-col'>
                    <h1 className='m-auto lg:text-left md:text-left sm:text-center xs:text-center text-4xl font-bold text-cyanaqua'>
                        <span className="font-Popppins">Our</span>
                        {" "}
                        <span> Mission</span>
                    </h1>
                    <p className=' mission lg:text-left md:text-left sm:text-center xs:text-center xxs:text-center text-sm  text-white leading-8 mt-4'>
                    Student Store is a website that brings together students from all around Turkey and helps them easily buy and sell things locally. The aim of the website is to make second-handing easy and fun for students and help them access their needs easily. 
                    </p>
                </div>
                <div className='overflow-hidden h-[500px] lg:flex md:hidden justify-center  self-middle p m-0 p-0 sm:hidden xs:hidden xxs:hidden '>
                    <img
                        className=''
                        alt='mockup iphone'
                        src='/images/mockup.png'
                    ></img>
                </div>
                <div className='overflow-hidden h-[500px] lg:hidden md:flex md:w-[80%] justify-center  self-middle p m-0 p-0 sm:hidden xs:hidden xxs:hidden '>
                    <img
                        className=''
                        alt='mockup iphone'
                        src='/images/iphone.png'
                    ></img>
                </div>
            </div>
            <div className='h-auto w-full p-10 flex flex-col justify-start align-middle bg-darkpurple border-b-2 border-purple'>
                <h2 className='text-cyanaqua font-Poppins font-semibold text-4xl text-center m-auto mb-5'>Our Team</h2>
                {/* Salah's Card */}
                <div className='w-[200px] flex flex-col align-middle text-center p-6 bg-[#585785] m-auto mb-10'>
                        <img 
                        className='rounded-full w-full h-full border-4 border-cyanaqua' src='https://avatars.githubusercontent.com/u/4890766?v=4'
                        alt='Salah avatar'></img>
                        <h3 className="text-lg mt-1 font-semibold text-cyanaqua">Salah Al-Dhaferi</h3>
                        <h4 className="text-[12px] text-iceblue">Lead Engineer</h4>
                        <div className="flex flex-row justify-evenly mt-3 mb-0">
                            <Link href="https://github.com/tech-chieftain">
                                <FaGithub className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin' size={30}/>
                            </Link>
                            <Link href="https://www.linkedin.com/in/salah-aldhaferi/?originalSubdomain=ye">
                                <FaLinkedin className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin' size={30}/>
                            </Link>
                        </div>
                </div>
                <div className='w-full flex flex-wrap justify-around align-top gap-10'>
                    {/* Nouh's Card */}
                    <div className='w-[200px] flex flex-col align-middle text-center p-6 bg-[#585785]'>
                        <img 
                        className='rounded-full w-full h-full border-4 border-cyanaqua' src='https://media-exp1.licdn.com/dms/image/C5603AQG7dsmBEvTG4w/profile-displayphoto-shrink_800_800/0/1581879286166?e=1665619200&v=beta&t=F69BFpyAuCMweyDVeZZfPByME_lJ6jlKoUDOf9eW_Zo'
                        alt='Nouh avatar'></img>
                        <h3 className="text-lg mt-1 font-semibold text-cyanaqua">Nouh Rastanawi</h3>
                        <h4 className="text-[12px] text-iceblue">Jr. Frontend Engineer</h4>
                        <div className="flex flex-row justify-evenly mt-3 mb-0">
                            <Link href="https://github.com/NouhRastanawi">
                                <FaGithub className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin' size={30}/>
                            </Link>
                            <Link href="https://www.linkedin.com/in/nouh-rastanawi-b8584b182/">
                                <FaLinkedin className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin' size={30}/>
                            </Link>
                        </div>
                    </div>
                    {/* Gizem's Card */}
                    <div className='w-[200px] flex flex-col align-middle text-center p-6 bg-[#585785]'>
                        <img 
                        className='rounded-full w-full h-full border-4 border-cyanaqua' src='https://media-exp1.licdn.com/dms/image/C5603AQEW2FlGcGHerA/profile-displayphoto-shrink_800_800/0/1637622044999?e=1665619200&v=beta&t=A0UInMMejCSIiPiHFJXIUBPDfDOzOaaBEqMX9ej1NUQ'
                        alt='Gizem avatar'></img>
                        <h3 className="text-lg mt-1 font-semibold text-cyanaqua">Gizem Haspolat</h3>
                        <h4 className="text-[12px] text-iceblue">Jr. Frontend Engineer</h4>
                        <div className="flex flex-row justify-evenly mt-3 mb-0">
                            <Link href="https://github.com/gizemhaspolat">
                                <FaGithub className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin' size={30}/>
                            </Link>
                            <Link href="https://www.linkedin.com/in/gizemhaspolat/">
                                <FaLinkedin className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin' size={30}/>
                            </Link>
                        </div>
                    </div>
                    {/* Selin's Card */}
                    <div className='w-[200px] flex flex-col align-middle text-center p-6 bg-[#585785]'>
                        <img 
                        className='rounded-full w-full h-full border-4 border-cyanaqua' src='https://avatars.githubusercontent.com/u/100427748?v=4'
                        alt='Selin avatar'></img>
                        <h3 className="text-lg mt-1 font-semibold text-cyanaqua">Selin Su</h3>
                        <h3 className="text-lg mt-1 font-semibold text-cyanaqua">Varol</h3>
                        <h4 className="text-[12px] text-iceblue">Jr. Frontend Engineer</h4>
                        <div className="flex flex-row justify-evenly mt-3 mb-0">
                            <Link href="https://github.com/selinsuvarol">
                                <FaGithub className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin' size={30}/>
                            </Link>
                            <Link href="https://www.linkedin.com/in/selin-su-varol-664936a3/">
                                <FaLinkedin className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin' size={30}/>
                            </Link>
                        </div>
                    </div>
                    {/* Beyza's Card */}
                    <div className='w-[200px] flex flex-col align-middle text-center p-6 bg-[#585785]'>
                        <img 
                        className='rounded-full w-full h-full border-4 border-cyanaqua' src='https://media-exp1.licdn.com/dms/image/C5603AQEHRu0d7HQf2g/profile-displayphoto-shrink_800_800/0/1655375124272?e=1665619200&v=beta&t=i8orfruyIDSMmZGe9XXPZWVKpjYDK9r7Mjh-PU3oIjs'
                        alt='Beyza avatar'></img>
                        <h3 className="text-lg mt-1 font-semibold text-cyanaqua">Beyza Bostanci</h3>
                        <h4 className="text-[12px] text-iceblue">Jr. Frontend Engineer</h4>
                        <div className="flex flex-row justify-evenly mt-3 mb-0">
                            <Link href="https://github.com/beyzabostanci">
                                <FaGithub className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin' size={30}/>
                            </Link>
                            <Link href="https://www.linkedin.com/in/beyzabostanci/">
                                <FaLinkedin className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin' size={30}/>
                            </Link>
                        </div>
                    </div>
                    {/* Hadri's Card */}
                    <div className='w-[200px] flex flex-col align-middle text-center p-6 bg-[#585785]'>
                        <img 
                        className='rounded-full w-full h-full border-4 border-cyanaqua' src='https://avatars.githubusercontent.com/u/68324184?v=4'
                        alt='Hadri avatar'></img>
                        <h3 className="text-lg mt-1 font-semibold text-cyanaqua">Mohamed Hadri</h3>
                        <h4 className="text-[12px] text-iceblue">Jr. Frontend Engineer</h4>
                        <div className="flex flex-row justify-evenly mt-3 mb-0">
                            <Link href="https://github.com/mohamedhadri">
                                <FaGithub className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin' size={30}/>
                            </Link>
                            <Link href="https://www.linkedin.com/in/mohamed-hadri-1999sy/">
                                <FaLinkedin className='text-cyanaqua hover:cursor-pointer hover:text-pumpkin' size={30}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ListingsPage;
