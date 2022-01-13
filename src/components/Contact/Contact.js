import React, { useEffect, useState } from 'react'
import Text from '../Text/Text'
import './Contact.scss'
export default function Contact() {
  const [text,setText] =  useState('')
  useEffect(()=>{setText('Contact us for the service you want to use')},[text])
    return (
        <div className='contact'>
            <div className="container contact-display">
                <i className='contact-circle'></i>
                <div className="contact-content ">
                    <div>
                        <Text text={text}></Text>
                    </div>
                    <div>
                        <button className='contact-btn'>Contact us</button>
                    </div>
                </div>
                <i className='contact-plus'></i>
            </div>
        </div>
    )
}
