import React from 'react'
import { BiWorld } from "react-icons/bi";
import { FaLock } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
const BottomHero = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t("homePage.bottomHero.header")}</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 hover:scale-110 transition duration-300">
            <div className="flex flex-col items-center bg-white p-8 shadow-md rounded-md">
            <FaLock className='text-blue-500 pb-5' size={72}/>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t("homePage.bottomHero.cards.card1Header")}</h3>
              <p className="text-gray-600">{t("homePage.bottomHero.cards.card1Paragraph")}</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 hover:scale-110 transition duration-300">
            <div className="flex flex-col bg-white p-8 items-center shadow-md rounded-md">
            <BiWorld className='text-blue-500 pb-2' size={80}/>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t("homePage.bottomHero.cards.card2Header")}</h3>
              <p className="text-gray-600">{t("homePage.bottomHero.cards.card2Paragraph")}</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 hover:scale-110 transition duration-300">
            <div className="flex flex-col items-center bg-white p-8 shadow-md rounded-md">
            <FaPeopleGroup className='text-blue-500 pb-5' size={72} />
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t("homePage.bottomHero.cards.card3Header")}</h3>
              <p className="text-gray-600">{t("homePage.bottomHero.cards.card3Paragraph")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default BottomHero