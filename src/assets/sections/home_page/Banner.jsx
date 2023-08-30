import React from 'react'
import Section from '../../components/Section'
import Div from '../../components/Div'
import H2 from '../../components/H2'
import H1 from '../../components/H1'
import Button from '../../components/Button'
import Image from '../../components/Image'
import H3 from '../../components/H3'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Anchor from '../../components/Anchor'


function Banner() {
    return (
        <Section Class="relative">
            <Carousel>
                <Div Class="bg-[url('./images/banner01.jpg')] bg-no-repeat bg-center bg-cover text-center pt-60 pb-72">
                    <H2 Class="font-medium text-3xl mb-5 text-orange-500" Text="Start to learning today" />
                    <H1 Class="font-bold text-7xl mb-16 text-white w-4/5 mx-auto leading-snug" Text="Explore Interests and Career With Courses" />
                    <Button Class="bg-orange-500 text-white py-2 px-4 hover:bg-slate-900  transition-all rounded-lg font-medium" Text="FIND COURSES" />
                </Div>
                <Div Class="bg-[url('./images/banner02.jpg')] bg-no-repeat bg-center bg-cover text-center pt-60 pb-72">
                    <H2 Class="font-medium text-3xl mb-5 text-orange-500" Text="Start to learning today" />
                    <H1 Class="font-bold text-7xl mb-16 text-white w-4/5 mx-auto leading-snug" Text="Explore Interests and Career With Courses" />
                    <Button Class="bg-orange-500 text-white py-2 px-4 hover:bg-slate-900  transition-all rounded-lg font-medium" Text="FIND COURSES" />
                </Div>
                <Div Class="bg-[url('./images/banner01.jpg')] bg-no-repeat bg-center bg-cover text-center pt-60 pb-72">
                    <H2 Class="font-medium text-3xl mb-5 text-orange-500" Text="Start to learning today" />
                    <H1 Class="font-bold text-7xl mb-16 text-white w-4/5 mx-auto leading-snug" Text="Explore Interests and Career With Courses" />
                    <Button Class="bg-orange-500 text-white py-2 px-4 hover:bg-slate-900  transition-all rounded-lg font-medium" Text="FIND COURSES" />
                </Div>
            </Carousel>

            {/* carousel buttons  */}
            <Div Class="container mx-auto flex justify-between absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <Anchor Class="bg-orange-500 text-white h-10 w-10 hover:bg-orange-600  transition-all rounded-full cursor-pointer font-medium flex items-center justify-center">
                </Anchor>
                <Anchor Class="bg-orange-500 text-white h-10 w-10 hover:bg-orange-600  transition-all rounded-full cursor-pointer font-medium flex items-center justify-center">
                </Anchor>
            </Div>

            {/* Banner card */}
            <Div Class="container mx-auto grid grid-cols-3 gap-4 absolute bottom-20 left-1/2 -translate-x-1/2">
                <Div Class="flex gap-3 items-center bg-slate-900 p-7 text-white">
                    <Image Class="w-12" Source="./images/bannerLogo01.png" />
                    <Div>
                        <H2 Class="text-2xl font-bold" Text="5,320 online courses" />
                        <H3 Class="font-normal" Text="Enjoy a variety of fresh topics" />
                    </Div>
                </Div>
                <Div Class="flex gap-3 items-center bg-slate-900 p-7 text-white">
                    <Image Class="w-12" Source="./images/bannerLogo01.png" />
                    <Div>
                        <H2 Class="text-2xl font-bold" Text="5,320 online courses" />
                        <H3 Class="font-normal" Text="Enjoy a variety of fresh topics" />
                    </Div>
                </Div>
                <Div Class="flex gap-3 items-center bg-slate-900 p-7 text-white">
                    <Image Class="w-12" Source="./images/bannerLogo01.png" />
                    <Div>
                        <H2 Class="text-2xl font-bold" Text="5,320 online courses" />
                        <H3 Class="font-normal" Text="Enjoy a variety of fresh topics" />
                    </Div>
                </Div>
            </Div>
        </Section>
    )
}

export default Banner