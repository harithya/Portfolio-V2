import React from 'react'
import Link from 'next/link';
import MetaSeo from '../components/MetaSeo';
import http from '../utilities/http';
import constant from '../utilities/constant';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

export default function Home({ setting }) {
  return (
    <div className='lg:h-screen mt-20 lg:mt-0  xl:mt-0 mb-10 xl:mb-0 flex xl:items-center xl:flex-row flex-col-reverse' >
      <MetaSeo
        title='Hello World, i`m Harithya Wisesa'
        description='Hello World, nama saya Harithya Wisesa, saat ini saya bekerja di sebuah IT Contsultant di Tasikmalaya sebagai fullstack developer. Tapi untuk saat ini saya lebih cenderung bekerja di bagian mobile developer dan juga fontend menggunakan ekosistem React baik itu React JS ataupun React Native.'
      />
      <div className='xl:w-7/12' data-aos="fade-up">
        <h1 className='font-doodle h-20 lg:h-auto  tracking-widest xl:text-4xl text-3xl  text-center xl:text-left'>
          <Typewriter
            options={{
              strings: setting.title.split('|'),
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h1>
        <p className='mt-5 mb-4 text-center xl:text-left leading-7'>{setting.subtitle}</p>
        <p className='text-center z-50 xl:text-left'>Lihat
          <Link href={"/portfolio"}>
            <a><span className='font-semibold underline'> Portfolio Saya</span></a>
          </Link> dan juga <a href={setting.cv_link} target={"_blank"} rel="noreferrer"><span className='font-semibold underline'>Unduh CV Saya</span></a></p>
      </div>
      <div className='xl:w-5/12 flex xl:justify-end justify-center h-80 '>
        <Image src={constant.storage + `${setting.img?.path}`} layout="fixed" height={300} width={300} alt='BG-Image' className={`object-contain mb-10 xl:mb-0 dark:invert invert-0`} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const req = await http.get("/item/home");
  return {
    props: {
      setting: req.data
    }
  }
}
