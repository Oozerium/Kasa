import React from 'react';

import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Gallery from './Gallery'

import Informations from './Information'

import Dropdown from './Dropdown'

import Error from '../_utils/Error'

import '../styles/accomodation.css'

const Accomodation = ({accomodations}) => {

    useEffect (() => {
        document.title=`Kasa - Accomodations`
    })
    const { id } = useParams();
    const accomodation = accomodations.find(
        (accomodation) => accomodation.id === id
      );

    return accomodation ? (
        <main>
        <section className="accomodation">
          <Gallery images={accomodation.pictures} />
          <Informations accomodation={accomodation} />
          <div className="accomodation__dropdowns">
            <Dropdown title="Description" description={accomodation.description} />
            <Dropdown title="Equipement" description={accomodation.equipments} />
          </div>
        </section>
      </main>

    ):(
        <Error />
    );
};

export default Accomodation;