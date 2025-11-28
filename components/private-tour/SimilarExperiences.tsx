import React, { useState } from 'react';
import { getMediaUrl } from "@/lib/utils";

const experiences = [
  {
    id: 1,
    image: getMediaUrl("/assets/images/Private-tour-norway.jpg"),
    title: "NORWEGIAN FJORD KAYAKING",
    description: "Paddle through the serene waters of Norway&apos;s stunning fjords, surrounded by towering cliffs and pristine wilderness.",
    price: 80
  },
  {
    id: 2,
    image: getMediaUrl("/assets/images/Private-tour-costa-rica.jpg"),
    title: "COSTA RICAN RAINFOREST ZIPLINE",
    description: "Soar above the lush canopy of the Costa Rican rainforest on a thrilling zipline adventure.",
    price: 120
  },
  {
    id: 3,
    image: getMediaUrl("/assets/images/Private-tour-newzeland.jpg"),
    title: "NEW ZEALAND LORD OF THE RINGS",
    description: "Explore the breathtaking landscapes of New Zealand that served as the backdrop for the epic film trilogy.",
    price: 90
  },
  {
    id: 4,
    image: getMediaUrl("/assets/images/Private-tour-morocco.jpg"),
    title: "MOROCCAN SAHARA DESERT",
    description: "Experience the magic of the Sahara Desert with a guided camel trek. Spend the night under the stars in a traditional Berber camp.",
    price: 120
  },
  {
    id: 5,
    image: getMediaUrl("/assets/images/Private-tour-japan.jpg"),
    title: "JAPANESE ONSEN RETREAT",
    description: "Relax and rejuvenate in a traditional Japanese onsen (hot spring) and stay in a ryokan for an authentic cultural experience.",
    price: 120
  },
  {
    id: 6,
    image: getMediaUrl("/assets/images/Private-tour-iceland.jpg"),
    title: "ICELAND NORTHERN LIGHTS",
    description: "Chase the elusive Northern Lights in the rugged landscapes of Iceland. This magical experience includes warm accommodations.",
    price: 90
  }
];

const placeholderExperiences = [
  {
    id: 1,
    image: getMediaUrl("/assets/images/Private-tour-iceland.jpg"),
    title: "PLACEHOLDER EXPERIENCE 1",
    description: "This is a placeholder description for experience 1.",
    price: 100
  },
  {
    id: 2,
    image: getMediaUrl("/assets/images/Private-tour-japan.jpg"),
    title: "PLACEHOLDER EXPERIENCE 2",
    description: "This is a placeholder description for experience 2.",
    price: 110
  },
  {
    id: 3,
    image: getMediaUrl("/assets/images/Private-tour-morocco.jpg"),
    title: "PLACEHOLDER EXPERIENCE 3",
    description: "This is a placeholder description for experience 3.",
    price: 120
  },
  {
    id: 4,
    image: getMediaUrl("/assets/images/Private-tour-newzeland.jpg"),
    title: "PLACEHOLDER EXPERIENCE 4",
    description: "This is a placeholder description for experience 4.",
    price: 130
  },
  {
    id: 5,
    image: getMediaUrl("/assets/images/Private-tour-costa-rica.jpg"),
    title: "PLACEHOLDER EXPERIENCE 5",
    description: "This is a placeholder description for experience 5.",
    price: 140
  },
  {
    id: 6,
    image: getMediaUrl("/assets/images/Private-tour-norway.jpg"),
    title: "PLACEHOLDER EXPERIENCE 6",
    description: "This is a placeholder description for experience 6.",
    price: 150
  }
];

const PricePill = ({ price }: { price: number }) => (
  <div className="absolute top-4 left-4 z-10">
    <div className="flex flex-row items-center bg-[#0A1805] rounded-[12px] px-[16px] h-[56px] gap-[8px] backdrop-blur-[9px]">
      <span className="text-white text-lg">$</span>
      <span className="font-anton font-normal text-white text-[18px] uppercase">${price}/PERSON</span>
    </div>
  </div>
);

