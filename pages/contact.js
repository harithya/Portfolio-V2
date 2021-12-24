import React from 'react'
import Section from '../components/layouts/Section'
import Paragraph from '../components/text/Paragraph'

export default function contact() {
    return (
        <Section title="Contact" className=" mt-5">
            <div className='xl:w-8/12 h-screen w-full '>
                <Paragraph>
                    I’m always excited to connect with everyone so please don’t hesitate to get in touch with me by following my social media bellow:
                </Paragraph>
                <ul className='mt-10 list-disc list-inside'>
                    <li className='mb-5'>
                        <a>Email - <span className='font-semibold underline'>harithya77@gmail.com</span></a>
                    </li>
                    <li className='mb-5'>
                        <a>LinkedIn - <span className='font-semibold underline'>https://www.linkedin.com/in/harithya-wisesa-2a260b1a3/</span></a>
                    </li>
                    <li className='mb-5'>
                        <a>Github - <span className='font-semibold underline'>https://github.com/harithya</span></a>
                    </li>
                    <li className='mb-5'>
                        <a>Instagram - <span className='font-semibold underline'>https://www.instagram.com/haruthya/</span></a>
                    </li>
                    <li className='mb-5'>
                        <a>Facebook - <span className='font-semibold underline'>https://www.facebook.com/HarithyaW/</span></a>
                    </li>

                </ul>
            </div>
        </Section>
    )
}
