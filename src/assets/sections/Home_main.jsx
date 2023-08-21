import React from 'react'
import Section from '../components/Section'
import Div from '../components/Div'
import H2 from '../components/H2'
import H3 from '../components/H3'
import Image from '../components/Image'
import Button from '../components/Button'

function Home_main() {
    return (
        <>
            <Section Class="container mx-auto">
                <H3 Class="font-medium text-center text-orange-500 mb-3" Text="TOP CATEGORIES" />
                <H2 Class="font-bold text-4xl text-center text-slate-900 mb-10" Text="Popular Online Categories" />
                <Div Class="grid grid-cols-3 gap-5">
                    <Div Class="relative overflow-hidden h-96 pb-6">
                        <Image Class="absolute inset-0 w-full h-full object-cover" Source="./images/course01.jpg" />
                        <Div Class="absolute inset-0 bg-black bg-opacity-50"/>
                        <Div Class="flex gap-3 items-end text-white relative h-full w-3/4 mx-auto">
                            <Image Class="w-12" Source="./images/bannerLogo01.png" />
                            <Div Class="">
                                <H2 Class="text-2xl font-bold" Text="5,320 online courses" />
                                <H3 Class="font-normal" Text="Enjoy a variety of fresh topics" />
                            </Div>
                        </Div>
                    </Div>
                    <Div Class="relative overflow-hidden h-96 pb-6">
                        <Image Class="absolute inset-0 w-full h-full object-cover" Source="./images/course01.jpg" />
                        <Div Class="absolute inset-0 bg-black bg-opacity-50"/>
                        <Div Class="flex gap-3 items-end text-white relative h-full w-3/4 mx-auto">
                            <Image Class="w-12" Source="./images/bannerLogo01.png" />
                            <Div Class="">
                                <H2 Class="text-2xl font-bold" Text="5,320 online courses" />
                                <H3 Class="font-normal" Text="Enjoy a variety of fresh topics" />
                            </Div>
                        </Div>
                    </Div>
                    <Div Class="relative overflow-hidden h-96 pb-6">
                        <Image Class="absolute inset-0 w-full h-full object-cover" Source="./images/course01.jpg" />
                        <Div Class="absolute inset-0 bg-black bg-opacity-50"/>
                        <Div Class="flex gap-3 items-end text-white relative h-full w-3/4 mx-auto">
                            <Image Class="w-12" Source="./images/bannerLogo01.png" />
                            <Div Class="">
                                <H2 Class="text-2xl font-bold" Text="5,320 online courses" />
                                <H3 Class="font-normal" Text="Enjoy a variety of fresh topics" />
                            </Div>
                        </Div>
                    </Div>
                    <Div Class="relative overflow-hidden h-96 pb-6">
                        <Image Class="absolute inset-0 w-full h-full object-cover" Source="./images/course01.jpg" />
                        <Div Class="absolute inset-0 bg-black bg-opacity-50"/>
                        <Div Class="flex gap-3 items-end text-white relative h-full w-3/4 mx-auto">
                            <Image Class="w-12" Source="./images/bannerLogo01.png" />
                            <Div Class="">
                                <H2 Class="text-2xl font-bold" Text="5,320 online courses" />
                                <H3 Class="font-normal" Text="Enjoy a variety of fresh topics" />
                            </Div>
                        </Div>
                    </Div>
                    <Div Class="relative overflow-hidden h-96 pb-6">
                        <Image Class="absolute inset-0 w-full h-full object-cover" Source="./images/course01.jpg" />
                        <Div Class="absolute inset-0 bg-black bg-opacity-50"/>
                        <Div Class="flex gap-3 items-end text-white relative h-full w-3/4 mx-auto">
                            <Image Class="w-12" Source="./images/bannerLogo01.png" />
                            <Div Class="">
                                <H2 Class="text-2xl font-bold" Text="5,320 online courses" />
                                <H3 Class="font-normal" Text="Enjoy a variety of fresh topics" />
                            </Div>
                        </Div>
                    </Div>
                    <Div Class="relative overflow-hidden h-96 pb-6">
                        <Image Class="absolute inset-0 w-full h-full object-cover" Source="./images/course01.jpg" />
                        <Div Class="absolute inset-0 bg-black bg-opacity-50"/>
                        <Div Class="flex gap-3 items-end text-white relative h-full w-3/4 mx-auto">
                            <Image Class="w-12" Source="./images/bannerLogo01.png" />
                            <Div Class="">
                                <H2 Class="text-2xl font-bold" Text="5,320 online courses" />
                                <H3 Class="font-normal" Text="Enjoy a variety of fresh topics" />
                            </Div>
                        </Div>
                    </Div>
                
                </Div>
                <Div Class="text-center mt-10">
                <Button Class="bg-orange-600 text-white py-2 px-4 hover:bg-slate-900  transition-all rounded-lg font-medium" Text="VIEW ALL CATEGORIES" />
                </Div>
            </Section>
        </>
    )
}

export default Home_main