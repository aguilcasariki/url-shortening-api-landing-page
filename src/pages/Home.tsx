import Footer from "../components/Footer/Footer.tsx";
import Hero from "../components/Hero/Hero.tsx";
import Navbar from "../components/Navbar/Navbar.tsx";
import Shorten from "../components/Shorten/Shorten.tsx";
import Statics from "../components/Statistics/Statistics.tsx";

const Home = (): React.ReactElement => {
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
