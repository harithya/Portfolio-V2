import React from 'react'

export default function Card(props) {
    return (
        <div className='border-2 rounded-md cursor-pointer border-dashed' data-aos="fade-up">
            {props.children}
        </div>
    )
}
