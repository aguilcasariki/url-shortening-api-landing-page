import HeroImg from "../../../src/assets/illustration-working.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_wrapper overflow-hidden md:bg-white">
        <img
          src={HeroImg}
          alt="Working Illustration"
          className="hero_img max-w-[132vw] ms-4"
        />
        <div className="hero_info px-5 flex flex-col items-center mt-6 text-center ">
          <h1 className="hero_title text-3xl font-bold text-very-dark-violet">
            More than just shorter links
          </h1>
          <p className="hero_description text-sm leading-5 mt-2">
            Build your brand's recognition and get detailed insights and how
            your links are performing.
          </p>
          <a href="" className="shorten_link mt-5">
            <button className="hero_button  rounded-full bg-cyan w-full py-2 text-white text-sm font-medium px-8">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
