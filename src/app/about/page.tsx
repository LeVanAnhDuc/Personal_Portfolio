'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import avatar from '../../images/avatar_about.png';
import { Button } from 'antd';
import { Affix } from 'antd';
import Link from 'next/link';

const About = () => {
    return (
        <main>
            {/* section 1 */}
            <div className="grid xl:grid-cols-3">
                <div className="xl:col-span-2 flex flex-col gap-6">
                    <h1>About me</h1>
                    <div className="flex flex-wrap gap-3 shadow-lime-100 shadow-md p-5 bg-white rounded-xl">
                        <h2 className="w-40">Skill</h2>
                        <div className="flex flex-wrap gap-10">
                            <ul>
                                <h3>Front-end</h3>
                                <li>React, Next</li>
                                <li>Vue3</li>
                                <li>TypeScript</li>
                                <li>SCSS, Tailwind, Responsive</li>
                                <li>Figma</li>
                                <li>Mui, Chakra, Ant</li>
                            </ul>
                            <ul>
                                <h3>Back-end</h3>
                                <li>Java</li>
                                <li>GoLang</li>
                                <li>C#</li>
                                <li>MS SQL, MonggoDB, SQL Server</li>
                                <li>RESTFUL API</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3 shadow-lime-100 shadow-md p-5 bg-white rounded-xl">
                        <h2 className="w-40">Work Experience</h2>
                        <ul>
                            <li>Technology solutions company UPTECH (6/2023 - 10/2023)</li>
                            <li>Apps Cyclone Technology JSC (12/2023 - 2/2023)</li>
                        </ul>
                    </div>
                    <div className="flex flex-wrap gap-3 shadow-lime-100 shadow-md p-5 bg-white rounded-xl">
                        <h2 className="w-40">Soft Skills</h2>
                        <ul>
                            <li>Group Collaboration</li>
                            <li>Self - Study</li>
                            <li>Clean code</li>
                            <li>Communication</li>
                            <li>Adaptability</li>
                        </ul>
                    </div>
                    <div className="flex flex-wrap gap-3 shadow-lime-100 shadow-md p-5 bg-white rounded-xl">
                        <h2 className="w-40">Contact Details</h2>
                        <ul>
                            <li>Address: Ho Chi Minh city, VietNam</li>
                            <li>Email: levananhduc1804@gmail.com</li>
                            <li>Phone: 033 944 3725</li>
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Link href={'./contact'}>
                            <Button type="primary" style={{ background: '#65B741', height: '100%' }}>
                                <p className="font-semibold text-lg px-2">Contact</p>
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* image */}
                <div className="flex justify-center h-full w-full items-start">
                    <Affix offsetTop={50}>
                        <Image
                            src={avatar}
                            alt="avatar"
                            className="object-cover h-96 w-96 rounded-[100%] bg-[#88AB8E] shadow-2xl"
                        />
                    </Affix>
                </div>
            </div>
        </main>
    );
};

export default About;
