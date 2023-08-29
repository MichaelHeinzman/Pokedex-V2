import { CgPokemon } from "react-icons/cg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <motion.nav
      className={`${
        location.pathname !== "/" && "landing-page-gradient shadow-md"
      } fixed top-0 z-50 flex w-full justify-between p-4 text-xl font-bold`}
    >
      <Link
        to="/"
        className="group flex w-1/3 items-center justify-start gap-2"
      >
        <CgPokemon
          size="2rem"
          color="white"
          className="group-hover:animate-spin"
        />
        Pokedex
      </Link>

      <div className="flex w-1/3 items-center justify-center rounded-md bg-white shadow-inner drop-shadow-sm"></div>
      <div className="hidden w-1/3 items-end justify-around pl-10 text-base font-semibold lg:flex">
        <motion.button
          className={`flex h-full items-end ${
            location.pathname === "/" && "text-lg font-extrabold"
          }`}
        >
          <Link to="/">Home</Link>
        </motion.button>
        <motion.button
          className={`flex h-full items-end ${
            location.pathname === "/pokedex" && "text-lg font-extrabold"
          }`}
        >
          <Link to="/pokedex">Pokemon</Link>
        </motion.button>
        <motion.button
          className={`flex h-full items-end ${
            location.pathname === "/information" && "text-lg font-extrabold"
          }`}
        >
          Information
        </motion.button>
        <motion.button
          className={`flex h-full items-end ${
            location.pathname === "/settings" && "text-lg font-extrabold"
          }`}
        >
          Settings
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
