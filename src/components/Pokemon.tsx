import { Field } from "../canvas/Field";
import { Details } from ".";
import { pokemonEnvironments } from "../config/constants";

export type TPokemon = {
  name: string;
};

type Props = {
  pokemon: TPokemon;
};

const Pokemon = ({ pokemon }: Props) => {
  const { water } = pokemonEnvironments;
  const { name } = pokemon;

  return (
    <div className="relative h-[400px] w-5/6 md:h-4/6 md:w-1/2 ">
      <div className="absolute -inset-1 rounded-[5%] bg-gradient-to-r from-white to-white opacity-25 blur"></div>
      <div className="relative h-full w-full  overflow-hidden rounded-[5%]">
        <div className="h-3/5">
          <Field env={water} />
        </div>

        <button className="absolute top-0 m-5 rounded-xl bg-blue-50 p-2 font-normal text-[#393737] drop-shadow-md hover:border-none focus:border-none">
          Back
        </button>
        <div className="absolute inset-x-0 top-0 m-5 mx-auto w-fit rounded-xl bg-blue-50 p-2 text-[#393737] ">
          {name}
        </div>
        <Details />
      </div>
    </div>
  );
};

export default Pokemon;
