import React from 'react'
import './Navbar.scss'
export default function Navbar() {
    return (
        <div className='navbar'>
            <h3>Agency</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Our Projects</a></li>
                <li><a href="#">About us</a></li>
            </ul>
            <button>Contact us</button>
        </div>
    )
}
