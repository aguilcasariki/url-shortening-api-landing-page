import ShortenCard from "../ShortenCard/ShortenCard";

const Shorten = () => {
  return (
    <section className="shorten px-5">
      <div className="shorten_form_container px-5 py-3 ">
        <form action="" className="shortem_form flex-col flex items-center">
          <input type="text" placeholder="Shorten a link here..." />
          <button type="submit">Shorten it!</button>
        </form>
      </div>
      <ShortenCard />
    </section>
  );
};

export default Shorten;
