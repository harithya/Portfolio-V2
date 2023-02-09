import React from 'react'
import Section from '../../components/layouts/Section'

const Blog = () => {
    return (
        <Section title="Blog">
            <div className="grid lg:grid-cols-3 grid-cols-1">
                <div className=" border-2 border-dashed">
                    <div className="w-full h-52 bg-gray-300" />
                    <div className="p-3">
                        <h5 className="text-lg font-medium mb-5 line-clamp-2">#GenerasiGigih Week 6 Reflection: Almost there</h5>
                        <p className="text-sm leading-6 text-gray-600 line-clamp-3 mb-5">I am so excited to have been working in this feature length documentary over the last year as Director of Photography. The film, due for theatrical release later on this year, is a powerful look at the health of humanity and our planet and how they are inextricably linked. </p>

                        <a href="#" className="text-sm underline">Read More</a>
                    </div>
                </div>

            </div>
        </Section>
    )
}

export default Blog