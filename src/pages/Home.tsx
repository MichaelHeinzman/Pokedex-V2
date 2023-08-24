import { SWRConfig } from "swr";
import { PokedexContainer } from "../components";
import fetcher from "../api/fetcher";

const Home = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center ">
      <div className="h-fit w-full p-4">
        <h1 className="text-center text-4xl font-extrabold text-red-500 sm:text-left">
          Pokedex
        </h1>
      </div>
      <SWRConfig value={{ fetcher, suspense: true }}>
        <PokedexContainer />
      </SWRConfig>
    </section>
  );
};

export default Home;
