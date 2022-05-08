import React from 'react'
import { useTheme } from 'next-themes'
import NoSSR from 'react-no-ssr';
import Link from 'next/link';
import MetaSeo from '../components/MetaSeo';

export default function Home() {
  const { theme } = useTheme()
  return (
    <div className='h-screen -mt-32 xl:mt-0 mb-10 xl:mb-0 flex xl:items-center xl:flex-row flex-col-reverse'>
      <MetaSeo
        title='Hello World, i`m Harithya Wisesa'
        description='Hello World, nama saya Harithya Wisesa, saat ini saya bekerja di sebuah IT Contsultant di Tasikmalaya sebagai fullstack developer. Tapi untuk saat ini saya lebih cenderung bekerja di bagian mobile developer dan juga fontend menggunakan ekosistem React baik itu React JS ataupun React Native.'
      />
      <div className='xl:w-6/12'>
        <h1 className='font-doodle tracking-widest xl:text-4xl text-3xl text-center xl:text-left'>Hi, I`m Harithya Wisesa</h1>
        <p className='mt-5 mb-4 text-center xl:text-left leading-7'> Saya seorang fullstack developer dari Tasikmalaya yang berfokus pada Frontend Dev dan Mobile Dev. Menikmati membangun semuanya dari situs app kecil hingga app yang elegan. </p>
        <p className='text-center xl:text-left'>Lihat
          <Link href={"/portfolio"}>
            <a><span className='font-semibold underline'> Portfolio Saya</span></a>
          </Link> dan juga <Link href='/about'><a><span className='font-semibold underline'>Tentang Saya</span></a></Link></p>
      </div>
      <div className='xl:w-6/12 flex xl:justify-end justify-center'>
        <NoSSR>
          <img src={`/img/${(theme == 'dark') ? 'light-bg.png' : 'dark-bg.png'}`} alt='BG-Image' className='object-contain xl:h-96 xl:w-96 h-60 w-60 mb-10 xl:mb-0' />
        </NoSSR>
      </div>
    </div>
  )
}
