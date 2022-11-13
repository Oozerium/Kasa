import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';

import Header from './components/Header'

import Accueil from './pages/Accueil'

import APropos from './pages/APropos';

import Accomodation from './components/Accomodation'

import Error from './_utils/Error'

import Footer from './components/Footer';

function App() {
  const [accomodations, setAccomodations] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchAccomodations() {
          try {
            const response = await fetch("../data/logements.json");
            const data = await response.json();
            setAccomodations(data);
            setIsLoading(true);
          } catch (error) {
            setError(error);
            console.log(error);
          }
        }
        fetchAccomodations();
      }, []);
    
      if (error) {
        return <span>Erreur Call Api</span>;
      }


  return (
    isLoading && (

      <BrowserRouter>
      <Header />
        <Routes>          
                  <Route index element={<Accueil accomodations={accomodations}/>} />

                <Route path="/accueil" element={<Accueil accomodations={accomodations} />} />
                <Route path="/a-propos" element={<APropos />} />
                <Route path="/accomodation/:id" element={<Accomodation accomodations={accomodations} />} />
                <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    )
    
  );
}

export default App;
