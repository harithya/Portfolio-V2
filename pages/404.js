import React from 'react'
import { useRouter } from "next/router";
import Link from 'next/link';
import NoSSR from 'react-no-ssr';
import MetaSeo from '../components/MetaSeo';

export default function Custom404() {
    const router = useRouter();
    return (
        <div className='flex h-screen -mt-20 justify-center flex-col items-center'>
            <MetaSeo
                title="404 - Harithya Wisesa"
                description="Opps sepertinya anda tersesat, anda dapat kembali ke halaman home"
            />
            <img
                src={`/img/notfound.png`}
                className={`object-contain dark:invert-0 invert`}
                height={350}
                width={350}
            />
            <div className='flex justify-center flex-col'>
                <NoSSR>
                    <p className='text-lg font-normal mb-2 text-center'>Halaman {router.asPath} tidak dapat ditemukan</p>
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
