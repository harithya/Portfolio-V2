import React from 'react'

export default function Badge(props) {
    return (
        <div className='bg-blue-400 rounded-md px-1'>
            <small className='text-xs font-bold'>{props.children}</small>
        </div>
    )
}
