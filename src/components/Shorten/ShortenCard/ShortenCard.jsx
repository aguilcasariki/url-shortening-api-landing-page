import PropTypes from "prop-types";

const ShortenCard = ({ originalLink, shortenLink }) => {
  return (
    <div className="card_container flex flex-col bg-white rounded-md mt-5 py-2">
      <p className="mx-3 text-xs text-very-dark-violet">
        {originalLink}originalLink
      </p>
      <hr className="w-full border-0 border-t-[1px] border-gray my-2 bg" />
      <p className="mx-3 text-xs text-cyan">{shortenLink}shortenLink</p>

      <button
        type="button"
        className="mx-3 rounded-md  bg-cyan  py-2 text-white text-xs font-medium mt-2"
      >
        Copy
      </button>
    </div>
  );
};

ShortenCard.propTypes = {
  originalLink: PropTypes.string,
  shortenLink: PropTypes.string,
};

export default ShortenCard;
