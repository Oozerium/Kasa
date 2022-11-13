import * as React from 'react';

import { useState } from 'react';

import '../styles/dropdown.css';



const Drop = ({ title, type, description }) => {

    const [isOpen, setIsOpen] = useState(false)


    return (
            <div className='dropdown grow1'>
                <div className='dropdown-button'>
                    <h2>{title}</h2>
                    <button className='dropbtn' onClick={() => { setIsOpen(!isOpen) }}> <i className={isOpen ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i> </button>
                </div>
                <div className={isOpen ? "dropdown-content show" : "dropdown-content"}>
                    {Array.isArray(description) ? 
                    (<ul>
                        {description.map((equipment) =>(<li key={equipment}>{equipment}</li>))}
                    </ul>) : (<div><p>{description}</p></div>) }
                </div>
            </div>
    );
};



export default Drop
