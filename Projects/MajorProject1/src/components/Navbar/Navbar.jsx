import React from "react";
import PropTypes from "prop-types";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const MAIN_MENU = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#services" },
  { id: 3, name: "Kids Wear", link: "/#" },
  { id: 4, name: "Mens Wear", link: "/#" },
  { id: 5, name: "Electronics", link: "/#" },
];

const DROPDOWN_MENU = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <header className="shadow-md bg-white dark:bg-gray-900 dark:text-white transition duration-200 relative z-40">
      {/* Top Bar */}
      <section className="bg-primary/40 py-2">
        <nav className="container flex items-center justify-between" aria-label="Top Navigation">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-2xl sm:text-3xl font-bold">
            <img src={Logo} alt="Shopsy Logo" className="w-10" />
            Shopsy
          </a>

          {/* Controls: Search, Order Button, Dark Mode */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <form role="search" className="relative group hidden sm:block">
              <input
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 border border-gray-300 dark:border-gray-500 dark:bg-gray-800 rounded-full px-3 py-1 focus:outline-none focus:border-primary"
              />
              <IoMdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-primary" />
            </form>

            {/* Order Button */}
            <button
              type="button"
              onClick={handleOrderPopup}
              className="flex items-center gap-3 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white transition duration-200 group"
              aria-label="Order"
            >
              <span className="hidden group-hover:block">Order</span>
              <FaCartShopping className="text-xl drop-shadow-sm" />
            </button>

            {/* Dark Mode Toggle */}
            <DarkMode />
          </div>
        </nav>
      </section>

      {/* Bottom Nav Menu */}
      <nav data-aos="zoom-in" className="hidden sm:flex justify-center" aria-label="Main Navigation">
        <ul className="flex items-center gap-4">
          {MAIN_MENU.map(({ id, name, link }) => (
            <li key={id}>
              <a
                href={link}
                className="px-4 py-2 inline-block hover:text-primary transition-colors duration-200"
              >
                {name}
              </a>
            </li>
          ))}

          {/* Dropdown Menu */}
          <li className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 py-2"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Trending Products
              <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <ul className="absolute top-full mt-2 w-[200px] bg-white text-black rounded-md shadow-md p-2 hidden group-hover:block z-50">
              {DROPDOWN_MENU.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="block w-full rounded-md p-2 hover:bg-primary/20 transition"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};

export default Navbar;
