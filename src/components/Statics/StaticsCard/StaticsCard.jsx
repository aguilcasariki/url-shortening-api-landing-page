import PropTypes from "prop-types";

const StaticsCard = ({ data }) => {
  return (
    <>
      <img src={data.image} alt="Statics icon" />
      <div className="card_container flex flex-col items-center">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </>
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
