import React from 'react'
import Title from '../text/Title'

export default function Section(props) {
    return (
        <div className='py-14'>
            <div className="flex justify-between w-full items-center lg:flex-row flex-col lg:space-y-0 space-y-5">
                <div className="w-full">
                    <Title>{props.title}</Title>
                    {props.subtitle && <span className='text-gray-500 text-md block mt-2  dark:text-white/80'>{props.subtitle}</span>}
                </div>
                {props.action && props.action}
            </div>
            <div className={`mt-12 ${props.className}`}>
                {props.children}
            </div>
        </div>
    )
}
