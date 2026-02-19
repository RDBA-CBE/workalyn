import React from "react";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import AdvantageSection from "./AdvantageSection";
import SolutionsSection from "./SolutionsSection";
import WhySection from "./WhySection";
import AmenitiesSection from "./AmenitiesSection";

const Homepage: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <AdvantageSection />
      <SolutionsSection />
      <WhySection />
      <AmenitiesSection />
    </>
  );
};

export default Homepage;
