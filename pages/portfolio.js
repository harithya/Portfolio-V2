import React, { useState } from 'react'
import Section from '../components/layouts/Section'
import Portfolio from '../components/portfolio/Portfolio'
import PortfolioDetail from '../components/portfolio/PortfolioDetail'
import common from '../utilities/common'
import http from '../utilities/http'

export default function portofolio({ portfolios }) {
    const [isOpen, setIsOpen] = useState(false)
    const [singleData, setSingleData] = useState([])

    const handleOpenModal = (value) => {
        setSingleData(value)
        setIsOpen(true);
    }

    const handleCloseModal = () => setIsOpen(false)

    return (
        <Section title="Portfolio" subtitle="Some collection of my past works.">
            <div className='grid xl:grid-cols-3 grid-cols-1  gap-6'>
                {(portfolios.data).map(({ attributes, id }) =>
                    <Portfolio
                        key={id}
                        img={common.image(attributes.image)}
                        title={attributes.title}
                        category={attributes.category}
                        onClick={() => handleOpenModal(attributes)}
                    />)}

            </div>
            <PortfolioDetail
                isOpen={isOpen}
                onClose={handleCloseModal}
                data={singleData}
            />
        </Section>
    )
}

export async function getServerSideProps() {
    const req = await http.get("portfolios?populate=image");
    const portfolios = req.data;
    return {
        props: {
            portfolios
        }
    }
}
