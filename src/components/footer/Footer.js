import React from "react";
import { FaLinkedin } from "react-icons/fa";
import İnfeBilisimLogo from "../../assets/infebilisim_logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div class="dark:bg-black select-none">
      <Link to="/">
        <img
          src={İnfeBilisimLogo}
          className="h-60 w-auto transform scale-300 absolute left-6 pt-8"
          alt="İnfe Bilişim Logo"
        />
      </Link>
      <div class="mx-auto w-full max-w-screen-xl pl-60">
        <div class="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              {t("footer.header1")}
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:text-white">
                  {t("footer.headerr1.word1")}
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:text-white">
                {t("footer.headerr1.word2")}
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:text-white">
                {t("footer.headerr1.word3")}
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:text-white">
                {t("footer.headerr1.word4")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              {t("footer.header2")}
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" >
                  {t("footer.headerr2.word1")} <br />
                </a>
                <a href="" class="hover:text-white">bilgi@infebilisim.com.tr</a>
              </li>
              
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              {t("footer.header3")}
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:text-white">
                  {t("footer.headerr3.word1")}
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:text-white">
                  {t("footer.headerr3.word2")}
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:text-white">
                  {t("footer.headerr3.word3")}
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:text-white">
                  {t("footer.headerr3.word4")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="px-16 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
          © 2024 <a href="">İnfe Bilişim</a> All Rights Reserved.
        </span>
        <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
          <a
            href="https://www.linkedin.com/company/infebilişim/"
            class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <FaLinkedin />

            <span class="sr-only">Linkedn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
