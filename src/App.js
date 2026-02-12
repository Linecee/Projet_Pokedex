import pokemonsData from './pokemons.json';
import PokemonList from './PokemonList.jsx';
import { useState } from "react";

import './App.css';

function App() {
   //  Le State pour gérer le favori
  const [isFavorite, setIsFavorite] = useState(false);

  const [search, setSearch] = useState("");

// Filtrer les pokémons en fonction de la recherche
  const filteredPokemons = pokemonsData.filter((pokemon) =>
  pokemon.name.toLowerCase().startsWith(search.toLowerCase()));

  return (

    <div className="App">
      <header className="App-header">
       <h1 className="title">My Pokémon</h1>
        <input type="text" placeholder="Rechercher.." value={search} className="search-input"
         onChange={(e) => setSearch(e.target.value)} />
         
      <PokemonList pokemons={filteredPokemons} />

      </header>
    </div>
  );
}

export default App;
