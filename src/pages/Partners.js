import React from "react";
import Navbar from "../components/navbar/Navbar";
import Info from "../components/navbar/Info";
import photo1 from "../assets/aruba.jpeg";
import photo2 from "../assets/dell.jpeg";
import photo3 from "../assets/fortinet.jpeg";
import photo4 from "../assets/hewlet.jpeg";
import photo5 from "../assets/lenovo_l.jpeg";
import photo6 from "../assets/microsoft.jpeg";
import photo7 from "../assets/paloalto.jpeg";
import photo8 from "../assets/sophos.jpeg";
import photo9 from "../assets/veeam.jpeg";
import photo10 from "../assets/wmware.jpeg";
import photo11 from "../assets/ıbm.jpeg";
import photo12 from "../assets/xcitium.jpeg";
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
      name: "Partner 5",
    },
    {
      image: photo6,
      name: "Partner 6",
    },
    {
      image: photo7,
      name: "Partner 7",
    },
    {
      image: photo8,
      name: "Partner 8",
    },
    {
      image: photo9,
      name: "Partner 9",
    },
    {
      image: photo10,
      name: "Partner 10",
    },
    {
      image: photo11,
      name: "Partner 11",
    },
    {
      image: photo12,
      name: "Partner 12",
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
