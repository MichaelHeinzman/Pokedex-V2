import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import PokemonDetails from "./components/PokemonDetails";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route path=":id" element={<PokemonDetails />} />
      </Route>,
    ),
  );
  return (
    <main className="relative min-h-screen w-screen ">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;