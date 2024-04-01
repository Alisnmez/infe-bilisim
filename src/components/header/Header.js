import React from 'react'
import {useTranslation} from "react-i18next"
const Header = () => {
  const {t}=useTranslation()
  return (
    <div className=' flex flex-col h-[600px] md:h-[500px] w-full items-center justify-center md:pt-64 2xl:pt-[500px] select-none'>
      <h1 className='lg:text-5xl md:text-4xl text-3xl text-white md:pt-4 pt-64'>{t("homePage.header1")}</h1>
      <h1 className='lg:text-xl md:text-lg text-l font-thin text-white md:pt-4'>{t("homePage.header2")}</h1>
    </div>
  )
}

export default Header