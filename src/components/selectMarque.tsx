export default function SelectMarque (marques) {

console.log(marques)

return ( 
    <div>
    <label htmlFor="marqueSelect">Selection</label>
    <select name="marque" id="marqueSelect">
    <option value="">--Marques--</option>
    {/* {marques.map((marque) => (<option value={marque.nom}>{marque.nom}</option>))} */}
    </select>
    </div>
    )

}