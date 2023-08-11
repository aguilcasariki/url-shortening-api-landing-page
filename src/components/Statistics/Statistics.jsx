import CallToActionBtn from "../CallToActionBtn/CallToActionBtn";
import StaticsCard from "./StatisticsCard/StatisticsCard";

const cardData = [
  {
    margin: "md:mt-0",
    image: "src/assets/icon-brand-recognition.svg",
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a things. Branded links help instil confidence in your content",
  },
  {
    margin: "md:mt-8",
    image: "src/assets/icon-detailed-records.svg",
    title: "Detailed Records",
    description:
      "Gain insight into who is clicking your links. Knowing when and where people engage with your content helps inform better decision.",
  },
  {
    margin: "md:mt-16",
    image: "src/assets/icon-fully-customizable.svg",
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const Statics = () => {
  return (
    <section className="statics mt-16 pt-1 text-center text-xs  leading-5">
      <div className="statics_container md:px-40 px-5">
        <h1 className=" text-xl  font-bold text-very-dark-violet">
          Advanced Statistics
        </h1>
        <p className="mt-3 ">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="mt-14 md:flex-row flex md:px-16 lg:px-32 xl:px-44 flex-col items-center md:items-start justify-center px-5 gap-5 ">
        <div className="cards_separator w-1 bg-cyan h-full absolute z-0 mt-16 md:mt-0 md:w-4/5 md:h-2 md:self-center lg:w-3/5"></div>
        {cardData.map((e, i) => (
          <StaticsCard data={e} key={i} />
        ))}
      </div>

      <div className="boost_container mt-14 bg-boost-mobile bg-dark-violet px-5 py-16 -mb-1 bg-no-repeat bg-cover  bg-boost-position md:bg-boost-desktop md:bg-position-none">
        <h1 className="boost_heading text-xl text-white font-bold">
          Boost your links today
        </h1>
        <a
          href="#app_shorten"
          className="shorten_link mt-5 hover:bg-white focus:bg-white rounded-full"
        >
          <CallToActionBtn
            styles="rounded-full w-full py-2 text-sm font-medium px-8"
            label="Get Started"
          />
        </a>
      </div>
    </section>
  );
};

export default Statics;
