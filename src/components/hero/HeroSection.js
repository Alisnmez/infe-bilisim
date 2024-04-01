import React from "react";
import BGVideo from "../../assets/İnfeVideo.mp4";
import Header from "../header/Header";
const HeroSection = () => {
  return (
    <div className="inset-0 flex items-center justify-center">
      <div className="w-full h-[80%]">
        <video
          src={BGVideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full top-0 object-cover"
          style={{ zIndex: -1 }}
        ></video>
        <Header />
      </div>
    </div>
  );
};

export default HeroSection;
