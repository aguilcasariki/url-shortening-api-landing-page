import PropTypes from "prop-types";

const StaticsCard = ({ data }) => {
  return (
    <div
      className={`statistic_card mt-16 bg-white rounded-md flex flex-col items-center min-h-[13.8rem] md:min-h-[18.3rem] shadow-lg  ${data.margin} lg:min-h-0  z-50 `}
    >
      <div className="icon_container rounded-full bg-dark-violet  p-4 -mt-8 shadow-lg">
        <img
          src={data.image}
          alt="Statics icon"
          className="statistic_icon w-7"
        />
      </div>

      <div className="statistics_card-content flex flex-col text-center md:text-start mt-7 px-5 pb-5">
        <h1 className="card_title text-base font-bold text-very-dark-violet text-center lg:text-start">
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
    margin: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default StaticsCard;
