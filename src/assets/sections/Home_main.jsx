import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import Div from '../components/Div'
import H2 from '../components/H2'
import H3 from '../components/H3'
import UL from '../components/UL'
import LI from '../components/LI'
import Image from '../components/Image'
import Button from '../components/Button'
import Anchor from '../components/Anchor'
import Span from '../components/Span'
import P from '../components/P'
import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem. `,
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
        },
    ],
};

const styles = {
    bgColor: 'white',
    rowTitleColor: "black",
    rowContentColor: 'grey',
    arrowColor: "orange",
};

const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
};
function Home_main() {
    return (
        <>
            {/* Popular Online Categories Section */}
            <Section Class="container mx-auto my-20">
                <H3 Class="font-medium text-center text-orange-500 mb-3" Text="TOP CATEGORIES" />
                <H2 Class="font-bold text-4xl text-center text-slate-900 mb-10" Text="Popular Online Categories" />

                {/*========== cards ====== */}
                <Div Class="grid grid-cols-3 gap-5">
                    <Div Class="relative overflow-hidden h-96 pb-6 transition ease-in-out delay-150 duration-300  hover:-translate-y-2 hover:transition-all rounded-xl">
                        <Image Class="absolute inset-0 w-full h-full object-cover" Source="./images/course01.jpg" />
                        <Div Class="absolute inset-0 bg-black bg-opacity-50" />
                        <Div Class="flex gap-3 items-end text-white relative h-full w-3/4 mx-auto">
                            <Image Class="w-12" Source="./images/bannerLogo01.png" />
                            <Div Class="">
                                <Anchor Link="#">
                                    <H2 Class="text-2xl font-bold hover:text-orange-600 cursor-pointer" Text="5,320 online courses" />
                                </Anchor>
                                <H3 Class="font-normal" Text="Enjoy a variety of fresh topics" />
                            </Div>
                        </Div>
                    </Div>
                    <Div Class="relative overflow-hidden h-96 pb-6 transition ease-in-out delay-150 duration-300  hover:-translate-y-2 hover:transition-all rounded-xl">
                        <Image Class="absolute inset-0 w-full h-full object-cover" Source="./images/course01.jpg" />
                        <Div Class="absolute inset-0 bg-black bg-opacity-50" />
                        <Div Class="flex gap-3 items-end text-white relative h-full w-3/4 mx-auto">
                            <Image Class="w-12" Source="./images/bannerLogo01.png" />
                            <Div Class="">
                                <Anchor Link="#">
                                    <H2 Class="text-2xl font-bold hover:text-orange-600 cursor-pointer" Text="5,320 online courses" />
                                </Anchor>
                                <H3 Class="font-normal" Text="Enjoy a variety of fresh topics" />
                            </Div>
                        </Div>
                    </Div>
                    <Div Class="relative overflow-hidden h-96 pb-6 transition ease-in-out delay-150 duration-300  hover:-translate-y-2 hover:transition-all rounded-xl">
                        <Image Class="absolute inset-0 w-full h-full object-cover" Source="./images/course01.jpg" />
                        <Div Class="absolute inset-0 bg-black bg-opacity-50" />
                        <Div Class="flex gap-3 items-end text-white relative h-full w-3/4 mx-auto">
                            <Image Class="w-12" Source="./images/bannerLogo01.png" />
                            <Div Class="">
                                <Anchor Link="#">
                                    <H2 Class="text-2xl font-bold hover:text-orange-600 cursor-pointer" Text="5,320 online courses" />
                                </Anchor>
                                <H3 Class="font-normal" Text="Enjoy a variety of fresh topics" />
                            </Div>
                        </Div>
                    </Div>
                    <Div Class="relative overflow-hidden h-96 pb-6 transition ease-in-out delay-150 duration-300  hover:-translate-y-2 hover:transition-all rounded-xl">
                        <Image Class="absolute inset-0 w-full h-full object-cover" Source="./images/course01.jpg" />
                        <Div Class="absolute inset-0 bg-black bg-opacity-50" />
                        <Div Class="flex gap-3 items-end text-white relative h-full w-3/4 mx-auto">
                            <Image Class="w-12" Source="./images/bannerLogo01.png" />
                            <Div Class="">
                                <Anchor Link="#">
                                    <H2 Class="text-2xl font-bold hover:text-orange-600 cursor-pointer" Text="5,320 online courses" />
                                </Anchor>
                                <H3 Class="font-normal" Text="Enjoy a variety of fresh topics" />
                            </Div>
                        </Div>
                    </Div>
                    <Div Class="relative overflow-hidden h-96 pb-6 transition ease-in-out delay-150 duration-300  hover:-translate-y-2 hover:transition-all rounded-xl">
                        <Image Class="absolute inset-0 w-full h-full object-cover" Source="./images/course01.jpg" />
                        <Div Class="absolute inset-0 bg-black bg-opacity-50" />
                        <Div Class="flex gap-3 items-end text-white relative h-full w-3/4 mx-auto">
                            <Image Class="w-12" Source="./images/bannerLogo01.png" />
                            <Div Class="">
                                <Anchor Link="#">
                                    <H2 Class="text-2xl font-bold hover:text-orange-600 cursor-pointer" Text="5,320 online courses" />
                                </Anchor>
                                <H3 Class="font-normal" Text="Enjoy a variety of fresh topics" />
                            </Div>
                        </Div>
                    </Div>
                    <Div Class="relative overflow-hidden h-96 pb-6 transition ease-in-out delay-150 duration-300  hover:-translate-y-2 hover:transition-all rounded-xl">
                        <Image Class="absolute inset-0 w-full h-full object-cover" Source="./images/course01.jpg" />
                        <Div Class="absolute inset-0 bg-black bg-opacity-50" />
                        <Div Class="flex gap-3 items-end text-white relative h-full w-3/4 mx-auto">
                            <Image Class="w-12" Source="./images/bannerLogo01.png" />
                            <Div Class="">
                                <Anchor Link="#">
                                    <H2 Class="text-2xl font-bold hover:text-orange-600 cursor-pointer" Text="5,320 online courses" />
                                </Anchor>
                                <H3 Class="font-normal" Text="Enjoy a variety of fresh topics" />
                            </Div>
                        </Div>
                    </Div>
                </Div>
                <Div Class="text-center mt-16">
                    <Button Class="bg-orange-600 text-white hover:text-slate-900 py-2 px-4 hover:bg-white transition-all rounded-lg font-medium" Text="VIEW ALL CATEGORIES" />
                </Div>
            </Section>

            {/* Explore Popular Courses Section  */}
            <Section Class='py-20 bg-gray-100'>
                <Div Class='container mx-auto'>
                    <H3 Class="font-medium text-center text-orange-500 mb-3" Text="TOP CATEGORIES" />
                    <H2 Class="font-bold text-4xl text-center text-slate-900 mb-10" Text="Popular Online Categories" />

                    {/* Cards section  */}
                    <Div Class="grid grid-cols-3 gap-8">
                        <Div Class="bg-white relative">
                            <Div Class="overflow-hidden">
                                <Image Source="./images/card01.jpg" Alt="card image" Class="hover:scale-110 transition-all duration-700" />
                            </Div>
                            <Span Text="Free" Class="bg-orange-500 text-white font-medium py-1 px-3 rounded-md absolute top-4 right-4" />
                            <Div Class="px-8 mt-8">
                                <Div Class="flex gap-2">
                                    <UL Class="flex gap-2 text-orange-500">
                                    </UL>
                                    <Span Text="(1 Rating)" />
                                </Div>
                                <Anchor Link="#">
                                    <H2 Class="my-5 text-2xl font-bold hover:text-orange-600 cursor-pointer transition-all" Text="Fitness Development Strategy Buildup Laoreet" />
                                </Anchor>
                                <Div Class="flex justify-between pt-5 pb-8 border-t-2">
                                    <Div Class="flex gap-3 items-center">
                                        <Span Text="25 Students" />
                                    </Div>
                                    <Div Class="flex gap-3 items-center">
                                        <Span Text="6 Lessons" />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                        <Div Class="bg-white relative">
                            <Div Class="overflow-hidden">
                                <Image Source="./images/card01.jpg" Alt="card image" Class="hover:scale-110 transition-all duration-700" />
                            </Div>
                            <Span Text="Free" Class="bg-orange-500 text-white font-medium py-1 px-3 rounded-md absolute top-4 right-4" />
                            <Div Class="px-8 mt-8">
                                <Div Class="flex gap-2">
                                    <UL Class="flex gap-2 text-orange-500">
                                    </UL>
                                    <Span Text="(1 Rating)" />
                                </Div>
                                <Anchor Link="#">
                                    <H2 Class="my-5 text-2xl font-bold hover:text-orange-600 cursor-pointer transition-all" Text="Fitness Development Strategy Buildup Laoreet" />
                                </Anchor>
                                <Div Class="flex justify-between pt-5 pb-8 border-t-2">
                                    <Div Class="flex gap-3 items-center">
                                        <Span Text="25 Students" />
                                    </Div>
                                    <Div Class="flex gap-3 items-center">
                                        <Span Text="6 Lessons" />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                        <Div Class="bg-white relative">
                            <Div Class="overflow-hidden">
                                <Image Source="./images/card01.jpg" Alt="card image" Class="hover:scale-110 transition-all duration-700" />
                            </Div>
                            <Span Text="Free" Class="bg-orange-500 text-white font-medium py-1 px-3 rounded-md absolute top-4 right-4" />
                            <Div Class="px-8 mt-8">
                                <Div Class="flex gap-2">
                                    <UL Class="flex gap-2 text-orange-500">
                                    </UL>
                                    <Span Text="(1 Rating)" />
                                </Div>
                                <Anchor Link="#">
                                    <H2 Class="my-5 text-2xl font-bold hover:text-orange-600 cursor-pointer transition-all" Text="Fitness Development Strategy Buildup Laoreet" />
                                </Anchor>
                                <Div Class="flex justify-between pt-5 pb-8 border-t-2">
                                    <Div Class="flex gap-3 items-center">
                                        <Span Text="25 Students" />
                                    </Div>
                                    <Div Class="flex gap-3 items-center">
                                        <Span Text="6 Lessons" />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                        <Div Class="bg-white relative">
                            <Div Class="overflow-hidden">
                                <Image Source="./images/card01.jpg" Alt="card image" Class="hover:scale-110 transition-all duration-700" />
                            </Div>
                            <Span Text="Free" Class="bg-orange-500 text-white font-medium py-1 px-3 rounded-md absolute top-4 right-4" />
                            <Div Class="px-8 mt-8">
                                <Div Class="flex gap-2">
                                    <UL Class="flex gap-2 text-orange-500">
                                    </UL>
                                    <Span Text="(1 Rating)" />
                                </Div>
                                <Anchor Link="#">
                                    <H2 Class="my-5 text-2xl font-bold hover:text-orange-600 cursor-pointer transition-all" Text="Fitness Development Strategy Buildup Laoreet" />
                                </Anchor>
                                <Div Class="flex justify-between pt-5 pb-8 border-t-2">
                                    <Div Class="flex gap-3 items-center">
                                        <Span Text="25 Students" />
                                    </Div>
                                    <Div Class="flex gap-3 items-center">
                                        <Span Text="6 Lessons" />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                        <Div Class="bg-white relative">
                            <Div Class="overflow-hidden">
                                <Image Source="./images/card01.jpg" Alt="card image" Class="hover:scale-110 transition-all duration-700" />
                            </Div>
                            <Span Text="Free" Class="bg-orange-500 text-white font-medium py-1 px-3 rounded-md absolute top-4 right-4" />
                            <Div Class="px-8 mt-8">
                                <Div Class="flex gap-2">
                                    <UL Class="flex gap-2 text-orange-500">
                                    </UL>
                                    <Span Text="(1 Rating)" />
                                </Div>
                                <Anchor Link="#">
                                    <H2 Class="my-5 text-2xl font-bold hover:text-orange-600 cursor-pointer transition-all" Text="Fitness Development Strategy Buildup Laoreet" />
                                </Anchor>
                                <Div Class="flex justify-between pt-5 pb-8 border-t-2">
                                    <Div Class="flex gap-3 items-center">
                                        <Span Text="25 Students" />
                                    </Div>
                                    <Div Class="flex gap-3 items-center">
                                        <Span Text="6 Lessons" />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                        <Div Class="bg-white relative">
                            <Div Class="overflow-hidden">
                                <Image Source="./images/card01.jpg" Alt="card image" Class="hover:scale-110 transition-all duration-700" />
                            </Div>
                            <Span Text="Free" Class="bg-orange-500 text-white font-medium py-1 px-3 rounded-md absolute top-4 right-4" />
                            <Div Class="px-8 mt-8">
                                <Div Class="flex gap-2">
                                    <UL Class="flex gap-2 text-orange-500">
                                    </UL>
                                    <Span Text="(1 Rating)" />
                                </Div>
                                <Anchor Link="#">
                                    <H2 Class="my-5 text-2xl font-bold hover:text-orange-600 cursor-pointer transition-all" Text="Fitness Development Strategy Buildup Laoreet" />
                                </Anchor>
                                <Div Class="flex justify-between pt-5 pb-8 border-t-2">
                                    <Div Class="flex gap-3 items-center">
                                        <Span Text="25 Students" />
                                    </Div>
                                    <Div Class="flex gap-3 items-center">
                                        <Span Text="6 Lessons" />
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>

            </Section>

            {/* Offer Running section */}
            <Section Class="grid grid-cols-2">
                <Div Class="bg-[url('./images/offer01.jpg')] bg-no-repeat bg-cover bg-center" />
                <Div Class="bg-[url('./images/offer02.jpg')] bg-no-repeat bg-cover bg-center py-28 pl-8">
                    <H2 Class="font-bold text-4xl text-white mb-4" Text="20% Offer Running - Join Today" />
                    <P Class="text-white mb-4 max-w-lg" Text="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of your moment, so blinded by desire those who fail in their duty through weakness. These cases are perfectly simple and easy every pleasure is to be welcomed and every pain avoided." />
                    <Button Class="bg-orange-500 text-white  hover:text-slate-900 hover:bg-white py-2 px-4 transition-all rounded-lg font-medium" Text="FIND COURSES" />
                </Div>
            </Section>

            {/* FAQ Section  */}
            <Section Class="grid grid-cols-2 container mx-auto my-24">
                <Div Class="px-10 pb-20 pt-10 bg-gray-100">
                    <H2 Class="text-3xl text-slate-900 font-medium py-10" Text="Frequently Asked Questions" />
                    <Div>
                        <Faq
                            data={data}
                            styles={styles}
                            config={config}
                        />
                    </Div>
                </Div>
                <Div Class="bg-[url('./images/faq.jpg')] bg-no-repeat bg-center bg-cover">

                </Div>
            </Section>

            {/* TESTIMONIAL Section  */}

            <Section Class="bg-[url('./images/testimonial.jpg')] bg-no-repeat bg-cover bg-center pt-20 pb-56 ">
                <H3 Class="font-medium text-center text-orange-500 mb-3" Text="TOP CATEGORIES" />
                <H2 Class="font-bold text-4xl text-center text-white mb-10" Text="Popular Online Categories" />

                {/* testimonial cards  */}
                <Div Class="container mx-auto text-white grid grid-cols-2 gap-5">
                    <Div Class="bg-slate-900 bg-opacity-50 text-center px-10 pt-10 pb-28 relative">
                        <Image Class="mx-auto" Source="./images/quote.png" />
                        <H3 Class="text-3xl leading-10 font-medium italic mt-10" Text="Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company." />
                        <Div Class="absolute -bottom-28 left-1/2 -translate-x-1/2">
                            <Image Class="mx-auto mb-4" Source="./images/testi_pro01.png" />
                            <Anchor Class="cursor-pointer text-3xl font-medium" Link="#" text="Alex Fenando" />
                            <P Class="mt-4" Text="English Teacher" />
                        </Div>
                    </Div>
                    <Div Class="bg-slate-900 bg-opacity-50 text-center px-10 pt-10 pb-28 relative">
                        <Image Class="mx-auto" Source="./images/quote.png" />
                        <H3 Class="text-3xl leading-10 font-medium italic mt-10" Text="Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company." />
                        <Div Class="absolute -bottom-28 left-1/2 -translate-x-1/2">
                            <Image Class="mx-auto mb-4" Source="./images/testi_pro01.png" />
                            <Anchor Class="cursor-pointer text-3xl font-medium" Link="#" text="Alex Fenando" />
                            <P Class="mt-4" Text="English Teacher" />
                        </Div>
                    </Div>
                </Div>

                {/* slide buttons  */}

            </Section>

            {/* NEWS UPDATE Section  */}
            <Section Class="container mx-auto my-24">
                <H3 Class="font-medium text-center text-orange-500 mb-3" Text="NEWS UPDATE" />
                <H2 Class="font-bold text-4xl text-center text-slate-900 mb-16" Text="Latest News & events" />

                {/* news cards  */}
                <Div Class="grid grid-cols-3 gap-6">
                    <Div Class="bg-white shadow-lg shadow-gray-300">
                        <Div Class="overflow-hidden">
                            <Image Source="./images/news01.jpg" Alt="card image" Class="w-full" />
                        </Div>
                        <Div Class="px-8 mt-8">
                            <Div Class="flex justify-between pt-4">
                                <Div Class="flex gap-3 items-center">
                                    <Span Text="Admin" />
                                </Div>
                                <Div Class="flex gap-3 items-center">
                                    <Span Text="Aug 22, 2023" />
                                </Div>
                            </Div>
                            <Anchor Link="#">
                                <H2 Class="my-3 text-2xl font-bold hover:text-orange-600 cursor-pointer transition-all" Text="High school program starting soon 2021" />
                            </Anchor>
                            <P Text="the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling" />
                            <Div Class="flex justify-between pt-5 pb-8 border-t-2 mt-5">
                                <Div Class="flex gap-3 items-center">
                                    <Anchor Class="cursor-pointer ">
                                        <Span Text="Collage" Class="ml-2 hover:text-orange-500" />
                                    </Anchor>
                                </Div>
                                <Div Class="flex gap-3 items-center">

                                    <Anchor Class="cursor-pointer hover:text-orange-500">
                                        Read More
                                    </Anchor>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    <Div Class="bg-white shadow-lg shadow-gray-300">
                        <Div Class="overflow-hidden">
                            <Image Source="./images/news01.jpg" Alt="card image" Class="w-full" />
                        </Div>
                        <Div Class="px-8 mt-8">
                            <Div Class="flex justify-between pt-4">
                                <Div Class="flex gap-3 items-center">
                                    <Span Text="Admin" />
                                </Div>
                                <Div Class="flex gap-3 items-center">
                                    <Span Text="Aug 22, 2023" />
                                </Div>
                            </Div>
                            <Anchor Link="#">
                                <H2 Class="my-3 text-2xl font-bold hover:text-orange-600 cursor-pointer transition-all" Text="High school program starting soon 2021" />
                            </Anchor>
                            <P Text="the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling" />
                            <Div Class="flex justify-between pt-5 pb-8 border-t-2 mt-5">
                                <Div Class="flex gap-3 items-center">
                                    <Anchor Class="cursor-pointer ">
                                        <Span Text="Collage" Class="ml-2 hover:text-orange-500" />
                                    </Anchor>
                                </Div>
                                <Div Class="flex gap-3 items-center">

                                    <Anchor Class="cursor-pointer hover:text-orange-500">
                                        Read More
                                    </Anchor>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    <Div Class="bg-white shadow-lg shadow-gray-300">
                        <Div Class="overflow-hidden">
                            <Image Source="./images/news01.jpg" Alt="card image" Class="w-full" />
                        </Div>
                        <Div Class="px-8 mt-8">
                            <Div Class="flex justify-between pt-4">
                                <Div Class="flex gap-3 items-center">
                                    <Span Text="Admin" />
                                </Div>
                                <Div Class="flex gap-3 items-center">
                                    <Span Text="Aug 22, 2023" />
                                </Div>
                            </Div>
                            <Anchor Link="#">
                                <H2 Class="my-3 text-2xl font-bold hover:text-orange-600 cursor-pointer transition-all" Text="High school program starting soon 2021" />
                            </Anchor>
                            <P Text="the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling" />
                            <Div Class="flex justify-between pt-5 pb-8 border-t-2 mt-5">
                                <Div Class="flex gap-3 items-center">
                                    <Anchor Class="cursor-pointer ">
                                        <Span Text="Collage" Class="ml-2 hover:text-orange-500" />
                                    </Anchor>
                                </Div>
                                <Div Class="flex gap-3 items-center">

                                    <Anchor Class="cursor-pointer hover:text-orange-500">
                                        Read More
                                    </Anchor>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Section>
        </>
    )
}

export default Home_main