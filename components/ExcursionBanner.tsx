import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getMediaUrl } from "@/lib/utils";

const ExcursionBanner = () => (
  <section className="py-20 text-white relative bg-cover bg-center mx-5 lg:mx-[60px] mt-24 rounded-[20px]" style={{
    backgroundImage: `url('${getMediaUrl("/assets/images/our-excursion-image.png")}')`
  }}>
    <div className="absolute inset-0 bg-black/50 rounded-[20px]"></div>
    <div className="relative z-10 xl:max-w-7xl max-w-auto mx-auto text-center lg:px-[60px] px-10">
      <h2 className="font-poltawski text-4xl md:text-5xl font-normal mb-8">Our Excursions</h2>
      <p className="font-poltawski text-lg mb-8 text-[#D9D9D9] mx-auto leading-tight text-center">
        Embark on an extraordinary journey with Luxe Excursions Tenerife, where we specialise in crafting bespoke luxury experiences that showcase the island&apos;s breathtaking beauty. From exclusive yacht charters to exhilarating adventures and unforgettable parties, we transform travel dreams into cherished memories, ensuring every moment is infused with excitement and joy.
      </p>
      <Button className="bg-[#E0C469] font-poltawski text-[#252525] hover:bg-gray-100 px-10 py-5 text-lg">
        <Link href="/excursions">View Excursions</Link>
      </Button>
    </div>
  </section>
);

export default ExcursionBanner;
