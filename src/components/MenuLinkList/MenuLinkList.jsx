const serviceLinks = ["Features", "Pricing", "Resources"];

const MenuLinkList = () => {
  return (
    <ul className="menu_link-list flex flex-col md:flex-row items-center md:justify-between md:text-xs text-white md:text-gray w-full">
      <div className="menu_links md:flex items-center md:gap-5">
        {serviceLinks.map((e, i) => (
          <li key={i} className="service_link w-full text-center mt-5 md:mt-0">
            <a href="#" key={i}>
              {e}
            </a>
          </li>
        ))}
      </div>

      <hr className="w-full border-0 border-t-[1px] border-gray mt-5 md:hidden" />
      <div className="menu_btns md:flex items-center gap-5 justify-end">
        <li className="service_link w-full text-center mt-5 md:mt-0">
          <a href="#">Login</a>
        </li>
        <button className="signin_button mt-5 rounded-full bg-cyan px-14 py-2 md:px-1 md:mt-0 md: min-w-full text-white">
          Sign Up
        </button>
      </div>
    </ul>
  );
};

export default MenuLinkList;
