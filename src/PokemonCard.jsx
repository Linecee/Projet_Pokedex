import { useState } from "react"; 

function PokemonCard(props) {
  // 1. Le State pour gérer le favori
  const [isFavorite, setIsFavorite] = useState(false);

  // 2. La fonction pour cliquer
  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="card">
    
      <img src={props.image} alt={props.name} width="120"/>
      
      <h2 className="card-title">{props.name}</h2>
      
      <p className="type">{props.type}</p>

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