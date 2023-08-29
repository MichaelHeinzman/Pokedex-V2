import { SWRConfig } from "swr";
import fetcher from "../api/fetcher";
import { PokedexContainer } from "../components";
import { motion } from "framer-motion";

const PokedexPage = () => {
  return (
    <motion.div
      key="Pokedex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex w-screen flex-col items-center justify-center gap-4 pt-8"
    >
      <SWRConfig value={{ fetcher, suspense: true }}>
        <PokedexContainer />
      </SWRConfig>
    </motion.div>
  );
};

export default PokedexPage;
