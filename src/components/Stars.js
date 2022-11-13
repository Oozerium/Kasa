import React from 'react';

import '../styles/stars.css'

function Stars ({notation}) {
  const numberOfStars = [null, "one", "two", "three", "four", "five"]

  
    return (
        <div className={`notation ${numberOfStars[notation]}`}>
            <i className='fa-solid fa-star'></i>
            
        </div>
    );
};

export default Stars;