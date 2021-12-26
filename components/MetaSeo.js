import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

export default function MetaSeo(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <NextSeo
                title={props.title}
                description={props.description}
            />
        </Head>
    )
}
