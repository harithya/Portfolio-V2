import React from 'react'
import Badge from '../components/Badge'
import Card from '../components/Card'
import Section from '../components/layouts/Section'
import Portfolio from '../components/portfolio/Portfolio'

export default function portofolio() {
    return (
        <Section title="Portfolio" subtitle="Some collection of my past works.">
            <div className='grid xl:grid-cols-3 grid-cols-2  gap-6'>
                <Portfolio
                    title="BitOk - Сrypto Exchange"
                    category="UI Design"
                    imgUrl="https://cdn.dribbble.com/users/702789/screenshots/17012136/media/726fbec635fe716122819a661b7016d4.png?compress=1&resize=1600x1200"
                />
                <Portfolio
                    title="Analytics - Web App"
                    category="Web App"
                    imgUrl="https://cdn.dribbble.com/users/1753227/screenshots/17012460/media/b01bdd1d077981175aa6dbf77bc6508c.png?compress=1&resize=1600x1200"
                />
                <Portfolio
                    title="Invester - Mobile App"
                    category="Mobile App"
                    imgUrl="https://cdn.dribbble.com/users/1753227/screenshots/16963068/media/b852a8d4d0a2996e1f0cb088d8d88ac2.png?compress=1&resize=1600x1200"
                />
                <Portfolio
                    title="MyFit - Design for Fitness"
                    category="Mobile App"
                    imgUrl="https://cdn.dribbble.com/users/702789/screenshots/16818556/media/be01830f6be3135b11a64640a724a623.png?compress=1&resize=1600x1200"
                />
                <Portfolio
                    title="Cake order webshop 🍰"
                    category="Web Design"
                    imgUrl="https://cdn.dribbble.com/users/2895013/screenshots/16734832/media/ff869cec58c5aa6914b963cae3530895.jpg?compress=1&resize=1600x1200"
                />
                <Portfolio
                    title="Simplejob - Job Finder Application"
                    category="Mobile App"
                    imgUrl="https://cdn.dribbble.com/users/2895013/screenshots/16709424/media/3dd29e9262ece84a8c4d35b015a1a1dc.jpg?compress=1&resize=1600x1200"
                />
            </div>
        </Section>
    )
}
