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
            <div className='pb-36 w-full py-12 flex justify-between' data-aos="fade-up">
                <div className='flex-1 w-full'>
                    <Paragraph>
                        Anda dapat menghubungi saya dengan banyak cara, saya akan sangat senang jika anda menghubungi saya
                    </Paragraph>
                    <ul className='mt-10 list-disc list-inside'>
                        {contacs.map((item, key) => <li className='mb-5' key={key}>
                            <span>{item.title} -
                                <a rel="noreferrer" href={item.link} target="_blank" className='font-semibold underline'>
                                    {item.value}
                                </a>
                            </span>
                        </li>)}
                    </ul>
                </div>
                <div className='hidden xl:block md:block pl-36'>
                    <img src='/img/contact.png' alt='contact-backgorund' className={`w-40 object-contain dark:invert invert-0`} />
                </div>
            </div>
        </Section>
    )
}

export async function getStaticProps() {
    const req = await http.get("items/contact");
    const contacs = req.data;
    return {
        props: {
            contacs
        }
    }
}
