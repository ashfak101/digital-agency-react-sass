import React from 'react'
import './Text.scss'
export default function Text({text}) {
    return (
        <div>
            <h2 className='text'>{text}</h2>
        </div>
    )
}
