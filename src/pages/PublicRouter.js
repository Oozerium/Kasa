// import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// import { Layout, Accueil, APropos } from '../public';

// import Error from '../../_utils/Error'

// import { useEffect, useState } from 'react';

// import adresse from "../../data/logements.json"


// const PublicRouter = () => {
    
//     const [accomodations, setAccomodations] = useState([])
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         async function fetchAccomodations() {
//           try {
//             const response = await fetch(adresse);
//             const data = await response.json();
//             setAccomodations(data);
//             setIsLoading(true);
//           } catch (error) {
//             setError(error);
//             console.log(error);
//           }
//         }
//         fetchAccomodations();
//       }, []);
    
//       if (error) {
//         return <span>Erreur Call Api</span>;
//       }

//     return (
//         isLoading && (
//         <Routes>
//             <Route element={<Layout />}>
//                 <Route index element={<Accueil accomodations={accomodations}/>} />

//                 <Route path="/accueil" element={<Accueil accomodations={accomodations} />} />
//                 <Route path="/a-propos" element={<APropos />} />
//                 <Route path="*" element={<Error />} />
//             </Route>
//         </Routes>
//         )
//     );
// };

// export default PublicRouter;