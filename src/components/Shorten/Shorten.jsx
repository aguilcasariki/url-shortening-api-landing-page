import { useState } from "react";
import ShortenCard from "./ShortenCard/ShortenCard";
import CallToActionBtn from "../CallToActionBtn/CallToActionBtn";
import fetchShortenLink from "../../api/fetchShortenLink";
import { useQuery } from "@tanstack/react-query";

const Shorten = () => {
  const [inputValue, setInputValue] = useState("");

  const { refetch } = useQuery({
    queryKey: ["shortenUrlData"], // Unique key to identify the query.
    queryFn: () => fetchShortenLink(inputValue), // Function that returns the query promise.
    refetchOnWindowFocus: false, // Disable automatic refetch on window focus.
    enabled: false,
    onSuccess: (newData) => {
      if (newData.result) {
        setCards([
          {
            originalLink: inputValue,
            shortenLink: newData.result.short_link,
          },
          ...cards,
        ]);
        setInputValue("");
      } else {
        setShortenError(newData.error);
      }
    },
  });

  const [shortenError, setShortenError] = useState("");
  const [cards, setCards] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    inputValue === "" ? setShortenError("Please add a link") : refetch();
  };

  return (
    <section className="shorten mt-16" id="shorten">
      <div className="shorten_container px-5 pt-1 -mt-32 md:px-16 lg:px-48">
        <div className="shorten_form_container shadow-lg pt-4 pb-3 px-5 md:pt-8 md:pb-7 md:px-10 bg-dark-violet bg-shorten-mobile bg-no-repeat bg-cover bg-position-shorten md:bg-position-none md:bg-shorten-desktop rounded-md">
          <form
            action=""
            className="shorten_form flex-col flex items-center md:flex-row w-full"
            onSubmit={handleSubmit}
          >
            <div className="input_container w-full">
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
              <span
                className={`input_invalid text-[0.7rem] text-red italic self-start mt-1   ${
                  shortenError ? "opacity-100" : "opacity-0"
                } `}
              >
                {shortenError}
              </span>
            </div>

            <CallToActionBtn
              isSubmit={true}
              styles="rounded-md mt-3 w-full md:w-1/4 py-2 text-sm font-medium md:mt-0 md:ms-3 self-start border-2 border-cyan"
              label="Shorten it!"
            />
          </form>
        </div>
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
