import React from 'react';
import { Button } from "@/components/ui/button";

const ExperienceOverview = () => {
  const features = [
    "EXPERT GUIDES",
    "LUXURY TRANSPORT",
    "SMALL GROUPS",
    "CUSTOM ITINERARY",
    "PHOTO SERVICES",
    "GOURMET MEALS"
  ];

  return (
    <section className="section-padding bg-luxe-black text-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 section-gap items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-luxe-xl overflow-hidden">
              <img 
                src="/assets/images/Illustration.svg" 
                alt="Mountain landscape" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-6">
            <h2 className="luxe-heading-1 text-white uppercase">
              EXPERIENCE OVERVIEW
            </h2>
            
            <p className="luxe-text-body-large text-gray-300">
              Welcome to Your Diamond Experience! Get ready for an extraordinary adventure filled with luxury, exploration, and unforgettable moments as you enjoy the stunning island of Tenerife. Below is your detailed itinerary designed to maximise your holiday experience.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 my-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <img src="/assets/images/Private-tour-white-tick.svg" alt="" />
                  <span className="luxe-text-body-small font-medium text-white">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button variant="luxe" className="px-8 py-3 flex items-center gap-2">
              Book Now
              <img src="/assets/images/Arrow-up.svg" alt="arrow-up" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceOverview;