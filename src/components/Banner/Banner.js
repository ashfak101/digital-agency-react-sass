import React from 'react'
import './Banner.scss'
import bannerImg from '../../Images/banner-img.png';
import { AiOutlineArrowUp } from "react-icons/ai";
export default function Banner() {
    
    return (
        <>
            <section className='container'>
                <div className='banner'>
                    <div className='banner-content'>
                        <h2>Build Your Awesome Platform</h2>
                        <p>Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.</p>
                        <button>Our Servicess <AiOutlineArrowUp className='banner-icon-ar'/></button>
                    </div>
                    <div className='banner-img'>
                        <img className='img'  src={bannerImg} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
