import { useState} from 'react';

export default function MarqueForm ({marqueInfo, handleAdd}) {
    //state
const [newMarques, setNewMarques] = useState("");
    //comportement
const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
const id = new Date().getTime();
const nom = newMarques;
const marqueAdd = {id, nom};
//modification du state
handleAdd(marqueAdd);
//vider l'input
setNewMarques("");
};

const handleChange = (event) => {
  setNewMarques(event.target.value);
};
    //render

    return (<form action="submit" onSubmit={handleSubmit}>
        <input value={newMarques} type="text" placeholder="Ajouter Marque" onChange={handleChange} />
        <button>Ajouter</button>
      </form>)
}
  