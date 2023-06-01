import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };
  const blurHandler = () => {
    if (dropdown) {
      setTimeout(() => {
        setDropdown(!dropdown);
      }, 100);
    }
  };

  return (
    <header className="header flex items-center justify-center relative shadow-lg text-xl md:justify-around">
      <Link className="my__link capitalize text-2xl font-bold" to={"/"}>
        milk lovers
      </Link>
      <button
        className="my__button my__buttonRed fixed top-6 left-8 md:hidden"
        onClick={dropdownHandler}
        onBlur={blurHandler}
      >
        <HiOutlineBars3 className="text-2xl" />
      </button>
      <nav
        className={`header__nav ${
          dropdown ? "block" : "hidden"
        } h-screen w-40 pt-16 fixed top-0 right-0 sm:w-60 md:h-auto md:w-auto md:p-0 md:static md:block`}
      >
        <ul className="flex flex-col md:flex-row">
          <li className="px-4 py-1 md:p-0 md:mx-4 lg:mx-6">
            <Link className="my__link" to="/">
              Home
            </Link>
          </li>
          <li className="px-4 py-1 md:p-0 md:mx-4 lg:mx-6">
            <Link className="my__link" to="/store">
              Store
            </Link>
          </li>
          <li className="px-4 py-1 md:p-0 md:mx-4 lg:mx-6">
            <Link className="my__link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
