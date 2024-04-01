import React from "react";
import BlogCard from "../components/BlogCard/BlogCard";
import HeroSection from "../components/hero/HeroSection";
import VisionAndMission from "../components/VisionAndMission/VisionAndMission";
import Navbar from "../components/navbar/Navbar";
import Info from "../components/navbar/Info";
import Swiper from "../components/swiper/Swiper";
import BottomHero from "../components/bottomHero/BottomHero";
const HomePage = () => {
  return (
    <div>
      <Info backgroundColor="bg-gray-400"/>
      <Navbar backgroundColor="bg-transparent"/>
      <HeroSection />
      <VisionAndMission />
      <Swiper/>
      <BlogCard/>
      <BottomHero/>
    </div>
  );
};

export default HomePage;
