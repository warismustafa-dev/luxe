'use client'
import AboutHero from "@/components/about/AboutHero";
import CraftingJourneys from "@/components/about/CraftingJourneys";
import CoreValues from "@/components/about/CoreValues";
import ExcursionsSection from "@/components/about/ExcursionsSection";
import AboutVlogSection from "@/components/about/AboutVlogSection";

const About = () => {
  return (
    <div className="min-h-screen bg-luxe-black text-white">
      <AboutHero />
      <CraftingJourneys />
      <CoreValues />
      <AboutVlogSection />
      <ExcursionsSection />
    </div>
  );
};

export default About;