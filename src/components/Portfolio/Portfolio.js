import React, { useEffect, useState } from 'react'
import Text from '../Text/Text'
import './Portfolio.scss'
export default function Portfolio() {
    const [text,setText]= useState('')
    useEffect(()=>{
        setText('Our Awesome Portofolio');
    },[text])
    const portfolioImg=[
        {'img':'./portfolio-image/img1.png'},
        {'img':'./portfolio-image/img2.png'},
        {'img':'./portfolio-image/img3.png'}
    ]
    return (
        <div className='portfolio container'>
            <div className='third-gradient'></div>
            <div className='forth-gradient'></div>
            <i className='portfolio-plus'></i>
            <Text
                text={text}
            ></Text>
            <div className='portfolio-content'>
                {
                    portfolioImg.map(portfolio=>
                        <div className='portfolio-content-div'>
                            <img className='portfolio-content-div-img' src={portfolio.img} alt="" />
                        </div>
                        )
                }
            </div>
            <i className='arrow-2'></i>
            <i className='dot'></i>
        </div>
    )
}
