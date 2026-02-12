import { useState } from "react"; 
import PokemonImage from "./PokemonImage.jsx";

function PokemonCard(props) {
  //  Le State pour gérer le favori
  const [isFavorite, setIsFavorite] = useState(false);

 // le State pour gérer l'affichage des détails le type du pok dans ce cas
  const [showType, setShowType] = useState(false);

  //La fonction pour cliquer sur le bouton favori
  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }



  return (
    <div className="card">
    
     <PokemonImage image={props.image} name={props.name}/>
      <h2 className="card-title">{props.name}</h2>

      <button onClick={() => setShowType(!showType)}   className="bouton-details">
  {showType ? "⬆" : "⬇"}</button>
      {showType && (

        <div className="details">
      <p className="type">{props.type}</p>
        </div>
      )}

      
      <button 
        onClick={toggleFavorite}  
        className={isFavorite ? "fav-button active" : "fav-button"}
      >
        {isFavorite ? "★ Favori" : "☆ Ajouter aux favoris"}
      </button>

    </div>
  );
}

export default PokemonCard;