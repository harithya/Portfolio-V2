import React from 'react'
import Navbar from '../navbar/Navbar'
import SwitchMode from '../SwitchMode'

export default function MainLayout({ children }) {
    return (
        <div className='container dark:bg-black '>
            <Navbar />
            <div className='xl:px-60 px-8'>
                {children}
            </div>
            <SwitchMode />
            <footer className='text-center py-5'>
                <span className='xl:text-sm text-xs  font-medium'>Copyright © 2021 Harithya Wisesa. <a target={"_blank"} href='https://www.wisesa.dev/'>
                    inspiration wisesa.dev</a> </span>
            </footer>
        </div>
    )
}
