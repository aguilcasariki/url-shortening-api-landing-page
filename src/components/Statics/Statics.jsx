import StaticsCard from "./StaticsCard/StaticsCard";

const cardData = [
  {
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click.Generic links don't mean a things.branded links help instil confidence in your content",
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
      <StaticsCard data={cardData} />
    </section>
  );
};

export default Statics;
