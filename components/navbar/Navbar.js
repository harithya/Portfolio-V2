import Link from 'next/link'
import React, { useState } from 'react'
import NavItem from './NavItem'
import NavMobile from './NavMobile'
import { useRouter } from 'next/router'
import Router from 'next/router';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    Router.events.on("routeChangeStart", () => setIsOpen(false))
    const router = useRouter();
    const pathUrl = router.asPath.split("/").filter((a) => a)[0] ?? '';
    return (
        <div className='sticky top-0  z-50'>
            <div className='xl:px-60  px-8 border-b-2 border-dashed backdrop-blur-md bg-white/80 dark:bg-black'>
                <div className='flex items-center justify-between'>
                    <Link href="/">
                        <a> <h5 className='font-doodle text-2xl mr-8 cursor-pointer tracking-widest'>Harithya</h5></a>
                    </Link>
                    <div>
                        <button onClick={() => setIsOpen(!isOpen)} className='xl:hidden dark:hover:bg-gray-800 hover:bg-gray-300 py-4 px-5 block'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                        <ul className='xl:flex hidden'>
                            <NavItem href="/">Home</NavItem>
                            <NavItem href="/about">About</NavItem>
                            <NavItem href="/portfolio">Portfolio</NavItem>
                            <NavItem href="/contact">Contact</NavItem>
                        </ul>
                    </div>
                </div>
            </div>
            <NavMobile isOpen={isOpen}>
                <ul>
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/about">About</NavItem>
                    <NavItem href="/portfolio">Portfolio</NavItem>
                    <NavItem href="/contact">Contact</NavItem>
                </ul>
            </NavMobile>
        </div>
    )
}
