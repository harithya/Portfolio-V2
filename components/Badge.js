import React from 'react'

export default function Badge(props) {
    return (
        <div className='border-2 border-dashed mb-5  rounded-md py-2 px-5 hover:cursor-pointer'>
            <small className='text-sm font-medium'>{props.children}</small>
        </div>
    )
}
