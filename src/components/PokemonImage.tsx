import { padLeadingZeros } from "../config/helpers";

const PokemonImage = ({
  id,
  name,
  customStyle,
}: {
  id: number;
  name: string;
  customStyle?: string;
}) => {
  return (
    <img
      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padLeadingZeros(
        id,
        3,
      )}.png`}
      alt={name}
      className={
        customStyle ? customStyle : "w-3/4 rounded-full object-contain"
      }
    />
  );
};

export default PokemonImage;
