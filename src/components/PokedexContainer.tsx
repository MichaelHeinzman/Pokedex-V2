import { Suspense } from "react";
import { Pokedex } from "../components";

const PokedexContainer = () => {
  return (
    <Suspense fallback={<div className="">Loading Pokedex...</div>}>
      <Pokedex />
    </Suspense>
  );
};

export default PokedexContainer;
