import React from 'react'
import Card from '../Card'

export default function Portfolio(props) {
    return (
        <Card>
            <img src={props.imgUrl} className='object-cover' />
            <div className='p-3'>
                <h5 className='font-semibold xl:text-base xl:mb-2 text-sm'>{props.title}</h5>
                <span className='text-gray-600 font-medium xl:text-sm text-xs'>{props.category}</span>
            </div>
        </Card>
    )
}
