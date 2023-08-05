import PropTypes from "prop-types";
import CallToActionBtn from "../../CallToActionBtn/CallToActionBtn";
import { useState } from "react";

const ShortenCard = ({ originalLink, shortenUrl }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(shortenUrl);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="card_container flex flex-col bg-white rounded-md mt-5 py-2 md:flex-row md:justify-between md:items-center shadow-2xl">
      <a
        href={originalLink}
        className="mx-3 text-xs text-very-dark-violet whitespace-nowrap"
      >
        {originalLink}
      </a>
      <hr className="w-full border-0 border-t-[1px] border-gray my-2 md:hidden" />
      <div className="shorten_link_button flex flex-col md:flex-row px-3 md:items-center gap-5">
        <a
          href={shortenUrl}
          className="text-xs text-cyan whitespace-nowrap underline hover:text-CTA-hover-bg"
        >
          {shortenUrl}
        </a>

        <CallToActionBtn
          clickAction={handleClick}
          label={isCopied ? "Copied!" : "Copy"}
          styles="w-full rounded-md  py-2 text-xs font-medium mt-2 md:m-0 md:px-5 self-center"
        />
      </div>
    </div>
  );
};

ShortenCard.propTypes = {
  originalLink: PropTypes.string,
  shortenUrl: PropTypes.string,
};

export default ShortenCard;
