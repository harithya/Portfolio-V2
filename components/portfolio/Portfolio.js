import React from 'react'
import Card from '../Card'

export default function Portfolio(props) {
    return (
        <Card>
            <a onClick={props.onClick}>
                <img src={props.img} alt={props.title} className='w-full' />
                <div className='p-3'>
                    <h5 className='font-semibold xl:text-base xl:mb-2 text-sm'>{props.title}</h5>
                    <span className='text-gray-600 dark:text-gray-300 font-medium xl:text-sm text-xs'>{props.category}</span>
                </div>
            </a>
        </Card>
    )
}
