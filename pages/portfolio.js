import React, { useState } from 'react'
import Section from '../components/layouts/Section'
import Portfolio from '../components/portfolio/Portfolio'
import PortfolioDetail from '../components/portfolio/PortfolioDetail'
import common from '../utilities/common'
import http from '../utilities/http'
import MetaSeo from '../components/MetaSeo'

export default function Portofolio({ portfolios }) {
    const [isOpen, setIsOpen] = useState(false)
    const [singleData, setSingleData] = useState([])

    const handleOpenModal = (value) => {
        setSingleData(value)
        setIsOpen(true);
    }

    const handleCloseModal = () => setIsOpen(false)

    return (
        <Section title="Portfolio" subtitle="Beberapa pekerjaan yang sudah saya kerjakan dalam setahun terakhir.">
            <MetaSeo
                title="Portfolio - Harithya Wisesa"
                description={"Beberapa pekerjaan yang sudah saya kerjakan dalam setahun terakhir."}
            />
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

export async function getStaticProps() {
    const req = await http.get("portfolios?populate=image");
    const portfolios = req.data;
    return {
        props: {
            portfolios
        }
    }
}
