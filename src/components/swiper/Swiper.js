import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from "../../assets/aruba.jpeg";
import photo2 from "../../assets/lenovo-logo.png";
import photo3 from "../../assets/dell.jpeg";
import photo4 from "../../assets/fortinet.jpeg";
import photo5 from "../../assets/hewlet.jpeg";
import photo6 from "../../assets/microsoft.jpeg";
import photo7 from "../../assets/paloalto.jpeg";
import photo8 from "../../assets/sophos.jpeg";
import photo9 from "../../assets/veeam.jpeg";
import photo10 from "../../assets/wmware.jpeg";
import photo11 from "../../assets/ıbm.jpeg";
import photo12 from "../../assets/xcitium.jpeg";
const Swiper = () => {
  
  const settings = {
    dots: false,           
    infinite: true,        
    speed: 4000,            // Geçiş hızı (ms cinsinden)
    slidesToShow: 4,       // Gösterilecek slayt sayısı
    slidesToScroll: 1,    // Kaydırma işlemiyle geçilecek slayt sayısı
    autoplay: true,        
    autoplaySpeed:0, 
    cssEase: 'linear' ,  
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Mobilde gösterilecek slayt sayısı
          slidesToScroll: 1, // Mobilde kaydırma işlemiyle geçilecek slayt sayısı
          speed: 2000 // Mobilde geçiş hızı
          
        }
      }
    ]
  
  };

  return (
    <div className="w-full px-4 py-8">
      <style>
        {`
          /* Yön butonlarını gizleme */
          .slick-prev,
          .slick-next {
            display: none !important;
          }
        `}
      </style>
      <Slider {...settings}>
        <div className='flex justify-center items-center'>
          <img className="h-auto w-44 transition duration-300 ease-in-out transform hover:scale-110" src={photo1} alt="" />
        </div>
        <div className='flex justify-center items-center pt-16'>
          <img className="h-auto w-44 transition duration-300 ease-in-out transform hover:scale-110" src={photo2} alt="" />
        </div>
        <div className='flex justify-center items-center'>
        <img className="h-auto w-44 transition duration-300 ease-in-out transform hover:scale-110" src={photo3} alt="" />
        </div>
        <div className='flex justify-center items-center'>
        <img className="h-auto w-44 transition duration-300 ease-in-out transform hover:scale-110" src={photo4} alt="" />
        </div>
        <div className='flex justify-center items-center'>
        <img className="h-auto w-44 transition duration-300 ease-in-out transform hover:scale-110" src={photo5} alt="" />
        </div>
        <div className='flex justify-center items-center'>
        <img className="h-auto w-44 transition duration-300 ease-in-out transform hover:scale-110" src={photo6} alt="" />
        </div>
        <div className='flex justify-center items-center'>
          <img className="h-auto w-44 transition duration-300 ease-in-out transform hover:scale-110" src={photo7} alt="" />
        </div>
        <div className='flex justify-center items-center pt-7'>
          <img className="h-auto w-44 transition duration-300 ease-in-out transform hover:scale-110" src={photo8} alt="" />
        </div>
        <div className='flex justify-center items-center'>
        <img className="h-auto w-44 transition duration-300 ease-in-out transform hover:scale-110" src={photo9} alt="" />
        </div>
        <div className='flex justify-center items-center'>
        <img className="h-auto w-44 transition duration-300 ease-in-out transform hover:scale-110" src={photo10} alt="" />
        </div>
        <div className='flex justify-center items-center'>
        <img className="h-auto w-44 transition duration-300 ease-in-out transform hover:scale-110" src={photo11} alt="" />
        </div>
        <div className='flex justify-center items-center pt-10'>
        <img className="h-auto w-44 transition duration-300 ease-in-out transform hover:scale-110" src={photo12} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Swiper;


//transition duration-300 ease-in-out transform hover:scale-105