const Card = ({ exp, tall = false, stackedMobile = false }: { exp: typeof experiences[0], tall?: boolean, stackedMobile?: boolean }) => (
  <div className={`flex flex-col items-start gap-[16px] bg-white rounded-[24px] p-0 flex-grow w-full max-w-[340px] mx-auto xl:w-[302px] xl:max-w-[302px] ${tall ? 'h-auto aspect-[2/3] flex-1 sm:h-[400px] md:h-[520px] xl:h-[683px] xl:aspect-auto' : stackedMobile ? 'h-auto aspect-[2/3] flex-1 xl:h-[329.5px] xl:aspect-auto' : 'h-[160px] sm:h-[200px] md:h-[260px] xl:h-[329.5px]'}`}>
    <div className={`relative flex flex-col items-start p-0 rounded-[24px] overflow-hidden w-full ${tall ? 'aspect-[2/3] flex-1 xl:aspect-auto' : stackedMobile ? 'aspect-[2/3] flex-1 xl:aspect-auto' : 'aspect-[4/3]'} xl:aspect-auto ${tall ? 'xl:h-[582px]' : 'xl:h-[228.5px]'}`}>
      <img src={exp.image} alt={exp.title} className="w-full h-full object-cover rounded-[24px]" />
      <PricePill price={exp.price} />
    </div>
    <div className="flex flex-col items-start gap-[8px] w-full h-auto p-0">
      <h3 className="text-base sm:text-lg md:text-xl xl:text-2xl leading-[120%] font-anton text-luxe-black uppercase font-normal w-full p-0 m-0">{exp.title}</h3>
      <p className="text-xs sm:text-sm md:text-base font-medium font-inter leading-[150%] text-luxe-black w-full p-0 m-0 line-clamp-2">{exp.description}</p>
    </div>
  </div>
);

const getSlideContent = (slide: number) => {
  const data = slide === 0 ? experiences : placeholderExperiences;
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap items-start gap-y-6 lg:gap-y-0 xl:gap-x-[24px] lg:gap-x-0 w-full xl:w-[1280px] xl:h-[683px]">
      {/* Column 1: Tall card */}
      <div className="flex flex-col items-start gap-y-6 w-full sm:w-1/2 xl:w-[302px] xl:h-[683px] flex-grow">
        <Card exp={data[0]} tall />
      </div>
      {/* Column 2: Two stacked cards */}
      <div className="flex flex-col items-start gap-y-6 w-full sm:w-1/2 xl:w-[302px] xl:h-[683px] flex-grow">
        <Card exp={data[1]} stackedMobile />
        <Card exp={data[2]} stackedMobile />
      </div>
      {/* Column 3: Tall card */}
      <div className="flex flex-col items-start gap-y-6 w-full sm:w-1/2 xl:w-[302px] xl:h-[683px] flex-grow">
        <Card exp={data[3]} tall />
      </div>
      {/* Column 4: Two stacked cards */}
      <div className="flex flex-col items-start gap-y-6 w-full sm:w-1/2 xl:w-[302px] xl:h-[683px] flex-grow">
        <Card exp={data[4]} stackedMobile />
        <Card exp={data[5]} stackedMobile />
      </div>
    </div>
  );
};

const SimilarExperiences = () => {
  const [slide, setSlide] = useState(0);
  return (
    <section className="w-full bg-white flex flex-col items-center pt-8 sm:pt-10 md:pt-16 lg:pt-20">
      <div className="w-full max-w-full px-2 sm:px-4 xl:px-20 lg:px-10 md:px-5">
        <div className="flex items-center justify-between mb-6 sm:mb-8 md:mb-12">
          <h2 className="luxe-heading-1 text-luxe-gray-light uppercase">SIMILAR EXPERIENCES</h2>
          <div className="flex gap-3">
            <button
              className="w-10 h-10 border-2 border-black rounded-lg flex items-center justify-center bg-white hover:bg-gray-100 transition"
              onClick={() => setSlide((prev) => (prev === 0 ? 1 : 0))}
              aria-label="Previous slide"
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#232323" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              className="w-10 h-10 border-2 border-black rounded-lg flex items-center justify-center bg-white hover:bg-gray-100 transition"
              onClick={() => setSlide((prev) => (prev === 1 ? 0 : 1))}
              aria-label="Next slide"
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#232323" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
        {getSlideContent(slide)}
      </div>
    </section>
  );
};

export default SimilarExperiences;