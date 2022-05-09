import React from 'react'

export default function Paragraph(props) {
    return (
        <p className={`leading-8 ${props.className}`}>{props.children}</p>
    )
}
