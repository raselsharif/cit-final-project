import React from 'react'
import Section from '../../components/Section'
import Div from '../../components/Div'
import H2 from '../../components/H2'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Image from '../../components/Image'
import P from '../../components/P'
import UL from '../../components/UL'
import LI from '../../components/LI'
import Anchor from '../../components/Anchor'
import H3 from '../../components/H3'

function Footer() {
  return (
    <Section Class="bg-slate-950 mt-60 pt-40 relative">
      <Div Class="container mx-auto bg-slate-900 grid grid-cols-2 gap-8 p-16 items-center absolute -top-28 left-2/4 -translate-x-2/4">
        <Div Class="text-white flex">

          <H2 Text="Subscribe to Newsletter" Class="text-4xl font-bold leading-none" />
        </Div>
        <Div>
          <Input Type="text" Class="w-3/4 px-8 py-6" />
          <Button Text="Submit" Class="px-8 py-6 bg-orange-500 text-white font-medium hover:bg-orange-600" />
        </Div>
      </Div>


      <Div Class="container mx-auto grid grid-cols-4 gap-10 text-white pb-24 border-b border-gray-400">
        <Div>
          <Image Source="./images/logo.png" />
          <P Text="We denounce with righteous indi gnation and dislike men who are so beguiled and demoralized by the charms of pleasure of your moment, so blinded by desire those who fail weakness." Class='mt-8' />
          <UL>
            <LI>
              <Anchor Link="#">
              </Anchor>
            </LI>
            <LI>
              <Anchor Link="#">
              </Anchor>
            </LI>
            <LI>
              <Anchor Link="#">
              </Anchor>
            </LI>
            <LI>
              <Anchor Link="#">
              </Anchor>
            </LI>
            <LI>
              <Anchor Link="#">
              </Anchor>
            </LI>
          </UL>
        </Div>
        <Div>
          <H3 Text='ADDRESS' Class='font-bold relative after:absolute after:content-[""] after:w-8 after:h-1 after:bg-orange-600 after:-bottom-2 after:left-0 mb-12' />
          <UL Class='flex flex-col gap-3'>
            <LI>
              374 William S Canning Blvd, River MA 2721, USA
            </LI>
            <LI>
              <Anchor Link='(+880)155-69569' text='(+880)155-69569' />
            </LI>
            <LI>
              <Anchor Link='support@rstheme.com' text='support@rstheme.com' />
            </LI>
          </UL>
        </Div>
        <Div>
          <H3 Text='COURSES' Class='font-bold relative after:absolute after:content-[""] after:w-8 after:h-1 after:bg-orange-600 after:-bottom-2 after:left-0 mb-12' />
          <UL Class='flex flex-col gap-3'>
            <LI>
              <Anchor Link='' text='Course' />
            </LI>
            <LI>
              <Anchor Link='' text='Corse Two' />
            </LI>
            <LI>
              <Anchor Link='' text='Single Corse' />
            </LI>
            <LI>
              <Anchor Link='' text='Profile' />
            </LI>
            <LI>
              <Anchor Link='' text='Login/Resister' />
            </LI>
          </UL>
        </Div>
        <Div>
          <H3 Text='COURSES' Class='font-bold relative after:absolute after:content-[""] after:w-8 after:h-1 after:bg-orange-600 after:-bottom-2 after:left-0 mb-12' />
          <Div Class='flex flex-col gap-3'>
            <Div Class='grid grid-cols-12 gap-2'>
              <Div Class='col-span-3'>
                <Image Source='./images/footer01.jpg' />
              </Div>
              <Div Class='col-span-9'>
                <Anchor text='University While The Lovely Valley Team Work' Link='' />
                <P Text='September 20, 2020' />
              </Div>
            </Div>
            <Div Class='grid grid-cols-12 gap-2'>
              <Div Class='col-span-3'>
                <Image Source='./images/footer01.jpg' />
              </Div>
              <Div Class='col-span-9'>
                <Anchor text='University While The Lovely Valley Team Work' Link='' />
                <P Text='September 20, 2020' />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>

      <Div Class='text-white flex justify-between container mx-auto py-7'>
        <Div>
          <Anchor text='© 2020 All Rights Reserved. Developed By RSTheme' />
        </Div>
        <Div>
          <UL Class='flex gap-3'>
            <LI>
              <Anchor Link='' text='Course' />
            </LI>
            <LI>
              <Anchor Link='' text='Corse Two' />
            </LI>
            <LI>
              <Anchor Link='' text='Single Corse' />
            </LI>
          </UL>
        </Div>
      </Div>

    </Section>
  )
}

export default Footer