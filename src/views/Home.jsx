import { useEffect } from "react";
import CardGrid from "../components/Home/CardGrid";
import FieldApps from "../components/Home/FieldApps";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Home/Navbar";
import useApps from "../hooks/useApps";

const Home = () => {
  const { apps, isLoaded, getApps } = useApps();

  useEffect(() => {
    getApps();
  }, []);

  return (
    <div className="flex flex-col gap-4 w-7/12 mx-auto">
      <Navbar />
      {/* <Highlights /> */}
      <Hero />
      {isLoaded && <CardGrid apps={apps} />}
      <footer className="h-5 "></footer>
    </div>
  );
};

export default Home;
