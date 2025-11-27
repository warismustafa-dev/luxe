import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';

const PrivateToursHero = () => {
  return (
    <section className="w-full container-padding my-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h1 className="luxe-text-accent font-bold text-xl md:text-5xl text-luxe-gray-dark mb-3">Private Tours</h1>
            <div className="flex flex-wrap font-medium items-center gap-4 md:gap-6 text-luxe-gray-dark luxe-text-accent text-lg md:text-xl tracking-tight leading-normal">
              <span className="flex items-center gap-2">
                <img src="/assets/images/Private-tour-location.svg" alt="Rating" />
                London, United Kingdom
              </span>
              <span className="flex items-center gap-2">
                <img src="/assets/images/Private-tour-clock.svg" alt="Rating" />
                5 days, 4 nights
              </span>
              <span className="flex items-center gap-2">
                <img src="/assets/images/Private-tour-star.svg" alt="Rating" />
                4.8/5 from 20+ reviewer
              </span>
            </div>
          </div>
          <div className="flex gap-4 self-start md:self-center">
            <button className="flex items-center gap-2 border border-luxe-gray-light rounded-luxe-lg px-4 md:px-6 py-2 text-sm md:text-base font-medium hover:bg-gray-100 transition">
              <img src="/assets/images/Private-tour-share.svg" alt="Share" />
              <span className="hidden sm:inline">Share</span>
            </button>
            <button className="flex items-center gap-2 border border-luxe-gray-light rounded-luxe-lg px-4 md:px-6 py-2 text-sm md:text-base font-medium hover:bg-gray-100 transition">
              <img src="/assets/images/Private-tour-heart.svg" alt="Favourite" />
              <span className="hidden sm:inline">Favorite</span>
            </button>
          </div>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 section-gap mb-8">
          {/* Left Side - Large Image */}
          <div className="w-full">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-luxe-xl overflow-hidden">
              <img 
                src="/assets/images/private-tour-hero-img1.svg" 
                alt="Private tour destination" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Side - Two Smaller Images */}
          <div className="flex flex-col gap-4">
            <div className="relative h-[150px] sm:h-[190px] md:h-[240px] rounded-luxe-xl overflow-hidden">
              <img 
                src="/assets/images/private-tour-hero-img2.svg"
                alt="Private tour experience" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-[150px] sm:h-[190px] md:h-[240px] rounded-luxe-xl overflow-hidden">
              <img 
                src="/assets/images/private-tour-hero-img3.svg"
                alt="Private tour location" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateToursHero;