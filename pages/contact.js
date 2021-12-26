import React from 'react'
import Section from '../components/layouts/Section'
import Paragraph from '../components/text/Paragraph'
import http from '../utilities/http'
import MetaSeo from '../components/MetaSeo'

export default function contact({ contacs }) {
    return (
        <Section title="Contact" className="mt-0">
            <MetaSeo
                title="Contact - Harithya Wisesa"
                description={"Anda dapat menghubungi saya dengan banyak cara, saya akan sangat senang jika anda menghubungi saya. "}
            />
            <div className='xl:w-8/12 pb-36 w-full py-12 '>
                <Paragraph>
                    Anda dapat menghubungi saya dengan banyak cara, saya akan sangat senang jika anda menghubungi saya
                </Paragraph>
                <ul className='mt-10 list-disc list-inside'>
                    {contacs.data.map(({ attributes }, key) =>
                        <li className='mb-5' key={key}>
                            <span>{attributes.sosmed} -
                                <a rel="noreferrer" href={attributes.url} target="_blank" className='font-semibold underline'>
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
