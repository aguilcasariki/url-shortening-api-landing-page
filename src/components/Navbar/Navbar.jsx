import { useState } from "react";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const serviceLinks = ["Features", "Pricing", "Resources", "Login"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav_wrapper flex flex-col items-center">
      <nav className="navbar w-full">
        <div className="container flex  justify-between p-5 pb-3 items-end">
          <Logo />
          <div className="menu">
            <button
              type="button"
              className="flex flex-col justify-center items-center h-8 w-8 focus:outline-none"
              onClick={handleToggleMenu}
            >
              <svg
                viewBox="0 0 24 24"
                className={`flex flex-col justify-center items-center h-7 w-7 focus:outline-none ${
                  isMenuOpen ? "text-grayish-violet" : " text-gray"
                }`}
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6h18M3 12h18M3 18h18"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`menu_container ${
          isMenuOpen ? " max-h-96 " : " max-h-0"
        } transition-max-h w-full overflow-hidden duration-1000 ease-in-out bg-white font-bold absolute top-[80px] px-5`}
      >
        <div className="menu_card bg-dark-violet text-white rounded-md p-7 pt-2">
          <ul className="menu_links   flex flex-col items-center">
            {serviceLinks.map((e, i) => (
              <li key={i} className="service_link w-full text-center mt-5">
                <a href="#" key={i}>
                  {e}
                </a>
                {i === 2 && (
                  <hr className="w-full border-0 border-t-[1px] border-gray mt-5" />
                )}
              </li>
            ))}
            <button className="signin_button mt-5 rounded-full bg-cyan w-full py-2">
              Sign Up
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
