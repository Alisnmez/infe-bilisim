import React from "react";
import Info from "../../../components/navbar/Info";
import Navbar from "../../../components/navbar/Navbar";
import BGSupport from "../../../assets/networkAnddSecurity.png";
import BGSupportNav from "../../../assets/BGSupportNav.png";
import Head from "../../../assets/head.png";
import { useTranslation } from "react-i18next";
const NetworkAndSecurity = () => {
  const { t } = useTranslation();
  return (
    <div className="select-none">
      <Info backgroundColor="bg-gray-400" />
      <Navbar backgroundColor="bg-gray-800" />
      <img
        src={BGSupportNav}
        className="absolute inset-0 w-full h-[400px] object-cover z-[-1]"
        alt=""
      />
      <div className="flex flex-col bg-white mt-48 py-20 px-8 md:px-20 lg:px-40 lg:py-20 items-center">
      <img src={Head} className="w-64 mx-auto" alt="" />
        <h1 className="text-3xl font-serif text-gray-800 mb-4">
          {t("navbar.services.softwareDevelopment.networkAndSecurity")}
        </h1>
        <h3 className="text-gray-800 text-lg font-thin mb-8">
          {t("navbar.services.networkAndSecurity.header")}
        </h3>
        <div className="flex flex-col md:flex-row w-full gap-8">
          <div className="md:w-1/2">
            <img
              src={BGSupport}
              className="rounded-xl w-full h-auto object-cover"
              alt=""
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-4 mr-12">{t("navbar.services.networkAndSecurity.header1")}</h1>
            <h1 className="font-light text-gray-600 text-base mb-4 md:w-3/4 md:text-left">
              {t("navbar.services.networkAndSecurity.paragraph1")}
            </h1>
            <h1 className="font-light text-gray-600 text-base mb-4 md:w-3/4 md:text-left">
              {t("navbar.services.networkAndSecurity.paragraph2")}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkAndSecurity;
