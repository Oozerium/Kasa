import React from 'react';
import { useEffect } from 'react'
import Banner from '../components/Banner'
import Drop from '../components/Dropdown';
import '../styles/about.css'

function About() {

    useEffect(() => {
        document.title = `Kasa - à propos`
    });

    return (
        <main>
            <section className='about'>
                <Banner type='banner-about' />
                <Drop title='Fiabilité' description='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.' type='drop-About' />
                <Drop title='Respect' description='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' type='drop-About' />
                <Drop title='Service' description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." type='drop-About' />
                <Drop title='Responsabilité' description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." type='drop-About' />
            </section>
        </main>
    );
};

export default About;