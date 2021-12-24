import React from 'react'
import { useTheme } from 'next-themes'
import NoSSR from 'react-no-ssr';

export default function Home() {
  const { theme } = useTheme()
  return (
    <div className='h-screen -mt-28 xl:mt-0 mb-10 xl:mb-0 flex xl:items-center xl:flex-row flex-col-reverse'>
      <div className='xl:w-6/12'>
        <h1 className='font-doodle tracking-widest xl:text-4xl text-3xl text-center xl:text-left'>Hi, I`m Harithya Wisesa</h1>
        <p className='mt-5 mb-4 text-center xl:text-left leading-7'> A software edgyneer mainly focused on web technologies. I
          love exploring tech related stuff and now fall in love with react.js
          and javascript</p>
        <p className='text-center xl:text-left'>Checkout my <span className='font-semibold underline'>Past Work</span> or learn more <span className='font-semibold underline'>about me</span></p>
      </div>
      <div className='xl:w-6/12 flex xl:justify-end justify-center'>
        <NoSSR>
          <img src={`/img/${(theme == 'dark') ? 'light-bg.png' : 'dark-bg.png'}`} className='object-contain xl:h-96 xl:w-96 h-60 w-60 mb-10 xl:mb-0' />
        </NoSSR>
      </div>
    </div>
  )
}
