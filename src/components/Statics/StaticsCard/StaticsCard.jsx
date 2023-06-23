import PropTypes from "prop-types";

const StaticsCard = ({ data }) => {
  return (
    <div className="card_container flex flex-col items-center">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

StaticsCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default StaticsCard;
