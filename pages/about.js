import Image from 'next/image'
import React from 'react'
import Paragraph from '../components/text/Paragraph'
import Title from '../components/text/Title'
import MetaSeo from '../components/MetaSeo'
import http from '../utilities/http'
import constant from '../utilities/constant'

export default function about({ profile }) {
    return (
        <div className='flex justify-center  py-16'>
            <MetaSeo
                title="About - Harithya Wisesa"
                description={"Nama Saya Harithya Wisesa, saat ini saya bekerja di sebuah IT Contsultant di Tasikmalaya sebagai fullstack developer."}
            />
            <div className='flex xl:w-8/12 w-full justify-center items-center flex-col'>
                <Image src={constant.storage + `${profile.img?.path}`} data-aos="fade-up" alt='Nama Saya Harithya Wisesa' className='rounded-full object-cover' height={235} width={240} />
                <div className='mt-12 flex flex-col justify-start w-full' data-aos="fade-up">
                    <Title>About</Title>
                    <Paragraph className='mt-8'>
                        <div dangerouslySetInnerHTML={{ __html: profile.description }}>

                        </div>
                    </Paragraph>
                </div>
            </div>
        </div>
    )
}


export async function getStaticProps() {
    const req = await http.get("/item/about");
    return {
        props: {
            profile: req.data
        }
    }
}