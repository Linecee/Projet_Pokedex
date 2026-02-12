function PokemonImage(props) {
  return (
    <img
      src={props.image}
      alt={props.name}
      width="150"
    />
  );
}

export default PokemonImage;
