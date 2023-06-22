import HeroImg from "../../../src/assets/illustration-working.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_wrapper ">
        <img src={HeroImg} alt="Working Illustration" />
        <div className="hero_info px-5 flex flex-col items-center">
          <h1>More than just shorten links</h1>
          <p>
            Build your brand s recognition and get detailed insights and how
            your links are performing
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
