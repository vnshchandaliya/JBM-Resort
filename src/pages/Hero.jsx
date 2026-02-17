import { useState, useEffect } from "react";
import HeroSlider from "../components/HeroSlider";
import ResortIntro from "../components/ResortIntro";
import ResortFacilities from "../components/ResortFacilities";
import LuxuryTestimonials from "../components/TestimonialSlider";
import NewsletterSection from "../components/NewsletterSection";
import ReelSection from "../components/ReelSection";
import AboutSection from "../components/AboutUs";


const HeroPage = () => {

  return (
   <>
   <HeroSlider />
   <AboutSection />
   <ResortIntro />
   <ReelSection />
   {/* <ResortFacilities /> */}
   <LuxuryTestimonials />
   <NewsletterSection />
   
   
   </>
  );
};

export default HeroPage;
