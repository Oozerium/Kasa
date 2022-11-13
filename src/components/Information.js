import React from 'react';

import '../styles/information.css'

import Stars from './Stars';


function Information({ accomodation }) {
    return (
        <div className='accomodation__info'>
            <div className='accomodation_info_content'>

                <h1>{accomodation.title}</h1>
                <p>{accomodation.location}</p>
                <ul>
                    {accomodation.tags.map((tag) => (<li key={tag}>{tag}</li>))}
                </ul>
            </div>
            <div className='accomodation_info_content responsive'>
                <div className='profile'>
                    <p>{accomodation.host.name}</p>
                    <img src={accomodation.host.picture} alt={accomodation.host.name}/>

                </div>
                <Stars notation={accomodation.rating}/>
            </div>
        </div>
    );
};

export default Information;