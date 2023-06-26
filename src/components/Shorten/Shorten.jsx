import { useState } from "react";
import ShortenCard from "./ShortenCard/ShortenCard";

const Shorten = () => {
  const [validValue, setValidValue] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidValue(!validValue);
  };
  return (
    <section className="shorten mt-16">
      <div className="shorten_container px-5 pt-1">
        <div className="shorten_form_container py-4 px-5 bg-dark-violet bg-bg-shorten-mobile bg-no-repeat bg-cover bg-shorten-position rounded-md">
          <form
            action=""
            className="shorten_form flex-col flex items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="url"
              placeholder="Shorten a link here..."
              className={`shorten_input rounded-md text-xs bg-white px-3 py-2 w-full invalid:border-2 invalid:border-red ${
                validValue ? "" : "border-2 border-red"
              }`}
            />
            <span
              className={`input_invalid text-[0.7rem] text-red italic self-start mt-1 ${
                validValue ? "hidden" : ""
              } `}
            >
              Please add a link
            </span>
            <button
              type="submit"
              className="rounded-md mt-3 bg-cyan w-full py-2 text-white text-sm font-medium"
            >
              Shorten it!
            </button>
          </form>
        </div>
        <ShortenCard />
      </div>
    </section>
  );
};

export default Shorten;
