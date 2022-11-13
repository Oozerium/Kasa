import React from 'react';


import "../styles/banner.css";

function Banner({ title, type }) {
  return (
    <div className={`banner ${type}`}>
      <h1>{title}</h1>
    </div>
  );
}

export default Banner;