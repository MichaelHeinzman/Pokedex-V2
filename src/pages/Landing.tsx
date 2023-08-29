import { motion } from "framer-motion";
import { PokemonImage } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="landing-page-gradient z-0 h-screen w-full transition-all"
    >
      <motion.div className="m-auto flex h-full w-3/4 items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, x: -1500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -1500 }}
          transition={{
            type: "spring",
            damping: 20,
          }}
          className="flex h-fit w-full flex-col items-center gap-8"
        >
          <h1>Charmander</h1>
          <p className="w-full">
            Charmander is a small, bipedal, dinosaur like Pokémon. Most of its
            body is colored orange, while its underbelly is a light yellow
            color. Charmander, along with all of its evolved forms, has a flame
            that is constantly burning on the end of its tail.
          </p>
          <Link
            to="/pokedex"
            className="self-start rounded-md bg-orange-300 p-2 px-4"
          >
            Continue
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 1500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 1500 }}
          transition={{
            type: "spring",
            damping: 20,
          }}
          className="flex h-[600px] w-full items-center justify-center"
        >
          <PokemonImage
            id={0o4}
            name="Charmander"
            customStyle="h-full w-full"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Landing;
