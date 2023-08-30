import React from 'react'
import Section from '../../components/Section'
import Div from '../../components/Div'
import H1 from '../../components/H1'
import UL from '../../components/UL'
import LI from '../../components/LI'
import H3 from '../../components/H3'
import H4 from '../../components/H4'
import H2 from '../../components/H2'
import Anchor from '../../components/Anchor'
import Image from '../../components/Image'
import P from '../../components/P'
import { BsFillPlayFill } from 'react-icons/bs';

function About() {
    return (
        <Section>
            {/* about banner  */}
            <Div Class='bg-[url("./images/about_banner01.jpg")] bg-no-repeat bg-center bg-cover py-28 text-white'>
                <H1 Text="About Us" Class="text-5xl  text-center font-bold" />
                <UL Class='flex gap-4 justify-center mt-10'>
                    <LI>
                        <Anchor text='Home' Class='cursor-pointer' />
                    </LI> //
                    <LI>
                        <Anchor text='About' />
                    </LI>
                </UL>
            </Div>

            {/* about us section  */}

            <Div Class="flex gap-6 container mx-auto mt-28">
                <Div Class="w-[40%]">
                    <H3 Class="font-medium text-orange-500 mb-3" Text="TOP CATEGORIES" />
                    <H2 Class="font-bold text-4xl text-slate-900 mb-10" Text="Popular Online Categories" />
                    <P Text="The key to success is to appreciate how people learn, understand the thought process that goes into instructional design, what works well, and a range of differen" />
                </Div>
                <Div Class="grid grid-cols-3 gap-4 w-[60%]">
                    <Div Class="py-8 px-4 text-center bg-yellow-100">
                        <Image Source='./images/about-card01.png' Class="mx-auto" />
                        <H3 Text="2k+" Class="text-5xl font-bold my-4" />
                        <P Text="Students" Class='text-2xl font-bold' />
                    </Div>
                    <Div Class="py-8 px-4 text-center bg-yellow-100">
                        <Image Source='./images/about-card01.png' Class="mx-auto" />
                        <H3 Text="2k+" Class="text-5xl font-bold my-4" />
                        <P Text="Students" Class='text-2xl font-bold' />
                    </Div>
                    <Div Class="py-8 px-4 text-center bg-yellow-100">
                        <Image Source='./images/about-card01.png' Class="mx-auto" />
                        <H3 Text="2k+" Class="text-5xl font-bold my-4" />
                        <P Text="Students" Class='text-2xl font-bold' />
                    </Div>
                </Div>
            </Div>

            {/* about video section  */}

            <Div Class='bg-[url("./images/about-video.png")] bg-no-repeat bg-center bg-cover py-64  container mx-auto flex justify-center items-center my-24'>
                <Anchor Class="cursor-pointer">
                    <Div Class="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center text-white text-4xl" >
                        <BsFillPlayFill />
                    </Div>
                </Anchor>
            </Div>

            {/* expert teacher section  */}
            <Div Class='container mx-auto py-28 bg-slate-100'>
                <Div>
                    <H3 Class="font-medium text-center text-orange-500 mb-3" Text="TOP CATEGORIES" />
                    <H2 Class="font-bold text-center text-4xl text-slate-900 mb-10" Text="Popular Online Categories" />
                </Div>
                <Div Class=" grid grid-cols-3 gap-8 ">
                    <Div Class="relative overflow-hidden">
                        <Image Source="./images/teacher01.jpg" Class="w-full" />
                        <Div Class="bg-white rounded-full text-center pt-8 absolute -bottom-2/4 left-2/4 -translate-x-2/4 h-80 w-80">
                            <H4 Text="John Pendrocas" Class="font-bold text-xl mb-3" />
                            <P Text="Professor" />
                        </Div>
                    </Div>
                    <Div Class="relative overflow-hidden">
                        <Image Source="./images/teacher01.jpg" Class="w-full" />
                        <Div Class="bg-white rounded-full text-center pt-8 absolute -bottom-2/4 left-2/4 -translate-x-2/4 h-80 w-80">
                            <H4 Text="John Pendrocas" Class="font-bold text-xl mb-3" />
                            <P Text="Professor" />
                        </Div>
                    </Div>
                    <Div Class="relative overflow-hidden">
                        <Image Source="./images/teacher01.jpg" Class="w-full" />
                        <Div Class="bg-white rounded-full text-center pt-8 absolute -bottom-2/4 left-2/4 -translate-x-2/4 h-80 w-80">
                            <H4 Text="John Pendrocas" Class="font-bold text-xl mb-3" />
                            <P Text="Professor" />
                        </Div>
                    </Div>
                    <Div Class="relative overflow-hidden">
                        <Image Source="./images/teacher01.jpg" Class="w-full" />
                        <Div Class="bg-white rounded-full text-center pt-8 absolute -bottom-2/4 left-2/4 -translate-x-2/4 h-80 w-80">
                            <H4 Text="John Pendrocas" Class="font-bold text-xl mb-3" />
                            <P Text="Professor" />
                        </Div>
                    </Div>
                    <Div Class="relative overflow-hidden">
                        <Image Source="./images/teacher01.jpg" Class="w-full" />
                        <Div Class="bg-white rounded-full text-center pt-8 absolute -bottom-2/4 left-2/4 -translate-x-2/4 h-80 w-80">
                            <H4 Text="John Pendrocas" Class="font-bold text-xl mb-3" />
                            <P Text="Professor" />
                        </Div>
                    </Div>
                    <Div Class="relative overflow-hidden">
                        <Image Source="./images/teacher01.jpg" Class="w-full" />
                        <Div Class="bg-white rounded-full text-center pt-8 absolute -bottom-2/4 left-2/4 -translate-x-2/4 h-80 w-80">
                            <H4 Text="John Pendrocas" Class="font-bold text-xl mb-3" />
                            <P Text="Professor" />
                        </Div>
                    </Div>
                </Div>
            </Div>

            {/* STUDENT REVIEWS section  */}

            <Div Class="container mx-auto my-24">
                <Div>
                    <H3 Class="font-medium text-center text-orange-500 mb-3" Text="TOP CATEGORIES" />
                    <H2 Class="font-bold text-center text-4xl text-slate-900 mb-10" Text="Popular Online Categories" />
                </Div>

                <Div Class="grid grid-cols-2 gap-6">
                    <Div Class="grid grid-cols-12 gap-5 py-12 px-9 bg-green-50">
                        <Div Class="col-span-4">
                            <Image Source="./images/student01.png" />
                            <H4 Text="Saiko Najran" Class="font-bold text-xl mb-2 mt-4" />
                            <P Text="Student" />
                        </Div>
                        <Div Class="col-span-8">
                            <P Text="The charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound ensue and equal blame belongs to those who fail in their duty."/>
                        </Div>
                    </Div>
                    <Div Class="grid grid-cols-12 gap-5 py-12 px-9 bg-green-50">
                        <Div Class="col-span-4">
                            <Image Source="./images/student01.png" />
                            <H4 Text="Saiko Najran" Class="font-bold text-xl mb-2 mt-4" />
                            <P Text="Student" />
                        </Div>
                        <Div Class="col-span-8">
                            <P Text="The charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound ensue and equal blame belongs to those who fail in their duty."/>
                        </Div>
                    </Div>
                </Div>

            </Div>

        </Section>
    )
}

export default About