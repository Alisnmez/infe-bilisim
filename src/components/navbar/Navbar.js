import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import infeLogo from "../../assets/infeL.png";
const Navbar = ({ backgroundColor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {t} = useTranslation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Arka plan rengini isSticky durumuna göre güncelledim
  const navbarBackground = isScrolled ? "bg-black" : backgroundColor;

  return (
    <>
      <nav
        className={`2xl:pl-40 select-none border-b sticky top-0 w-full z-40 md:mt-16 md:relative md:z-40 ${navbarBackground} ${
          isScrolled
            ? `md:sticky md:py-6 md:ease-in-out md:transition-all md:duration-500`
            : ``
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-2">
          <a href="/" className="flex items-center lg:pl-32">
            <img
              src={infeLogo}
              className="h-24 z-10"
              alt="Flowbite Logo"
            />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1${
              isMenuOpen ? "" : " hidden"
            }`}
          >
            <div className="relative xl:pr-32">
              <ul className="flex flex-col mt-4 font-medium border border-gray-100 rounded-lg md:space-x-0 md:h-full lg:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-3 text-gray-900 rounded relative hover:bg-gray-100 md:hover:bg-transparent md:py-10 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <h1 className="font-serif">{t("navbar.homePage")}</h1>
                    <span className="md:absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 transition-opacity duration-300 z-50 md:block"></span>
                    <style jsx>{`
                      a:hover span {
                        opacity: 1;
                      }
                    `}</style>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="block py-2 px-3 text-gray-900 rounded relative hover:bg-gray-100 md:hover:bg-transparent md:py-10 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <h1 className="font-serif">{t("navbar.aboutUs")}</h1>
                    <span className="md:absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 transition-opacity duration-300 z-50 md:block"></span>
                    <style jsx>{`
                      a:hover span {
                        opacity: 1;
                      }
                    `}</style>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="block py-2 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <Dropdown />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partners"
                    className="block py-2 px-3 text-gray-900 rounded relative hover:bg-gray-100 md:hover:bg-transparent md:py-10 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <h1 className="font-serif">{t("navbar.partners")}</h1>
                    <span className="md:absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 transition-opacity duration-300 z-50 md:block"></span>
                    <style jsx>{`
                      a:hover span {
                        opacity: 1;
                      }
                    `}</style>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="block py-2 px-3 text-gray-900 rounded relative hover:bg-gray-100 md:hover:bg-transparent md:py-10 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <h1 className="font-serif">{t("navbar.contactUs")}</h1>
                    <span className="md:absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 transition-opacity duration-300 z-50 md:block"></span>
                    <style jsx>{`
                      a:hover span {
                        opacity: 1;
                      }
                    `}</style>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`hidden xl:absolute xl:right-16 2xl:right-80 xl:top-6 lg:z-50 xl:flex ${
            isScrolled ? "xl:mt-7" : ""
          }`}
        >
          <FaPhoneAlt
            className="mt-4 mr-4"
            size={24}
            fill={`${isScrolled ? "white" : "white"}`}
          />
          <div>
            <h1 className="text-white opacity-60 mb-2 select-none">
              {t("navbar.contactUs1")}
            </h1>
            <h1 className="text-white">0850 123 45 67</h1>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
