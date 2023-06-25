import StaticsCard from "./StaticsCard/StaticsCard";

const cardData = [
  {
    image: "../../../src/assets/icon-brand-recognition.svg",
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click.Generic links don't mean a things.branded links help instil confidence in your content",
  },
  {
    image: "../../../src/assets/icon-detailed-records.svg",
    title: "Detailed Records",
    description:
      "Gain insight into who is clicking your links.Knowing when and where people engage with your content helps inform better decision.",
  },
  {
    image: "../../../src/assets/icon-fully-customizable.svg",
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links,supercharging audience engagement.",
  },
];

const Statics = () => {
  return (
    <section className="statics mt-16 pt-1 text-center text-xs  leading-5">
      <div className="statics_container px-5">
        <h1 className=" text-xl  font-bold text-very-dark-violet">
          Advanced Statistics
        </h1>
        <p className="mt-3">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="cards_container flex flex-col items-center mt-14 px-5">
        {cardData.map((e, i) => (
          <>
            {i !== 0 && (
              <div className="cards_separator w-1 bg-cyan h-16"></div>
            )}
            <StaticsCard data={e} key={i} />
          </>
        ))}
      </div>

      <div className="boost_container mt-14 bg-bg-boost-mobile bg-dark-violet px-5 py-16">
        <h1 className="boost_heading text-xl text-white font-bold">
          Boost your links today
        </h1>
        <a href="" className="shorten_link mt-3">
          <button className="boost_button  rounded-full bg-cyan w-full py-2  text-white text-sm font-medium px-8">
            Get Started
          </button>
        </a>
      </div>
    </section>
  );
};

export default Statics;
