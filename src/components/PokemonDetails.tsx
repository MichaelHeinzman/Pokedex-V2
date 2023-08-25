import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { pokeColors, pokeball } from "../config/constants";
import { formatId } from "../config/helpers";
import { PokemonImage } from ".";
import { CgPokemon, CgArrowLeft } from "react-icons/cg";
import { useMemo } from "react";

const PokemonDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, types, id } = location.state;
  const pokemonTypes = useMemo(
    () => types?.map((type: { type: { name: string } }) => type.type.name),
    [types],
  );

  const style = pokeColors[pokemonTypes[0]];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ zIndex: 20 }}
        animate={{ zIndex: 20 }}
        exit={{ zIndex: 20 }}
        className={`${style.gradient} fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-gradient-to-r`}
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, transition: { duration: 3 } }}
          exit={{ opacity: 0 }}
          className="absolute -right-20 -top-20 h-1/2"
          src={pokeball}
        />
        <motion.div
          layoutId={name}
          className={`absolute h-[83%] w-[85%] overflow-hidden rounded-3xl sm:h-[60%] md:h-[650px] md:w-[470px] ${style.mainBackground} drop-shadow-[0_0px_10px_rgba(255,255,255,0.8)]`}
        >
          <div className="flex h-full w-full flex-col p-6 text-xl font-extrabold">
            <div className="pokemon-details-back mb-2 flex w-full items-center justify-between">
              <button onClick={() => navigate(-1)} className="text-lg">
                <CgArrowLeft size="1.6rem" />
              </button>
              <CgPokemon size="2rem" />
            </div>
            <div className="pokemon-details-header flex w-full items-center justify-between pb-5 capitalize">
              <div className="pokemon-details-name">{name}</div>
              <div className="pokemon-details-id flex h-full items-end text-sm">
                {formatId(id)}
              </div>
            </div>
            <div className="pokemon-details-types flex w-full items-center justify-start gap-4">
              {pokemonTypes.map((type: string) => (
                <div
                  key={type}
                  className="rounded-full bg-[#ffffff50] p-2 pl-4 pr-4 text-sm font-bold capitalize shadow-xl"
                >
                  {type}
                </div>
              ))}
            </div>
            <PokemonImage
              id={id}
              name={name}
              customStyle="absolute inset-0 bottom-[10%] z-10 m-auto h-[45%]  rounded-full object-contain"
            />
          </div>

          <div className="absolute bottom-0 h-[41%] w-full rounded-3xl bg-white"></div>
        </motion.div>

        <div
          className="absolute inset-0 -z-10 h-full w-full"
          onClick={() => navigate(-1)}
        ></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PokemonDetails;
