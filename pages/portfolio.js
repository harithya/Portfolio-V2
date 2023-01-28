import React, { useState } from 'react'
import Section from '../components/layouts/Section'
import Portfolio from '../components/portfolio/Portfolio'
import PortfolioDetail from '../components/portfolio/PortfolioDetail'
import MetaSeo from '../components/MetaSeo'
import http from '../utilities/http'
import constant from '../utilities/constant'
import { useRouter } from 'next/router'
import { route } from 'next/dist/server/router'

export default function Portofolio({ portfolios }) {
    const [isOpen, setIsOpen] = useState(false)
    const [singleData, setSingleData] = useState([])

    const handleOpenModal = (value) => {
        setSingleData(value)
        setIsOpen(true);
    }

    const handleCloseModal = () => setIsOpen(false)

    const router = useRouter();
    const handleFilter = (e) => {
        const value = e.target.value
        if (value !== "all") {
            router.query.filter = value
            router.push(router);
        } else {
            router.push("/portfolio");
        }
    }

    return (
        <Section
            title="Portfolio"
            subtitle="Beberapa pekerjaan yang sudah saya kerjakan dalam setahun terakhir."
            action={<select className="text-gray-500 ring-0 outline-none cursor-pointer border w-full lg:w-52 py-3 px-5 border-dashed rounded-sm" onChange={handleFilter}>
                <option value="all">Semuanya</option>
                <option value="Mobile Application">Mobile Application</option>
                <option value="Web Application">Web Application</option>
                <option value="Web Design">Web Design</option>
            </select>}
        >
            <MetaSeo
                title="Portfolio - Harithya Wisesa"
                description={"Beberapa pekerjaan yang sudah saya kerjakan dalam setahun terakhir."}
            />
            <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6' data-aos="fade-up">
                {portfolios.map((value) =>
                    <Portfolio
                        key={value._id}
                        img={constant.storage + `${value.img?.path}`}
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

export async function getServerSideProps({ query }) {
    let url = 'items/portfolio';
    if (query.filter) {
        const params = encodeURIComponent(JSON.stringify({ category: query.filter }))
        const filter = `?filter=${params}`;
        url = `items/portfolio${filter}`
    }
    const req = await http.get(url);
    return {
        props: {
            portfolios: req.data
        }
    }
}
