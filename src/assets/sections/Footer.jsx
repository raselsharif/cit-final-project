import React from 'react'
import Section from '../components/Section'
import Div from '../components/Div'
import H2 from '../components/H2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faEnvelopeOpenText, faReceipt, faHouse } from '@fortawesome/free-solid-svg-icons'
import Input from '../components/Input'
import Button from '../components/Button'
import Image from '../components/Image'
import P from '../components/P'
import UL from '../components/UL'
import LI from '../components/LI'
import Anchor from '../components/Anchor'

function Footer() {
  return (
    <Section Class="bg-slate-950 mt-60 pt-28">
      <Div Class="container mx-auto bg-slate-900 grid grid-cols-2 gap-8 p-16 items-center">
        <Div Class="text-white flex">
          <FontAwesomeIcon icon={faEnvelopeOpenText} className='text-orange-500 text-4xl mr-3' />
          <H2 Text="Subscribe to Newsletter" Class="text-4xl font-bold leading-none" />
        </Div>
        <Div>
          <Input Type="text" Class="w-3/4 px-8 py-6" />
          <Button Text="Submit" Class="px-8 py-6 bg-orange-500 text-white font-medium hover:bg-orange-600" />
        </Div>
      </Div>
      <Div Class="container mx-auto grid grid-cols-4 gap-10 text-white">
        <Div>
          <Image Source="./images/logo.png" />
          <P Text="We denounce with righteous indi gnation and dislike men who are so beguiled and demoralized by the charms of pleasure of your moment, so blinded by desire those who fail weakness." />
          <UL>
            <LI>
              <Anchor Link="#">
                <FontAwesomeIcon icon={faReceipt} />
                <FontAwesomeIcon icon={faHouse} />
                {/* <FontAwesomeIcon icon={faYoutube} /> */}
                {/* <FontAwesomeIcon icon={icon({ name: 'twitter', style: 'brands' })} /> */}
                {/* <FontAwesomeIcon icon={faFacebookF} /> */}

                {/* <FontAwesomeIcon icon={faTwitter} /> */}
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
        <Div></Div>
        <Div></Div>
        <Div></Div>
      </Div>
    </Section>
  )
}

export default Footer