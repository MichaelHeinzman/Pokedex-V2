import useSWR from "swr";
import { TPokemon } from "../Pokemon";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { pokeColors } from "../../config/constants";
import { formatId } from "../../config/helpers";
import { PokemonImage } from "../../components";

type Props = {
  pokemon: TPokemon;
};

const PokemonListItem = ({ pokemon }: Props) => {
  const navigate = useNavigate();

  const { data } = useSWR(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
  const { name, id, types, sprites } = data;
  const pokemonTypes: string[] = types?.map(
    (type: { type: { name: string } }) => type.type.name,
  );

  const style = pokeColors[pokemonTypes[0]];

  return (
    <motion.div
      layoutId={name}
      className="group relative z-10 h-[350px] w-[230px] transition-all duration-500 hover:-translate-y-5"
    >
      <button
        onClick={() => navigate(`/${name}`, { state: data })}
        className={`pokemon-card ${pokemonTypes[0]} h-full w-full rounded-2xl border-[3px] border-transparent ${style.border} ${style.mainBackground} p-4 text-white shadow-xl shadow-[#00000035] transition-all duration-500 hover:shadow-none`}
      >
        <div className="pokemon-card-header flex h-1/5 w-full justify-between p-2 font-extrabold">
          <div className="w-full self-center text-left capitalize">{name}</div>
          <div
            className={`w-20 self-center rounded-full border-[1.5px] border-[#ffffff70] bg-[#ffffff20] p-2 text-xs font-medium shadow-md`}
          >
            {formatId(id)}
          </div>
        </div>

        <div className="pokemon-card-image justify-cent relative z-10 flex h-3/5 w-full flex-col items-center">
          <PokemonImage id={id} name={name} />
          <div className="absolute inset-0 -z-10 m-auto h-[130px] w-[130px] rounded-full bg-[rgba(255,255,255,.25)]"></div>
        </div>

        <div
          className={`pokemon-card-types h-1/5 w-full ${
            pokemonTypes.length === 1
              ? "flex items-center justify-center"
              : "grid grid-cols-2"
          } gap-2 p-2`}
        >
          {pokemonTypes.map((type: string) => (
            <div
              key={type + name}
              className={`${pokeColors[type].secondaryBackground} ${
                pokemonTypes.length === 1 ? "w-1/2" : "w-full"
              } self-center rounded-full p-2 text-sm font-extrabold capitalize shadow-md`}
            >
              {type}
            </div>
          ))}
        </div>
      </button>
    </motion.div>
  );
};

export default PokemonListItem;
