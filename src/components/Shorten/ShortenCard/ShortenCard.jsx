import PropTypes from "prop-types";
import CallToActionBtn from "../../CallToActionBtn/CallToActionBtn";

const ShortenCard = ({ originalLink, shortenLink }) => {
  return (
    <div className="card_container flex flex-col bg-white rounded-md mt-5 py-2 md:flex-row md:justify-between md:items-center">
      <p className="mx-3 text-xs text-very-dark-violet">
        {originalLink}originalLink
      </p>
      <hr className="w-full border-0 border-t-[1px] border-gray my-2 md:hidden" />
      <div className="shorten_link_button flex flex-col md:flex-row px-3 md:items-center gap-5">
        <p className=" text-xs text-cyan">{shortenLink}shortenLink</p>

        <CallToActionBtn
          label="Copy"
          styles="w-full rounded-md  py-2 text-xs font-medium mt-2 md:m-0 md:px-5 self-center"
        />
      </div>
    </div>
  );
};

ShortenCard.propTypes = {
  originalLink: PropTypes.string,
  shortenLink: PropTypes.string,
};

export default ShortenCard;
