function PokemonSearch({ search, setSearch }) {
  return (
    <input 
      type="text" 
      placeholder="Rechercher.." 
      value={search} 
      className="search-input"
      onChange={(e) => setSearch(e.target.value)} 
    />
  );
}

export default PokemonSearch;