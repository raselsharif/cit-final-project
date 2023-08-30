import React from 'react'
import Section from '../../components/Section'
import Div from '../../components/Div'
import H1 from '../../components/H1'
import UL from '../../components/UL'
import LI from '../../components/LI'
import Anchor from '../../components/Anchor'

function Course_one() {
  return (
    <Section>
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
    </Section>
  )
}

export default Course_one