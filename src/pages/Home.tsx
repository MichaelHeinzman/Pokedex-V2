import { Outlet, useLocation } from "react-router-dom";
import Landing from "./Landing";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
const Home = () => {
  const location = useLocation();
  return (
    <section className="h-screen w-screen overflow-hidden">
      <Navbar />
      <AnimatePresence>
        {location.pathname === "/" ? (
          <Landing key="Landing" />
        ) : (
          <div className="h-screen w-screen overflow-auto pt-10">
            <Outlet />
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Home;
