import React from "react";
import Navbar from "../components/navbar/Navbar";
import Info from "../components/navbar/Info";
import BGImage from "../assets/iletisim_aglari.png";
import Swiper from "../components/swiper/Swiper";
import { useTranslation } from "react-i18next";
const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <Info backgroundColor="bg-gray-400" />
      <Navbar backgroundColor="bg-gray-800" />
      <img
        src={BGImage}
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        alt=""
      />

      <div className="h-full lg:mt-60 mt-80 z-30 px-20 lg:px-80 bg-white">
        <div className="py-20">
          <h1 className="text-4xl font-bold text-gray-700 select-none">
            {t("aboutUs.header")}
          </h1>
        </div>
        <div className="w-auto">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">
            {t("aboutUs.header1")}
          </h1>
          <h1>{t("aboutUs.paragraph1")}</h1>
          <h1 className="text-2xl font-bold text-gray-700 mt-20 mb-4">
            {t("aboutUs.header2")}
          </h1>
          <h1>{t("aboutUs.paragraph2")}</h1>
          <h1 className="text-2xl font-bold text-gray-700 mt-20 mb-4">
            {t("aboutUs.header3")}
          </h1>
          <h1>{t("aboutUs.paragraph3")}</h1>
          <h1 className="text-base font-medium text-gray-700 mt-20">
            {t("aboutUs.foot")}
          </h1>
          <h1 className="text-xl font-semibold text-gray-700">
            bilgi@infebilisim.com.tr
          </h1>
        </div>
      </div>
      <div className="bg-white">
        <Swiper />
      </div>
    </>
  );
};

export default AboutUs;
