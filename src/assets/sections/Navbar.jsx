import React from 'react'
import Nav from '../components/Nav'
import Div from '../components/Div'
import Image from '../components/Image'
import UL from '../components/UL'
import LI from '../components/LI'
import Anchor from '../components/Anchor'
import Section from '../components/Section'

function Navbar() {
  return (
    <>
      <Section Class="z-20 text-white uppercase font-medium absolute left-0 top-0 w-full">
        <Nav Class="container mx-auto py-14 flex justify-between">
          <Div>
            <Image Class="w-40" Source="./images/logo.png" Alt="logo" />
          </Div>
          <UL Class='flex gap-20'>
            <LI>
              <Anchor Class='text-orange-500 hover:text-orange-500 cursor-pointer transition-all' Link='https://keenitsolutions.com/products/html/educavo/index.html' Target="_blank" text="Home" />
            </LI>
            <LI>
              <Anchor Class='hover:text-orange-500 cursor-pointer transition-all' Link='https://keenitsolutions.com/products/html/educavo/index.html' Target="_blank" text="Home" />
            </LI>
            <LI>
              <Anchor Class='hover:text-orange-500 cursor-pointer transition-all' Link='https://keenitsolutions.com/products/html/educavo/index.html' Target="_blank" text="Home" />
            </LI>
            <LI>
              <Anchor Class='hover:text-orange-500 cursor-pointer transition-all' Link='https://keenitsolutions.com/products/html/educavo/index.html' Target="_blank" text="Home" />
            </LI>
            <LI>
              <Anchor Class='hover:text-orange-500 cursor-pointer transition-all' Link='https://keenitsolutions.com/products/html/educavo/index.html' Target="_blank" text="Home" />
            </LI>
            <LI>
              <Anchor Class='hover:text-orange-500 cursor-pointer transition-all' Link='https://keenitsolutions.com/products/html/educavo/index.html' Target="_blank" text="Home" />
            </LI>
          </UL>

          <UL Class='flex gap-6 items-center'>
            <LI Class="w-8 h-8 flex justify-center items-center">
            </LI>
            <LI Class="border rounded-full border-white w-8 h-8 flex justify-center items-center">
              
            </LI>
            <LI Class="border rounded-full border-white w-8 h-8 flex justify-center items-center">
             
            </LI>
            <LI Class="w-8 h-8 flex justify-center items-center">
             
            </LI>
          </UL>
        </Nav>
      </Section>
    </>

  )
}

export default Navbar