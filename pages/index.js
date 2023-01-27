import React, { useState } from 'react'
import Link from 'next/link';
import MetaSeo from '../components/MetaSeo';
import http from '../utilities/http';
import constant from '../utilities/constant';

export default function Home({ setting }) {
  // const colors = ['#FE8A8A', '#51B0FF', '#8ECC47']
  // const [color, setColor] = useState('#FE8A8A')

  return (
    <div className='h-screen -mt-32 xl:mt-0 mb-10 xl:mb-0 flex xl:items-center xl:flex-row flex-col-reverse' >
      <MetaSeo
        title='Hello World, i`m Harithya Wisesa'
        description='Hello World, nama saya Harithya Wisesa, saat ini saya bekerja di sebuah IT Contsultant di Tasikmalaya sebagai fullstack developer. Tapi untuk saat ini saya lebih cenderung bekerja di bagian mobile developer dan juga fontend menggunakan ekosistem React baik itu React JS ataupun React Native.'
      />
      <div className='xl:w-6/12' data-aos="fade-up">
        <h1 className='font-doodle tracking-widest xl:text-4xl text-3xl text-center xl:text-left'>{setting.title}</h1>
        <p className='mt-5 mb-4 text-center xl:text-left leading-7'>{setting.subtitle}</p>
        <p className='text-center z-50 xl:text-left'>Lihat
          <Link href={"/portfolio"}>
            <a><span className='font-semibold underline'> Portfolio Saya</span></a>
          </Link> dan juga <a href={setting.cv_link} target={"_blank"} rel="noreferrer"><span className='font-semibold underline'>Unduh CV Saya</span></a></p>
      </div>
      <div className='xl:w-6/12 flex xl:justify-end justify-center' data-aos="fade-up">
        <img src={constant.storage + `${setting.img?.path}`} alt='BG-Image' className={`object-contain xl:h-96 xl:w-96 h-60 w-60 mb-10 xl:mb-0 dark:invert invert-0`} />
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
