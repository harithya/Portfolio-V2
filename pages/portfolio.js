import React, { useState } from 'react'
import Section from '../components/layouts/Section'
import Portfolio from '../components/portfolio/Portfolio'
import PortfolioDetail from '../components/portfolio/PortfolioDetail'
import MetaSeo from '../components/MetaSeo'
import axios from 'axios'

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
            <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6' data-aos="fade-up">
                {portfolios.map((value) =>
                    <Portfolio
                        key={value.id}
                        img={value.img}
                        title={value.title}
                        category={value.category}
                        onClick={() => handleOpenModal(value)}
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
    const req = await axios.get("https://api.jsonbin.io/b/6277327f25069545a32efe81/5");
    const portfolios = req.data ?? [];
    return {
        props: {
            portfolios
        }
    }
}
