import PokemonCard from "./PokemonCard";

function PokemonList(props) {
  return (
    <div className="pokemon-list">
      {props.pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}     
          name={pokemon.name}
          type={pokemon.type}
          image={pokemon.image}
        />
      ))}
    </div>
  );
}

export default PokemonList;