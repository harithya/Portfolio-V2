import React from 'react'
import common from '../../utilities/common';
import Modal from '../Modal'
import Paragraph from '../text/Paragraph'

export default function PortfolioDetail(props) {
    const portfolio = props.data;
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <img src={common.image(portfolio.img)} alt={portfolio.title} className='object-cover' />
            <div className='p-3'>
                <h5 className='font-semibold xl:text-xl xl:mb-3 mb-2 text-base'>{portfolio.title}</h5>
                <Paragraph className="mb-3  text-sm leading-6">{portfolio.description}</Paragraph>
                <div className='flex justify-between items-center mt-8'>
                    <span className='text-gray-600 dark:text-gray-300 font-medium xl:text-sm text-xs'>{portfolio.category}</span>
                    <a href='#' className='text-blue-500 underline ring-0 outline-none border-none dark:text-gray-300 font-medium xl:text-sm text-xs'>
                        Visit Project
                    </a>
                </div>
            </div>
        </Modal>
    )
}
