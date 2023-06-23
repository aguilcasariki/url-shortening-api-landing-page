import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Shorten from "../components/Shorten/Shorten";
import { Statics } from "../components/Statics/Statics";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Shorten />
      <Statics />
    </>
  );
};

export default Home;
