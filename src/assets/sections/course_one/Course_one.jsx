import React from 'react'
import Section from '../../components/Section'
import Div from '../../components/Div'
import H1 from '../../components/H1'
import UL from '../../components/UL'
import LI from '../../components/LI'
import Anchor from '../../components/Anchor'
import Span from '../../components/Span'
import { TbLayoutGrid } from 'react-icons/Tb';
import { FaUserAlt } from 'react-icons/Fa';
import { CiGrid2H } from 'react-icons/Ci';
import { BsStarFill,BsArrowRight } from 'react-icons/Bs';
import P from '../../components/P'
import Button from '../../components/Button'
import Image from '../../components/Image'
import H2 from '../../components/H2'

function Course_one() {
    return (
        <Section Class="">
            {/* course one banner  */}
            <Div Class='bg-[url("./images/course_one_banner.jpg")] bg-no-repeat bg-center bg-cover py-28'>
                <H1 Text="About Us" Class="text-5xl  text-center font-bold text-orange-500" />
                <UL Class='flex gap-4 justify-center mt-10'>
                    <LI>
                        <Anchor text='Home' Class='cursor-pointer' />
                    </LI> //
                    <LI>
                        <Anchor text='About' />
                    </LI>
                </UL>
            </Div>

            <Div Class="container mx-auto grid grid-cols-12 gap-6 my-24">
                {/* left site  */}
                <Div Class="col-span-7">
                    {/* search result  */}
                    <Div Class='flex justify-between py-4 px-3 border'>
                        <Div Class="flex gap-4 items-center">
                            <Div Class="flex gap-3 text-xl">
                                <TbLayoutGrid />
                                <CiGrid2H />
                            </Div>
                            <P Text="Showing 1-9 of 11 results" />
                        </Div>
                        <Div>
                            <Button Text="Default" />
                        </Div>
                    </Div>

                    {/* card section  */}
                    <Div Class="grid grid-cols-2 gap-5 mt-4">
                        <Div Class="p-5 shadow-md">
                            <Image Source="./images/course_one_card01.jpg" Class="w-full mb-4" />
                            <Div Class="flex justify-between items-center">
                                <Span Text="$55.00" Class="bg-orange-500 py-2 px-3 text-white"/>
                                <Span Text="Web Developement" />
                            </Div>
                            <Anchor>
                                <H2 Text="Become a PHP Master and Make Money Fast" Class="my-4"/>
                                <Div Class="flex justify-between">
                                    <Div>
                                        <Div Class="flex items-center gap-3">
                                            <FaUserAlt /> <Span Text="245" />
                                            <UL Class="flex items-center gap-1">
                                                <LI Class="flex">
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                </LI>
                                                <Span Text="(05)"/>
                                            </UL>
                                        </Div>
                                    </Div>
                                    <Anchor>
                                        <BsArrowRight/>
                                    </Anchor>
                                </Div>
                            </Anchor>
                        </Div>
                        <Div Class="p-5 shadow-md">
                            <Image Source="./images/course_one_card01.jpg" Class="w-full mb-4" />
                            <Div Class="flex justify-between items-center">
                                <Span Text="$55.00" Class="bg-orange-500 py-2 px-3 text-white"/>
                                <Span Text="Web Developement" />
                            </Div>
                            <Anchor>
                                <H2 Text="Become a PHP Master and Make Money Fast" Class="my-4"/>
                                <Div Class="flex justify-between">
                                    <Div>
                                        <Div Class="flex items-center gap-3">
                                            <FaUserAlt /> <Span Text="245" />
                                            <UL Class="flex items-center gap-1">
                                                <LI Class="flex">
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                </LI>
                                                <Span Text="(05)"/>
                                            </UL>
                                        </Div>
                                    </Div>
                                    <Anchor>
                                        <BsArrowRight/>
                                    </Anchor>
                                </Div>
                            </Anchor>
                        </Div>
                        <Div Class="p-5 shadow-md">
                            <Image Source="./images/course_one_card01.jpg" Class="w-full mb-4" />
                            <Div Class="flex justify-between items-center">
                                <Span Text="$55.00" Class="bg-orange-500 py-2 px-3 text-white"/>
                                <Span Text="Web Developement" />
                            </Div>
                            <Anchor>
                                <H2 Text="Become a PHP Master and Make Money Fast" Class="my-4"/>
                                <Div Class="flex justify-between">
                                    <Div>
                                        <Div Class="flex items-center gap-3">
                                            <FaUserAlt /> <Span Text="245" />
                                            <UL Class="flex items-center gap-1">
                                                <LI Class="flex">
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                </LI>
                                                <Span Text="(05)"/>
                                            </UL>
                                        </Div>
                                    </Div>
                                    <Anchor>
                                        <BsArrowRight/>
                                    </Anchor>
                                </Div>
                            </Anchor>
                        </Div>
                        <Div Class="p-5 shadow-md">
                            <Image Source="./images/course_one_card01.jpg" Class="w-full mb-4" />
                            <Div Class="flex justify-between items-center">
                                <Span Text="$55.00" Class="bg-orange-500 py-2 px-3 text-white"/>
                                <Span Text="Web Developement" />
                            </Div>
                            <Anchor>
                                <H2 Text="Become a PHP Master and Make Money Fast" Class="my-4"/>
                                <Div Class="flex justify-between">
                                    <Div>
                                        <Div Class="flex items-center gap-3">
                                            <FaUserAlt /> <Span Text="245" />
                                            <UL Class="flex items-center gap-1">
                                                <LI Class="flex">
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                </LI>
                                                <Span Text="(05)"/>
                                            </UL>
                                        </Div>
                                    </Div>
                                    <Anchor>
                                        <BsArrowRight/>
                                    </Anchor>
                                </Div>
                            </Anchor>
                        </Div>
                        <Div Class="p-5 shadow-md">
                            <Image Source="./images/course_one_card01.jpg" Class="w-full mb-4" />
                            <Div Class="flex justify-between items-center">
                                <Span Text="$55.00" Class="bg-orange-500 py-2 px-3 text-white"/>
                                <Span Text="Web Developement" />
                            </Div>
                            <Anchor>
                                <H2 Text="Become a PHP Master and Make Money Fast" Class="my-4"/>
                                <Div Class="flex justify-between">
                                    <Div>
                                        <Div Class="flex items-center gap-3">
                                            <FaUserAlt /> <Span Text="245" />
                                            <UL Class="flex items-center gap-1">
                                                <LI Class="flex">
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                </LI>
                                                <Span Text="(05)"/>
                                            </UL>
                                        </Div>
                                    </Div>
                                    <Anchor>
                                        <BsArrowRight/>
                                    </Anchor>
                                </Div>
                            </Anchor>
                        </Div>
                        <Div Class="p-5 shadow-md">
                            <Image Source="./images/course_one_card01.jpg" Class="w-full mb-4" />
                            <Div Class="flex justify-between items-center">
                                <Span Text="$55.00" Class="bg-orange-500 py-2 px-3 text-white"/>
                                <Span Text="Web Developement" />
                            </Div>
                            <Anchor>
                                <H2 Text="Become a PHP Master and Make Money Fast" Class="my-4"/>
                                <Div Class="flex justify-between">
                                    <Div>
                                        <Div Class="flex items-center gap-3">
                                            <FaUserAlt /> <Span Text="245" />
                                            <UL Class="flex items-center gap-1">
                                                <LI Class="flex">
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                </LI>
                                                <Span Text="(05)"/>
                                            </UL>
                                        </Div>
                                    </Div>
                                    <Anchor>
                                        <BsArrowRight/>
                                    </Anchor>
                                </Div>
                            </Anchor>
                        </Div>
                        <Div Class="p-5 shadow-md">
                            <Image Source="./images/course_one_card01.jpg" Class="w-full mb-4" />
                            <Div Class="flex justify-between items-center">
                                <Span Text="$55.00" Class="bg-orange-500 py-2 px-3 text-white"/>
                                <Span Text="Web Developement" />
                            </Div>
                            <Anchor>
                                <H2 Text="Become a PHP Master and Make Money Fast" Class="my-4"/>
                                <Div Class="flex justify-between">
                                    <Div>
                                        <Div Class="flex items-center gap-3">
                                            <FaUserAlt /> <Span Text="245" />
                                            <UL Class="flex items-center gap-1">
                                                <LI Class="flex">
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                </LI>
                                                <Span Text="(05)"/>
                                            </UL>
                                        </Div>
                                    </Div>
                                    <Anchor>
                                        <BsArrowRight/>
                                    </Anchor>
                                </Div>
                            </Anchor>
                        </Div>
                        <Div Class="p-5 shadow-md">
                            <Image Source="./images/course_one_card01.jpg" Class="w-full mb-4" />
                            <Div Class="flex justify-between items-center">
                                <Span Text="$55.00" Class="bg-orange-500 py-2 px-3 text-white"/>
                                <Span Text="Web Developement" />
                            </Div>
                            <Anchor>
                                <H2 Text="Become a PHP Master and Make Money Fast" Class="my-4"/>
                                <Div Class="flex justify-between">
                                    <Div>
                                        <Div Class="flex items-center gap-3">
                                            <FaUserAlt /> <Span Text="245" />
                                            <UL Class="flex items-center gap-1">
                                                <LI Class="flex">
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                    <BsStarFill />
                                                </LI>
                                                <Span Text="(05)"/>
                                            </UL>
                                        </Div>
                                    </Div>
                                    <Anchor>
                                        <BsArrowRight/>
                                    </Anchor>
                                </Div>
                            </Anchor>
                        </Div>
                    </Div>
                </Div>

                {/* right site  */}
                <Div Class="col-span-5">

                </Div>
            </Div>
        </Section>
    )
}

export default Course_one