import React from 'react'
import './Navbar.scss'
import { AiOutlineMenuFold } from "react-icons/ai";
export default function Navbar({toggle}) {
    return (
        <div className='navbar container'>
            <h3>Agency</h3>
            <ul className='navbar-menu'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Our Projects</a></li>
                <li><a href="#">About us</a></li>
            </ul>
            <AiOutlineMenuFold onClick={toggle} className='navbar-icon'/>
            <button>Contact us</button>
        </div>
    )
}
