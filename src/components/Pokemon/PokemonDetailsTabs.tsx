import { ReactNode, useState } from "react";
import {
  TAbility,
  TPokeColor,
  TPokemon,
  TPokemonInfo,
  TStat,
} from "../../config/constants";
import { AnimatePresence, motion } from "framer-motion";
const PokemonDetailsTabs = ({
  colors,
  data,
}: {
  colors: TPokeColor;
  data: TPokemon & TPokemonInfo;
}) => {
  const [selected, setSelected] = useState("about");

  const tabStyle = (name: string) =>
    `w-full border-b-2 border-gray-200 p-2 pb-3 transition-all duration-300 ${
      selected === name && `${colors.normalBorder} text-gray-700`
    }`;

  const tabItem = (one: string, two: ReactNode | string | number) => (
    <div className=" grid h-fit  w-full grid-cols-2 justify-between">
      {one} <p className="w-full font-normal capitalize text-black">{two}</p>
    </div>
  );

  const statBar = (value: number) => (
    <div className="flex w-full items-center justify-between">
      <div className="w-1/5 text-xs font-semibold">{value}</div>
      <div className="h-1 w-4/5 rounded-full bg-gray-200">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: value + "%" }}
          transition={{ duration: 2, delay: 0.2 }}
          className={`h-full rounded-full bg-gradient-to-r ${colors.gradient}`}
        ></motion.div>
      </div>
    </div>
  );

  return (
    <div className="absolute bottom-0 flex h-[41%] w-full flex-col items-center rounded-3xl bg-white p-4 pt-6">
      <div className="tabs flex h-fit w-full justify-between p-4 text-xs font-extrabold text-gray-300">
        <button
          onClick={() => setSelected("about")}
          className={tabStyle("about")}
        >
          About
        </button>
        <button
          onClick={() => setSelected("base stats")}
          className={tabStyle("base stats")}
        >
          Base Stats
        </button>
        <button
          onClick={() => setSelected("info")}
          className={tabStyle("info")}
        >
          Info
        </button>
        <button
          onClick={() => setSelected("sprites")}
          className={tabStyle("sprites")}
        >
          Sprites
        </button>
      </div>

      <AnimatePresence>
        {selected === "about" && (
          <motion.div
            key="about"
            className="details-scroll flex h-fit w-full flex-col gap-4 overflow-y-scroll p-4 pt-2 text-xs font-semibold text-gray-500"
          >
            {tabItem("Base Experience", data.base_experience)}
            {tabItem("Height", data.height)}
            {tabItem("Weight", data.weight)}
            {tabItem("Growth Rate", data.growth_rate.name)}
            {tabItem("Shape", data.shape.name)}
            {tabItem("Capture Rate", data.capture_rate)}
            {tabItem("Habitat", data.habitat.name)}
            <div className="flex h-fit w-full flex-col gap-2">
              <h2 className="flex flex-col text-base font-semibold text-gray-900">
                Abilities
              </h2>
              <div className="flex capitalize">
                {data.abilities
                  .map((ability: TAbility) => ability.ability.name)
                  .join(", ")}
              </div>
            </div>
          </motion.div>
        )}

        {selected === "base stats" && (
          <motion.div
            key="base stats"
            className="details-scroll flex h-fit w-full flex-col gap-4 overflow-y-scroll p-4 pt-2 text-xs font-semibold uppercase text-gray-500"
          >
            {data.stats.map((stat: TStat) =>
              tabItem(stat.stat.name, statBar(stat.base_stat)),
            )}
          </motion.div>
        )}

        {selected === "info" && (
          <motion.div
            key="info"
            className="details-scroll flex h-fit w-full flex-col gap-4 overflow-y-scroll p-4 pt-2 text-xs font-semibold uppercase text-gray-500"
          >
            {}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PokemonDetailsTabs;
