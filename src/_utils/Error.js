import React from 'react';

import { NavLink } from 'react-router-dom'

import '../styles/error.css'

import { useEffect } from 'react';



function Error() {

    useEffect(() => {
        document.title = `Kasa - Erreur 404`
    });

    return (

        <div className='error'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>


            <p className='retour'><NavLink to="/accueil">Retourner sur la page d'accueil</NavLink></p>
        </div>
    );
};

export default Error;

