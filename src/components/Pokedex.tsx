import { Suspense, useState } from "react";
import useSWR from "swr";
import { TPokemon } from "./Pokemon";
import { PokemonLoadingSkeleton, PokemonListItem } from ".";
import PokemonDetails from "./PokemonDetails";
import { Outlet } from "react-router-dom";

const Pokedex = () => {
  const {
    data: { results },
  } = useSWR("https://pokeapi.co/api/v2/pokemon?limit=151");

  // Maps through the filtered list and loads pokemon data using Suspense fallback.
  const buildPokemonList = (list: TPokemon[]) =>
    list.map((pokemon: TPokemon, index: number) => (
      <Suspense key={index} fallback={<PokemonLoadingSkeleton {...pokemon} />}>
        <PokemonLoadingSkeleton
          PokemonComponent={
            <PokemonListItem key={pokemon.name} pokemon={pokemon} />
          }
          name={pokemon.name}
        />
      </Suspense>
    ));

  return (
    <div className="grid h-full w-fit grid-cols-1 gap-y-20 p-4 sm:grid-cols-2 sm:gap-4  md:grid-cols-2 md:gap-16 md:p-0 lg:grid-cols-3 xl:grid-cols-4">
      <Outlet />
      {buildPokemonList(results)}
    </div>
  );
};

export default Pokedex;
