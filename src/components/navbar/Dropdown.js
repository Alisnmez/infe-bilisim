import React from "react";
import "./Dropdown.css";
import { FaCaretRight } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const MenuItem = ({ href, text }) => (

  <Link
    className="bg-white hover:text-blue-600 py-2 px-8 block whitespace-no-wrap"
    to={href}
  >
    <h1 className="flex transition-transform ease-in-out duration-300 transform hover:translate-x-4">
      {text}
    </h1>
  </Link>
);

const SubMenuItem = ({ href, text }) => (
  <li>
    <Link
      className="bg-white hover:text-blue-600 py-2 px-8 block whitespace-no-wrap"
      to={href}
    >
      <h1 className="transition-transform ease-in-out duration-300 transform hover:translate-x-4">
        {text}
      </h1>
    </Link>
  </li>
);

function Dropdown() {
    const {t} = useTranslation();
  return (
    <div className="dropdown inline-block relative transition-transform md:py-8 z-50">
      <button className="  rounded inline-flex items-center">
        <span className="font-serif">{t("navbar.service1")} </span>
        <IoMdArrowDropdown className="mt-1 ml-1" />
      </button>
      <ul className="dropdown-content absolute hidden text-gray-700 pt-12 whitespace-nowrap">
        <MenuItem href="/managed-services" text={t("navbar.services.managedServices")} />
        <MenuItem href="/support-services" text={t("navbar.services.supportServices")} />
        <li className="dropdown">
          <span
            className="bg-white flex hover:text-blue-600 py-2 px-8 whitespace-no-wrap"
            
          >
            <h1 className="flex transition-transform ease-in-out duration-300 transform hover:translate-x-4">
              {t("navbar.services.softwareDevelopment1")}
              <FaCaretRight className="mt-1 ml-2" />
            </h1>
          </span>
          <ul className="dropdown-content absolute hidden md:pl-6 text-gray-700 ml-36 lg:ml-56 -mt-10">
            <SubMenuItem href="/services/network-and-security" text={t("navbar.services.softwareDevelopment.networkAndSecurity")} />
            <SubMenuItem href="/services/support-and-maintenance" text={t("navbar.services.softwareDevelopment.supportAndMaintenance")} />
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
