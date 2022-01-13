import React, { useState,useEffect } from 'react'
import Text from '../Text/Text'
import './Services.scss'
export default function Services() {
    const [text, setText]= useState('');
    useEffect(() => {
           setText('The Service We Provide For You')
    }, [text]);
    const services = [
        {
            'id': '1',
            'icon': 'fas fa-laptop-code',
            'title': 'Development',
            'details': 'Create a platform with the best and coolest quality from us.',
        },
        {
            'id': '2',
            'icon': 'fas fa-layer-group',
            'title': 'UI/UX Designer',
            'details': 'We provide UI/UX Design services, and of course with the best quality',
        },
        {
            'id': '3',
            'icon': 'fas fa-laptop-code',
            'title': 'Graphik Designer',
            'details': 'Create a platform with the best and coolest quality from us.',
        },
        {
            'id': '4',
            'icon': 'fas fa-map-signs',
            'title': 'Motion Graphik',
            'details': 'We provide Graphic Design services, with the best designers',
        },
    
        {
            'id': '5',
            'icon': 'fas fa-camera',
            'title': 'Photography',
            'details': 'We provide Photography services, and of course with the best quality',
        },
    
        {
            'id': '6',
            'icon': 'fas fa-video',
            'title': 'Videography',
            'details': 'Create a platform with the best and coolest quality from us.',
        },
    
    ];
    return (
        <div className='container'>
            <div className='center'>
                <Text
                    text={text}
                ></Text>
            </div>
            <div className='services'>
                {
                    services.map(service => <div className='services-content'>
                        <i className={service.icon}></i>
                        <h4 className='services-title'>{service.title}</h4>
                        <p className='p-1'>{service.details}</p>
                    </div>
                    )}
            </div>
        </div>
    )
}
