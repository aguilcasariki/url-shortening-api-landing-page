import PropTypes from "prop-types";
import CallToActionBtn from "../../CallToActionBtn/CallToActionBtn";
import { useState, useCallback } from "react";

const ShortenCard = ({ originalLink, shortenUrl }) => {
  const isGenerating = shortenUrl === "Generating short link ...";
  // State to track if the link has been copied
  const [isCopied, setIsCopied] = useState(false);

  // Callback function to handle the click on the "Copy" button
  const handleClick = useCallback(async () => {
    try {
      // Use the Clipboard API to copy the shortened link to the clipboard
      await navigator.clipboard.writeText(shortenUrl);
      setIsCopied(true); // Set the "isCopied" state to true
      setTimeout(() => {
        setIsCopied(false); // After 3 seconds, reset the "isCopied" state to false
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
    }
  }, [shortenUrl]); // Dependency list: "shortenUrl"

  return (
    <div className="card_container flex flex-col bg-white rounded-md mt-5 py-2 md:flex-row md:justify-between md:items-center shadow-2xl">
      <div className="original_link-container mx-3 overflow-hidden">
        {/* Original link */}
        <p className="text-xs text-very-dark-violet whitespace-nowrap">
          {originalLink}
        </p>
      </div>

      <hr className="w-full border-0 border-t-[1px] border-gray my-2 md:hidden" />

      <div className="shorten_link_button flex flex-col md:flex-row px-3 md:items-center gap-5">
        {/* Shortened link */}
        <p className="text-xs text-cyan whitespace-nowrap">{shortenUrl}</p>

        {/* CallToActionBtn component for the "Copy" button */}
        <CallToActionBtn
          isDisabled={isGenerating}
          clickAction={handleClick}
          label={isCopied ? "Copied!" : isGenerating ? "Generating..." : "Copy"}
          styles="w-full rounded-md py-2 text-xs font-medium mt-2 md:m-0 md:px-5 self-center"
        />
      </div>
    </div>
  );
};

export default ShortenCard;
