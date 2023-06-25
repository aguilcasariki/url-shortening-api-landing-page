import PropTypes from "prop-types";

const StaticsCard = ({ data }) => {
  return (
    <div className="statistic_card bg-white rounded-md flex flex-col items-center ">
      <div className="icon_container rounded-full bg-dark-violet  p-4 -mt-8">
        <img
          src={data.image}
          alt="Statics icon"
          className="statistic_icon w-7"
        />
      </div>

      <div className="card_container flex flex-col items-center mt-7 px-5 pb-5">
        <h1 className="card_title text-base font-bold text-very-dark-violet">
          {data.title}
        </h1>
        <p className="card_description mt-2 text-xs leading-5">
          {data.description}
        </p>
      </div>
    </div>
  );
};

StaticsCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default StaticsCard;
