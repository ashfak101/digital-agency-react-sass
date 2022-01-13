import React, { useState,useEffect } from 'react'
import Text from '../Text/Text'
import './Services.scss'
export default function Services() {
    const [text, setText]= useState('');
    useEffect(() => {
           setText('The Service We Provide For You')
    }, [text])
    return (
        <div className='container'>
            <div className='center'>
                <Text
                    text={text}
                ></Text>
            </div>
        </div>
    )
}
