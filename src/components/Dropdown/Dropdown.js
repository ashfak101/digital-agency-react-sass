import React from 'react'
import './Dropdown.scss'
function Dropdown({isOpen}) {
    return (
        <>
           {
               isOpen && 
               <ul className='dropdown' >
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Our Projects</a></li>
                <li><a href="#">About us</a></li>
            </ul>
           }
        </>
    )
}

export default Dropdown
