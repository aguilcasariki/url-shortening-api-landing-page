import { useState } from "react";
import Logo from "../Logo/Logo";
import MenuLinkList from "../MenuLinkList/MenuLinkList";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav_wrapper flex flex-col items-center bg-white md:px-14">
      <nav className="navbar w-full">
        <div className="nabvar_container flex  md:justify-normal justify-between p-5 pb-3 items-end">
          <Logo />
          <div className="navbar_menu hidden md:flex w-full ps-7">
            <MenuLinkList />
          </div>

          <div className="navbar_btn md:hidden">
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
        className={`menu_container md:hidden ${
          isMenuOpen ? " max-h-96 " : " max-h-0"
        } transition-max-h w-full overflow-hidden duration-1000 ease-in-out bg-white font-bold absolute top-[80px] px-5`}
      >
        <div className="menu_card bg-dark-violet   rounded-md p-7 pt-2 ">
          <MenuLinkList />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
