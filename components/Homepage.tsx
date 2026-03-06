import React from "react";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import AdvantageSection from "./AdvantageSection";
import SolutionsSection from "./SolutionsSection";
import WhySection from "./WhySection";
import AmenitiesSection from "./AmenitiesSection";
import OurStory from "./OurStory";
import AmenitiesSectionCopy from "./AmenitiesSectionCopy";

const Homepage: React.FC = () => {
  return (
    <>
      <Hero />
      <OurStory/>
      
      <AdvantageSection />
      <SolutionsSection />
      {/* <WhySection /> */}
      {/* <AmenitiesSection /> */}
      <AmenitiesSectionCopy/>
    </>
  );
};

export default Homepage;
