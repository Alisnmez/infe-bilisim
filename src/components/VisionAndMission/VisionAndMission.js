import React from "react";
import ServicePhoto1 from "../../assets/dijital_iletisim.png";
import ServicePhoto2 from "../../assets/iletisim_aglari.png";
import ServicePhoto3 from "../../assets/service.png";
import ServicePhoto4 from "../../assets/siber.png";
import ShapeLineLogo from "../../assets/shape_line.png";
import { useTranslation } from "react-i18next";
const VisionAndMission = () => {
  const { t,i18n } = useTranslation();
  const services = [
    {
      photo: ServicePhoto1,
      title: t("homePage.vissionAndMission.cards.cardsHeader1"),
      description: t("homePage.vissionAndMission.cards.cardParagraph1"),
    },
    {
      photo: ServicePhoto2,
      title: t("homePage.vissionAndMission.cards.cardsHeader2"),
      description: t("homePage.vissionAndMission.cards.cardParagraph2"),
    },
    {
      photo: ServicePhoto3,
      title: t("homePage.vissionAndMission.cards.cardsHeader3"),
      description: t("homePage.vissionAndMission.cards.cardParagraph3"),
    },
    {
      photo: ServicePhoto4,
      title: t("homePage.vissionAndMission.cards.cardsHeader4"),
      description: t("homePage.vissionAndMission.cards.cardParagraph4"),
    },
    // Ekstra servisleri eklenebilir
  ];

  return (
    <>
      <div className="flex flex-col md:flex-col lg:flex-col md:py-8 2xl:mt-[300px] z-30">
      <div className="px-4 py-8 md:px-6 lg:px-8 xl:px-16">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 pt-5 lg:pr-4 xl:pr-10">
            <img
              src={ShapeLineLogo}
              alt="Shape Line Logo"
              className="w-10 h-4 pt-2"
            />
            <h1 className="text-xl md:text-lg lg:text-2xl font-semibold whitespace-nowrap text-[#1E5089]">
             {t("homePage.vissionAndMission.header")} <br />
            </h1>
          </div>
          <h3 className="text-lg md:text-lg lg:text-xl font-bold mt-3">
            {t("homePage.vissionAndMission.header1")} <br /> <br />
          </h3>
          <h3 className="text-base md:text-lg lg:text-xl">
            {t("homePage.vissionAndMission.header2")}
          </h3>
          
        </div>
      </div>
    </div>
        <div></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-3 px-2 md:px-4 lg:px-16 xl:px-40 select-none">
          {services.map((service, index) => (
            <article
              key={index}
              className="mx-auto rounded-md max-w-xs md:max-w-full shadow-xl bg-cover bg-center min-h-[100px] md:min-h-[300px] transform duration-500 hover:-translate-y-2 cursor-pointer group"
              style={{
                backgroundImage: `url(${service.photo})`,
              }}
            >
              <div className="bg-black bg-opacity-20 min-h-[100px] md:min-h-[200px] px-6 md:px-10 flex flex-wrap flex-col pt-4 md:pt-10 hover:bg-opacity-75 transform duration-300">
                <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                
                  {service.title}
                </h1>
                <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                <p className="opacity-0 text-white text-xl text-center group-hover:opacity-80 transform duration-500">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default VisionAndMission;
