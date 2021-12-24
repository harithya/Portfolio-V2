import React from 'react'
import Title from '../text/Title'

export default function Section(props) {
    return (
        <div className='py-14'>
            <Title>{props.title}</Title>
            {props.subtitle && <span className='text-gray-500 text-md block mt-2  dark:text-white/80'>{props.subtitle}</span>}
            <div className={`mt-12 ${props.className}`}>
                {props.children}
            </div>
        </div>
    )
}
