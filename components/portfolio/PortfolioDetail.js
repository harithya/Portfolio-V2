import React from 'react'
import constant from '../../utilities/constant';
import Modal from '../Modal'
import Paragraph from '../text/Paragraph'
import { FaGithub, FaGlobe } from 'react-icons/fa'

export default function PortfolioDetail(props) {
    const portfolio = props.data;
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <img src={constant.storage + `${portfolio.img?.path}`} alt={portfolio.title} className='object-cover' />
            <div className='p-3' >
                <h5 className='font-semibold xl:text-xl xl:mb-3 mb-2 text-base'>{portfolio.title}</h5>
                <Paragraph className="mb-3  text-sm leading-6">{portfolio.description}</Paragraph>
                <div className='flex justify-between items-center mt-8'>
                    <span className='text-gray-600 dark:text-gray-300 font-medium xl:text-sm text-xs'>{portfolio.category}</span>
                    <div className="flex items-center space-x-5">
                        {portfolio.github && <a href={portfolio.github} rel="noreferrer" target="_blank" className="ring-0 text-gray-800 outline-none">
                            <FaGithub size={18} />
                        </a>}
                        {portfolio.link && <a href={portfolio.link} rel="noreferrer" target="_blank" className="ring-0 text-gray-800 outline-none">
                            <FaGlobe size={18} />
                        </a>}
                    </div>
                </div>
            </div>
        </Modal>
    )
}
