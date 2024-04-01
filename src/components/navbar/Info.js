import React from "react";
import { CiMail } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import trFlag from "../../assets/trFlag.png";
import enFlag from "../../assets/ukFlag.png";
import { useTranslation } from "react-i18next";

const Info = ({ backgroundColor }) => {
const {t,i18n} = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div
      className={`hidden md:absolute md:z-50 md:flex md:opacity-50 md:border-b-1 md:text-black md:text-sm md:top-0 md:left-0 md:py-6 md:w-full ${backgroundColor}`}
    >
      <div className="md:pl-40 flex">
        <h1 className="flex z-30">
          <CiMail className="mr-2" size={20} fill="black" />
          bilgi@infebilisim.com
        </h1>
        <h1 className="pl-12 flex z-40">
          <MdOutlineAccessTime className="mr-2" size={20} fill="black" />
          0212 123 45 67
        </h1>
      </div>
      <div className="absolute top-50% right-48 flex gap-8 justify-end items-end text-lg select-none">
      <button onClick={() => changeLanguage("tr")} className="flex"><img  className="mt-1 mr-1 w-6 h-5" src={trFlag} alt="" />Türkçe</button>
        <button onClick={() => changeLanguage("en")} className="flex"><img  className="mt-1 mr-1 w-6 h-5" src={enFlag} alt="" />English</button>
      </div>
    </div>
  );
};

export default Info;
