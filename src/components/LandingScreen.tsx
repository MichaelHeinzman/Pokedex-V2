import { motion } from "framer-motion";
import Pokeball from "../canvas/Pokeball";

const LandingScreen = () => {
  return (
    <motion.div className="max-w-screen flex h-screen  max-h-screen w-full flex-col items-center justify-center overflow-hidden p-20">
      <div className="flex flex-1 items-center justify-center">
        <motion.h1
          layoutId="pokedex-title"
          className="bg-pokemon bg-cover bg-clip-text text-center text-7xl font-extrabold text-transparent drop-shadow-[0_5px_5px_rgba(0,0,0,0.4)] md:text-9xl"
        >
          Pokedex
        </motion.h1>
      </div>
      <motion.div className="h-[30vh] w-[30vh] overflow-hidden rounded-full">
        <Pokeball />
      </motion.div>
    </motion.div>
  );
};

export default LandingScreen;
