import HeroImg from "../../../src/assets/illustration-working.svg";
import CallToActionBtn from "../CallToActionBtn/CallToActionBtn";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_wrapper overflow-hidden bg-white md:flex-row-reverse md:flex md:pt-7 pb-32 md:ps-16 lg:ps-48 w-full justify-around">
        <div className="hero_img_container">
          <img
            src={HeroImg}
            alt="Working Illustration"
            className="hero_img min-w-[132vw] md:min-w-[50vw] ms-4 md:-me-16 md:ms-0 "
          />
        </div>

        <div className="hero_info px-5 md:px-0 md:items-start flex flex-col items-center mt-6 md:justify-center md:pe-4 md:m-0 md:me-16 text-center md:text-start">
          <h1 className="hero_title text-3xl font-bold text-very-dark-violet">
            More than just shorter links
          </h1>
          <p className="hero_description text-sm leading-5 mt-2">
            Build your brand's recognition and get detailed insights and how
            your links are performing.
          </p>
          <a href="#shorten" className="shorten_link mt-5">
            <CallToActionBtn
              styles="rounded-full w-full py-2 text-sm font-medium px-8"
              label="Get Started"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
