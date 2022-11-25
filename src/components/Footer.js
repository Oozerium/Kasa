import React from 'react';
import '../styles/footer.css'
import logo from '../asset/logo-white.png'

const Footer = () => {
    return (
        <footer>
            <div className='logo'>
                <img src={logo} alt='logo de kasa' />
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;