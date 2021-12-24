import React from 'react'

export default function Paragraph(props) {
    return (
        <p className={`leading-7 ${props.className}`}>{props.children}</p>
    )
}
