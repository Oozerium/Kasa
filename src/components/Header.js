import React from 'react';
import { NavLink } from 'react-router-dom'


import '../styles/header.css'
import logo from '../asset/LOGO.png'



const Header = () => {
    return (
        <header>
            <div className='logo'>
                <img src={logo} alt="logo de kasa" />
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/accueil">Accueil</NavLink></li>
                    <li><NavLink to="/a-propos">A Propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;