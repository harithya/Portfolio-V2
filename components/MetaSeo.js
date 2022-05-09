import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import constant from '../utilities/constant'

export default function MetaSeo(props) {
    const keyword = props.keyword ?? constant.keyword
    return (
        <Head>
            <title>{props.title}</title>
            <NextSeo
                title={props.title}
                description={props.description}
            />
            ;<>
                <meta name="title" content={props.title} />
                <meta
                    name="description"
                    content={props.description}
                />
                <meta name="keywords" content={keyword} />
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={constant.url} />
                <meta property="og:title" content={props.title} />
                <meta
                    property="og:description"
                    content={props.description}
                />
                <meta
                    property="og:image"
                    content={"/meta.png"}
                />
                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={constant.url} />
                <meta property="twitter:title" content={props.title} />
                <meta
                    property="twitter:description"
                    content={props.description}
                />
                <meta
                    property="twitter:image"
                    content={"/meta.png"}
                />
            </>
        </Head>
    )
}
