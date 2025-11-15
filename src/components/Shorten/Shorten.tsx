import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ShortenCard from "./ShortenCard/ShortenCard.tsx";
import CallToActionBtn from "../CallToActionBtn/CallToActionBtn.tsx";
import fetchShortenLink from "../../api/fetchShortenLink.ts";
import { useQuery } from "@tanstack/react-query";

interface ShortenedLink {
  originalLink: string;
  shortenLink: string;
}

interface FormData {
  url: string;
}

const Shorten = (): React.ReactElement => {
  // React Hook Form
  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
    reset,
    setError,
    clearErrors,
  } = useForm<FormData>({
    mode: "onSubmit",
    defaultValues: {
      url: "",
    },
  });

  // State to store the list of shorten link cards
  const [cards, setCards] = useState<ShortenedLink[]>([]);
  const [currentUrl, setCurrentUrl] = useState<string>("");

  // useQuery hook to make the shorten link request
  const { data, refetch } = useQuery({
    queryKey: ["shortenUrlData", currentUrl],
    queryFn: () => fetchShortenLink(currentUrl),
    refetchOnWindowFocus: false,
    enabled: false,
  });

  // Effect to handle the response from the query
  useEffect(() => {
    if (data && currentUrl) {
      const { result, error } = data;

      // Remove the "Generating..." card
      setCards((prevCards) => {
        const newCards = prevCards.filter(
          (card) => card.shortenLink !== "Generating short link ..."
        );

        if (result) {
          // Add the card with the original link and shorten link to the cards list
          return [
            {
              originalLink: currentUrl,
              shortenLink: result.short_link,
            },
            ...newCards,
          ];
        } else {
          // Set the shorten error
          setError("url", {
            type: "manual",
            message: error || "An error occurred",
          });
          return newCards;
        }
      });

      // Only reset if successful
      if (result) {
        reset();
      }

      // Clear currentUrl to prevent re-running
      setCurrentUrl("");
    }
  }, [data, currentUrl, reset, setError]);

  // Function to handle form submission
  const onSubmit = (formData: FormData): void => {
    const url = formData.url.trim();

    // Clear any previous errors
    clearErrors("url");

    // Set the URL to trigger the query
    setCurrentUrl(url);

    // Add "Generating..." card
    setCards((prevCards) => [
      {
        originalLink: url,
        shortenLink: "Generating short link ...",
      },
      ...prevCards,
    ]);

    // Trigger the API call
    setTimeout(() => {
      refetch();
    }, 0);
  };

  return (
    <section className="shorten mt-16" id="shorten">
      <div className="shorten_container px-5 pt-1 -mt-32 md:px-16 lg:px-32 xl:px-44">
        <div className="shorten_form_container shadow-lg pt-4 pb-3 px-5 md:pt-8 md:pb-7 md:px-10 bg-dark-violet  rounded-md">
          <form
            className="shorten_form flex-col flex items-center md:flex-row w-full"
            onSubmit={handleFormSubmit(onSubmit)}
          >
            <div className="input_container w-full">
              {/* Form input field */}
              <input
                {...register("url", {
                  required: "Please add a link",
                  pattern: {
                    value: /^https?:\/\/.+/i,
                    message:
                      "Please enter a valid URL (must start with http:// or https://)",
                  },
                })}
                type="text"
                placeholder="Shorten a link here..."
                onFocus={() => clearErrors("url")}
                className={`shorten_input rounded-md text-xs md:text-sm text-very-dark-violet bg-white px-3 py-2 w-full border-2 ${
                  errors.url ? "border-red text-red" : "border-transparent"
                }`}
              />
              {/* Error message */}
              <span
                className={`input_invalid text-[0.7rem] text-red italic self-start mt-1 ${
                  errors.url ? "opacity-100" : "opacity-0"
                }`}
              >
                {errors.url?.message || " "}
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
