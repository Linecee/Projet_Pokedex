import pokemonsData from './pokemons.json';
import PokemonList from './PokemonList.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="title">My Pokémon</h1>

      {/* La Liste : on lui passe le JSON via une prop appelée "pokemons" */}
      <PokemonList pokemons={pokemonsData} />
      </header>
    </div>
  );
}

export default App;
