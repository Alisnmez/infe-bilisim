import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from "../../assets/google-logo.png";
import photo2 from "../../assets/lenovo-logo.png";
import photo3 from "../../assets/koc-logo.png";
import photo5 from "../../assets/state-logo.png";
import photo6 from "../../assets/vanguard.png";
const Swiper = () => {
  
  const settings = {
    dots: false,           
    infinite: true,        
    speed: 4000,            // Geçiş hızı (ms cinsinden)
    slidesToShow: 5,       // Gösterilecek slayt sayısı
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
    <div className="w-full px-4 py-16">
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
          <img className="h-20 w-auto transition duration-300 ease-in-out transform hover:scale-110" src={photo1} alt="" />
        </div>
        <div className='flex justify-center items-center'>
          <img className="h-20 w-44 transition duration-300 ease-in-out transform hover:scale-110" src={photo2} alt="" />
        </div>
        <div className='flex justify-center items-center'>
        <img className="h-20 w-auto transition duration-300 ease-in-out transform hover:scale-110" src={photo3} alt="" />
        </div>
        <div className='flex justify-center items-center'>
        <img className="h-20 w-auto transition duration-300 ease-in-out transform hover:scale-110" src={photo1} alt="" />
        </div>
        <div className='flex justify-center items-center'>
        <img className="h-20 w-auto transition duration-300 ease-in-out transform hover:scale-110" src={photo5} alt="" />
        </div>
        <div className='flex justify-center items-center'>
        <img className="h-20 w-auto transition duration-300 ease-in-out transform hover:scale-110" src={photo6} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Swiper;


//transition duration-300 ease-in-out transform hover:scale-105