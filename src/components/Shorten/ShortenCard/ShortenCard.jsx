import PropTypes from "prop-types";

const ShortenCard = ({ originalLink, shortenLink }) => {
  return (
    <div className="card_container flex flex-col">
      <p>{originalLink}originalLink</p>
      <p>{shortenLink}shortenLink</p>
      <hr className="separator w-full h-1" />
      <button type="button">Copy</button>
    </div>
  );
};

ShortenCard.propTypes = {
  originalLink: PropTypes.string,
  shortenLink: PropTypes.string,
};

export default ShortenCard;
