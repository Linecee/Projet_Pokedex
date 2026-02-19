import pokemonsData from './data/pokemons.json';
import PokemonList from './PokemonList.jsx';
import { useState } from "react";
import PokemonSearch from './PokemonSearch.jsx';
import './styles/App.css';
import './styles/PokemonCard.css';
import './styles/PokemonSearch.css';
import './styles/PokemonList.css';


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
        <PokemonSearch search={search} setSearch={setSearch} />
         
      <PokemonList pokemons={filteredPokemons} />

      </header>
    </div>
  );
}

export default App;
