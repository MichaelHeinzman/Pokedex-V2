import { ReactNode } from "react";

type Props = {
  name: string;
  PokemonComponent?: ReactNode;
};

const PokemonLoadingSkeleton = ({ PokemonComponent, name }: Props) => {
  return (
    <div className="">
      {PokemonComponent ? (
        PokemonComponent
      ) : (
        <div className="group relative h-[300px] w-[200px]">
          <button
            className={`h-full w-full rounded-2xl border-none  bg-gray-800 shadow-lg`}
          >
            <div className="h-1/5 animate-pulse transition-all duration-500">
              {name.toUpperCase()}
            </div>
            <div className="relative z-10 h-3/5 w-full flex-col items-center justify-center">
              <div
                className={`h-full w-full animate-pulse rounded-full bg-gray-300 object-contain transition-all duration-500`}
              />
            </div>
            <div className={` h-1/5 w-full  gap-2`}></div>
          </button>
        </div>
      )}
    </div>
  );
};

export default PokemonLoadingSkeleton;
