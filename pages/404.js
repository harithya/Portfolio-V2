import Image from 'next/image'
import React from 'react'
import { useRouter } from "next/router";
import Link from 'next/link';
import { useTheme } from 'next-themes'
import NoSSR from 'react-no-ssr';

export default function Custom404() {
    const router = useRouter();
    const { theme } = useTheme()
    const image = (theme == 'light') ? 'light-404.png' : 'dark-404.png';
    console.log(image)
    return (
        <div className='flex h-screen -mt-20 justify-center flex-col items-center'>
            <NoSSR>
                <img
                    src={`/img/${image}`}
                    className='object-contain'
                    height={350}
                    width={350}
                />
            </NoSSR>
            <div className='flex justify-center flex-col'>
                <NoSSR>
                    <p className='text-lg font-normal mb-2 text-center'>The page {router.asPath} does not exist.</p>
                </NoSSR>
                <Link href={"/"}>
                    <a className='font-semibold cursor-pointer underline text-center'>
                        Back To Home
                    </a>
                </Link>
            </div>
        </div>
    )
}
