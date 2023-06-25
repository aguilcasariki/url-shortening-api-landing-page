import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Shorten from "../components/Shorten/Shorten";
import Statics from "../components/Statics/Statics";

const Home = () => {
  return (
    <div className="bg-bg-app">
      <Navbar />
      <Hero />
      <Shorten />
      <Statics />
      <Footer />
    </div>
  );
};

export default Home;
