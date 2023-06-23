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
    <section className="statics">
      <div className="statics_container">
        <h1>Advanced Statics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      {cardData.map((e, i) => (
        <StaticsCard data={e} key={i} />
      ))}

      <div className="boost_bg">
        <h1>Boost your links today</h1>
        <a href="">
          <button type="button">Get Started</button>
        </a>
      </div>
    </section>
  );
};

export default Statics;
