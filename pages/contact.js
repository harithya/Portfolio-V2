import React from 'react'
import Section from '../components/layouts/Section'
import Paragraph from '../components/text/Paragraph'
import http from '../utilities/http'

export default function contact({ contacs }) {
    return (
        <Section title="Contact" className=" mt-5">
            <div className='xl:w-8/12 pb-36 w-full py-10 '>
                <Paragraph>
                    I’m always excited to connect with everyone so please don’t hesitate to get in touch with me by following my social media bellow:
                </Paragraph>
                <ul className='mt-10 list-disc list-inside'>
                    {contacs.data.map(({ attributes }, key) =>
                        <li className='mb-5' key={key}>
                            <span>{attributes.sosmed} -
                                <a target={"_blank"} href={attributes.url} className='font-semibold underline'>
                                    {attributes.username}
                                </a>
                            </span>
                        </li>)}
                </ul>
            </div>
        </Section>
    )
}

export async function getStaticProps() {
    const req = await http.get("contacts");
    const contacs = req.data;
    return {
        props: {
            contacs
        }
    }
}
