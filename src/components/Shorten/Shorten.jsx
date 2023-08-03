import { useState } from "react";
import ShortenCard from "./ShortenCard/ShortenCard";
import CallToActionBtn from "../CallToActionBtn/CallToActionBtn";

const Shorten = () => {
  const [emptyValue, setEmptyValue] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const validateInputValue = () => {
    setEmptyValue(inputValue === "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    validateInputValue();
  };
  return (
    <section className="shorten mt-16" id="shorten">
      <div className="shorten_container px-5 pt-1 -mt-32 md:px-16 lg:px-48">
        <div className="shorten_form_container pt-4 pb-3 px-5 md:pt-8 md:pb-7 md:px-10 bg-dark-violet bg-shorten-mobile bg-no-repeat bg-cover bg-position-shorten md:bg-position-none md:bg-shorten-desktop rounded-md">
          <form
            action=""
            className="shorten_form flex-col flex items-center md:flex-row w-full"
            onSubmit={handleSubmit}
          >
            <div className="input_container w-full">
              <input
                onChange={(e) => setInputValue(e.target.value)}
                type="url"
                placeholder="Shorten a link here..."
                className={`shorten_input rounded-md text-xs md:text-sm text-very-dark-violet bg-white px-3 py-2 w-full border-2 invalid:border-red invalid:text-red ${
                  emptyValue ? "border-red text-red" : " "
                }`}
              />
            </div>
            <CallToActionBtn
              isSubmit={true}
              styles="rounded-md mt-3 w-full md:w-1/4 py-2 text-sm font-medium md:mt-0 md:ms-3"
              label="Shorten it!"
            />
          </form>
          <span
            className={`input_invalid text-[0.7rem] text-red italic self-start mt-1   ${
              emptyValue ? "opacity-100" : "opacity-0"
            } `}
          >
            Please add a link
          </span>
        </div>
        <ShortenCard />
      </div>
    </section>
  );
};

export default Shorten;
