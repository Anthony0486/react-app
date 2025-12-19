import { useState} from 'react';
import './App.css';
import Marque from'./components/marque';
import MarqueForm from './components/marqueForm';
import Navbar from './components/navbar';
import SelectMarque from './components/selectmarque';


function App(){
//State (etat, données)
const [marques, setMarques] = useState([
  {id: 1, nom: "Nintendo"},
  {id: 2, nom: "Playstation"},
  {id: 3, nom: "Xbox"}
]);

// comportements
 const handleDelete = (id) => {
// copie du state
const marquesCopy = [...marques];
//manipuler state
const updateMarquesCopy = marquesCopy.filter(marque => marque.id !== id)
//modifier state
setMarques(updateMarquesCopy)
};

const handleAdd = (marqueAdd) => {
//copie du state
const marquesCopy = [... marques];
//manipulation sur la copie du state
marquesCopy.push(marqueAdd);
//modifier le state avec le setter
setMarques(marquesCopy);
}

const handleDisplay = (nomMarque) => {
  alert(`${nomMarque} est ma marque préférée`);
}

// Affichage (render)
  return (
  <div>
    <Navbar/>
    <main>
    <section className='marques'>
    <h3>Liste des marques</h3>
    <ul>
      {marques.map((marque) => (
        <Marque marqueInfo={marque} 
        onClick={() => handleDelete(marque.id)} 
        key={marque.id} />
      ))}
      </ul>
      <MarqueForm handleAdd={handleAdd}/>
      <SelectMarque marques={marques} handleDisplay={handleDisplay} />
      </section>
      </main>
  </div>
  );
  };


export default App;



