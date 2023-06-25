import ShortenCard from "./ShortenCard/ShortenCard";

const Shorten = () => {
  return (
    <section className="shorten mt-16">
      <div className="shorten_container px-5 pt-1">
        <div className="shorten_form_container py-4 px-5 bg-dark-violet bg-bg-shorten-mobile bg-no-repeat bg-cover bg-shorten-position rounded-md">
          <form action="" className="shorten_form flex-col flex items-center">
            <input
              type="text"
              placeholder="Shorten a link here..."
              className="shorten_input rounded-md text-xs bg-white px-3 py-2 w-full"
            />
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
