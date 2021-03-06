import React from 'react'
import './Banner.scss'
import bannerImg from '../../Images/banner-img.png';
import { AiOutlineArrowUp } from "react-icons/ai";
export default function Banner() {
    
    return (
        <>
            <section className='container'>
                <div className='first-gradient'></div>
                <div className='second-gradient'></div>
                <div className='banner'>
                    <div className='banner-content'>
                        <h2>Build Your Awesome Platform</h2>
                        <p>Enver studio is a digital studio that offers several services such as <br /> UI/UX Design to developers, we will provide the best service <br /> for those of you who use our services.</p>
                        <button>Our Servicess <AiOutlineArrowUp className='banner-icon-ar'/></button>
                    </div>
                    <div className='banner-img'>
                        <i className='banner-arrow'></i>
                        <i className='banner-triangle-1'></i>
                        <i className='banner-triangle-2'></i>
                        <i className='banner-circle'></i>
                        <i className='banner-plus'></i>
                        <img className='img'  src={bannerImg} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
