import React from 'react'
import common from '../../utilities/common';
import Modal from '../Modal'
import Paragraph from '../text/Paragraph'

export default function PortfolioDetail(props) {
    const portfolio = props.data;
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <img src={common.image(portfolio.image)} className='object-cover' />
            <div className='p-3'>
                <h5 className='font-semibold xl:text-xl xl:mb-3 mb-2 text-base'>{portfolio.title}</h5>
                <Paragraph className="mb-3 text-sm xl:text-base">{portfolio.description}</Paragraph>
                <span className='text-gray-600 font-medium xl:text-sm text-xs'>{portfolio.category}</span>
            </div>
        </Modal>
    )
}
