import { useState } from "react";
import ShortenCard from "./ShortenCard/ShortenCard";
import CallToActionBtn from "../CallToActionBtn/CallToActionBtn";
import fetchShortenLink from "../../api/fetchShortenLink";
import { useQuery } from "@tanstack/react-query";

const Shorten = () => {
  // State to store the value of the input field
  const [inputValue, setInputValue] = useState("");

  // useQuery hook to make the shorten link request
  const { refetch } = useQuery({
    queryKey: ["shortenUrlData"], // Unique key to identify the query
    queryFn: () => fetchShortenLink(inputValue), // Function that returns the query promise
    refetchOnWindowFocus: false, // Disable automatic refetch on window focus
    enabled: false,
    onSuccess: (newData) => {
      cards.shift();
      const { result, error } = newData;
      if (result) {
        // Add the card with the original link and shorten link to the cards list
        setCards([
          {
            originalLink: inputValue,
            shortenLink: result.short_link,
          },
          ...cards,
        ]);
        setInputValue("");
      } else {
        // Set the shorten error
        setShortenError(error);
      }
    },
  });

  // State to store the shorten error
  const [shortenError, setShortenError] = useState("");
  // State to store the list of shorten link cards
  const [cards, setCards] = useState([]);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the input field is empty
    inputValue === "" ? setShortenError("Please add a link") : refetch();
    setCards([
      {
        originalLink: inputValue,
        shortenLink: "Generating short link ...",
      },
      ...cards,
    ]);
  };

  return (
    <section className="shorten mt-16" id="shorten">
      <div className="shorten_container px-5 pt-1 -mt-32 md:px-16 lg:px-32 xl:px-44">
        <div className="shorten_form_container shadow-lg pt-4 pb-3 px-5 md:pt-8 md:pb-7 md:px-10 bg-dark-violet bg-shorten-mobile bg-no-repeat bg-cover bg-position-shorten md:bg-position-none md:bg-shorten-desktop rounded-md">
          <form
            action=""
            className="shorten_form flex-col flex items-center md:flex-row w-full"
            onSubmit={handleSubmit}
          >
            <div className="input_container w-full">
              {/* Form input field */}
              <input
                value={inputValue}
                onFocus={() => setShortenError("")}
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                placeholder="Shorten a link here..."
                className={`shorten_input rounded-md text-xs md:text-sm text-very-dark-violet bg-white px-3 py-2 w-full border-2 invalid:border-red invalid:text-red ${
                  shortenError ? "border-red text-red" : " "
                }`}
              />
              {/* Error message */}
              <span
                className={`input_invalid text-[0.7rem] text-red italic self-start mt-1   ${
                  shortenError ? "opacity-100" : "opacity-0"
                } `}
              >
                {shortenError}
              </span>
            </div>

            {/* Form submit button */}
            <CallToActionBtn
              isSubmit={true}
              styles="rounded-md mt-3 w-full md:w-1/4 py-2 text-sm font-medium md:mt-0 md:ms-3 self-start border-2 border-cyan"
              label="Shorten it!"
            />
          </form>
        </div>
        {/* Show the shorten link cards */}
        {cards.map((e, i) => (
          <ShortenCard
            key={i}
            shortenUrl={e.shortenLink}
            originalLink={e.originalLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Shorten;
