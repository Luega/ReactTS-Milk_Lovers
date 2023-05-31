import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };
  const blurHandler = () => {
    setTimeout(() => {
      setDropdown(!dropdown);
    }, 100);
  };

  return (
    <header className="header flex items-center justify-center relative shadow-lg text-xl md:justify-around">
      <Link className="my__link capitalize" to={"/"}>
        milk lovers
      </Link>
      <button
        className="z-50 fixed top-8 right-8 md:hidden"
        onClick={dropdownHandler}
        onBlur={blurHandler}
      >
        <HiOutlineBars3 />
      </button>
      <nav
        className={`header__nav ${
          dropdown ? "block" : "hidden"
        } h-screen w-40 pt-10 fixed top-0 right-0 sm:w-60 md:h-auto md:w-auto md:p-0 md:static md:block`}
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
