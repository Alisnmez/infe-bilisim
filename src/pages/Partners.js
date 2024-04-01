import React from "react";
import Navbar from "../components/navbar/Navbar";
import Info from "../components/navbar/Info";
import photo1 from "../assets/koc-logo.png";
import photo2 from "../assets/infebilisim_logo.png";
import photo3 from "../assets/infebilisim_logo.png";
import photo4 from "../assets/infebilisim_logo.png";
import photo5 from "../assets/infebilisim_logo.png";
import photo6 from "../assets/infebilisim_logo.png";
import BGImage from "../assets/bg-1.png";
import Head from "..//assets/head.png"
import { useTranslation } from "react-i18next";
const Partners = () => {
  const partners = [
    {
      image: photo1,
      name: "Partner 1",
    },
    {
      image: photo2,
      name: "Partner 2",
    },
    {
      image: photo3,
      name: "Partner 3",
    },
    {
      image: photo4,
      name: "Partner 4",
    },
    {
      image: photo5,
      name: "Partner 3",
    },
    {
      image: photo6,
      name: "Partner 4",
    },
    
  ];

  const { t } = useTranslation();
  return (
    <>
      <Info backgroundColor="bg-gray-200" />
      <Navbar backgroundColor="bg-gray-800" />
      <img
        src={BGImage}
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        alt=""
      />
      <div className="my-56 mb-0 bg-white">
      <div className="py-8 text-center text-4xl font-bold border-b-2">
        
        <h1>
        <img src={Head} className="w-64 mx-auto" alt="" />
        {t("partners.header")}
          </h1>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-32 lg:px-48 py-12">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="relative group bg-gray-300 border-2 border-black w-full md:w-full h-60 shadow-lg rounded-xl overflow-hidden"
          >
            <img
              className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-110"
              src={partner.image}
              alt={partner.name}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition duration-300 ease-in-out group-hover:opacity-50"></div>
            <div className="absolute inset-0 flex justify-center items-center">
            </div>
          </div>
        ))}
      </div>
      </div>
     
    </>
  );
};

export default Partners;
