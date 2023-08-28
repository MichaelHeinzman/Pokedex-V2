import { SWRConfig } from "swr";
import fetcher from "../api/fetcher";
import { PokedexContainer } from "../components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PokedexPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-fit w-screen flex-col items-center justify-center gap-4 pt-8">
      <motion.h1
        layoutId="pokedex-title"
        onClick={() => navigate("/")}
        className="z-20 cursor-pointer text-center text-4xl font-extrabold text-red-500 sm:text-left"
      >
        Pokedex
      </motion.h1>
      <motion.div className="h-fit w-fit">
        <SWRConfig value={{ fetcher, suspense: true }}>
          <PokedexContainer />
        </SWRConfig>
      </motion.div>
    </div>
  );
};

export default PokedexPage;
