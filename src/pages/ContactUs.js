import React from "react";
import Navbar from "../components/navbar/Navbar";
import Info from "../components/navbar/Info";
import BGImage from "../assets/communication.png";
import { TbWorld } from "react-icons/tb";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const ContactUs = () => {

const {t} = useTranslation();

  return (
    <>
      <Info backgroundColor={"bg-gray-200"} />
      <Navbar backgroundColor="bg-gray-800" />
      <img
        src={BGImage}
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        alt=""
      />

      <div className="min-h-screen mt-60 lg:mt-72 lg:py-5 px-6 lg:px-32 bg-gray-100 flex flex-col justify-center items-center">
        <div className="max-w-screen-lg w-full mx-auto">
          <h1 className="text-4xl font-bold text-gray-700 mb-10 text-center">
            {t("contactUs.header")}
          </h1>
          <div className="grid grid-cols-1 lg:grid-rows-3 gap-8">
            <div className="flex items-center gap-4">
              <TbWorld size={40} className="text-blue-500" />
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-gray-700">{t("contactUs.header1")}</h1>
                <p className="text-base font-light">
                  Halkapınar, 1203/11. Sk. Megapol Çarşı Kule No:5-7 35170
                  Konak/İzmir
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <IoMdMail size={36} className="text-blue-500" />
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-gray-700">{t("contactUs.header2")}</h1>
                <p className="text-base font-light">
                  bilgi@infebilisim.com.tr
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneVolume size={36} className="text-blue-500" />
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-gray-700">{t("contactUs.header3")}</h1>
                <p className="text-base font-light">+90 123 456 78 90</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
