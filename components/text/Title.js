import React from 'react'

export default function Title(props) {
    return (
        <h1 className='text-3xl block cursor-pointer font-semibold'>{props.children}</h1>
    )
}
