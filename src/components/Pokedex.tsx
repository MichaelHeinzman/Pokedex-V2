import { Suspense, useMemo } from "react";
import useSWR from "swr";
import { TPokemon } from "./Pokemon";
import { PokemonLoadingSkeleton, PokemonListItem } from ".";
import { Outlet } from "react-router-dom";

const Pokedex = () => {
  // Fetch the data using useSWR outside of useMemo
  const { data } = useSWR("https://pokeapi.co/api/v2/pokemon?limit=151");

  const pokemon = useMemo(
    () =>
      data?.results.map((pokemon: TPokemon) => (
        <Suspense
          key={pokemon.name + "suspense"}
          fallback={<PokemonLoadingSkeleton {...pokemon} />}
        >
          {/* Render PokemonListItem directly */}
          <PokemonListItem key={pokemon.name} pokemon={pokemon} />
        </Suspense>
      )),
    [data?.results],
  );

  return (
    <div className="grid h-fit w-fit grid-cols-1 gap-y-20 overflow-auto p-16 sm:grid-cols-2  sm:gap-4 md:grid-cols-2 md:gap-16 md:p-16 lg:grid-cols-3 xl:grid-cols-4">
      <Outlet />
      {pokemon}
    </div>
  );
};

export default Pokedex;
